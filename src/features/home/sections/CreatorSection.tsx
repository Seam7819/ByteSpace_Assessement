import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
import { getPhotoUrl } from "../utils";

export function CreatorSection() {
  return (
    <section className="creator-section" id="creators">
      <div className="creator-text">
        <p className="eyebrow">
          <span className="eyebrow-line" /> FOR THE MAKERS
        </p>
        <h2>
          Make a living
          <br />
          sharing what
          <br />
          <em>you love.</em>
        </h2>
        <p>
          Your hard-won knowledge can be someone else's turning point. Create a
          course, meet your people, and make something good together.
        </p>
        <a className="button button-lime" href="#join">
          Come teach with us <ArrowRight size={16} />
        </a>
        <div className="creator-proof">
          <div className="mini-avatar-row">
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
            <strong>70+ kind teachers</strong>
            <small>doing their thing on ByteSpace</small>
          </span>
        </div>
      </div>
      <div className="creator-image">
        <img
          src={getPhotoUrl("photo-1521737711867-e3b97375f902", 1000)}
          alt="Creative people collaborating around a table"
        />
        <div className="creator-note">
          <span>
            GOOD IDEAS
            <br />
            GROW HERE
          </span>
          <Sparkles size={20} />
        </div>
        <span className="creator-image-caption">
          MADE BY PEOPLE WHO CARE. &nbsp; <ArrowDownRight size={14} />
        </span>
      </div>
    </section>
  );
}
