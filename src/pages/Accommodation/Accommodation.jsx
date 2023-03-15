import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';
import { useEffect, useState } from 'react';
import accommodationsList from '../../logements.json';

export default function Accommodation() {
    const accommodationId = useParams().id;
    const accommodation = accommodationsList.find(
        (data) => data.id === accommodationId
    );

    /*useEffect(() => {
        document.title = accommodation.title;
    }, [accommodation.title]);*/

    const navigate = useNavigate();

    console.log(accommodation.pictures);

    if (accommodation) {
        return (
            <main>
                <Slideshow slides={accommodation.pictures} />

                <section className="accommodation__info">
                    <div className="accommodation__info__location">
                        <h1>{accommodation.title}</h1>
                        <p>{accommodation.location}</p>
                        <div>{accommodation.tags}</div>
                    </div>
                    <div className="accommodation__info__host">
                        <div className='"accommodation__info__host__person'>
                            <p>{accommodation.host.name}</p>
                            <img
                                src={accommodation.host.picture}
                                alt="Votre hôte"
                            ></img>
                        </div>
                        <div className='"accommodation__info__host__rate'>
                            {accommodation.rating}
                        </div>
                    </div>
                </section>
                <section className="accommodation__collapse">
                    <article>
                        <Collapse
                            title={'Description'}
                            content={accommodation.description}
                        />
                    </article>
                    <article>
                        <Collapse
                            title={'Équipements'}
                            content={accommodation.equipments}
                            className="accommodation__collapse-equipment"
                        />
                    </article>
                </section>
            </main>
        );
    } else {
        return navigate('./error');
    }
}
