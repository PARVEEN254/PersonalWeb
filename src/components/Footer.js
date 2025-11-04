import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Parveen Atienza. All rights reserved.
      </p>
      <p>
        Built with <span className="highlight">React</span> & <span className="highlight">CSS</span>.
      </p>
    </footer>
  );
};

export default Footer;
