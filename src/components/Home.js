import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import videoIcon from "../styles/video.mp4"; // Replace with your video path

const Home = () => {
  const [text, setText] = useState("");
  const [showRole, setShowRole] = useState(false);
  const fullText = "Hola, Soy Parveen 👋";
  const roleText = "Full Stack Developer | UX/UI Designer | Frontend Enthusiast";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowRole(true), 300); // show role after typewriter
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-section" id="home">
      <div className="home-left">
        <h1 className="typewriter">{text}</h1>
        {showRole && <p className="role-text">{roleText}</p>}
        <p className="home-subtitle">
          Crafting futuristic web experiences with passion and precision.
        </p>

        {/* Social Icons */}
        <div className="home-icons">
          <a
            href="mailto:parvinatienza@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            📧
          </a>
          <a
            href="https://github.com/PARVEEN254"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            🐱
          </a>
          <a
            href="https://www.facebook.com/parveenatienza/"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            📘
          </a>
        </div>
      </div>

      <div className="home-right">
        <div className="video-box">
          <video
            className="icon-video"
            src={videoIcon}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
