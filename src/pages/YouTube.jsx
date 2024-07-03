import React from 'react';
import '../pageCss/Youtube.css';

const YouTube = () => {
    return (
        <section className="youtube-section mt-2 ">
            <div className="youtube-container pb-2">
                <h1 className="youtube-heading pb-4 ">
                    <strong>Visit Our <span className='text-danger'>Youtube </span>Channel</strong>
                </h1>
                <div className="video-wrapper">
                    <iframe
                        width="1000"
                        height="auto"
                        src="https://www.youtube.com/embed/szdD5ZYdhmQ?si=mF3sDr6sq-tB47QT"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default YouTube;
