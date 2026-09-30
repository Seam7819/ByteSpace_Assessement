import { ArrowRight, BarChart3, Star } from "lucide-react";
import { Brand } from "../../components/layout/Brand";
import { getPhotoUrl } from "../home/utils";

type AuthShowcaseProps = {
  mode: "login" | "signup";
};

export function AuthShowcase({ mode }: AuthShowcaseProps) {
  const isSignup = mode === "signup";

  return (
    <aside className="auth-showcase">
      <Brand inverse compact />
      <div className="auth-intro">
        <h2>{isSignup ? "Sign up and come in" : "Sign in with ease"}</h2>
        <p>
          {isSignup
            ? "The registration process is straightforward, uncomplicated, and efficient, allowing learners to join quickly and easily."
            : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
        </p>
      </div>

      <div
        className="auth-art"
        aria-label="Discover creative learning on ByteSpace"
      >
        <span className="auth-ring" aria-hidden="true" />
        <span className="auth-triangle" aria-hidden="true" />
        <span className="auth-squiggle" aria-hidden="true">
          〰
        </span>
        <article className="auth-course-card auth-course-card-back">
          <img
            src={getPhotoUrl("photo-1558655146-d09347e92766", 480)}
            alt="Creative interface design work"
          />
          <div className="auth-card-meta">
            <span>17 Lessons</span>
            <span>2 hours 16 mins</span>
            <span>59 Comments</span>
          </div>
          <h3>Build Digital Asset</h3>
          <p>by purepearl studio</p>
          <div className="auth-card-bottom">
            <span>
              <BarChart3 size={13} /> Beginner
            </span>
            <strong>
              $25<small>/lifetime</small>
            </strong>
          </div>
        </article>
        <article className="auth-course-card auth-course-card-front">
          <img
            src={getPhotoUrl("photo-1551288049-bebda4e38f71", 560)}
            alt="A data visualization dashboard"
          />
          <div className="auth-card-meta">
            <span>17 Lessons</span>
            <span>2 hours 16 mins</span>
            <span>59 Comments</span>
          </div>
          <div className="auth-card-title">
            <div>
              <h3>The Power of Big Data</h3>
              <p>by purepearl studio</p>
            </div>
            <span>
              4.5 <Star size={15} fill="currentColor" />
            </span>
          </div>
          <div className="auth-card-bottom">
            <span>
              <BarChart3 size={13} /> Beginner
            </span>
            <div className="auth-avatars">
              <img
                src={getPhotoUrl("photo-1534528741775-53994a69daeb", 60)}
                alt=""
              />
              <img
                src={getPhotoUrl("photo-1500648767791-00dcc994a43e", 60)}
                alt=""
              />
              <img
                src={getPhotoUrl("photo-1506794778202-cad84cf45f1d", 60)}
                alt=""
              />
              <span>26+</span>
            </div>
            <strong>
              $25<small>/lifetime</small>
            </strong>
          </div>
        </article>
        <div className="auth-students-card">
          <span>Happy Students</span>
          <strong>
            4.5 <Star size={12} fill="currentColor" />
          </strong>
          <div className="auth-avatars">
            <img
              src={getPhotoUrl("photo-1534528741775-53994a69daeb", 60)}
              alt=""
            />
            <img
              src={getPhotoUrl("photo-1500648767791-00dcc994a43e", 60)}
              alt=""
            />
            <img
              src={getPhotoUrl("photo-1506794778202-cad84cf45f1d", 60)}
              alt=""
            />
            <span>2K+</span>
          </div>
          <ArrowRight size={15} />
        </div>
      </div>
    </aside>
  );
}
