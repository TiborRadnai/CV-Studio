import { Card } from "@/components/ui/card";

export function Sidebar() {
  return (
    <aside className="border-r border-slate-800 bg-slate-900 p-6">
      <h1 className="text-2xl font-bold mb-8">
        CV Studio
      </h1>

      <nav className="space-y-2">
        <Card className="p-3 cursor-pointer">
          Personal Info
        </Card>

        <Card className="p-3 cursor-pointer">
          Experience
        </Card>

        <Card className="p-3 cursor-pointer">
          Education
        </Card>

        <Card className="p-3 cursor-pointer">
          Skills
        </Card>
      </nav>
    </aside>
  );
}