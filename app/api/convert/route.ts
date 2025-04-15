import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

// Helper to split a long text into lines that fit within a given width.
function splitTextIntoLines(
  text: string,
  font: import("pdf-lib").PDFFont,
  fontSize: number,
  maxWidth: number
): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testLineWidth = font.widthOfTextAtSize(testLine, fontSize);
    if (testLineWidth > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });
  if (currentLine) {
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

    // Attempt to decode as UTF-8 text.
    let content: string;
    try {
      content = buffer.toString("utf8");
    } catch {
      content = "Unable to convert file content to text.";
    }

    // Create and configure the PDF.
    const pdfDoc = await PDFDocument.create();
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
      const wrappedLines = splitTextIntoLines(line, font, fontSize, maxWidth);
      lines.push(...wrappedLines);
    });

    const lineHeight = fontSize * 1.2;
    const linesPerPage = Math.floor((pageHeight - 2 * margin) / lineHeight);

    // Paginate the text
    for (let i = 0; i < lines.length; i += linesPerPage) {
      const page = pdfDoc.addPage([pageWidth, pageHeight]);
      const pageLines = lines.slice(i, i + linesPerPage);
      pageLines.forEach((textLine, idx) => {
        const y = pageHeight - margin - idx * lineHeight;
        page.drawText(textLine, {
          x: margin,
          y,
          size: fontSize,
          font,
          color: rgb(0, 0, 0),
        });
      });
    }

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="converted.pdf"',
      },
    });
  } catch (error) {
    console.error("Error during conversion:", error);
    return NextResponse.json(
      { error: "Conversion failed. Please try again." },
      { status: 500 }
    );
  }
}
