import React, { useState, useEffect } from 'react';
import styles from '../pageCss/Gallery.module.css';

const images = [
    'images/pic1.jpeg', 'images/pic2.jpeg', 'images/pic3.jpeg', 'images/pic4.jpeg',
    'images/pic5.jpeg', 'images/pic6.jpeg', 'images/pic8.jpeg', 'images/pic10.jpeg',
    'images/pic11.jpeg', 'images/pic12.jpeg', 'images/pic13.jpeg', 'images/pic14.jpeg', '/images/pic15.jpeg', '/images/pic16.jpeg', '/images/pic17.jpeg', '/images/pic18.jpeg'
];

const Gallery = () => {
    const [visibleCards, setVisibleCards] = useState(6);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleViewMore = () => {
        setVisibleCards(images.length);
    };

    const updateMedia = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) {
            setVisibleCards(images.length);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        updateMedia(); // Initial check

        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    return (
        <section className={`mt-5 bg-light ${styles.galleryContainer}`}>
            <h1 className='text-dark text-center fonts mt-4'><strong>Our <span className='text-warning'>Gallery</span></strong></h1>
            <div className={styles.imageGrid}>
                {images.slice(0, visibleCards).map((image, index) => (
                    <div key={index} className={styles.card}>
                        <img src={image} alt={`Gallery image ${index + 1}`} onError={() => console.error(`Failed to load image: ${image}`)} />
                    </div>
                ))}
            </div>
            {isMobile && visibleCards < images.length && (
                <div className={`text-center mt-3 ${styles.viewMoreButton}`}>
                    <button className='viewMoreButton' onClick={handleViewMore}>View More</button>
                </div>
            )}
        </section>
    );
}

export default Gallery;
