import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./styles/App.css";

function App() {
  const [scroll, setScroll] = useState(0);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScroll(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize particles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Router>
      <div className="App">
        {/* Scroll Progress Bar */}
        <div className="scroll-bar" style={{ width: `${scroll}%` }}></div>

        {/* Particles Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: "transparent" },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
            },
            particles: {
              color: { value: ["#00f0ff", "#a020f0"] },
              move: { enable: true, speed: 0.5 },
              number: { value: 40 }, // reduced for smoother performance
              opacity: { value: 0.6 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />

        {/* Header */}
        <Header />

        {/* Main Sections */}
        <main style={{ marginTop: "80px" /* matches header height */ }}>
          <motion.section
            className="scroll-section"
            id="home"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Home />
          </motion.section>

          <motion.section
            className="scroll-section"
            id="about"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <About />
          </motion.section>

          <motion.section
            className="scroll-section"
            id="projects"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Projects />
          </motion.section>

          <motion.section
            className="scroll-section"
            id="contact"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Contact />
          </motion.section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
