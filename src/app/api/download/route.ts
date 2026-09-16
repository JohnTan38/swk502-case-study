import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileParam = searchParams.get('file') || searchParams.get('name') || 'SWK502_Aisyah_Case_Study.pdf';
  const filename = decodeURIComponent(fileParam);

  if (!filename || filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
    return NextResponse.json({ error: 'Invalid filename requested' }, { status: 400 });
  }

  const publicFilesDir = path.join(process.cwd(), 'public', 'files');
  let targetPath = path.join(publicFilesDir, filename);

  if (!fs.existsSync(targetPath)) {
    const candidateNames = [
      filename,
      filename.replace(/_/g, ' '),
      filename.replace(/ /g, '_'),
      filename.replace(/-/g, '_'),
      filename.replace(/_/g, '-'),
      'SWK502_Aisyah_Case_Study.pdf',
      'genogram-aisyah-family.pdf'
    ];

    for (const cand of candidateNames) {
      const p = path.join(publicFilesDir, cand);
      if (fs.existsSync(p)) {
        targetPath = p;
        break;
      }
    }
  }

  if (!fs.existsSync(targetPath)) {
    return NextResponse.json({ error: `File "${filename}" not found onsite.` }, { status: 404 });
  }

  try {
    const fileBuffer = fs.readFileSync(targetPath);
    const resolvedBasename = path.basename(targetPath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${resolvedBasename}"`,
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=3600, must-revalidate',
      },
    });
  } catch (err) {
    console.error('Error serving PDF download:', err);
    return NextResponse.json({ error: 'Failed to read requested file.' }, { status: 500 });
  }
}
