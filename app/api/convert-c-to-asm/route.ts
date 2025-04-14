import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs/promises";
import path from "path";

const execAsync = promisify(exec);

export async function POST(request: Request) {
  try {
    const { code, architecture } = await request.json();

    if (!code || !architecture) {
      return NextResponse.json(
        { error: "Code and architecture are required." },
        { status: 400 }
      );
    }

    // Validate architecture
    if (!["x86", "arm"].includes(architecture)) {
      return NextResponse.json(
        { error: "Unsupported architecture." },
        { status: 400 }
      );
    }

    // Write C code to a temporary file
    const tempDir = path.join(process.cwd(), "tmp");
    await fs.mkdir(tempDir, { recursive: true });
    const cFilePath = path.join(tempDir, `temp-${Date.now()}.c`);
    await fs.writeFile(cFilePath, code);

    // Determine compiler flags based on architecture
    const gccFlags =
      architecture === "x86"
        ? "-m32 -S -o - -O0"
        : "-march=armv7-a -S -o - -O0";

    // Execute GCC to convert C to assembly
    const { stdout, stderr } = await execAsync(`gcc ${gccFlags} ${cFilePath}`, {
      encoding: "utf8",
    });

    // Clean up temporary file
    await fs.unlink(cFilePath);

    if (stderr && !stdout) {
      return NextResponse.json({ error: stderr }, { status: 400 });
    }

    return NextResponse.json({ assembly: stdout });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        error:
          "Conversion failed: " +
          (error instanceof Error ? error.message : String(error)),
      },
      { status: 500 }
    );
  }
}
