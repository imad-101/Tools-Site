"use client";

import { useState } from "react";
import { PDFDocument, StandardFonts } from "pdf-lib";
// import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UdfToPdfConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    if (uploadedFile.name.split(".").pop()?.toLowerCase() !== "udf") {
      alert("Please upload a .udf file");
      return;
    }

    setFile(uploadedFile);
    setIsLoading(true);

    try {
      const fileContent = await readFileContent(uploadedFile);
      const pdfBytes = await generatePdf(fileContent);
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      setPdfBlob(blob);
    } catch (error) {
      alert("Error converting file: " + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = (e) => reject(e.target?.error);
      reader.readAsText(file);
    });
  };

  const generatePdf = async (content: string) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const { width, height } = page.getSize();
    const fontSize = 12;
    const margin = 50;

    page.drawText(content, {
      x: margin,
      y: height - margin - fontSize,
      font,
      size: fontSize,
      maxWidth: width - margin * 2,
      lineHeight: fontSize * 1.2,
    });

    return await pdfDoc.save();
  };

  const handleDownload = () => {
    if (pdfBlob) {
      // saveAs(pdfBlob, `converted-${file?.name.replace(".udf", "")}.pdf`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">
              UDF to PDF Converter
            </CardTitle>
            <CardDescription className="text-gray-600">
              Convert your UDF files to PDF instantly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="udf-file" className="text-gray-700 mb-2">
                  Upload UDF File
                </Label>
                <Input
                  id="udf-file"
                  type="file"
                  accept=".udf"
                  onChange={handleFileUpload}
                  disabled={isLoading}
                  className="cursor-pointer border-2 border-dashed border-gray-300 p-6 rounded-lg"
                />
              </div>

              {isLoading && (
                <div className="text-center text-gray-600">Converting...</div>
              )}

              {pdfBlob && (
                <div className="text-center">
                  <Button
                    onClick={handleDownload}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Download PDF
                  </Button>
                  <p className="mt-2 text-sm text-gray-500">
                    Ready to download your converted PDF
                  </p>
                </div>
              )}

              <div className="text-sm text-gray-500 space-y-2">
                <p>How to use:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    Click &quot;Upload UDF File&quot; to select your document
                  </li>
                  <li>Wait for the conversion to complete</li>
                  <li>Download your PDF file</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
