import { useState } from "react";
import { ArrowRight, GraduationCap, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { Brand } from "./Brand";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" id="home">
      <div className="header-inner">
        <Brand inverse />
        <button
          className="mobile-menu icon-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#courses" onClick={() => setMenuOpen(false)}>
            Courses
          </a>
          <a href="#creators" onClick={() => setMenuOpen(false)}>
            Creators
          </a>
        </nav>
        <div className="header-actions">
          <Link to="/login">Sign in</Link>
          <Link to="/signup">
            Join us <ArrowRight size={14} />
          </Link>
          <button className="bag-button" aria-label="Open your learning list">
            <GraduationCap size={17} />
          </button>
        </div>
      </div>
    </header>
  );
}
