import { ArrowRight } from "lucide-react";

export function ClosingBanner() {
  return (
    <section className="closing-banner grid-bg" id="join">
      <div className="closing-inner">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-line" /> YOUR NEXT CHAPTER
          </p>
          <h2>
            There's more
            <br />
            out there <em>for you.</em>
          </h2>
        </div>
        <a className="button button-lime" href="#courses">
          Find your first course <ArrowRight size={16} />
        </a>
        <span className="closing-doodle" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  );
}
