import React, { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    const headerOffset = 80; // header height
    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">Parvs</div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a className="nav-button" onClick={() => handleNavClick("home")}>Home</a>
        <a className="nav-button" onClick={() => handleNavClick("about")}>About</a>
        <a className="nav-button" onClick={() => handleNavClick("projects")}>Projects</a>
        <a className="nav-button" onClick={() => handleNavClick("contact")}>Contact</a>
      </nav>

      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
