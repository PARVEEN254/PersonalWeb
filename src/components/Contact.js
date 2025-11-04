import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Feel free to reach out to me via email or connect on social media.
        </p>

        <div className="contact-icons">
          <a
            href="mailto:parvinatienza@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Email"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
              alt="Email"
              className="icon-img"
            />
          </a>
          <a
            href="https://github.com/PARVEEN254"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
              alt="GitHub"
              className="icon-img"
            />
          </a>
          <a
            href="https://www.facebook.com/parveenatienza/"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
              alt="Facebook"
              className="icon-img"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
