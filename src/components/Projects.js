import React, { useEffect, useState } from "react";
import "../styles/App.css";

function Projects() {
  return (
    <section className="projects-section section">
      <div className="projects-container">
        <h2 className="projects-title">My Featured Projects 🚀</h2>
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
