import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

// Helper to clean text and remove non-printable characters
function cleanText(text: string): string {
  // Remove non-printable characters and control characters
  // Keep printable ASCII characters (32-126) and common whitespace
  return text.replace(/[\x00-\x1F\x7F-\x9F]/g, ' ')
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
}

// Helper to split a long text into lines that fit within a given width.
function splitTextIntoLines(
  text: string,
  font: import("pdf-lib").PDFFont,
  fontSize: number,
  maxWidth: number
): string[] {
  // Clean the text first
  const cleanedText = cleanText(text);
  const words = cleanedText.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    // Skip empty words
    if (!word.trim()) return;
    
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    try {
      const testLineWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testLineWidth > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    } catch (error) {
      // If we can't measure the text width, just add the current line and start new
      if (currentLine) {
        lines.push(currentLine);
        currentLine = word;
      }
    }
  });
  if (currentLine.trim()) {
    lines.push(currentLine);
  }
  return lines;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const fileField = formData.get("file");

    if (!fileField || typeof fileField === "string") {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    const filename = fileField.name || "";
    if (!filename.toLowerCase().endsWith(".udf")) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload a .udf file." },
        { status: 400 }
      );
    }

    // Convert the Blob into a Buffer.
    const arrayBuffer = await fileField.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Attempt to decode the file content
    let content: string;
    try {
      // First try UTF-8
      content = buffer.toString("utf8");
      
      // If the content seems to have too many null bytes or weird characters, try latin1
      const nullByteRatio = (content.match(/\0/g) || []).length / content.length;
      if (nullByteRatio > 0.1) {
        content = buffer.toString("latin1");
      }
    } catch {
      try {
        // Fallback to latin1 encoding
        content = buffer.toString("latin1");
      } catch {
        content = "Unable to convert file content to text. The file may be corrupted or in an unsupported format.";
      }
    }

    // Clean the content to remove problematic characters
    content = cleanText(content);
    
    if (!content || content.trim().length === 0) {
      return NextResponse.json(
        { error: "The file appears to be empty or contains no readable text." },
        { status: 400 }
      );
    }

    // Create and configure the PDF.
    const pdfDoc = await PDFDocument.create();
    
    // Set PDF metadata
    pdfDoc.setTitle(`Converted: ${filename}`);
    pdfDoc.setSubject('UDF to PDF Conversion');
    pdfDoc.setCreator('UDF to PDF Converter');
    pdfDoc.setProducer('Free Tool Now');
    pdfDoc.setCreationDate(new Date());
    
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 12;
    const margin = 50;
    const pageWidth = 595; // A4 dimensions (width)
    const pageHeight = 842; // A4 dimensions (height)
    const maxWidth = pageWidth - 2 * margin;

    // Process raw content: split by newlines then word-wrap
    const rawLines: string[] = content.split(/\r?\n/);
    const lines: string[] = [];
    rawLines.forEach((line) => {
      // Clean and process each line
      const cleanedLine = cleanText(line);
      if (cleanedLine.trim()) {
        const wrappedLines = splitTextIntoLines(cleanedLine, font, fontSize, maxWidth);
        lines.push(...wrappedLines);
      } else {
        // Preserve empty lines
        lines.push("");
      }
    });

    const lineHeight = fontSize * 1.2;
    const linesPerPage = Math.floor((pageHeight - 2 * margin) / lineHeight);

    // Paginate the text
    for (let i = 0; i < lines.length; i += linesPerPage) {
      const page = pdfDoc.addPage([pageWidth, pageHeight]);
      const pageLines = lines.slice(i, i + linesPerPage);
      pageLines.forEach((textLine, idx) => {
        const y = pageHeight - margin - idx * lineHeight;
        try {
          // Only draw non-empty lines
          if (textLine.trim()) {
            page.drawText(textLine, {
              x: margin,
              y,
              size: fontSize,
              font,
              color: rgb(0, 0, 0),
            });
          }
        } catch (drawError) {
          // If drawing fails, try with a fallback character
          console.warn("Failed to draw text line:", textLine, drawError);
          try {
            const fallbackText = textLine.replace(/[^\x20-\x7E]/g, '?');
            page.drawText(fallbackText, {
              x: margin,
              y,
              size: fontSize,
              font,
              color: rgb(0, 0, 0),
            });
          } catch (fallbackError) {
            console.error("Failed to draw fallback text:", fallbackError);
            // Draw a placeholder for problematic lines
            page.drawText("[Unable to render this line]", {
              x: margin,
              y,
              size: fontSize,
              font,
              color: rgb(0.5, 0.5, 0.5),
            });
          }
        }
      });
    }

    const pdfBytes = await pdfDoc.save();

    // Generate a better filename
    const baseFilename = filename.replace(/\.udf$/i, '');
    const outputFilename = `${baseFilename}_converted.pdf`;

    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${outputFilename}"`,
        "Content-Length": pdfBytes.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error during conversion:", error);
    
    // Provide more specific error messages
    let errorMessage = "Conversion failed. Please try again.";
    
    if (error instanceof Error) {
      if (error.message.includes("WinAnsi")) {
        errorMessage = "The file contains characters that cannot be converted. The file may be corrupted or in an unsupported format.";
      } else if (error.message.includes("memory") || error.message.includes("heap")) {
        errorMessage = "The file is too large to process. Please try with a smaller file.";
      } else if (error.message.includes("PDF")) {
        errorMessage = "Failed to create PDF. The file content may be corrupted.";
      }
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error?.toString() : undefined
      },
      { status: 500 }
    );
  }
}
