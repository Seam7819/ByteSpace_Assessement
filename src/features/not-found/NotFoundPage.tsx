import { Link } from "react-router";
import "./not-found.css";

export function NotFoundPage() {
  return (
    <main className="not-found-page grid-bg">
      <section className="not-found-content" aria-labelledby="not-found-title">
        <p className="not-found-code" aria-hidden="true">
          404
        </p>
        <div className="not-found-copy">
          <h1 id="not-found-title">
            The page you are looking
            <br />
            for doesn&apos;t exist
          </h1>
          <p>Try a correct URL or head back home to start again.</p>
          <Link className="button button-lime not-found-home" to="/">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}