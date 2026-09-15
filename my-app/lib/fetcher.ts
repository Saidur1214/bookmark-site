export const fetcher = (url: string) =>
    fetch(url).then(async (response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch bookmarks");
        }

        return response.json();
    });