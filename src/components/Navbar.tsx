import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "@/utils/classnames";
import { styles } from "@/styles/styles";
import { navLinks } from "@/constants/navigation";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-5 fixed top-0 z-20",
        scrolled ? "bg-primary" : "bg-transparent"
      )}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <Link
          to="/"
          className="text-white text-[18px] font-bold cursor-pointer flex"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          J.KCA
        </Link>

        <ul className="flex sm:gap-5 gap-3">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={cn(
                active === nav.title ? "text-white" : "text-secondary",
                "hover:text-white text-sm font-medium cursor-pointer"
              )}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <a
            href="mailto:juliakroger@gmail.com"
            className={cn(
              "text-secondary hover:text-white text-sm font-medium cursor-pointer"
            )}
          >
            Contact
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
