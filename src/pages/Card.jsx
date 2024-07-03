import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import dance from '../data/data.js'; 
import Slider from "react-slick";
import styles from '../pageCss/Courses.module.css';

const Card = () => {
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

    return (
        <section className={`mt-5 bg-light ${styles.sectionContainer}`}>
            <div className={styles.cardContainer}>
                <h1 className='text-dark mt-4 '><strong className='text-warning'>We Offered </strong> <br /> World Class Dance Style For You</h1>
                <Slider {...settings} className={styles.slickSlider}>
                    {dance.map((item) => (
                        <div key={item.id} className={styles.customSlide}>
                            <div className={styles.card}>
                                <img src={item.imgSrc} alt={item.danceForm} />
                                <h3>{item.danceForm}</h3>
                                <p>{item.details}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Card;
