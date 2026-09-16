import { NextRequest, NextResponse } from "next/server";
import { CreateBookmark } from "@/lib/query-helper";
import { GetBookmarks } from "@/lib/query-helper";
import { DeleteBookmark } from "@/lib/query-helper";

export async function POST(request: NextRequest) {
    const { title, url } = await request.json();

    if (!title || !url) {
        return NextResponse.json({ error: "Title and URL are required" }, { status: 400 });
    }

    try {
        const response = await CreateBookmark(title, url);
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}

export async function GET() {
  try {
    const bookmarks = await GetBookmarks();
    return NextResponse.json(bookmarks.data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
    const { id } = await request.json();

    if (!id) {
        return NextResponse.json({ error: "Bookmark ID is required" }, { status: 400 });
    }

    try {
        const response = await DeleteBookmark(id);
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}