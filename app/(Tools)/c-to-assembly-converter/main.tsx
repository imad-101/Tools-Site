"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, Download, RotateCcw, Sparkles, Moon, Sun } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Editor from "@monaco-editor/react";
import { debounce } from "lodash";

export default function CToAssemblyConverter() {
  const [cCode, setCCode] = useState("");
  const [assemblyCode, setAssemblyCode] = useState("");
  const [architecture, setArchitecture] = useState("x86");
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<"vs" | "vs-dark">("vs");
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const convertCode = useCallback(
    debounce(async (code: string, arch: string) => {
      if (!code.trim()) {
        setAssemblyCode("");
        setError(null);
        return;
      }

      try {
        let assembly = "";

        // Use mock conversion in development for quick testing
        if (process.env.NODE_ENV === "development") {
          assembly = `; Mock ${arch} assembly for: ${code.slice(0, 20)}...
main:
    push    ebp        ; Save base pointer
    mov     ebp, esp   ; Set up stack frame
    mov     eax, 5     ; Example: move 5 to eax
    add     eax, 10    ; Add 10 to eax
    pop     ebp        ; Restore base pointer
    ret                ; Return`;
        } else {
          // Call your real API
          const response = await fetch("/api/convert-c-to-asm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code, architecture: arch }),
          });

          const data = await response.json();

          if (!response.ok) {
            setError(data.error || "Failed to convert C code.");
            setAssemblyCode("");
            return;
          }

          assembly = data.assembly;
        }

        // Add simple annotations
        const annotatedAssembly = assembly
          .split("\n")
          .map((line) => {
            if (line.includes("mov"))
              return `${line} ; Move data between registers/memory`;
            if (line.includes("add")) return `${line} ; Add values`;
            return line;
          })
          .join("\n");

        setAssemblyCode(annotatedAssembly);
        setError(null);
      } catch {
        setError("An error occurred during conversion.");
        setAssemblyCode("");
      }
    }, 500),
    []
  );

  useEffect(() => {
    convertCode(cCode, architecture);
  }, [cCode, architecture, convertCode]);

  const handleCopy = () => {
    if (!assemblyCode) return;
    navigator.clipboard
      .writeText(assemblyCode)
      .then(() => showNotification("Copied to clipboard", "success"))
      .catch(() => showNotification("Failed to copy", "error"));
  };

  const handleDownload = () => {
    if (!assemblyCode) return;
    const blob = new Blob([assemblyCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `output.${architecture}.asm`;
    a.click();
    URL.revokeObjectURL(url);
    showNotification("Assembly code downloaded", "success");
  };

  const handleReset = () => {
    setCCode("");
    setAssemblyCode("");
    setArchitecture("x86");
    setError(null);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "vs" ? "vs-dark" : "vs"));
  };

  return (
    <Card className="max-w-5xl mx-auto shadow-lg bg-gradient-to-b from-white to-gray-50 border-t-4 border-t-blue-500">
      <CardContent className="space-y-6 pt-4">
        {notification && (
          <Alert
            className={`${
              notification.type === "success"
                ? "bg-green-50 text-green-800 border-green-200"
                : "bg-red-50 text-red-800 border-red-200"
            } animate-in fade-in duration-300`}
          >
            <AlertDescription>{notification.message}</AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert className="bg-red-50 text-red-800 border-red-200">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="c-code" className="text-base font-medium">
              Enter C Code
            </Label>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="flex items-center h-8"
            >
              {theme === "vs" ? (
                <Moon className="h-4 w-4 mr-1" />
              ) : (
                <Sun className="h-4 w-4 mr-1" />
              )}
              {theme === "vs" ? "Dark" : "Light"} Theme
            </Button>
          </div>
          <Editor
            height="200px"
            language="c"
            theme={theme}
            value={cCode}
            onChange={(value) => setCCode(value || "")}
            options={{
              lineNumbers: "on",
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              fontSize: 14,
            }}
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="architecture" className="text-base font-medium">
            Select Architecture
          </Label>
          <Select value={architecture} onValueChange={setArchitecture}>
            <SelectTrigger>
              <SelectValue placeholder="Select architecture" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="x86">x86</SelectItem>
              <SelectItem value="arm">ARM</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={() => convertCode(cCode, architecture)}
            className="flex-1 py-6 text-base font-medium bg-gradient-to-r from-blue-500 to-blue-600"
            disabled={!cCode.trim()}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Convert to Assembly
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
            className="sm:w-auto flex items-center justify-center"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>

        {assemblyCode && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="assembly-output"
                className="text-base font-medium"
              >
                Assembly Output
              </Label>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="flex items-center h-8"
                >
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDownload}
                  className="flex items-center h-8"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </div>
            </div>
            <Editor
              height="200px"
              language="assembly"
              theme={theme}
              value={assemblyCode}
              options={{
                lineNumbers: "on",
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 14,
                readOnly: true,
              }}
            />
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col text-center border-t pt-4 pb-6 px-6 text-xs text-muted-foreground">
        <p>
          This tool converts simple C code to assembly language for x86 and ARM
          architectures with real-time updates and annotations. Complex code may
          require advanced compilers.
        </p>
      </CardFooter>
    </Card>
  );
}
