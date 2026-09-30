import {
  BarChart3,
  BriefcaseBusiness,
  Camera,
  Code2,
  Monitor,
  Palette,
} from "lucide-react";
import type { Course, LearningPath, Testimonial } from "./types";

export const courseCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export const courses: Course[] = [
  {
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    image: "photo-1586717791821-3f44a563fa4c",
    lessons: 17,
    level: "Beginner",
    students: "2.4k",
  },
  {
    title: "Build Digital Asset",
    category: "Drawing & Painting",
    image: "photo-1558655146-d09347e92766",
    lessons: 24,
    level: "Beginner",
    students: "1.8k",
  },
  {
    title: "The Power of Big Data",
    category: "Marketing",
    image: "photo-1551288049-bebda4e38f71",
    lessons: 19,
    level: "Intermediate",
    students: "3.1k",
  },
  {
    title: "Balancing Productivity and Focus",
    category: "Business",
    image: "photo-1497366754035-f200968a6e72",
    lessons: 12,
    level: "Beginner",
    students: "980",
  },
  {
    title: "Mastering Money Management",
    category: "Business",
    image: "photo-1554224155-6726b3ff858f",
    lessons: 21,
    level: "Intermediate",
    students: "1.2k",
  },
  {
    title: "From Idea to Startup Success",
    category: "Marketing",
    image: "photo-1552664730-d307ca884978",
    lessons: 16,
    level: "Beginner",
    students: "2.1k",
  },
];

export const learningPaths: LearningPath[] = [
  { title: "Design", Icon: Palette, note: "Find your visual voice" },
  { title: "Development", Icon: Code2, note: "Build what is next" },
  { title: "IT & Software", Icon: Monitor, note: "Make tech your craft" },
  {
    title: "Business",
    Icon: BriefcaseBusiness,
    note: "Turn ideas into impact",
  },
  { title: "Marketing", Icon: BarChart3, note: "Tell better stories" },
  { title: "Photography", Icon: Camera, note: "See things differently" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic learner",
    image: "photo-1534528741775-53994a69daeb",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and quality of content provided by creators have exceeded my expectations.",
  },
  {
    name: "James L.",
    role: "Lifelong learner",
    image: "photo-1500648767791-00dcc994a43e",
    quote:
      "The platform makes it easy to discover thoughtful courses from people who really know their craft. I always leave with something I can use.",
  },
  {
    name: "Alex B.",
    role: "Inspired creator",
    image: "photo-1506794778202-cad84cf45f1d",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The tools are intuitive, and the community makes sharing what I love feel rewarding.",
  },
];
