import { FileText, FileImage } from "lucide-react";

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
        icon: FileText,
        category: "PDF Tools",
        id: "udf-to-pdf-converter",
        route: "/convert-udf-to-pdf",
      },
      {
        name: "ZPL to PDF Converter",
        description: "Convert ZPL label files to PDF format.",
        icon: FileImage,
        category: "PDF Tools",
        id: "zpl-to-pdf-converter",
        route: "/convert-zpl-to-pdf",
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
