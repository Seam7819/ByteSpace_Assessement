import type { Course } from "../../features/home/types";
import { CourseCard } from "./CourseCard";

export function CourseGrid({ items }: { items: Course[] }) {
  return (
    <div className="course-grid">
      {items.map((course) => (
        <CourseCard key={course.title} course={course} />
      ))}
    </div>
  );
}
