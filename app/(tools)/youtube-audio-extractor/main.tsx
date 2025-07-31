"use client";

import { useState, useRef } from "react";
import { Loader2, Download, Music, Link, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

export default function YoutubeAudioExtractor() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [format, setFormat] = useState("mp3");
  const [quality, setQuality] = useState("high");
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleExtract = async () => {
    if (!url) {
      toast({
        title: "URL Required",
        description: "Please enter a YouTube video URL",
        variant: "destructive"
      });
      return;
    }

    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid YouTube video URL",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/youtube-audio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
          format,
          quality
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to extract audio');
      }

      // Get filename from response headers
      const contentDisposition = response.headers.get('content-disposition');
      const filenameMatch = contentDisposition?.match(/filename="(.+)"/);
      const extractedFileName = filenameMatch ? filenameMatch[1] : `youtube-audio.${format}`;
      
      setFileName(extractedFileName);

      // Create blob and download
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      
      // Create download link and trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = extractedFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      URL.revokeObjectURL(downloadUrl);

      toast({
        title: "Audio Extracted Successfully",
        description: `Downloaded ${extractedFileName}`,
      });

    } catch (error) {
      console.error('Extraction error:', error);
      toast({
        title: "Extraction Failed",
        description: error instanceof Error ? error.message : "Failed to extract audio from YouTube video",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text.includes("youtube.com") || text.includes("youtu.be")) {
        setUrl(text);
        toast({
          title: "URL Pasted",
          description: "YouTube URL detected from clipboard",
        });
      } else {
        toast({
          title: "Invalid URL",
          description: "Clipboard content is not a YouTube URL",
          variant: "destructive"
        });
      }
    } catch (err) {
      toast({
        title: "Clipboard Access Denied",
        description: "Please paste manually",
        variant: "destructive"
      });
    }
  };

  const handleClear = () => {
    setUrl("");
    setFileName("");
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>YouTube Audio Extractor</CardTitle>
        </CardHeader>
        <CardContent>
          {/* URL Input */}
          <div className="mb-6">
            <Label htmlFor="youtube-url">YouTube Video URL</Label>
            <div className="relative mt-2">
              <Input
                ref={inputRef}
                id="youtube-url"
                placeholder="https://www.youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="pr-10"
              />
              {url && (
                <button
                  onClick={handleClear}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="mt-2 gap-1"
              onClick={handlePaste}
            >
              <Link className="h-3.5 w-3.5" /> Paste from Clipboard
            </Button>
          </div>

          {/* Format Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="audio-format">Audio Format</Label>
              <Select value={format} onValueChange={setFormat}>
                <SelectTrigger id="audio-format" className="mt-2">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mp3">MP3 (Most compatible)</SelectItem>
                  <SelectItem value="wav">WAV (Lossless quality)</SelectItem>
                  <SelectItem value="m4a">M4A (AAC encoding)</SelectItem>
                  <SelectItem value="ogg">OGG (Open format)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="audio-quality">Audio Quality</Label>
              <Select value={quality} onValueChange={setQuality}>
                <SelectTrigger id="audio-quality" className="mt-2">
                  <SelectValue placeholder="Select quality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low (64kbps - smallest size)</SelectItem>
                  <SelectItem value="medium">Medium (128kbps - balanced)</SelectItem>
                  <SelectItem value="high">High (192kbps - good quality)</SelectItem>
                  <SelectItem value="very-high">Very High (320kbps - best)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleExtract}
              disabled={isLoading || !url}
              className="flex-1 min-w-[200px] gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Extracting...
                </>
              ) : (
                <>
                  <Music className="h-4 w-4" />
                  Extract & Download Audio
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Success Message */}
      {fileName && !isLoading && (
        <Card>
          <CardHeader>
            <CardTitle>Extraction Complete</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <Music className="h-8 w-8 text-green-600" />
              <div>
                <h4 className="font-medium text-green-800">{fileName}</h4>
                <p className="text-sm text-green-600">
                  Audio has been downloaded successfully
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Loading State */}
      {isLoading && (
        <Card>
          <CardHeader>
            <CardTitle>Extracting Audio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center p-8 gap-3">
              <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
              <span>Processing YouTube video...</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}