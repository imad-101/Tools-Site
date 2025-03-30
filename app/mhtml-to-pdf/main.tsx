// "use client";

// import { useState, useRef } from "react";
// import mimeParser from "emailjs-mime-parser";
// import html2pdf from "html2pdf.js";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export default function MhtmlToPdfConverter() {
//   const [file, setFile] = useState<File | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [processedHtml, setProcessedHtml] = useState<string>("");
//   const pdfRef = useRef<HTMLDivElement>(null);

//   const handleFileUpload = async (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const uploadedFile = event.target.files?.[0];
//     if (!uploadedFile) return;

//     if (uploadedFile.name.split(".").pop()?.toLowerCase() !== "mhtml") {
//       setError("Please upload a .mhtml file");
//       return;
//     }

//     setFile(uploadedFile);
//     setIsLoading(true);
//     setError(null);

//     try {
//       const fileContent = await readFileContent(uploadedFile);
//       const parsed = mimeParser(fileContent);
//       const { html, resources } = processMimeTree(parsed);
//       const finalHtml = replaceCidReferences(html, resources);
//       setProcessedHtml(finalHtml);
//     } catch (error) {
//       setError(`Error processing file: ${(error as Error).message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const readFileContent = (file: File): Promise<string> => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = (e) => resolve(e.target?.result as string);
//       reader.onerror = (e) => reject(e.target?.error);
//       reader.readAsText(file);
//     });
//   };

//   const processMimeTree = (mimeTree: any) => {
//     let html = "";
//     const resources: Record<string, string> = {};

//     const walkTree = (node: any) => {
//       if (node.contentType?.value === "text/html") {
//         html = node.content;
//       } else if (node.headers?.["content-id"]) {
//         const cid = node.headers["content-id"].replace(/[<>]/g, "");
//         const contentType =
//           node.contentType?.value || "application/octet-stream";
//         resources[cid] = `data:${contentType};base64,${btoa(node.content)}`;
//       }

//       node.childNodes?.forEach(walkTree);
//     };

//     walkTree(mimeTree);
//     return { html, resources };
//   };

//   const replaceCidReferences = (
//     html: string,
//     resources: Record<string, string>
//   ) => {
//     return html.replace(/cid:([^\'"\s\)]+)/g, (match, cid) => {
//       return resources[cid] || match;
//     });
//   };

//   const handleDownload = () => {
//     if (!pdfRef.current) return;

//     const options = {
//       margin: [10, 10],
//       filename: `converted-${file?.name.replace(".mhtml", "")}.pdf`,
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: {
//         scale: 2,
//         useCORS: true,
//         allowTaint: true,
//         logging: true,
//       },
//       jsPDF: {
//         unit: "mm",
//         format: "a4",
//         orientation: "portrait",
//       },
//     };

//     html2pdf().set(options).from(pdfRef.current).save();
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <Card className="shadow-lg">
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold text-gray-900">
//               MHTML to PDF Converter
//             </CardTitle>
//             <CardDescription className="text-gray-600">
//               Convert web archive files to PDF with preserved formatting
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-6">
//               <div className="grid w-full max-w-sm items-center gap-1.5">
//                 <Label htmlFor="mhtml-file" className="text-gray-700 mb-2">
//                   Upload MHTML File
//                 </Label>
//                 <Input
//                   id="mhtml-file"
//                   type="file"
//                   accept=".mhtml"
//                   onChange={handleFileUpload}
//                   disabled={isLoading}
//                   className="cursor-pointer border-2 border-dashed border-gray-300 p-6 rounded-lg"
//                 />
//               </div>

//               {error && (
//                 <div className="text-red-600 text-sm p-2 bg-red-50 rounded-lg">
//                   {error}
//                 </div>
//               )}

//               {isLoading && (
//                 <div className="text-center text-gray-600 animate-pulse">
//                   Processing file...
//                 </div>
//               )}

//               {processedHtml && (
//                 <div className="text-center space-y-4">
//                   <Button
//                     onClick={handleDownload}
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
//                   >
//                     Download PDF
//                   </Button>
//                   <p className="mt-2 text-sm text-gray-500">
//                     Ready to download your converted PDF
//                   </p>
//                 </div>
//               )}

//               <div className="text-sm text-gray-500 space-y-2">
//                 <p className="font-medium">Features:</p>
//                 <ul className="list-disc list-inside space-y-1">
//                   <li>Preserves original page layout</li>
//                   <li>Embeds images and styles</li>
//                   <li>Maintains responsive design</li>
//                   <li>Supports complex web pages</li>
//                 </ul>
//               </div>

//               {/* Hidden processing container */}
//               <div
//                 ref={pdfRef}
//                 className="hidden"
//                 dangerouslySetInnerHTML={{ __html: processedHtml }}
//               />
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
