import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dance from '../data/data.js'; 
import Slider from "react-slick";
import styles from '../pageCss/Courses.module.css'; 

const Courses = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    // Flatten the courses arrays from each dance item
    const courses = dance.flatMap(item => item.courses);

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const toggleDescription = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1); // Collapse if already expanded
        } else {
            setExpandedIndex(index); // Expand if not expanded
        }
    };

    return (
        <section className={`mt-5 bg-light ${styles.sectionContainer}`}>
            <div className={styles.cardContainer}>
                <h1 className='text-dark mt-5'>
                    <strong>Professional Courses of <span className='text-warning'>Nartan</span></strong>
                </h1>
                <Slider {...settings} className={styles.slickSlider}>
                    {courses.map((course, index) => (
                        <div key={index} className={styles.customSlide}>
                            <div className={styles.card}>
                                <img src={course.images} alt={course.title} onError={() => console.error(`Failed to load image: ${course.images}`)} />
                                <h3>{course.title}</h3>
                                <p className={styles.description}>
                                    {course.description.split('\n').slice(0, 3).join('\n')}
                                    {course.description.split('\n').length > 3 && !expandedIndex === index && (
                                        <span>
                                            ...
                                            <button
                                                className={styles.seeMoreButton}
                                                onClick={() => toggleDescription(index)}
                                            >
                                                See more
                                            </button>
                                        </span>
                                    )}
                                    {expandedIndex === index && (
                                        <span>
                                            {course.description.split('\n').slice(3).join('\n')}
                                            <button
                                                className={styles.seeMoreButton}
                                                onClick={() => toggleDescription(index)}
                                            >
                                                See less
                                            </button>
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Courses;
