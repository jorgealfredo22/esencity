import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';

const ALLOWED_ACTIONS = new Set([
  'getServices',
  'getGallery',
  'getInstagramFeed',
  'submitContact',
]);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    if (!action || !ALLOWED_ACTIONS.has(action)) {
      return NextResponse.json(
        { status: 'error', message: 'Invalid action' },
        { status: 400 }
      );
    }

    if (!APPS_SCRIPT_URL) {
      console.error('[API Proxy] APPS_SCRIPT_URL is not configured');
      return NextResponse.json(
        { status: 'error', message: 'Backend URL not configured' },
        { status: 500 }
      );
    }

    const url = new URL(APPS_SCRIPT_URL);
    url.searchParams.set('action', action);
    searchParams.forEach((value, key) => {
      if (key !== 'action') url.searchParams.set(key, value);
    });

    console.log('[API Proxy] Fetching:', url.toString());

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      console.error('[API Proxy] Apps Script returned:', response.status, response.statusText);
      return NextResponse.json(
        { status: 'error', message: `Backend error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('[API Proxy] Unexpected error:', err);
    return NextResponse.json(
      { status: 'error', message: 'Error al conectar con el backend' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.action || !ALLOWED_ACTIONS.has(body.action)) {
      return NextResponse.json(
        { status: 'error', message: 'Invalid action' },
        { status: 400 }
      );
    }

    if (!APPS_SCRIPT_URL) {
      console.error('[API Proxy] APPS_SCRIPT_URL is not configured');
      return NextResponse.json(
        { status: 'error', message: 'Backend URL not configured' },
        { status: 500 }
      );
    }

    console.log('[API Proxy] POST to:', APPS_SCRIPT_URL);

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error('[API Proxy] Apps Script returned:', response.status, response.statusText);
      return NextResponse.json(
        { status: 'error', message: `Backend error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('[API Proxy] Unexpected error:', err);
    return NextResponse.json(
      { status: 'error', message: 'Error al conectar con el backend' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
