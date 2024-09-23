import React from "react";
import "../pageCss/DanceInstructor.css";

const DanceInstructor = () => {
  return (
    <div className="about-section mt-5 bg-light">
      <div className="content-container pt-4">
        <div className="logo-container text-center">
          <h2 className="fw-bold fs-1 text-dark">
            Meet Our
            <span className="text text-warning"> Founder</span>
          </h2>
          <div className="row about-s pt-5">
            <div className="col-lg-4 col-md-12 logo-column">
              <img src="/images/founder.jpeg" alt="" className="logo-imgs" />
              <div>
                <h2 className="text-dark m-1 ">
                  <strong>S.K Smara</strong>
                </h2>
                <span className="text-dark">(CEO & Founder)</span>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 texts-column">
              <p className="text-dark text-justify">
                S.K Smara, the visionary behind Nartan Academy, has a deep-rooted passion for dance that spans 8 years. S.K Smara embarked on a mission to create a nurturing space where dancers of all ages and skill levels could flourish. Driven by a commitment to excellence and a belief in the transformative power of dance, S.K Smara established Nartan Academy to offer a comprehensive range of dance styles and techniques. Her dedication to fostering both technical proficiency and artistic expression has earned Nartan Academy a reputation for excellence within the community. S.K Smara continues to inspire and lead Nartan Academy, ensuring that each student receives personalized attention and guidance. Her vision for the academy extends beyond mere instruction; it encompasses creating a supportive environment where creativity, discipline, and joy intersect. S.K. Smara’s influence at Nartan Academy is marked by her relentless pursuit of innovation in dance education. Her ability to adapt and introduce new dance styles and techniques ensures that the academy remains at the forefront of the dance community. Under her guidance, the academy hosts regular workshops, masterclasses, and performance opportunities that allow students to showcase their skills and gain valuable experience. Her dedication to personal growth and professional development extends to her instructors as well, fostering a team of passionate educators who share her vision. S.K. Smara’s leadership is characterized by a commitment to building a vibrant, inclusive community where every dancer can achieve their fullest potential and find their unique voice in the world of dance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanceInstructor;
