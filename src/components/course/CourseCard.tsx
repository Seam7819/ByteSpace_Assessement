import { BarChart3, Star } from "lucide-react";
import type { Course } from "../../features/home/types";
import { getPhotoUrl } from "../../features/home/utils";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <a
        className="course-image"
        href="#courses"
        aria-label={`Explore ${course.title}`}
      >
        <img src={getPhotoUrl(course.image, 720)} alt="" loading="lazy" />
        <span className="image-scrim" />
        <span className="image-stats">
          <span>{course.lessons} lessons</span>
          <span>2 hours 16 mins</span>
          <span>{course.students} learners</span>
        </span>
      </a>
      <div className="course-main">
        <div className="course-title-row">
          <div>
            <h3>{course.title}</h3>
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
