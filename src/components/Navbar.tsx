import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const homeLinks = [
  { label: "Profile", href: "/#profile" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
];

const SCRAMBLE_GLYPHS = "01X#<>/[]{}-+=_";

const useScrambleText = (label: string) => {
  const [visibleLabel, setVisibleLabel] = useState(label);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    setVisibleLabel(label);

    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [label]);

  const scramble = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);

    let iteration = 0;
    let previousTimestamp = 0;

    const animate = (timestamp: number) => {
      if (timestamp - previousTimestamp < 34) {
        frameRef.current = window.requestAnimationFrame(animate);
        return;
      }

      previousTimestamp = timestamp;
      const resolvedCharacters = Math.floor(iteration);

      setVisibleLabel(
        label
          .split("")
          .map((character, index) => {
            if (character === " ") return " ";
            if (index < resolvedCharacters) return character;

            const glyphIndex = Math.floor(Math.random() * SCRAMBLE_GLYPHS.length);
            return SCRAMBLE_GLYPHS[glyphIndex];
          })
          .join("")
      );

      if (resolvedCharacters >= label.length) {
        setVisibleLabel(label);
        frameRef.current = null;
        return;
      }

      iteration += 0.46;
      frameRef.current = window.requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);
  };

  return { visibleLabel, scramble };
};

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

  return (
    <header className={`topbar${scrolled ? " topbar--scrolled" : ""}`}>
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
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        <i aria-hidden="true" />
      </button>

      <nav
        id="site-navigation"
        className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
        aria-label="Primary navigation"
      >
        {homeLinks.map((link) => (
          <ScrambleLink key={link.label} href={link.href} label={link.label} />
        ))}
        <ScrambleLink
          className={pathname.startsWith("/blog") ? "is-active" : ""}
          label="Blog"
          to="/blog"
        />
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
