import { Sidebar } from "@/components/layout/Sidebar";
import { Editor } from "@/components/layout/Editor";
import { Preview } from "@/components/layout/Preview";

export default function Home() {
  return (
    <main className="h-screen bg-slate-950 text-white overflow-hidden">
      <div className="grid h-full grid-cols-[280px_1fr_500px]">
        <Sidebar />
        <Editor />
        <Preview />
      </div>
    </main>
  );
}