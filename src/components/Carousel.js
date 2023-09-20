import React, { useState } from 'react';
import '../Carousel.scss';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="container">

            <div className="slide">
                <button className="prev-button" onClick={prevSlide}>
                    &lt;
                </button>
                <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
                <button className="next-button" onClick={nextSlide}>
                    &gt;
                </button>
            </div>

        </div>
    );
};

export default Carousel;