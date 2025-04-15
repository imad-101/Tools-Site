"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Download, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import cLang from "react-syntax-highlighter/dist/cjs/languages/hljs/c";
import java from "react-syntax-highlighter/dist/cjs/languages/hljs/java";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

SyntaxHighlighter.registerLanguage("c", cLang);
SyntaxHighlighter.registerLanguage("java", java);

export default function JavaToCConverter() {
  const [javaCode, setJavaCode] = useState("");
  const [converted, setConverted] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    setLoading(true);
    setConverted(null);
    try {
      const res = await fetch("/api/convert-java-to-c", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: javaCode }),
      });
      const data = await res.json();
      setConverted(data.cCode || "Conversion failed.");
    } catch {
      setConverted("Error during conversion.");
    }
    setLoading(false);
  };

  const handleDownload = () => {
    if (!converted) return;
    const blob = new Blob([converted], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted.c";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setJavaCode("");
    setConverted(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center p-4 max-w-4xl mx-auto"
    >
      <Card className="w-full shadow-2xl">
        <CardContent className="p-6 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-center">
            Java to C Code Converter
          </h1>
          <Textarea
            className="min-h-[200px] font-mono text-sm"
            placeholder="Paste your Java code here..."
            value={javaCode}
            onChange={(e) => setJavaCode(e.target.value)}
          />
          <div className="flex gap-2 justify-center">
            <Button onClick={handleConvert} disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : "Convert to C"}
            </Button>
            <Button
              onClick={handleDownload}
              disabled={!converted}
              variant="secondary"
            >
              <Download className="mr-2 h-4 w-4" />
              Download C
            </Button>
            <Button onClick={handleReset} variant="destructive">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>

          {converted && (
            <div>
              <h2 className="text-lg font-semibold my-2">Converted C Code:</h2>
              <SyntaxHighlighter language="c" style={dracula} wrapLongLines>
                {converted}
              </SyntaxHighlighter>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
