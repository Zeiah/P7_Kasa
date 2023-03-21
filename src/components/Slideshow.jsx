import React from 'react';
import { useState } from 'react';
import arrowNext from '../assets/arrow_next_slideshow.png';
import arrowPrev from '../assets/arrow_prev_slideshow.png';

export default function Slideshow({ slides = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(
            currentIndex === 0 ? slides.length - 1 : currentIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex(
            currentIndex === slides.length - 1 ? 0 : currentIndex + 1
        );
    };

    return (
        <section
            className="accommodation__slideshow"
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        >
            <div className="slideshow__arrow">
                <img
                    className="arrowPrev"
                    onClick={prevSlide}
                    src={arrowPrev}
                    alt="bouton vers slide précédente"
                ></img>
            </div>
            <div className="slideshow__count">
                {currentIndex + 1}/{slides.length}
            </div>
            <div className="slideshow__arrow">
                <img
                    className="arrowNext"
                    onClick={nextSlide}
                    src={arrowNext}
                    alt="bouton vers slide suivante"
                ></img>
            </div>
        </section>
    );
}
