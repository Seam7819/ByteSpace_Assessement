import {
  ArrowDownWideNarrow,
  BarChart3,
  Filter,
  Shapes,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Navigate, useParams } from "react-router";
import { CourseGrid } from "../../components/course/CourseGrid";
import { SiteFooter } from "../../components/layout/SiteFooter";
import { SiteHeader } from "../../components/layout/SiteHeader";
import { courses } from "./data";

const creator = {
  slug: "purepearl-studio",
  name: "PurePearl Studio",
  tagline: "Passionate UI/UX, Web designer",
  image: "photo-1500648767791-00dcc994a43e",
  description:
    "Welcome to my creative world. I share practical ideas, thoughtful design processes, and the inspiration behind my work. Explore my courses and build skills you can put to use in your next project.",
};

export function CreatorProfilePage() {
  const { slug } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedLength, setSelectedLength] = useState("Any length");
  const [selectedLevel, setSelectedLevel] = useState("All levels");
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [sortOrder, setSortOrder] = useState("relevant");

  if (slug !== creator.slug) {
    return <Navigate to="/" replace />;
  }

  const levels = [...new Set(courses.map((course) => course.level))];
  const categories = [...new Set(courses.map((course) => course.category))];
  const visibleCourses = courses
    .filter((course) => {
      if (selectedLength === "20+ lessons") return course.lessons >= 20;
      if (selectedLength === "Under 20 lessons") return course.lessons < 20;
      return true;
    })
    .filter((course) => selectedLevel === "All levels" || course.level === selectedLevel)
    .filter(
      (course) =>
        selectedCategory === "All categories" || course.category === selectedCategory,
    )
    .sort((first, second) => {
      if (sortOrder === "title-asc") return first.title.localeCompare(second.title);
      if (sortOrder === "title-desc") return second.title.localeCompare(first.title);
      return 0;
    });

  return (
    <>
      <SiteHeader />
      <main className="creator-profile-page">
        <section className="creator-profile-hero grid-bg">
          <div className="page-wrap creator-profile-wrap">
            <div className="creator-profile-heading">
              <img
                className="creator-profile-avatar"
                src={`https://images.unsplash.com/${creator.image}?auto=format&fit=crop&w=240&q=85`}
                alt={`${creator.name} profile`}
              />
              <div className="creator-profile-identity">
                <div className="creator-profile-title-row">
                  <h1>{creator.name}</h1>
                  <span className="creator-role-chip">Creator</span>
                </div>
                <p>{creator.tagline}</p>
              </div>
            </div>

            <p className="creator-profile-description">{creator.description}</p>

            <div className="creator-profile-bottom">
              <div className="creator-profile-stats" aria-label="Creator statistics">
                <span>
                  <strong>{courses.length}</strong> Products
                </span>
                <span>
                  <strong>{isFollowing ? 13 : 12}</strong> Followers
                </span>
              </div>
              <button
                className={`creator-follow-button${isFollowing ? " is-following" : ""}`}
                type="button"
                aria-pressed={isFollowing}
                onClick={() => setIsFollowing((following) => !following)}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        </section>

        <section className="creator-products-section">
          <div className="page-wrap">
            <div className="creator-products-toolbar" aria-label="Filter and sort courses">
              <div className="creator-filter-controls">
                <label className="creator-select-control">
                  <Filter size={14} aria-hidden="true" />
                  <span>Filter</span>
                  <select
                    aria-label="Filter by lesson count"
                    value={selectedLength}
                    onChange={(event) => setSelectedLength(event.target.value)}
                  >
                    <option>Any length</option>
                    <option>20+ lessons</option>
                    <option>Under 20 lessons</option>
                  </select>
                </label>
                <label className="creator-select-control">
                  <BarChart3 size={14} aria-hidden="true" />
                  <span>Level</span>
                  <select
                    aria-label="Filter by level"
                    value={selectedLevel}
                    onChange={(event) => setSelectedLevel(event.target.value)}
                  >
                    <option>All levels</option>
                    {levels.map((level) => (
                      <option key={level}>{level}</option>
                    ))}
                  </select>
                </label>
                <label className="creator-select-control">
                  <Shapes size={14} aria-hidden="true" />
                  <span>Category</span>
                  <select
                    aria-label="Filter by category"
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                  >
                    <option>All categories</option>
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="creator-sort-control">
                <ArrowDownWideNarrow size={14} aria-hidden="true" />
                <span>
                  {sortOrder === "title-asc"
                    ? "Title A-Z"
                    : sortOrder === "title-desc"
                      ? "Title Z-A"
                      : "Most relevant"}
                </span>
                <select
                  aria-label="Sort courses"
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value)}
                >
                  <option value="relevant">Most relevant</option>
                  <option value="title-asc">Title A-Z</option>
                  <option value="title-desc">Title Z-A</option>
                </select>
              </label>
            </div>

            {visibleCourses.length > 0 ? (
              <CourseGrid items={visibleCourses} />
            ) : (
              <div className="creator-empty-state">
                <Users size={24} aria-hidden="true" />
                <p>No courses match these filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLength("Any length");
                    setSelectedCategory("All categories");
                    setSelectedLevel("All levels");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}