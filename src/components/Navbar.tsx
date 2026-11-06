import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrambleText } from "@/components/ScrambleText";

const homeLinks = [
  { label: "Profile", href: "/#profile" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
];

type ScrambleLinkProps = {
  label: string;
  className?: string;
  to?: string;
  href?: string;
};

const ScrambleLink = ({ label, className = "", to, href }: ScrambleLinkProps) => {
  const { visibleLabel, scramble } = useScrambleText(label);
  const content = (
    <span
      aria-hidden="true"
      className="scramble-text"
      style={{ minWidth: `${label.length}ch` }}
    >
      {visibleLabel}
    </span>
  );
  const interactionProps = {
    className,
    "aria-label": label,
    onFocus: scramble,
    onPointerEnter: scramble,
  };

  if (to) {
    return (
      <Link to={to} {...interactionProps}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} {...interactionProps}>
      {content}
    </a>
  );
};

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const brandText = useScrambleText("J.KCA");
  const contactText = useScrambleText("Contact me");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header
      className={`topbar${scrolled ? " topbar--scrolled" : ""}${
        menuOpen ? " topbar--menu-open" : ""
      }`}
    >
      <Link
        className="brand-mark"
        to="/"
        aria-label="J.KCA — back to the top"
        onFocus={brandText.scramble}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onPointerEnter={brandText.scramble}
      >
        <span aria-hidden="true" className="brand-mark__name">
          {brandText.visibleLabel}
        </span>
        <span className="brand-mark__glyph" aria-hidden="true">
          ✦
        </span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        aria-label={`${menuOpen ? "Close" : "Open"} navigation menu`}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        <i aria-hidden="true" />
      </button>

      <nav
        id="site-navigation"
        className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
        aria-label="Primary navigation"
        onClick={() => setMenuOpen(false)}
      >
        {homeLinks.map((link) => (
          <ScrambleLink key={link.label} href={link.href} label={link.label} />
        ))}
        <ScrambleLink
          className={pathname.startsWith("/blog") ? "is-active" : ""}
          label="Blog"
          to="/blog"
        />
        <a className="site-nav__mobile-contact" href="mailto:juliakroger@gmail.com">
          <span>Contact me</span>
          <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <div className="topbar__action">
        <a
          aria-label="Contact me"
          className="topbar__contact"
          href="mailto:juliakroger@gmail.com"
          onFocus={contactText.scramble}
          onPointerEnter={contactText.scramble}
        >
          <span aria-hidden="true">{contactText.visibleLabel}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <span className="topbar__edge" aria-hidden="true" />
    </header>
  );
};

export default Navbar;
