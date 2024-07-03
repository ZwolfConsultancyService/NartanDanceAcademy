import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import styles from '../pageCss/Courses.module.css';

const fitness = [
    {
        images: '/images/yoga3.jpg',
        title: 'Yoga',
        description: 'Yoga is a holistic discipline originating from ancient India, encompassing physical postures (asanas), breath control (pranayama), and meditation techniques. It promotes physical health, mental clarity, and spiritual growth through a combination of mindful movement, breathing exercises, and relaxation. Yoga is practiced worldwide for its numerous benefits, including stress reduction, improved flexibility, strength building, and overall well-being.'
    },
    {
        images: '/images/zumba2.jpg',
        title: 'Zumba',
        description: "Zumba is a fitness program that combines Latin and international music with dance moves. Created in the 1990s by Colombian dancer and choreographer Alberto 'Beto' Perez, Zumba incorporates dance styles such as salsa, merengue, cumbia, reggaeton, and more. It's designed to be fun and energetic, providing a full-body workout that includes cardiovascular exercise, muscle conditioning, flexibility, and balance improvement."
    },
    {
        images: '/images/aerobics.jpg',
        title: 'Aerobics',
        description: "Aerobics refers to a form of physical exercise that combines rhythmic aerobic movements with stretching and strength training routines. It focuses on increasing cardiovascular fitness, endurance, flexibility, and overall health. Aerobics classes typically involve choreographed movements set to music, which can vary in intensity from low-impact to high-impact depending on the instructor and participants' fitness levels. "
    }
];

const Fitness = () => {
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
                <h1 className='text-dark fonts'><strong>Fitness <span className='text-warning'>Courses</span></strong></h1>
                <Slider {...settings} className={styles.slickSlider}>
                    {fitness.map((item, index) => (
                        <div key={index} className={styles.customSlide}>
                            <div className={styles.card}>
                                <img src={item.images} alt={item.title} onError={() => console.error(`Failed to load image: ${item.images}`)} />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Fitness;
