import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-3">
        <div className="row d-flex justify-content-between">
          <div className="narac col-lg-6 col-md-6 mb-4 text-md-left">
            <img
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
            <span className="text-xl font-bold text-white logo-head">
              Nartan Academy
            </span>
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

          <div className="col-lg-6 col-md-6 mt-2 d-flex justify-content-center text-center text-md-right">
            <div className="newss">
              <h1 className="h5 ">
                <strong>Quick Links</strong>
              </h1>
              <div className="d-flex gap-5 pt-3">
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
                    to="/online-course"
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

              <div className="d-flex gap-4 ms-5 mt-3">
                <a
                  href="https://youtube.com/@smaras_good_life?si=nUnfNkWPETsxRY-T"
                  target="_blank"
                  className="icon-hover cursor-pointer"
                >
                  <FaYoutube color="red" size={30} />
                </a>
                <a
                  href="https://wa.me/qr/MFONCKVJ2JQWI1"
                  target="_blank"
                  className="icon-hover cursor-pointer"
                >
                  <FaWhatsapp color="lightgreen" size={30} />
                </a>
                <a
                  href="https://www.instagram.com/nartanacademy?igsh=dWFmaTA2Zmw1MHU5"
                  target="_blank"
                  className="icon-hover cursor-pointer"
                >
                  <FaInstagram color="#E1306C" size={30} />
                </a>
                <a href="" className="icon-hover cursor-pointer">
                  <FaFacebook color="#1877F2" size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-secondary text-center py-3">
        <p className="mb-0">&copy; 2024 Nartan Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
