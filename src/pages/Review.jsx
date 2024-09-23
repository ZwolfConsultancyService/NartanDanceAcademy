import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../pageCss/Review.css";

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 

  const testimonials = [
    {
      name: "Ruchika",
      text: "The perfect place to learn dance at any age. The staff is professional, and the environment is fun and supportive.",
      imgSrc: "/images/girl.jpeg",
    },
    {
      name: "Amandeep",
      text: "Fantastic instructors and a welcoming atmosphere! My skills have improved so much since joining.",
      imgSrc: "/images/men1.jpeg",
    },
    {
      name: "Amaira",
      text: "Great variety of classes and styles. The teachers are patient and really know how to bring out the best in you.",
      imgSrc: "/images/girl.jpeg",
    },
    {
      name: "Pramjeet",
      text: "A top-notch dance academy! My child loves the classes and has gained so much confidence.",
      imgSrc: "/images/men2.jpeg",
    },
    {
      name: "Sukhleen",
      text: "Amazing community and high-quality instruction. Whether you're a beginner or experienced.",
      imgSrc: "/images/girl.jpeg",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handleBeforeChange = (previousSlide, { currentSlide }) => {
    setCurrentSlide(currentSlide);
  };

  return (
    <section className="review-section mt-5 bg-light">
      <Container className="my-4 mt-0  ">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="fw-bold text-dark mt-0 ">
              What Our
              <span className="highlight"> Clients Say </span>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={10}>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              beforeChange={handleBeforeChange}
            >
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-wrapper" key={index}>
                  <Card
                    className={`h-100 testimonial-card ${
                      index === currentSlide ? "active" : ""
                    }`}
                  >
                    <Card.Body className="d-flex flex-column align-items-center">
                      <img
                        src={testimonial.imgSrc}
                        className="rounded-circle mb-3 testimonial-image"
                        alt={testimonial.name}
                      />
                      <Card.Text className="text-center testimonial-text ">
                        {testimonial.text}
                      </Card.Text>
                      <Card.Title className="mt-3 testimonial-name">
                        {testimonial.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Review;
