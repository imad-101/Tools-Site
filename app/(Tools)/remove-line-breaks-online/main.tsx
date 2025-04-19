"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Copy, RotateCcw, Download } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

export default function RemoveLineBreak() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [preserveParagraphs, setPreserveParagraphs] = useState(true);
  const [trimWhitespace, setTrimWhitespace] = useState(false);
  const [delimiter, setDelimiter] = useState(" ");
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const removeLineBreaks = (text: string) => {
    let result = text;
    if (trimWhitespace) {
      result = result.replace(/^\s+|\s+$/gm, "");
    }
    if (preserveParagraphs) {
      // Replace single newlines with delimiter, keep double newlines
      result = result.replace(/(\r\n|\n|\r)(?!\n)/g, delimiter);
    } else {
      // Replace all newlines with delimiter
      result = result.replace(/(\r\n|\n|\r)/g, delimiter);
    }
    // Clean up multiple delimiters
    const delimiterRegex = new RegExp(`\\${delimiter}+`, "g");
    result = result.replace(delimiterRegex, delimiter).trim();
    return result;
  };

  const handleRemoveLineBreaks = () => {
    if (!inputText.trim()) {
      showNotification("Please enter text to process", "error");
      return;
    }
    const result = removeLineBreaks(inputText);
    setOutputText(result);
    showNotification("Line breaks removed successfully", "success");
  };

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCopy = () => {
    if (!outputText) {
      showNotification("No text to copy", "error");
      return;
    }
    navigator.clipboard
      .writeText(outputText)
      .then(() => showNotification("Copied to clipboard", "success"))
      .catch(() => showNotification("Failed to copy", "error"));
  };

  const handleDownload = () => {
    if (!outputText) {
      showNotification("No text to download", "error");
      return;
    }
    const blob = new Blob([outputText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "line_break_removed.txt";
    a.click();
    URL.revokeObjectURL(url);
    showNotification("Text downloaded successfully", "success");
  };

  const handleReset = () => {
    setInputText("");
    setOutputText("");
    setPreserveParagraphs(true);
    setTrimWhitespace(false);
    setDelimiter(" ");
    showNotification("Reset successful", "success");
  };

  return (
    <Card className="max-w-5xl mx-auto shadow-lg bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t-4 border-t-primary">
      <CardContent className="space-y-6 pt-4">
        {notification && (
          <Alert
            className={`${
              notification.type === "success"
                ? "bg-green-50 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                : "bg-red-50 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800"
            } animate-in fade-in duration-300`}
          >
            <AlertDescription>{notification.message}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="input-text" className="text-base font-medium">
              Input Text
            </Label>
            <Textarea
              id="input-text"
              placeholder="Paste text with line breaks here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[150px] transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary"
              aria-label="Input text with line breaks"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="output-text" className="text-base font-medium">
              Output Text
            </Label>
            <Textarea
              id="output-text"
              value={outputText}
              readOnly
              className="min-h-[150px] bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900"
              placeholder="Processed text will appear here..."
              aria-label="Processed text without line breaks"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Switch
              id="preserve-paragraphs"
              checked={preserveParagraphs}
              onCheckedChange={setPreserveParagraphs}
              aria-label="Preserve paragraph breaks"
            />
            <Label
              htmlFor="preserve-paragraphs"
              className="font-medium cursor-pointer"
            >
              Preserve Paragraph Breaks
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="trim-whitespace"
              checked={trimWhitespace}
              onCheckedChange={setTrimWhitespace}
              aria-label="Trim whitespace"
            />
            <Label
              htmlFor="trim-whitespace"
              className="font-medium cursor-pointer"
            >
              Trim Whitespace
            </Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="delimiter" className="text-base font-medium">
              Replace Line Breaks With
            </Label>
            <Input
              id="delimiter"
              value={delimiter}
              onChange={(e) => setDelimiter(e.target.value || " ")}
              placeholder="e.g., space, comma, semicolon"
              className="transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary"
              aria-label="Delimiter to replace line breaks"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            onClick={handleRemoveLineBreaks}
            className="flex-1 py-6 text-base font-medium transition-all duration-200 hover:scale-[1.02] bg-gradient-to-r from-primary to-primary/90"
            disabled={!inputText.trim()}
            aria-label="Remove line breaks"
          >
            Remove Line Breaks
          </Button>
          <Button
            onClick={handleCopy}
            className="flex-1 py-6 text-base font-medium transition-all duration-200 hover:scale-[1.02]"
            disabled={!outputText}
            aria-label="Copy result"
          >
            <Copy className="mr-2 h-5 w-5" />
            Copy Result
          </Button>
          <Button
            onClick={handleDownload}
            className="flex-1 py-6 text-base font-medium transition-all duration-200 hover:scale-[1.02]"
            disabled={!outputText}
            aria-label="Download result as text file"
          >
            <Download className="mr-2 h-5 w-5" />
            Download
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
            className="sm:w-auto flex items-center justify-center"
            aria-label="Reset form"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col text-center border-t pt-4 pb-6 px-6 text-xs text-muted-foreground">
        <p>
          This tool removes all types of line breaks (\n, \r\n, \r) and
          optionally preserves paragraph breaks or trims whitespace. Use the
          delimiter field to customize the output. Always verify the output for
          critical applications.
        </p>
      </CardFooter>
    </Card>
  );
}
