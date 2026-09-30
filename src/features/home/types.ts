import type { LucideIcon } from "lucide-react";

export type Course = {
  title: string;
  category: string;
  image: string;
  lessons: number;
  level: string;
  students: string;
};

export type LearningPath = {
  title: string;
  Icon: LucideIcon;
  note: string;
};

export type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};
