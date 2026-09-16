import { supabase } from "./supabaseClient";

export async function CreateBookmark(title: string, url: string) {
    const { error } = await supabase.from("bookmarks").insert({ title, url });

    if (error) {
        throw new Error(error.message);
    }
    return { message: "Bookmark submitted successfully!" };
}

export async function GetBookmarks() {
    const { data, error } = await supabase.from("bookmarks").select("*");

    if (error) {
        throw new Error(error.message);
    }
    return { message: "Bookmarks fetched successfully!", data };
}

export async function DeleteBookmark(id: string) {
    const { error } = await supabase.from("bookmarks").delete().eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    return { message: "Bookmark deleted successfully!" };
}