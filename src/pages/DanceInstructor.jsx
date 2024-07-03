import React from "react";
import "../pageCss/DanceInstructor.css";

const DanceInstructor = () => {
  return (
    <section className="dance-instructor-section mt-5 p-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 text-center text-dark">
            <h1 className="display-4 custom-heading">DANCE</h1>
            <h1 className="display-4 custom-heading">INSTRUCTOR</h1>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/images/herodance1.jpg"
              alt="Dance Instructor"
              className="img-fluid rounded"
            />
          </div>
          <p className="mt-4 text-dark text-column text-justify">
            S.K Smara, the visionary behind Nartan Academy, has a deep-rooted
            passion for dance that spans 8 years.S.K Smara embarked on a mission
            to create a nurturing space where dancers of all ages and skill
            levels could flourish. Driven by a commitment to excellence and a
            belief in the transformative power of dance, S.K Smara established
            Nartan Academy to offer a comprehensive range of dance styles and
            techniques. Her dedication to fostering both technical proficiency
            and artistic expression has earned Nartan Academy a reputation for
            excellence within the community. S.K Smara continues to inspire and
            lead [Your Dance Academy Name], ensuring that each student receives
            personalized attention and guidance. Her vision for the academy
            extends beyond mere instruction; it encompasses creating a
            supportive environment where creativity, discipline, and joy
            intersect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DanceInstructor;
