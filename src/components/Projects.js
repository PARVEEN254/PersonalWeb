import React from "react";

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="content">
        <h1>Projects</h1>
        <div className="project-list">
          <div className="project-card">
            <h2>🏠 Property Tracker</h2>
            <p>A real estate dashboard with interactive map and MySQL integration.</p>
          </div>
          <div className="project-card">
            <h2>🔥 Pokédex</h2>
            <p>A full-stack Pokédex with image uploads, JWT authentication, and React frontend.</p>
          </div>
          <div className="project-card">
            <h2>💎 Personal Portfolio</h2>
            <p>This very site — a futuristic neon-themed single-page experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
