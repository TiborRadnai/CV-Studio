"use client";

import { useCVStore } from "@/stores/cv-store";

export function ModernTemplate() {
  const {
    fullName,
    jobTitle,
    email,
    phone,
    location,
    experiences,
  } = useCVStore();

  return (
    <div className="w-[794px] min-h-[1123px] bg-white text-slate-900 p-12 rounded-lg shadow-2xl">
      {/* Header */}

      <header className="border-b pb-8">
        <h1 className="text-5xl font-bold tracking-tight">
          {fullName}
        </h1>

        <p className="mt-2 text-xl text-slate-600">
          {jobTitle}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
          <span>{email}</span>
          <span>{phone}</span>
          <span>{location}</span>
        </div>
      </header>

      {/* Experience */}

      <section className="mt-10">
        <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          Work Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="border-l-2 border-slate-200 pl-4"
            >
              <h3 className="text-lg font-semibold">
                {experience.position || "Position"}
              </h3>

              <p className="text-slate-600">
                {experience.company || "Company"}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}