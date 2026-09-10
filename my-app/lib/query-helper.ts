import { supabase } from "./supabaseClient";

export async function fetchData(formData: FormData) {
    const title = formData.get("title") as string;
    const url = formData.get("url") as string;

    if (!title || !url) {
        throw new Error("Title and URL are required");
    }

    const { error } = await supabase
        .from("bookmarks")
        .insert({ title, url });

    if (error) {
        throw new Error(error.message);
    }
}