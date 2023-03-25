import React from 'react';
import { useState } from 'react';
import arrowNext from '../assets/arrow_next_slideshow.png';
import arrowPrev from '../assets/arrow_prev_slideshow.png';

/**
 * Méthode d'affichage du carrousel
 * @param {array} slides -tableau contenant les images disponibles pour chaque logement
 * @returns logique de défilement des images (previous / next) en fonction du state
 * @returns logique du compteur
 */

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

    return slides.length === 1 ? (
        <div
            className="accommodation__slideshow"
            style={{
                backgroundImage: `url(${slides[currentIndex]})`,
            }}
        ></div>
    ) : (
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
