import React from 'react';
import '../pageCss/About.css';

const About = () => {
  return (
    <div className="about-section mt-5 bg-light">
      <div className="content-container mb-2">
        <div className="logo-container  ">
          <h2 className="fw-bold text-dark fonts">
            About
            <span className="text-warning "> Nartan Academy </span>
          </h2>
          <div className="row about-s">
            <div className="col-lg-4 col-md-12 pt-2 logo-column">
              <img src="/images/nartan.jpg" alt="Nartan Academy Logo" className="logo-img" />
            </div>
            <div className="col-lg-8 col-md-12 text-column">
              <p className="text-dark">
                Welcome to Nartan Academy, where passion meets rhythm! Established with a commitment to nurturing talent and fostering creativity, Nartan Academy stands as a premier destination for dance education in our community.

                At Nartan Academy, we believe that dance is more than just movement; it's an expression of emotions, a celebration of culture, and a pathway to self-discovery. Our academy offers a diverse range of dance styles including ballet, jazz, contemporary, hip-hop, and more, catering to dancers of all ages and skill levels.

                Led by a team of experienced instructors who are not only accomplished dancers but also dedicated mentors, we ensure that every student receives personalized attention in a supportive environment. Whether you're a beginner taking your first steps or an experienced dancer looking to refine your technique, our classes are designed to inspire and challenge you.

                Beyond technique, we strive to instill values of discipline, teamwork, and perseverance through our comprehensive dance programs. Our state-of-the-art facilities provide the perfect backdrop for learning and creativity, equipped with spacious studios and the latest sound systems.

                Join us at Nartan Academy and embark on a journey where passion becomes performance and every beat tells a story. Discover the joy of dance and unlock your full potential with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
