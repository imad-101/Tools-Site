"use client";

import React, { useState } from "react";

type FileMetadata = {
  name: string;
  size: number;
  type: string;
  lastModified: string; // Formatted date string
};

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState<FileMetadata | null>(null);
  const [fileContentPreview, setFileContentPreview] = useState<string>("");
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Process file from input or drop
  const handleNewFile = (selected: File) => {
    if (!selected.name.toLowerCase().endsWith(".udf")) {
      setError("Please select a .udf file.");
      resetAll();
      return;
    }
    setError("");
    setFile(selected);
    setDownloadUrl("");

    // Build file metadata info
    const meta: FileMetadata = {
      name: selected.name,
      size: selected.size,
      type: selected.type || "unknown",
      lastModified: new Date(selected.lastModified).toLocaleString(),
    };
    setMetadata(meta);

    // For preview, read the first 1KB (adjust as needed)
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setFileContentPreview(result.slice(0, 1024));
    };
    reader.readAsText(selected);
  };

  // Reset all state values to initial
  const resetAll = () => {
    setFile(null);
    setMetadata(null);
    setFileContentPreview("");
    setDownloadUrl("");
    setError("");
    setLoading(false);
  };

  // File input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleNewFile(e.target.files[0]);
    }
  };

  // Drag & drop handlers with premium look
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleNewFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Call server API to convert file
  const handleConvert = async () => {
    if (!file) {
      setError("Please select a UDF file first.");
      return;
    }
    setLoading(true);
    setError("");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/UdfConvert", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Conversion failed. Please try again.");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="  flex flex-col items-center p-4">
      {/* Premium File Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="w-full max-w-5xl border-4 border-dashed border-transparent bg-gray-800 p-1 rounded-xl shadow-lg"
      >
        <div className="bg-white rounded-lg p-8 py-16 cursor-pointer hover:bg-gray-50 transition duration-200 flex flex-col  justify-center items-center">
          {file ? (
            <p className="text-2xl font-semibold text-gray-800">{file.name}</p>
          ) : (
            <p className="text-xl text-gray-500">
              Drag & drop your <span className="font-bold">.udf</span> file here
              or click to select
            </p>
          )}
          <div>
            <input
              type="file"
              accept=".udf"
              onChange={handleFileChange}
              className="mt-4 block w-full text-center text-gray-600  file:py-3 file:px-6 file:cursor-pointer file:rounded-full file:border-0 file:text-base file:font-semibold file:bg-blue-200"
            />
          </div>
        </div>
      </div>

      {/* File Metadata and Preview Card */}
      {metadata && (
        <div className="w-full max-w-4xl bg-white mt-6 rounded-xl shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            File Details
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
            <div>
              <span className="font-medium">Name:</span>
              <p>{metadata.name}</p>
            </div>
            <div>
              <span className="font-medium">Size:</span>
              <p>{metadata.size.toLocaleString()} bytes</p>
            </div>
            <div>
              <span className="font-medium">Type:</span>
              <p>{metadata.type}</p>
            </div>
            <div>
              <span className="font-medium">Last Modified:</span>
              <p>{metadata.lastModified}</p>
            </div>
          </div>
          {fileContentPreview && (
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Preview:
              </h3>
              <div className="border rounded-lg p-3 bg-gray-50 max-h-48 overflow-auto text-xs whitespace-pre-wrap">
                {fileContentPreview}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={handleConvert}
          disabled={!file || loading}
          className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-full shadow-xl hover:bg-gray-700 cursor-pointer transition duration-200 disabled:opacity-50"
        >
          {loading ? (
            <div className="flex items-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Converting...
            </div>
          ) : (
            "Convert to PDF"
          )}
        </button>

        {downloadUrl && (
          <a
            href={downloadUrl}
            download="converted.pdf"
            className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full shadow-xl hover:bg-green-600 transition duration-200"
          >
            Download PDF
          </a>
        )}

        <button
          onClick={resetAll}
          className="px-8 py-3 bg-red-400 text-white font-semibold rounded-full shadow-xl hover:bg-red-500 cursor-pointer transition duration-200"
        >
          Reset
        </button>
      </div>

      {error && <p className="mt-6 text-red-600 text-center">{error}</p>}
    </div>
  );
}
