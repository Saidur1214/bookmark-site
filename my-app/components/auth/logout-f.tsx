"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button onClick={logout} className="rounded bg-black px-4 py-2 text-white">
      Sign out
    </button>
  );
}