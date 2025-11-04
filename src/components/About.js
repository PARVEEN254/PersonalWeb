import React from "react";
import "../styles/About.css";
import profilePic from "./profile.jpg"; // <-- import your local image

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Picture Holder */}
        <div className="about-image">
          <img src={profilePic} alt="Profile" />
        </div>

        {/* About Content */}
        <div className="about-content">
          <h1>About Me</h1>

          <p className="intro">
            I’m <span className="highlight">Parveen Atienza</span>, a passionate{" "}
            <strong>Full Stack Developer</strong> who loves combining design and
            technology to create smooth, futuristic, and user-friendly
            experiences.
          </p>

          <p className="details">
            I specialize in building web applications using{" "}
            <strong>React</strong>, <strong>Node.js</strong>, and modern{" "}
            <strong>CSS</strong> frameworks. My focus is on delivering
            high-performing, elegant digital solutions with clean code and
            attention to detail.
          </p>

          <p className="details">
            Outside coding, I enjoy learning about emerging technologies,
            exploring UI trends, and experimenting with 3D animations for the
            web. My goal is to make every project feel like a seamless,
            interactive experience.
          </p>

          <div className="skills">
            <span>React</span>
            <span>Node.js</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>MySQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
