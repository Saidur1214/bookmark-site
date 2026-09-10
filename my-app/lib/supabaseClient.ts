import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../types/database.types";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

const globalForSupabase = globalThis as unknown as {
    supabase: SupabaseClient<Database> | undefined;
};

export const supabase =
  globalForSupabase.supabase ||
  createClient<Database>(supabaseUrl, supabaseKey);

if (!globalForSupabase.supabase) {
  globalForSupabase.supabase = supabase;
}
