import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-3">
        <div className="row d-flex justify-content-between">
          <div className="narac col-lg-4 col-md-6 mb-4 text-md-left">
            <Link to="/" className="text-decoration-none"><img
              src="/images/logo.jpeg"
              alt="Logo"
              className="h-10 w-10 object-contain mr-2"
              style={{
                height: "55px",
                width: "55px",
                objectFit: "contain",
                marginRight: "10px",
                borderRadius: "50%",
              }}
            />
            <span className="text-xl font-bold text-white logo-head ">
              Nartan Academy
            </span>
            </Link>
            <p className="text-white pt-2 ptext">
              Welcome to Nartan Academy, where passion meets rhythm! Established
              with a commitment to nurturing talent and fostering creativity,
              Nartan Academy stands as a premier destination for dance education
              in our community. At Nartan Academy, we believe that dance is more
              than just movement; it's an expression of emotions, a celebration
              of culture, and a pathway to self-discovery. Our academy offers a
              diverse range of dance styles including ballet, jazz,
              contemporary, hip-hop, and more, catering to dancers of all ages
              and skill levels.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mt-2 text-center text-md-left">
            <h1 className="h5">
              <strong>Contact Us</strong>
            </h1>
            <p className="pt-2">
              <a
                className="text-white text-decoration-none ptext"
                href="tel:+919779144989 "
              >
                📞 +91 9779144989
              </a>
            </p>
            <p>
              📧{" "}
              <a
                className="text-white text-decoration-none ptext"
                href="mailto:nartanacademy08@gmail.com"
              >
                nartanacademy08@gmail.com
              </a>
            </p>
            <p className="ptext">
              📍H/No. B22/252A, Post Office Gali, Mohobbat Nagar, Circular Road,
              Kapurthala, Punjab - 144601{" "}
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <h1 className="h5 ">
              <strong>Quick Links</strong>
            </h1>
            <div className="d-flex gap-5 pt-3 justify-content-center">
              <div>
                <Link
                  to="/about-us"
                  className="text-white d-block mb-2 text-decoration-none"
                >
                  About Us
                </Link>
                <Link
                  to="/dance-course"
                  className="text-white d-block mb-2 text-decoration-none"
                >
                  Dance Course
                </Link>
                <Link
                  to=""
                  className="text-white d-block mb-2 text-decoration-none"
                >                                                                                                                                                                                                                                                                                                                                                                                                         
                  Online Course
                </Link>
              </div>
              <div>
                <Link
                  to="/terms-conditions"
                  className="text-white d-block mb-2 text-decoration-none"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/privacy-policy"
                  className="text-white d-block mb-2 text-decoration-none"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/refund-policy"
                  className="text-white d-block mb-2 text-decoration-none"
                >
                  Refund Policy
                </Link>
              </div>
            </div>

            <div className="d-flex gap-4 mt-3 justify-content-center">
              <a
                href="https://youtube.com/@smaras_good_life?si=nUnfNkWPETsxRY-T"
                target="_blank"
                className="icon-hover cursor-pointer"
                rel="noopener noreferrer"
              >
                <FaYoutube color="red" size={30} />
              </a>
              <a
                href=""
                target="_blank"
                className="icon-hover cursor-pointer"
                rel="noopener noreferrer"
              >
                <FaWhatsapp color="lightgreen" size={30} />
              </a>
              <a
                href="https://www.instagram.com/nartanacademy?igsh=dWFmaTA2Zmw1MHU5"
                target="_blank"
                className="icon-hover cursor-pointer"
                rel="noopener noreferrer"
              >
                <FaInstagram color="#E1306C" size={30} />
              </a>
              <a
                href="https://www.facebook.com/nartanacademy"
                target="_blank"
                className="icon-hover cursor-pointer"
                rel="noopener noreferrer"
              >
                <FaFacebook color="#1877F2" size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-secondary text-center py-3">
        <p className="mb-0 fw-bold text-white">&copy; 2024 Nartan Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
