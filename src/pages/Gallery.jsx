import React, { useState, useEffect } from 'react';
import styles from '../pageCss/Gallery.module.css';

const images = [
    'images/zumba.jpg', 'images/herodance1.jpg', 'images/herodance4.jpg', 'images/herodance3.jpg',
    'images/herodance5.jpg', 'images/herodance6.jpg', 'images/herodance7.jpg', 'images/herodance8.jpg',
    'images/yoga2.jpg', 'images/yoga3.jpg', 'images/zumba.jpg', 'images/zumba2.jpg'
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
                    <button className="btn btn-primary" onClick={handleViewMore}>View More</button>
                </div>
            )}
        </section>
    );
}

export default Gallery;
