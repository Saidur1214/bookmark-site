export type Database = {
    public: {
        Tables: {
            bookmarks: {
                Row: {
                    id: string;
                    user_id: string | null;
                    title: string;
                    url: string;
                    created_at: string | null;
                };
                Insert: {
                    id?: string;
                    user_id?: string | null;
                    title: string;
                    url: string;
                    created_at?: string | null;
                };
                Update: {
                    id?: string;
                    user_id?: string | null;
                    title?: string;
                    url?: string;
                    created_at?: string | null;
                };
                Relationships: [];
            };
        };
    };
};