import { BarChart3, Star } from "lucide-react";
import { Link } from "react-router";
import type { Course } from "../../features/home/types";
import { getPhotoUrl } from "../../features/home/utils";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <Link
        className="course-image"
        to={`/course/${toSlug(course.title)}`}
        aria-label={`Explore ${course.title}`}
      >
        <img src={getPhotoUrl(course.image, 720)} alt="" loading="lazy" />
        <span className="image-scrim" />
        <span className="image-stats">
          <span>{course.lessons} lessons</span>
          <span>2 hours 16 mins</span>
          <span>{course.students} learners</span>
        </span>
      </Link>
      <div className="course-main">
        <div className="course-title-row">
          <div>
            <Link to={`/course/${toSlug(course.title)}`} className="course-title-link">
              <h3>{course.title}</h3>
            </Link>
            <a href="#creators" className="creator-link">
              by purepearl studio
            </a>
          </div>
          <span className="rating">
            4.9 <Star size={13} fill="currentColor" />
          </span>
        </div>
        <div className="course-meta">
          <span className="level-tag">
            <BarChart3 size={13} />
            {course.level}
          </span>
          <div
            className="avatar-stack"
            aria-label={`${course.students} students`}
          >
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
            <span>+{course.students}</span>
          </div>
        </div>
        <div className="course-price">
          <strong>$25</strong>
          <span>/ lifetime access</span>
        </div>
      </div>
    </article>
  );
}
