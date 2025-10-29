import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    { title: "Pokédex App", description: "A modern Pokédex built with React and .NET API." },
    { title: "Tourism Website", description: "Tourist spot management platform with user/admin features." },
    { title: "Property Tracker", description: "Track rental properties with map integration." },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
