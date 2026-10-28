"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCVStore } from "@/stores/cv-store";

export function Editor() {
  const {
    fullName,
    jobTitle,
    email,
    phone,
    location,

    experiences,

    setFullName,
    setJobTitle,
    setEmail,
    setPhone,
    setLocation,

    addExperience,
    updateExperience,
  } = useCVStore();

  return (
    <section className="p-8 overflow-auto">
      <h2 className="text-3xl font-bold mb-6">
        Editor
      </h2>

      <div className="space-y-4">
        <Input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
        />

        <Input
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Job Title"
        />

        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />

        <Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">
          Work Experience
        </h3>

        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="mb-4 space-y-2"
          >
            <Input
              placeholder="Company"
              value={experience.company}
              onChange={(e) =>
                updateExperience(
                  experience.id,
                  "company",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Position"
              value={experience.position}
              onChange={(e) =>
                updateExperience(
                  experience.id,
                  "position",
                  e.target.value
                )
              }
            />
          </div>
        ))}

        <Button onClick={addExperience}>
          Add Experience
        </Button>
      </div>
    </section>
  );
}