import { useState } from "react";
import { courses, courseCategories } from "./data";
import { ClosingBanner } from "./sections/ClosingBanner";
import { CommunityStrip } from "./sections/CommunityStrip";
import { CourseLibrary } from "./sections/CourseLibrary";
import { CreatorSection } from "./sections/CreatorSection";
import { HeroSection } from "./sections/HeroSection";
import { LearningPaths } from "./sections/LearningPaths";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import "../../styles/site.css";

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [query, setQuery] = useState("");
  const matchingCourses = courses.filter(
    (course) =>
      (activeCategory === "Featured" || course.category === activeCategory) &&
      `${course.title} ${course.category}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );

  function selectLearningPath(category: string) {
    setActiveCategory(category);
    document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
  }

  function resetCourseFilters() {
    setQuery("");
    setActiveCategory("Featured");
  }

  return (
    <main>
      <HeroSection query={query} onQueryChange={setQuery} />
      <CommunityStrip />
      <CourseLibrary
        activeCategory={activeCategory}
        categories={courseCategories}
        courses={matchingCourses}
        onCategoryChange={setActiveCategory}
        onReset={resetCourseFilters}
      />
      <LearningPaths onSelectCategory={selectLearningPath} />
      <CreatorSection />
      <TestimonialsSection />
      <ClosingBanner />
    </main>
  );
}
