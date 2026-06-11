import { NextRequest, NextResponse } from 'next/server';
import { getAppsScriptUrl } from '@/lib/appsScriptConfig';

const ALLOWED_ACTIONS = new Set([
  'getServices',
  'getGallery',
  'getInstagramFeed',
  'submitContact',
]);

function errorResponse(message: string) {
  return NextResponse.json(
    { status: 'error', message },
    { status: 500 }
  );
}

async function proxyToAppsScript(url: string, options: RequestInit) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Apps Script error: ${response.status}`);
  }

  return response.json();
}

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

    const url = new URL(getAppsScriptUrl());
    url.searchParams.set('action', action);
    searchParams.forEach((value, key) => {
      if (key !== 'action') url.searchParams.set(key, value);
    });

    const data = await proxyToAppsScript(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    return NextResponse.json(data);
  } catch {
    return errorResponse('Error al conectar con el backend');
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

    const data = await proxyToAppsScript(getAppsScriptUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    return NextResponse.json(data);
  } catch {
    return errorResponse('Error al conectar con el backend');
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
