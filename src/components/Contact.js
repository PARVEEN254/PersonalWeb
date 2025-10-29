import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:parveen@example.com">parveen@example.com</a></p>
      <p>GitHub: <a href="https://github.com/ParveenAtienza" target="_blank" rel="noopener noreferrer">github.com/ParveenAtienza</a></p>
      <p>LinkedIn: <a href="#" target="_blank" rel="noopener noreferrer">linkedin.com/in/parveen</a></p>
    </div>
  );
}

export default Contact;
