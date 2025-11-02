import React, { useEffect, useState } from "react";
import "../styles/App.css";

function Home() {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Parveen 👋";

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
    <section className="section home-section">
      <div className="content">
        <h1 className="title typewriter-glow">{text}</h1>
        <p className="subtitle">Crafting futuristic web experiences with passion and precision.</p>
      </div>
    </section>
  );
}

export default Home;
