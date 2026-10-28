"use client";

import { ModernTemplate } from "@/components/templates/ModernTemplate";

export function Preview() {
  return (
    <section className="bg-slate-900 p-8 overflow-auto">
      <h2 className="text-3xl font-bold mb-6">
        Preview
      </h2>

      <div className="flex justify-center">
        <ModernTemplate />
      </div>
    </section>
  );
}