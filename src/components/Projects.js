import React, { useEffect, useState } from "react";
import "../styles/App.css";

function Projects() {
  const [text, setText] = useState("");
  const fullText = "My Featured Projects 🚀";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section projects-section">
      <div className="content">
        <h2 className="title typewriter-glow">{text}</h2>
        <div className="projects-grid">
          <div className="project-card">🏗️ Property Tracker</div>
          <div className="project-card">⚔️ Pokédex App</div>
          <div className="project-card">🌍 Tourism Portal</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
