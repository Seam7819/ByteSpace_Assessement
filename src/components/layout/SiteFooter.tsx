import { Sparkles } from "lucide-react";
import { Brand } from "./Brand";
import { NewsletterForm } from "./NewsletterForm";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-wrap">
        <div className="footer-intro">
          <Brand />
          <p>Make room for a little more wonder.</p>
          <NewsletterForm />
          <span className="fine-print">
            By subscribing, you agree to receive thoughtful notes from
            ByteSpace. Unsubscribe any time.
          </span>
        </div>
        <div className="footer-links">
          <div>
            <h3>Explore</h3>
            <a href="#courses">Featured courses</a>
            <a href="#paths">Learning paths</a>
            <a href="#courses">All categories</a>
          </div>
          <div>
            <h3>Discover</h3>
            <a href="#courses">Design</a>
            <a href="#courses">Development</a>
            <a href="#courses">Business</a>
          </div>
          <div>
            <h3>ByteSpace</h3>
            <a href="#creators">Become a creator</a>
            <a href="#community">Our community</a>
            <a href="mailto:hello@bytespace.studio">Get in touch</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom page-wrap">
        <span>© 2025 ByteSpace. Made for curious minds.</span>
        <div>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#cookies">Cookie settings</a>
        </div>
        <span className="footer-location">
          Made for curious minds <Sparkles size={13} />
        </span>
      </div>
    </footer>
  );
}
