import { ArrowRight } from "lucide-react";
import { learningPaths } from "../data";

type LearningPathsProps = {
  onSelectCategory: (category: string) => void;
};

export function LearningPaths({ onSelectCategory }: LearningPathsProps) {
  return (
    <section className="paths-section" id="paths">
      <div className="page-wrap">
        <div className="section-heading paths-heading">
          <div>
            <p className="eyebrow eyebrow-dark">
              <span className="eyebrow-line" /> PICK A DIRECTION
            </p>
            <h2>
              Where will your
              <br />
              <em>curiosity take you?</em>
            </h2>
          </div>
          <p className="section-intro">
            No map required. Just pick a thing you love, and see where it leads.
          </p>
        </div>
        <div className="paths-grid">
          {learningPaths.map(({ title, Icon, note }, index) => (
            <button
              key={title}
              className={`path-item path-${index + 1}`}
              onClick={() =>
                onSelectCategory(title === "Design" ? "UI/UX Design" : title)
              }
            >
              <span className="path-number">0{index + 1}</span>
              <span className="path-icon">
                <Icon size={22} />
              </span>
              <span className="path-name">{title}</span>
              <span className="path-note">{note}</span>
              <ArrowRight className="path-arrow" size={18} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
