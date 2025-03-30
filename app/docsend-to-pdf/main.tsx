"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Download,
  AlertCircle,
  Loader2,
  CheckCircle,
  LinkIcon,
  Eye,
  EyeOff,
  FileText,
  Settings,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DocsendToPdfConverter() {
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionProgress, setConversionProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("url");
  const [showSettings, setShowSettings] = useState(false);

  // Conversion settings
  const [pdfQuality, setPdfQuality] = useState("medium");
  const [includeWatermark, setIncludeWatermark] = useState(false);
  const [preserveLinks, setPreserveLinks] = useState(true);
  const [extractImages, setExtractImages] = useState(true);

  const urlInputRef = useRef<HTMLInputElement>(null);

  const validateUrl = (input: string) => {
    // Basic validation for DocSend URLs
    if (!input.trim()) {
      return "Please enter a DocSend URL";
    }

    if (
      !input.includes("docsend.com/") &&
      !input.includes("app.docsend.com/")
    ) {
      return "Please enter a valid DocSend URL (e.g., https://docsend.com/view/...";
    }

    return null;
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setError(null);
    setSuccess(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError(null);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const convertToPdf = async () => {
    // Validate URL
    const urlError = validateUrl(url);
    if (urlError) {
      setError(urlError);
      return;
    }

    setIsConverting(true);
    setConversionProgress(0);
    setError(null);
    setSuccess(null);

    try {
      // Simulate conversion process with progress updates
      // In a real implementation, this would call a conversion API
      for (let i = 0; i <= 100; i += 10) {
        setConversionProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      // Create a sample PDF blob to download
      // In a real implementation, this would be the converted PDF from the API
      const pdfBlob = new Blob(["%PDF-1.5 sample content"], {
        type: "application/pdf",
      });

      // Extract filename from URL or use default
      let filename = "docsend-document.pdf";
      try {
        const urlPath = new URL(url).pathname;
        const pathSegments = urlPath.split("/");
        if (pathSegments.length > 2) {
          filename = `docsend-${pathSegments[pathSegments.length - 1]}.pdf`;
        }
      } catch {
        // Use default filename if URL parsing fails
      }

      // Create download link
      const downloadUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSuccess("DocSend document converted to PDF successfully!");
      setTimeout(() => setSuccess(null), 5000);
    } catch {
      setError(
        "An error occurred during conversion. Please check the URL and try again."
      );
    } finally {
      setIsConverting(false);
      setConversionProgress(0);
    }
  };

  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <Card className="border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="space-y-6">
              {/* Status Alerts */}
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="bg-green-50 text-green-800 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}

              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-900">
                  DocSend to PDF Converter
                </h3>
                <Popover open={showSettings} onOpenChange={setShowSettings}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      <Settings className="h-4 w-4" />
                      <span className="sr-only">Settings</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                          Conversion Settings
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Customize your PDF output
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="pdf-quality">PDF Quality</Label>
                          <Select
                            value={pdfQuality}
                            onValueChange={setPdfQuality}
                          >
                            <SelectTrigger
                              id="pdf-quality"
                              className="col-span-2 h-8"
                            >
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">
                                Low (Smaller file)
                              </SelectItem>
                              <SelectItem value="medium">
                                Medium (Recommended)
                              </SelectItem>
                              <SelectItem value="high">
                                High (Best quality)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label
                            htmlFor="preserve-links"
                            className="col-span-2"
                          >
                            Preserve Hyperlinks
                          </Label>
                          <div className="flex justify-end">
                            <Switch
                              id="preserve-links"
                              checked={preserveLinks}
                              onCheckedChange={setPreserveLinks}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label
                            htmlFor="extract-images"
                            className="col-span-2"
                          >
                            Extract Images
                          </Label>
                          <div className="flex justify-end">
                            <Switch
                              id="extract-images"
                              checked={extractImages}
                              onCheckedChange={setExtractImages}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label
                            htmlFor="include-watermark"
                            className="col-span-2"
                          >
                            Include Watermark
                          </Label>
                          <div className="flex justify-end">
                            <Switch
                              id="include-watermark"
                              checked={includeWatermark}
                              onCheckedChange={setIncludeWatermark}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="url">DocSend URL</TabsTrigger>
                  <TabsTrigger value="batch">Batch Convert</TabsTrigger>
                </TabsList>
                <TabsContent value="url" className="mt-4 space-y-4">
                  {/* URL Input */}
                  <div className="space-y-2">
                    <Label htmlFor="docsend-url">DocSend URL</Label>
                    <div className="flex">
                      <div className="relative flex-grow">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <LinkIcon className="h-4 w-4 text-slate-400" />
                        </div>
                        <Input
                          id="docsend-url"
                          ref={urlInputRef}
                          type="url"
                          value={url}
                          onChange={handleUrlChange}
                          placeholder="https://docsend.com/view/example"
                          className="pl-10 border-slate-300"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500">
                      Enter the full DocSend URL (e.g.,
                      https://docsend.com/view/abc123)
                    </p>
                  </div>

                  {/* Password Input (Optional) */}
                  <div className="space-y-2">
                    <Label htmlFor="docsend-password">
                      Password (if required)
                    </Label>
                    <div className="relative">
                      <Input
                        id="docsend-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter document password"
                        className="border-slate-300 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-slate-600"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500">
                      Only required for password-protected DocSend documents
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="batch" className="mt-4">
                  <div className="p-8 text-center border-2 border-dashed border-slate-300 rounded-lg">
                    <FileText className="h-10 w-10 text-slate-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Batch Conversion
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Convert multiple DocSend documents at once with our
                      premium version.
                    </p>
                    <Button
                      variant="outline"
                      className="border-blue-200 text-blue-700 hover:bg-blue-50"
                    >
                      Upgrade to Premium
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Conversion Progress */}
              {isConverting && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Converting...</span>
                    <span className="text-slate-600">
                      {conversionProgress}%
                    </span>
                  </div>
                  <Progress value={conversionProgress} className="h-2" />
                </div>
              )}

              {/* Convert Button */}
              <Button
                onClick={convertToPdf}
                disabled={isConverting || activeTab === "batch"}
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                {isConverting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Converting...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Convert to PDF
                  </>
                )}
              </Button>

              {/* Usage Tips */}
              <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Tips for Best Results:
                </h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>
                    • Ensure you have permission to download the DocSend
                    document
                  </li>
                  <li>
                    • For password-protected documents, enter the exact password
                    provided by the document owner
                  </li>
                  <li>
                    • Use the settings menu to customize your PDF output quality
                    and features
                  </li>
                  <li>
                    • For large documents, the conversion may take a few moments
                    to complete
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
