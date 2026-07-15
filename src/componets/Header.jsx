import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFilePdf, FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <HashLink
          smooth
          to="/#about"
          className="text-lg font-semibold text-white tracking-tight"
        >
          ab <span className="text-yellow-400"></span>
        </HashLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <HashLink
              key={link.label}
              smooth
              to={link.href}
              className="text-xs uppercase tracking-wider text-gray-400 px-4 py-2 rounded-md hover:text-white hover:bg-white/10 transition"
            >
              {link.label}
            </HashLink>
          ))}
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://github.com/abhijith-babu-2003"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/abhijith-babu-820827329/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://drive.google.com/file/d/19ofZg9WWOwaHnKg7UhCFRQEstO94ZGs6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10 transition"
          >
            <FaFilePdf />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link) => (
            <HashLink
              key={link.label}
              smooth
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg uppercase tracking-widest text-gray-300 hover:text-yellow-400 transition"
            >
              {link.label}
            </HashLink>
          ))}

          {/* Social Icons (Mobile) */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/abhijith-babu-2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/abhijith-babu-820827329/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 text-xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://drive.google.com/file/d/19ofZg9WWOwaHnKg7UhCFRQEstO94ZGs6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 text-xl"
            >
              <FaFilePdf />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;