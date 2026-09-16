"use client";

import { FormEvent } from "react";
import axios from "axios";
import { useState } from "react";
import { mutate as globalMutate } from "swr";

export default function Input() {

    const [error, setError] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        const title = formData.get("title") as string;
        const url = formData.get("url") as string;

        const normalizedUrl =
            url.startsWith("http://") || url.startsWith("https://")
                ? url
                : `https://${url}`;

        try {
            await axios.post("/api/bookmarks", {
                title,
                url: normalizedUrl
            });

            form.reset();
            setError("");
            await globalMutate("/api/bookmarks")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(
                    error.response?.data?.error ||
                    error.response?.data?.message ||
                    "Something went wrong"
                );
            } else {
                setError("An unexpected error occurred");
            }
        }

    }


    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 p-4 w-full">
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
                    <input
                        type="text"
                        placeholder="title"
                        name="title"
                        className="outline-none bg-transparent border-2 border-red-500 text-base md:text-xl px-2 py-2 w-full md:w-1/3"
                    />
                    <input
                        type="text"
                        placeholder="url"
                        name="url"
                        className="outline-none bg-transparent border-2 border-red-500 text-base md:text-xl px-2 py-2 w-full md:flex-1"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 text-base md:text-lg text-white bg-blue-600 rounded-md hover:bg-blue-700 w-full md:w-auto"
                    >
                        Submit
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>
            </div>

        </>
    )
}