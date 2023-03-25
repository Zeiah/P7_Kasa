import React from 'react';
import fullStar from '../assets/fullStar.png';
import emptyStar from '../assets/emptyStar.png';

/**
 * Méthode d'affichage du rating
 * @param {stars} - tableau de 5 étoiles
 * @param {level} - score max. possible (5 étoiles pleines)
 * @param {rating} - score pour ce logement
 * @return logique définissant le nombre d'étoiles pleines ou vides
 */

export default function Rate({ rating }) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="accommodation__info__host__rate">
            {stars.map((level) =>
                rating >= level ? (
                    <img
                        key={level.toString()}
                        src={fullStar}
                        className="star"
                        alt="rating star"
                    ></img>
                ) : (
                    <img
                        key={level.toString()}
                        src={emptyStar}
                        className="star"
                        alt="rating star"
                    ></img>
                )
            )}
        </div>
    );
}
