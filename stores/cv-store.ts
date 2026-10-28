import { create } from "zustand";

export interface Experience {
  id: string;
  company: string;
  position: string;
}

interface CVStore {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;

  experiences: Experience[];

  setFullName: (value: string) => void;
  setJobTitle: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
  setLocation: (value: string) => void;

  addExperience: () => void;
  updateExperience: (
    id: string,
    field: "company" | "position",
    value: string
  ) => void;
}

export const useCVStore = create<CVStore>((set) => ({
  fullName: "John Doe",
  jobTitle: "Frontend Developer",
  email: "john@example.com",
  phone: "+49 123 456 789",
  location: "Augsburg, Germany",

  experiences: [
    {
      id: crypto.randomUUID(),
      company: "Google",
      position: "Frontend Developer",
    },
  ],

  setFullName: (value) => set({ fullName: value }),
  setJobTitle: (value) => set({ jobTitle: value }),
  setEmail: (value) => set({ email: value }),
  setPhone: (value) => set({ phone: value }),
  setLocation: (value) => set({ location: value }),

  addExperience: () =>
    set((state) => ({
      experiences: [
        ...state.experiences,
        {
          id: crypto.randomUUID(),
          company: "",
          position: "",
        },
      ],
    })),

  updateExperience: (id, field, value) =>
    set((state) => ({
      experiences: state.experiences.map((exp) =>
        exp.id === id
          ? {
              ...exp,
              [field]: value,
            }
          : exp
      ),
    })),
}));