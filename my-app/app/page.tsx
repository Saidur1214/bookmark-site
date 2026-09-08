import Image from "next/image";
import Input from "@/components/input-area/page";
import List from "@/components/list-area/page";

export default function Home() {
  return (
    <>
      <header className="bg-red-100">
        <Input />
      </header>
        <main className="flex justify-center m-4">
          <List />
        </main>
      <footer>
        
      </footer>
    </>
  );
}
