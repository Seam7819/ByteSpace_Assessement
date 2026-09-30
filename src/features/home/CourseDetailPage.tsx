import {
  ArrowLeft,
  BarChart3,
  Clock3,
  Play,
  Star,
  Users,
} from "lucide-react";
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

export function CourseDetailPage() {
  const { slug } = useParams();
  const course = courses.find((item) => toSlug(item.title) === slug);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SiteHeader />
      <main className="course-detail-page">
        <section className="detail-hero">
          <div className="page-wrap detail-layout">
            <div className="detail-copy">
              <Link className="back-link" to="/">
                <ArrowLeft size={16} />
                Back to courses
              </Link>

              <span className="eyebrow eyebrow-dark">
                <span className="eyebrow-line" />
                {course.category}
              </span>

              <h1>{course.title}</h1>
              <p className="detail-summary">
                Learn practical, creative skills from someone who genuinely cares
                about making the process feel clear, joyful, and actionable.
              </p>

              <div className="detail-metrics">
                <span>
                  <Clock3 size={14} />
                  {course.lessons} lessons
                </span>
                <span>
                  <Users size={14} />
                  {course.students} learners
                </span>
                <span>
                  <Star size={14} fill="currentColor" />
                  4.9 rating
                </span>
              </div>

              <div className="detail-actions">
                <button className="button button-lime" type="button">
                  Enroll now
                </button>
                <button className="button button-dark" type="button">
                  <Play size={12} fill="currentColor" />
                  Preview lesson
                </button>
              </div>
            </div>

            <div className="detail-visual">
              <img src={getPhotoUrl(course.image, 1200)} alt={course.title} />
              <div className="detail-badge">
                <BarChart3 size={18} />
                <div>
                  <strong>{course.level}</strong>
                  <small>Begin with the fundamentals</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="detail-body page-wrap">
          <div className="detail-panel">
            <h2>What you&apos;ll learn</h2>
            <ul>
              <li>Build a stronger creative foundation with clear, practical steps.</li>
              <li>Work through thoughtfully structured lessons that keep momentum high.</li>
              <li>Apply the lessons to real-world creative decisions and projects.</li>
              <li>Gain confidence with a system that is easy to revisit and reuse.</li>
            </ul>
          </div>

          <aside className="detail-side-panel">
            <h3>Course includes</h3>
            <div className="side-list">
              <span>17 short videos</span>
              <span>Downloadable resources</span>
              <span>Lifetime access</span>
              <span>Certificate of completion</span>
            </div>
            <div className="detail-price">
              <strong>$25</strong>
              <span>Lifetime access</span>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
