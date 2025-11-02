import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/App.css";

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScroll(progress);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      {/* Scroll progress bar */}
      <div className="scroll-bar" style={{ width: `${scroll}%` }}></div>

      {/* Animated background */}
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
            move: { enable: true, speed: 0.7 },
            number: { value: 60 },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Sections */}
      <motion.div
        className="scroll-section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Home />
      </motion.div>

      <motion.div
        className="scroll-section"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        className="scroll-section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
