import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    if (!code || typeof code !== "string") {
      return NextResponse.json({ error: "Invalid input." }, { status: 400 });
    }

    // Enhanced Java to C conversion logic
    let cCode = code
      .replace(/public\s+class\s+(\w+)/g, "struct $1")
      .replace(/public\s+static\s+void\s+main\\s*\\(.*?\\)/g, "int main()")
      .replace(/System\\.out\\.println\\((.*?)\\);/g, 'printf("%s\\n", $1);')
      .replace(/System\\.out\\.print\\((.*?)\\);/g, 'printf("%s", $1);')
      .replace(/String/g, "char*")
      .replace(/boolean/g, "int")
      .replace(/true/g, "1")
      .replace(/false/g, "0")
      .replace(/import\\s+.*?;/g, "") // strip imports
      .replace(/package\\s+.*?;/g, "")
      .replace(/new\\s+Scanner\\(.*?\\);/g, "/* Manual input logic needed */")
      .replace(/System\\.exit\\(0\\);/g, "exit(0);");

    cCode = `#include <stdio.h>\\n#include <stdlib.h>\\n\\n// Converted from Java to C\\n${cCode}`;

    return NextResponse.json(
      { cCode, fileName: "converted.c" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Conversion failed. Please try again." },
      { status: 500 }
    );
  }
}
