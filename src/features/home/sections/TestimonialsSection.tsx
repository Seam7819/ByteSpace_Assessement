import { ArrowRight, Sparkles } from "lucide-react";
import { testimonials } from "../data";
import { getPhotoUrl } from "../utils";

export function TestimonialsSection() {
  return (
    <section className="community-section" id="community">
      <div className="page-wrap">
        <div className="community-heading">
          <div>
            <p className="eyebrow eyebrow-dark">
              <span className="eyebrow-line" /> KIND WORDS, FROM REAL PEOPLE
            </p>
            <h2>
              Turns out, learning
              <br />
              is better <em>together.</em>
            </h2>
          </div>
          <p>
            We think the best part of learning is the people you meet along the
            way. Here's what some of our community have to say.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className={`testimonial testimonial-${index + 1}`}
              key={testimonial.name}
            >
              <div className="testimonial-top">
                <img src={getPhotoUrl(testimonial.image, 120)} alt="" />
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </span>
                <Sparkles size={17} />
              </div>
              <p>“{testimonial.quote}”</p>
              <div className="testimonial-rating">
                <span>★★★★★</span>
                <small>BYTE SPACE COMMUNITY</small>
              </div>
            </article>
          ))}
        </div>
        <a href="#join" className="text-link community-link">
          Come find your people <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
