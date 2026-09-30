import {
  ArrowLeft,
  BarChart3,
  Clock3,
  Play,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import { SiteFooter } from "../../components/layout/SiteFooter";
import { SiteHeader } from "../../components/layout/SiteHeader";
import { courses } from "./data";
import { getPhotoUrl } from "./utils";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const tabs = ["About", "Lessons", "Reviews"] as const;
type TabName = (typeof tabs)[number];

export function CourseDetailPage() {
  const { slug } = useParams();
  const course = courses.find((item) => toSlug(item.title) === slug);
  const [activeTab, setActiveTab] = useState<TabName>("About");

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const aboutContent = (
    <>
      <div className="detail-section">
        <h3>Description</h3>
        <p className="subtle-copy">
          Embrace an enlightening exploration into the world of digital creation with our
          comprehensive course, “Build Digital Asset: A Comprehensive Guide.” This
          transformative learning experience invites you to delve deep into the intricacies
          of crafting impactful digital content. From learning the groundwork with
          foundational concepts to mastering advanced techniques, this guide is meticulously
          curated to empower you with the skills essential for navigating the dynamic landscape
          of digital asset creation.
        </p>

        <p className="subtle-copy">
          In the initial modules, you’ll establish a solid foundation by immersing yourself in
          the foundational concepts that form the backbone of digital asset creation.
          Understand the fundamentals that drive successful digital storytelling, from the
          principles behind color and composition to the techniques that bring visuals to life.
        </p>

        <p className="subtle-copy">
          As you progress through the course, you’ll discover how to blend creativity with
          strategy, allowing your designs to resonate with clarity and purpose. Explore essential
          processes, refine your approach to visual communication, and gain confidence in using
          each tool and design technique effectively.
        </p>
      </div>

      <div className="detail-section">
        <h3>Speak Peak</h3>
        <div className="speak-peak-grid">
          {[
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1522204523234-8729aa6e3?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
          ].map((image, index) => (
            <div className="peak-thumb" key={`${image}-${index}`}>
              <img src={image} alt="Course highlight" />
            </div>
          ))}
        </div>
      </div>

      <div className="detail-section">
        <h3>Key Points</h3>
        <ul className="key-points">
          {[
            "Foundational Concepts",
            "Design Principles Mastery",
            "Advanced Techniques in Digital Creation",
            "Project Showcase and Critique",
            "Optimizing for Various Platforms",
            "Digital Asset Management Best Practices",
            "Monetization Strategies",
            "Capture Project. Building Your Portfolio",
          ].map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );

  const lessonContent = (
    <div className="detail-section lesson-tab-panel">
      <h3>Explore the Modules</h3>
      <p className="subtle-copy">
        Immerse yourself in the course content as we break down each module into
        comprehensive lessons, providing practical insights and hands-on experiences.
      </p>

      <div className="module-list">
        {[
          [
            "Module 1: Introduction to Digital Assets",
            "Learn the groundwork with lessons on ‘Understanding Digital Elements’ and ‘Navigating Safe Tools.’ Dive into the essentials of digital asset creation.",
          ],
          [
            "Module 2: Design Principles for Impact",
            "Master the principles that drive impactful design with lessons on ‘Color Theory in Digital Design’ and ‘Typography Essentials.’",
          ],
          [
            "Module 3: User-Centric Design Strategies",
            "Understand design thinking in digital creation and elevate your user experience expertise.",
          ],
          [
            "Module 4: Interactive Media and Engagement",
            "Engage your audience with lessons on ‘Creating Interactive Presentations’ and ‘Integrating Multimedia Elements.’",
          ],
          [
            "Module 5: Project Showcase and Critique",
            "Perfect your presentation skills with ‘Effective Presentation Techniques’ and ‘Enhance Collaboration with Peers.’",
          ],
          [
            "Module 6: Optimizing Digital Assets for Various Platforms",
            "Adopt your digital creativity to explore platform-specific design, optimize visuals, and create cross-platform consistency.",
          ],
        ].map(([module, description], index) => (
          <div className="module-item" key={module}>
            <div className="module-icon">{index + 1}</div>
            <div className="module-copy">
              <strong>{module}</strong>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="detail-section nested-block">
        <h3>Lesson Content</h3>
        <p className="subtle-copy">
          Engage with each lesson through captivating video content, detailed visual
          explanations, and interactive elements to deepen your understanding with clarity.
        </p>
      </div>

      <div className="detail-section nested-block">
        <h3>Lesson Progress Tracking</h3>
        <p className="subtle-copy">
          Witness your growth as you complete lessons, with an intuitive progress metric
          that keeps you motivated and informed throughout the course.
        </p>
        <div className="progress-shell">
          <span className="progress-label">Learning Progress</span>
          <div className="progress-track">
            <span className="progress-fill">55%</span>
          </div>
        </div>
      </div>
    </div>
  );

  const reviewContent = (
    <div className="review-tab-panel">
      <h3>What Learners Are Saying</h3>
      <p className="subtle-copy">
        Discover what our learners have to say about their experience with “Build Digital
        Asset: A Comprehensive Guide.” Read reviews and insights from individuals who have
        transformed their journey of mastering digital asset creation.
      </p>

      <div className="review-summary">
        <div className="rating-badge">4.7</div>
        <div className="rating-bars" aria-label="Review distribution">
          {[
            ["5 stars", 720],
            ["4 stars", 120],
            ["3 stars", 21],
            ["2 stars", 12],
            ["1 star", 6],
          ].map(([label, value]) => {
            const ratingValue = Number(value);

            return (
              <div className="rating-row" key={label}>
                <span>{label}</span>
                <div className="rating-track">
                  <span style={{ width: `${(ratingValue / 8).toFixed(2)}%` }} />
                </div>
                <strong>{ratingValue}</strong>
              </div>
            );
          })}
        </div>
      </div>

      <div className="review-filter-row">
        <button type="button" className="filter-chip active">
          All rating
        </button>
        <button type="button" className="filter-chip">
          5 ★
        </button>
        <button type="button" className="filter-chip">
          4 ★
        </button>
        <button type="button" className="filter-chip">
          3 ★
        </button>
        <button type="button" className="filter-chip">
          2 ★
        </button>
        <button type="button" className="filter-chip">
          1 ★
        </button>
      </div>

      <div className="review-list">
        {[
          [
            "PurePearl Studio",
            "UX/UI Designer",
            "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immensely applicable to my work. Highly recommended!",
            "5",
          ],
          [
            "Albert Flores",
            "UX/UI Designer",
            "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world application made it a truly invaluable experience. Excited to implement what I’ve learned!",
            "5",
          ],
          [
            "Cody Fisher",
            "UX/UI Designer",
            "The project showcase and critique module gave me the confidence to present my work professionally. I left with clearer creative direction and a stronger portfolio.",
            "5",
          ],
          [
            "Brooklyn Simmons",
            "UX/UI Designer",
            "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
            "5",
          ],
        ].map(([name, role, quote, stars]) => (
          <article className="review-item" key={name}>
            <div className="review-meta">
              <div className="review-avatar" aria-hidden="true" />
              <div>
                <strong>{name}</strong>
                <small>{role}</small>
              </div>
              <span className="review-age">a year ago</span>
            </div>

            <div className="review-stars" aria-label={`${stars} star review`}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={`${name}-${idx}`}>★</span>
              ))}
            </div>

            <p>{quote}</p>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <SiteHeader />
      <main className="course-detail-page">
        <section className="detail-hero">
          <div className="page-wrap detail-shell">
            <div className="detail-header-row">
              <div className="detail-header-copy">
                <Link className="detail-back-link" to="/">
                  <ArrowLeft size={14} />
                  Back to courses
                </Link>
                <h1>{course.title}</h1>
                <p>Unlock the Power of Digital Creation with Expert Guidance</p>
              </div>
              <button className="share-button" type="button">
                <BarChart3 size={14} />
                Share
              </button>
            </div>

            <div className="detail-submeta">
              <span className="detail-author">by purepearl studio</span>
              <span className="detail-chip">
                <BarChart3 size={13} />
                {course.level}
              </span>
              <span className="detail-chip">
                <Clock3 size={12} />
                24 hours
              </span>
              <span className="detail-chip">
                <Star size={12} fill="currentColor" />
                4.9 (172 reviews)
              </span>
              <span className="detail-chip">
                <Users size={12} />
                {course.students} students
              </span>
            </div>

            <div className="detail-main-grid">
              <div className="detail-media-card">
                <img src={getPhotoUrl(course.image, 1200)} alt={course.title} />
                <button type="button" className="play-button" aria-label="Play preview">
                  <Play size={18} fill="currentColor" />
                </button>
              </div>

              <aside className="detail-info-card">
                <h2>112 Lessons (24 hours)</h2>
                <ol className="lesson-list">
                  <li>
                    <span>01</span>
                    <strong>Introduction to Digital</strong>
                    <time>12 mins</time>
                  </li>
                  <li>
                    <span>02</span>
                    <strong>Design Principles for</strong>
                    <time>21 mins</time>
                  </li>
                  <li>
                    <span>03</span>
                    <strong>Advanced Techniques in</strong>
                    <time>16 mins</time>
                  </li>
                  <li>
                    <span>04</span>
                    <strong>Creative Workflows</strong>
                    <time>15 mins</time>
                  </li>
                </ol>

                <p className="info-note">
                  Ready to dive in? Enroll now and start building your digital future.
                </p>

                <div className="detail-price-row">
                  <span>$25</span>
                  <small>/ lifetime</small>
                </div>

                <button type="button" className="enroll-button">
                  Enroll Now
                </button>

                <div className="detail-includes">
                  <h3>This course include</h3>
                  <ul>
                    <li>Learning Resources</li>
                    <li>Quality Lesson Videos</li>
                    <li>Certificate of Completion</li>
                    <li>Private Consultation</li>
                  </ul>
                </div>

                <div className="detail-creator-box">
                  <div className="creator-avatar" />
                  <div>
                    <strong>PurePearl Studio</strong>
                    <small>Professional Creator</small>
                  </div>
                </div>
              </aside>
            </div>

            <div className="detail-lower-grid">
              <div className="detail-content-panel">
                <div className="detail-tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      className={`tab${activeTab === tab ? " active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {activeTab === "About" && aboutContent}
                {activeTab === "Lessons" && lessonContent}
                {activeTab === "Reviews" && reviewContent}
              </div>

              <div className="detail-empty-space" aria-hidden="true" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
