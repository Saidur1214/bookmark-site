"use client";

import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import Link from "next/link";

type Bookmark = {
    id: number;
    title: string;
    url: string;
};

export default function List() {

    const { data: bookmarks, error, isLoading } = useSWR("/api/bookmarks", fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading bookmarks: {error.message}</div>;

    return (
        <>
            <div className="space-y-4">
                {bookmarks?.map((bookmark: Bookmark) => (
                    <div
    key={bookmark.id}
    className="mx-auto flex w-[95vw] flex-col gap-3 rounded bg-gray-400 p-4 md:w-[75vw] md:flex-row md:items-center md:gap-4"
>
    <Link
        href={bookmark.url ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full truncate whitespace-nowrap text-lg text-blue-700 hover:underline md:w-[25%] md:flex-none md:text-2xl"
    >
        {bookmark.title ?? "Untitled"}
    </Link>

    <Link
        href={bookmark.url ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full truncate whitespace-nowrap text-lg text-blue-700 hover:underline md:min-w-0 md:flex-1 md:text-2xl"
    >
        {bookmark.url ?? ""}
    </Link>

    <button className="w-full shrink-0 rounded bg-red-500 px-3 py-1 text-white md:w-auto">
        Delete
    </button>
</div>))}
            </div>
        </>
    )
}