"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input"; // Adjust based on your component library
import { Button } from "@/components/ui/button"; // Adjust based on your component library

export default function YouTubeMusicExtractor() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    console.log("Form submitted with URL:", url);

    try {
      const response = await fetch(
        "/(paths)/categories/files/api/extract-youtube-music",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        }
      );

      console.log("API response status:", response.status);

      if (!response.ok) {
        const data = await response.json();
        console.log("Error response:", data);
        setError(data.error || "Something went wrong");
        setIsLoading(false);
        return;
      }

      // Extract filename from headers
      const contentDisposition = response.headers.get("Content-Disposition");
      let filename = "audio.mp3";
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="(.+)"/);
        if (match) filename = match[1];
      }

      // Trigger download
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      console.error("Error during extraction:", err);
      setError("Failed to extract audio");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">
        YouTube Music Extractor
      </h1>
      <p className="mb-6 text-gray-600 text-center">
        Enter a YouTube video URL to extract and download the audio as MP3.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="YouTube URL (e.g., https://youtube.com/watch?v=...)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !url}>
          {isLoading ? "Extracting..." : "Extract Audio"}
        </Button>
      </form>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </div>
  );
}
