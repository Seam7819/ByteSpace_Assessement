import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "react-router";
import { CourseGrid } from "../../components/course/CourseGrid";
import { courses } from "../home/data";
import "./search.css";

const topics = ["All topics", ...new Set(courses.map((course) => course.category))];

function learnerCount(value: string) {
  const count = Number.parseFloat(value);
  return value.toLowerCase().includes("k") ? count * 1000 : count;
}

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [topic, setTopic] = useState("All topics");
  const [level, setLevel] = useState("All levels");
  const [sort, setSort] = useState("Featured");
  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    const matchingCourses = courses.filter((course) => {
      const matchesQuery =
        !normalizedQuery ||
        `${course.title} ${course.category} ${course.level}`
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesTopic = topic === "All topics" || course.category === topic;
      const matchesLevel = level === "All levels" || course.level === level;
      return matchesQuery && matchesTopic && matchesLevel;
    });

    if (sort === "Most popular") {
      return matchingCourses.toSorted(
        (first, second) => learnerCount(second.students) - learnerCount(first.students),
      );
    }
    if (sort === "A to Z") {
      return matchingCourses.toSorted((first, second) =>
        first.title.localeCompare(second.title),
      );
    }
    return matchingCourses;
  }, [level, normalizedQuery, sort, topic]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextParams = new URLSearchParams(searchParams);
    if (query.trim()) nextParams.set("q", query.trim());
    else nextParams.delete("q");
    setSearchParams(nextParams, { replace: true });
  }

  function clearFilters() {
    setQuery("");
    setTopic("All topics");
    setLevel("All levels");
    setSort("Featured");
    setSearchParams({}, { replace: true });
  }

  const hasFilters = Boolean(normalizedQuery) || topic !== "All topics" || level !== "All levels";

  return (
    <main className="search-page">
      <section className="search-intro">
        <div className="page-wrap search-intro-inner">
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-line" /> THE COURSE LIBRARY
          </p>
          <h1>
            {normalizedQuery ? (
              <>Results for <em>“{query.trim()}”</em></>
            ) : (
              <>Find a subject worth <em>getting into.</em></>
            )}
          </h1>
          <p className="search-intro-copy">
            Follow a question, pick up a new skill, or see where a little curiosity leads.
          </p>
          <form className="search-page-form" onSubmit={submitSearch} role="search">
            <Search size={19} aria-hidden="true" />
            <label className="sr-only" htmlFor="catalog-search">
              Search courses and topics
            </label>
            <input
              id="catalog-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try design, marketing, or a new skill"
            />
            {query && (
              <button
                className="search-clear-button"
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
              >
                <X size={17} />
              </button>
            )}
            <button className="search-submit-button" type="submit" aria-label="Search courses">
              <ArrowRight size={19} />
            </button>
          </form>
        </div>
      </section>

      <section className="search-results page-wrap" aria-live="polite">
        <div className="search-toolbar">
          <div className="search-topic-list" aria-label="Filter by topic">
            {topics.map((item) => (
              <button
                key={item}
                className={`category-chip${topic === item ? " is-active" : ""}`}
                aria-pressed={topic === item}
                onClick={() => setTopic(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="search-selects">
            <label className="search-select-control">
              <SlidersHorizontal size={14} aria-hidden="true" />
              <span className="sr-only">Filter by level</span>
              <select value={level} onChange={(event) => setLevel(event.target.value)}>
                <option>All levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </label>
            <label className="search-select-control">
              <span className="sr-only">Sort courses</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option>Featured</option>
                <option>Most popular</option>
                <option>A to Z</option>
              </select>
            </label>
          </div>
        </div>

        <div className="search-result-heading">
          <p>
            <strong>{results.length}</strong> {results.length === 1 ? "course" : "courses"}
            {hasFilters ? " found" : " to explore"}
          </p>
          {hasFilters && (
            <button className="search-reset-button" onClick={clearFilters}>
              Clear filters <X size={14} />
            </button>
          )}
        </div>

        {results.length ? (
          <CourseGrid items={results} />
        ) : (
          <div className="search-empty-state">
            <span className="search-empty-icon"><Search size={22} /></span>
            <h2>No courses match that search.</h2>
            <p>Try a broader keyword or clear a filter to see more of the library.</p>
            <button className="search-empty-reset" onClick={clearFilters}>
              Clear filters <ArrowRight size={15} />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}