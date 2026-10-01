import { ArrowDownRight, ArrowRight, Search } from "lucide-react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router";
import { getPhotoUrl } from "../utils";

type HeroSectionProps = {
  query: string;
  onQueryChange: (query: string) => void;
};

export function HeroSection({ query, onQueryChange }: HeroSectionProps) {
  const navigate = useNavigate();

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const search = new URLSearchParams();
    if (query.trim()) search.set("q", query.trim());
    navigate(`/search${search.size ? `?${search}` : ""}`);
  }

  return (
    <section className="hero-section grid-bg">
      <div className="hero-glow" />
      <span className="hero-shape hero-shape-one" aria-hidden="true">
        〰
      </span>
      <span className="hero-shape hero-shape-two" aria-hidden="true">
        ✳
      </span>
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-line" /> A LITTLE SPACE TO GROW
        </p>
        <h1>
          Get curious.
          <br />
          <span>Go somewhere.</span>
        </h1>
        <p className="hero-description">
          Learn from people who love what they do. Find your next big idea in a
          small, beautifully made course.
        </p>
        <form className="hero-search" onSubmit={submitSearch}>
          <Search size={18} />
          <label className="sr-only" htmlFor="course-search">
            Search courses
          </label>
          <input
            id="course-search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="What would you love to learn?"
          />
          <button type="submit" aria-label="Search courses">
            <ArrowRight size={18} />
          </button>
        </form>
        <div className="hero-footnote">
          <span>
            <span className="footnote-dot" /> 12,000+ curious minds
          </span>
          <span>
            Good things start here <ArrowDownRight size={15} />
          </span>
        </div>
      </div>
      <div className="hero-art">
        <div className="hero-photo-frame">
          <img
            src={getPhotoUrl("photo-1522202176988-66273c2fd55f", 1200)}
            alt="A small group learning and sharing ideas together"
          />
          <div className="photo-label">
            <span className="photo-label-dot" /> LEARN TOGETHER
          </div>
        </div>
        <div className="hero-card hero-card-top">
          <span className="card-kicker">THE GOOD STUFF</span>
          <strong>
            Little lessons.
            <br />
            Big lightbulbs.
          </strong>
          <span>Made by people, for people.</span>
        </div>
        <div className="hero-card hero-card-bottom">
          <div className="student-faces">
            <img
              src={getPhotoUrl("photo-1534528741775-53994a69daeb", 80)}
              alt=""
            />
            <img
              src={getPhotoUrl("photo-1500648767791-00dcc994a43e", 80)}
              alt=""
            />
            <img
              src={getPhotoUrl("photo-1506794778202-cad84cf45f1d", 80)}
              alt=""
            />
          </div>
          <span>
            <strong>12k+</strong>
            <small>learners finding their thing</small>
          </span>
          <ArrowRight size={17} />
        </div>
        <div className="hero-side-note">
          A WORLD OF
          <br />
          WHAT'S NEXT <ArrowDownRight size={15} />
        </div>
      </div>
      <div className="hero-index">
        <span>01 / 06</span>
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
