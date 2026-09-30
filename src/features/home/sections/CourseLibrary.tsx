import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { CourseGrid } from "../../../components/course/CourseGrid";
import type { Course } from "../types";

type CourseLibraryProps = {
  activeCategory: string;
  categories: string[];
  courses: Course[];
  onCategoryChange: (category: string) => void;
  onReset: () => void;
};

export function CourseLibrary({
  activeCategory,
  categories,
  courses,
  onCategoryChange,
  onReset,
}: CourseLibraryProps) {
  return (
    <section className="courses-section page-wrap" id="courses">
      <div className="section-heading">
        <div>
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-line" /> THE COURSE LIBRARY
          </p>
          <h2>
            Find your next
            <br />
            <em>“oh, I get it.”</em>
          </h2>
        </div>
        <p className="section-intro">
          A good class can change the way you see things. Start with something
          that sparks a little curiosity.
        </p>
      </div>
      <div className="course-toolbar">
        <div className="category-list" aria-label="Filter courses by category">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-chip${activeCategory === category ? " is-active" : ""}`}
              aria-pressed={activeCategory === category}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <button
          className="sort-button"
          onClick={() => onCategoryChange("Featured")}
        >
          Most loved <ChevronDown size={14} />
        </button>
      </div>
      {courses.length ? (
        <CourseGrid items={courses} />
      ) : (
        <div className="empty-state">
          <Search size={24} />
          <h3>No courses found just yet.</h3>
          <p>Try another search or explore all our featured courses.</p>
          <button className="button button-dark" onClick={onReset}>
            Show featured courses <ArrowRight size={15} />
          </button>
        </div>
      )}
      <a className="text-link browse-link" href="#paths">
        Wander through every course <ArrowRight size={16} />
      </a>
    </section>
  );
}
