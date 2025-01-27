import React, { useState } from "react";

import { FaCommentAlt, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import "../componentCss/FloatingBtn.css";

const Floatingbtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <div id="floating-button" onClick={togglePopup}>
        <FaCommentAlt id="toggle-icon" className={isOpen ? "rotated" : ""} />
      </div>
      <div id="pop-up" className={isOpen ? "visible" : "hidden"}>
        <a
          href="tel:+919779144989"
          target="_blank"
          className="contact-icon"
          id="phone-icon"
        >
          <FaPhone />
        </a>
        <a
          href="https://wa.me/qr/MFONCKVJ2JQWI1"
          target="_blank"
          className="contact-icon"
          id="whatsapp-icon"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:nartanacademy08@gmail.com"
          className="contact-icon"
          id="email-icon"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Floatingbtn;
