import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h2>Hi, I'm Parveen 👋</h2>
      <p>
        I'm a passionate web developer who loves building modern, creative, and functional web applications using React and .NET.
      </p>
      <button onClick={() => window.location.href = "/projects"}>
        View My Projects
      </button>
    </div>
  );
}

export default Home;
