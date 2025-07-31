import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import os from 'os';

const execAsync = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    const { url, format, quality } = await request.json();

    // Validate URL
    if (!url || (!url.includes('youtube.com') && !url.includes('youtu.be'))) {
      return NextResponse.json(
        { error: 'Invalid YouTube URL' },
        { status: 400 }
      );
    }

    // Validate format
    const validFormats = ['mp3', 'wav', 'm4a', 'ogg'];
    if (!validFormats.includes(format)) {
      return NextResponse.json(
        { error: 'Invalid format' },
        { status: 400 }
      );
    }

    // Validate quality
    const validQualities = ['low', 'medium', 'high', 'very-high'];
    if (!validQualities.includes(quality)) {
      return NextResponse.json(
        { error: 'Invalid quality' },
        { status: 400 }
      );
    }

    // Map quality to bitrate
    const qualityMap = {
      'low': '64k',
      'medium': '128k',
      'high': '192k',
      'very-high': '320k'
    };

    const bitrate = qualityMap[quality as keyof typeof qualityMap];
    const tempDir = os.tmpdir();
    const outputPath = path.join(tempDir, `youtube-audio-${Date.now()}.${format}`);

    // Build yt-dlp command
    let command = `yt-dlp -x --audio-format ${format}`;
    
    if (format === 'mp3') {
      command += ` --audio-quality ${bitrate}`;
    }
    
    command += ` -o "${outputPath}" "${url}"`;

    // Execute the command
    const { stdout, stderr } = await execAsync(command);

    if (stderr && !stderr.includes('WARNING')) {
      console.error('yt-dlp error:', stderr);
      return NextResponse.json(
        { error: 'Failed to extract audio' },
        { status: 500 }
      );
    }

    // Read the generated file
    const audioBuffer = await readFile(outputPath);
    
    // Clean up the temporary file
    try {
      await unlink(outputPath);
    } catch (cleanupError) {
      console.error('Failed to cleanup temp file:', cleanupError);
    }

    // Get video info for filename
    const infoCommand = `yt-dlp --get title --get id "${url}"`;
    const { stdout: infoStdout } = await execAsync(infoCommand);
    const [title, videoId] = infoStdout.trim().split('\n');
    
    const safeTitle = title.replace(/[^a-zA-Z0-9\s-]/g, '').trim();
    const fileName = `${safeTitle || 'youtube-audio'}-${videoId}.${format}`;

    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': getContentType(format),
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': audioBuffer.length.toString(),
      },
    });

  } catch (error) {
    console.error('YouTube audio extraction error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function getContentType(format: string): string {
  const contentTypes = {
    'mp3': 'audio/mpeg',
    'wav': 'audio/wav',
    'm4a': 'audio/mp4',
    'ogg': 'audio/ogg'
  };
  return contentTypes[format as keyof typeof contentTypes] || 'audio/mpeg';
}

// Helper function to read file as buffer
async function readFile(filePath: string): Promise<Buffer> {
  const fs = require('fs');
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err: any, data: Buffer) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
} 