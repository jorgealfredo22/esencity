import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileId = searchParams.get('id');
  const size = searchParams.get('sz') || 'w800';

  if (!fileId) {
    return new NextResponse('Missing file id', { status: 400 });
  }

  try {
    const url = `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=${encodeURIComponent(size)}`;
    const response = await fetch(url, { redirect: 'follow' });

    if (!response.ok) {
      return new NextResponse('Image not found', { status: 404 });
    }

    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=10, must-revalidate',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch {
    return new NextResponse('Error fetching image', { status: 500 });
  }
}
