import { FileText, FileImage, Music, FileCode, FileAudio } from "lucide-react";

export interface Tool {
  name: string;
  description: string;
  icon: any;
  category: string;
  id: string;
  route: string;
}

export interface CategoryData {
  icon: any;
  color: string;
  description: string;
  tools: Tool[];
}

export interface Category extends CategoryData {
  name: string;
}

export const toolsData: Record<string, CategoryData> = {
  "PDF Tools": {
    icon: FileText,
    color: "from-blue-500 to-green-600",
    description: "Convert UDF or ZPL files to PDF format easily.",
    tools: [
      {
        name: "UDF to PDF Converter",
        description: "Convert UDF files to PDF format.",
        icon: FileCode,
        category: "PDF Tools",
        id: "udf-to-pdf-converter",
        route: "/convert-udf-to-pdf",
      },
      {
        name: "ZPL to PDF Converter",
        description: "Convert ZPL files to PDF format.",
        icon: FileCode,
        category: "PDF Tools",
        id: "zpl-to-pdf-converter",
        route: "/convert-zpl-to-pdf",
      },
    ],
  },
  "HTML Tools": {
    icon: FileImage,
    color: "from-purple-500 to-pink-600",
    description: "Tools for working with HTML documents and files.",
    tools: [
      {
        name: "HTML Document Merger",
        description: "Merge multiple HTML files easily",
        icon: FileImage,
        category: "HTML Tools",
        id: "html-merger",
        route: "/html-merger",
      },
    ],
  },
  "Media Tools": {
    icon: Music,
    color: "from-red-500 to-orange-600",
    description: "Extract and convert audio from various media sources.",
    tools: [
      {
        name: "YouTube Audio Extractor",
        description: "Extract audio from YouTube videos easily.",
        icon: FileAudio,
        category: "Media Tools",
        id: "youtube-audio-extractor",
        route: "/youtube-audio-extractor",
      },
    ],
  },
};

export const getAllTools = (): Tool[] => {
  return Object.values(toolsData).flatMap((category) => category.tools);
};

export const getCategories = (): Category[] => {
  return Object.entries(toolsData).map(([name, data]) => ({
    name,
    ...data,
  }));
};
