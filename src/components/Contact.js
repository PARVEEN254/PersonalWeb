import React, { useEffect, useState } from "react";
import "../styles/App.css";

function Contact() {
  const [text, setText] = useState("");
  const fullText = "Let's Connect 💬";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section contact-section">
      <div className="content">
        <h2 className="title typewriter-glow">{text}</h2>
        <p className="subtitle">Open for collaborations, projects, and cool ideas.</p>
        <a href="mailto:parveen@example.com" className="contact-btn">
          ✉️ Send Message
        </a>
      </div>
    </section>
  );
}

export default Contact;
