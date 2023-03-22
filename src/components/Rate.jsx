import React from 'react';
import fullStar from '../assets/fullStar.png';
import emptyStar from '../assets/emptyStar.png';

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
