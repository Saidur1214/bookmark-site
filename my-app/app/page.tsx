import Input from "@/components/input-area/page";
import List from "@/components/list-area/page";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/server";
import LogoutButton from "@/components/auth/logout-f";


export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/login");
  }


  return (
    <>
      <header className="bg-red-100">
        <Input />
      </header>
        <main className="flex justify-center m-4">
          <List />
        </main>
      <footer className="flex justify-center m-4">
        <LogoutButton />
      </footer>
    </>
  );
}
