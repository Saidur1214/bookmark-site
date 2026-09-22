import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";


export async function CreateBookmark(title: string, url: string) {

    const supabase = await createClient();

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
        redirect("/login");
    }

    const { error } = await supabase.from("bookmarks").insert({
        title,
        url,
        user_id: user.id,
    });

    if (error) {
        throw new Error(error.message);
    }

    return { message: "Bookmark submitted successfully!" };
}

export async function GetBookmarks() {

    const supabase = await createClient();

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
        throw new Error("You must be signed in.");
    }

    const { data, error } = await supabase
        .from("bookmarks")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

    if (error) {
        console.log("error is here", error);
        throw new Error(error.message);
    }

    return { message: "Bookmarks fetched successfully!", data };
}

export async function DeleteBookmark(id: string) {
    const supabase = await createClient();

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
        throw new Error("You must be signed in.");
    }

    const { error } = await supabase
        .from("bookmarks")
        .delete()
        .eq("id", id)
        .eq("user_id", user.id);

    if (error) {
        throw new Error(error.message);
    }

    return { message: "Bookmark deleted successfully!" };
}