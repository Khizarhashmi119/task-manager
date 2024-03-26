import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    console.log({ request });

    return NextResponse.json({
      message: `URL: ${request.url} -- Method: ${request.method}`,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log({ request });

    return NextResponse.json({
      message: `URL: ${request.url} -- Method: ${request.method}`,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    console.log({ request });

    return NextResponse.json({
      message: `URL: ${request.url} -- Method: ${request.method}`,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    console.log({ request });

    return NextResponse.json({
      message: `URL: ${request.url} -- Method: ${request.method}`,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
