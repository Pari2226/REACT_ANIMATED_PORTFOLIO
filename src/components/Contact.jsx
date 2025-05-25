import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/parixsingh?igsh=MWozcnl5d2YyN24xcw==" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/pari-985b4b25a/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/Pari2226" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="officialpari24@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
