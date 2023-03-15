import React from 'react';
import { useState } from 'react';
import arrowForward from '../assets/arrow_forward_slideshow.png';
import arrowBack from '../assets/arrow_back_slideshow.png';

export default function Slideshow({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(
            currentIndex === 0 ? slides.length - 1 : currentIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex(
            currentIndex === slides.lenght - 1 ? 0 : currentIndex + 1
        );
    };

    return (
        <section
            className="accommodation__slideshow"
            style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        >
            <img
                className="slideshow__arrow arrowBack"
                onClick={prevSlide}
                src={arrowBack}
                alt="button back"
            ></img>
            <div className="slideshow__count">
                {currentIndex + 1}/{slides.length}
            </div>
            <img
                className="slideshow__arrow arrowForward"
                onClick={nextSlide}
                src={arrowForward}
                alt="button forward"
            ></img>
        </section>
    );
}

/*export default function Slideshow({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.lenght - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.lenght - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div
            className="accommodation__slideshow__inner"
            style={{ backgroundImage: `url($(slides[currentIndex].img))` }}
        >
            <div className="arrowBack" onClick={goToPrevious}>
                <img src={arrowBack} alt="button back"></img>
            </div>
            <div className="arrowCenter"></div>
            <div className="arrowForward" onClick={goToNext}>
                <img src={arrowForward} alt="button forward"></img>
            </div>
        </div>
    );*/
