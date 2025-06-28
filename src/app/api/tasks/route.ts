import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prisma from "@/utils/db";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { userId } = auth();

    const tasks = prisma.task.findMany({
      select: {
        userId: false,
      },
      where: {
        userId: userId!,
      },
    });

    return NextResponse.json({
      data: tasks,
      status: "success",
    });
  } catch (error) {
    return NextResponse.json(
      { message: String(error), status: "failure" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();

    const { title, description, isCompleted, isImportant, date } =
      await request.json();

    if (!title) {
      return NextResponse.json(
        { message: "title is required.", status: "failure" },
        { status: 400 }
      );
    }

    if (!description) {
      return NextResponse.json(
        { message: "description is required.", status: "failure" },
        { status: 400 }
      );
    }

    if (isCompleted === null || isCompleted === undefined) {
      return NextResponse.json(
        { message: "isCompleted is required.", status: "failure" },
        { status: 400 }
      );
    }

    if (isImportant === null || isImportant === undefined) {
      return NextResponse.json(
        { message: "isImportant is required.", status: "failure" },
        { status: 400 }
      );
    }

    if (!date) {
      return NextResponse.json(
        { message: "date is required.", status: "success" },
        { status: 400 }
      );
    }

    const task = await prisma.task.create({
      select: {
        userId: false,
      },
      data: {
        date,
        description,
        title,
        userId: userId!,
        isCompleted,
        isImportant,
      },
    });

    return NextResponse.json(
      {
        data: task,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: String(error), status: "failure" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    return NextResponse.json({
      message: `URL: ${request.url} -- Method: ${request.method}`,
    });
  } catch (error) {
    return NextResponse.json(
      { message: String(error), status: "failure" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    return NextResponse.json({
      message: `URL: ${request.url} -- Method: ${request.method}`,
    });
  } catch (error) {
    return NextResponse.json(
      { message: String(error), status: "failure" },
      { status: 500 }
    );
  }
}
