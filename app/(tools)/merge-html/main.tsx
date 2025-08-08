"use client";

import { useState, useRef } from "react";
import { FileText, X, ArrowUpDown, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

export default function HtmlMerger() {
  const [files, setFiles] = useState<File[]>([]);
  const [isMerging, setIsMerging] = useState(false);
  const [mergedHtml, setMergedHtml] = useState<string>("");
  const [fileName, setFileName] = useState("merged-document");
  const [mergingProgress, setMergingProgress] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      
      // Check total file count
      if (files.length + newFiles.length > 10) {
        toast({
          title: "File Limit Exceeded",
          description: "You can merge up to 10 files at once.",
          variant: "destructive"
        });
        return;
      }
      
      // Check file sizes
      const oversized = newFiles.filter(file => file.size > 5 * 1024 * 1024);
      if (oversized.length > 0) {
        toast({
          title: "File Too Large",
          description: "Each file must be smaller than 5MB.",
          variant: "destructive"
        });
        return;
      }
      
      // Validate file types more strictly
      const invalidFiles = newFiles.filter(file => {
        const extension = file.name.toLowerCase().split('.').pop();
        return !['html', 'htm'].includes(extension || '');
      });
      
      if (invalidFiles.length > 0) {
        toast({
          title: "Invalid File Type",
          description: "Only .html and .htm files are supported.",
          variant: "destructive"
        });
        return;
      }
      
      // Check for duplicate filenames
      const existingNames = files.map(f => f.name.toLowerCase());
      const duplicates = newFiles.filter(file => 
        existingNames.includes(file.name.toLowerCase())
      );
      
      if (duplicates.length > 0) {
        toast({
          title: "Duplicate Files",
          description: `File "${duplicates[0].name}" is already added.`,
          variant: "destructive"
        });
        return;
      }
      
      setFiles(prev => [...prev, ...newFiles]);
      
      // Clear the input to allow re-selecting the same files
      if (e.target) {
        e.target.value = '';
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length > 0) {
      // Validate dropped files directly
      const validFiles = droppedFiles.filter(file => {
        const extension = file.name.toLowerCase().split('.').pop();
        return ['html', 'htm'].includes(extension || '');
      });
      
      if (validFiles.length !== droppedFiles.length) {
        toast({
          title: "Invalid File Type",
          description: "Only .html and .htm files are supported.",
          variant: "destructive"
        });
        return;
      }
      
      // Check limits and add files
      if (files.length + validFiles.length > 10) {
        toast({
          title: "File Limit Exceeded",
          description: "You can merge up to 10 files at once.",
          variant: "destructive"
        });
        return;
      }
      
      const oversized = validFiles.filter(file => file.size > 5 * 1024 * 1024);
      if (oversized.length > 0) {
        toast({
          title: "File Too Large",
          description: "Each file must be smaller than 5MB.",
          variant: "destructive"
        });
        return;
      }
      
      setFiles(prev => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const moveFile = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === files.length - 1)
    ) {
      return;
    }

    const newFiles = [...files];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    [newFiles[index], newFiles[targetIndex]] = [newFiles[targetIndex], newFiles[index]];
    setFiles(newFiles);
  };

  const mergeHtmlFiles = async () => {
    if (files.length < 2) {
      toast({
        title: "Insufficient Files",
        description: "Please select at least 2 files to merge.",
        variant: "destructive"
      });
      return;
    }

    setIsMerging(true);
    
    try {
      // Calculate total size to prevent memory issues
      const totalSize = files.reduce((sum, file) => sum + file.size, 0);
      const maxTotalSize = 50 * 1024 * 1024; // 50MB total limit
      
      if (totalSize > maxTotalSize) {
        toast({
          title: "Total Size Too Large",
          description: "Combined file size exceeds 50MB limit. Please reduce file sizes.",
          variant: "destructive"
        });
        return;
      }

      let combinedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${fileName || 'merged-document'}</title>
  <style>
    /* Reset and base styles */
    body { margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; }
    .document-section { margin-bottom: 40px; page-break-inside: avoid; border-bottom: 1px solid #e2e8f0; padding-bottom: 20px; }
    .document-section:last-child { border-bottom: none; margin-bottom: 0; }
    .section-header { background: #f8fafc; padding: 10px; margin-bottom: 20px; border-radius: 4px; font-weight: bold; color: #475569; }
  </style>
</head>
<body>`;

      // Process files with memory management
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setMergingProgress(Math.round(((i + 1) / files.length) * 100));
        
        try {
          const text = await file.text();
          
          // Sanitize filename for display
          const sanitizedName = file.name.replace(/[<>]/g, '');
          
          // Extract body content with better parsing
          const bodyMatch = text.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
          let content = '';
          
          if (bodyMatch) {
            content = bodyMatch[1].trim();
          } else {
            // Remove html, head, and doctype if present
            content = text
              .replace(/<!DOCTYPE[^>]*>/gi, '')
              .replace(/<html[^>]*>/gi, '')
              .replace(/<\/html>/gi, '')
              .replace(/<head[\s\S]*?<\/head>/gi, '')
              .replace(/<\/?body[^>]*>/gi, '')
              .trim();
          }
          
          // Add section with header
          combinedHtml += `\n  <div class="document-section">
    <div class="section-header">Document ${i + 1}: ${sanitizedName}</div>
${content}
  </div>`;
          
          // Yield control to prevent blocking
          if (i < files.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 0));
          }
        } catch (fileError) {
          console.error(`Error processing file ${file.name}:`, fileError);
          combinedHtml += `\n  <div class="document-section">
    <div class="section-header">Document ${i + 1}: ${file.name} (Error)</div>
    <p style="color: #ef4444;">Error reading file: ${file.name}</p>
  </div>`;
        }
      }

      combinedHtml += "\n</body>\n</html>";
      setMergedHtml(combinedHtml);
      
      toast({
        title: "Merge Successful",
        description: `Successfully merged ${files.length} HTML files.`,
      });
    } catch (error) {
      toast({
        title: "Merge Failed",
        description: error instanceof Error ? error.message : "An error occurred while merging files.",
        variant: "destructive"
      });
      console.error("Merge error:", error);
    } finally {
      setIsMerging(false);
      setMergingProgress(0);
    }
  };

  const downloadMergedFile = () => {
    if (!mergedHtml) {
      toast({
        title: "No Content",
        description: "No merged content available to download.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Sanitize filename
      const sanitizedFileName = (fileName || 'merged-document')
        .replace(/[^a-zA-Z0-9\-_\s]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 100);
      
      const blob = new Blob([mergedHtml], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${sanitizedFileName}.html`;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      // Clean up the URL object
      setTimeout(() => URL.revokeObjectURL(url), 100);
      
      toast({
        title: "Download Started",
        description: `File "${sanitizedFileName}.html" is being downloaded.`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download the merged file.",
        variant: "destructive"
      });
      console.error("Download error:", error);
    }
  };

  const copyToClipboard = async () => {
    if (!mergedHtml) {
      toast({
        title: "No Content",
        description: "No merged content available to copy.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Check if clipboard API is available
      if (!navigator.clipboard) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = mergedHtml;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        toast({
          title: "Copied to Clipboard",
          description: "The merged HTML is ready for pasting.",
        });
        return;
      }

      await navigator.clipboard.writeText(mergedHtml);
      toast({
        title: "Copied to Clipboard",
        description: "The merged HTML is ready for pasting.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy content to clipboard. Please try the download option instead.",
        variant: "destructive"
      });
      console.error("Copy error:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Merge HTML Files</CardTitle>
        </CardHeader>
        <CardContent>
          {/* File Upload Area */}
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors mb-6 ${
              isDragOver 
                ? 'border-blue-400 bg-blue-50' 
                : 'border-slate-300 bg-slate-50 hover:bg-slate-100'
            }`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <FileText className="w-12 h-12 text-slate-400" />
              <h3 className="text-lg font-medium text-slate-700">Drag & drop HTML files here</h3>
              <p className="text-slate-500 text-sm">or click to browse</p>
              <p className="text-slate-400 text-xs mt-2">Supports .html, .htm files (max 5MB each)</p>
            </div>
            <Input 
              ref={fileInputRef}
              type="file" 
              className="hidden" 
              accept=".html,.htm"
              multiple
              onChange={handleFileChange}
            />
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="mb-6">
              <Label className="block mb-2">Files to merge (drag to reorder):</Label>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {files.map((file, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between bg-slate-50 p-3 rounded border"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-500" />
                      <span className="font-medium text-slate-800 truncate max-w-xs">{file.name}</span>
                      <span className="text-slate-500 text-sm">({(file.size / 1024).toFixed(1)}KB)</span>
                    </div>
                    <div className="flex gap-1">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => moveFile(index, "up")}
                        disabled={index === 0}
                      >
                        <ArrowUpDown className="h-4 w-4 rotate-90" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => moveFile(index, "down")}
                        disabled={index === files.length - 1}
                      >
                        <ArrowUpDown className="h-4 w-4 -rotate-90" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-red-500 hover:text-red-600"
                        onClick={() => removeFile(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* File Name Input */}
          <div className="mb-6">
            <Label htmlFor="filename">Output File Name:</Label>
            <Input 
              id="filename"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Enter file name"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={mergeHtmlFiles}
              disabled={files.length < 2 || isMerging}
              className="flex-1 min-w-[150px]"
            >
              {isMerging ? "Merging..." : "Merge HTML Files"}
            </Button>
            
            <Button 
              variant="secondary" 
              onClick={() => setFiles([])}
              disabled={files.length === 0}
              className="flex-1 min-w-[120px]"
            >
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {mergedHtml && (
        <Card>
          <CardHeader>
            <CardTitle>Merged HTML</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-wrap gap-2">
              <Button onClick={downloadMergedFile} className="gap-2">
                <Download className="h-4 w-4" /> Download HTML
              </Button>
              <Button variant="secondary" onClick={copyToClipboard} className="gap-2">
                <Copy className="h-4 w-4" /> Copy to Clipboard
              </Button>
            </div>
            
            <div className="relative">
              <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm max-h-[400px]">
                {mergedHtml.length > 2000 
                  ? `${mergedHtml.substring(0, 2000)}... [truncated]` 
                  : mergedHtml}
              </pre>
              <div className="absolute top-2 right-2 text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                {mergedHtml.length} characters
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Loading State */}
      {isMerging && !mergedHtml && (
        <Card>
          <CardHeader>
            <CardTitle>Merging Files</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Processing files...</span>
                  <span>{mergingProgress}%</span>
                </div>
                <Progress value={mergingProgress} className="h-2" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}