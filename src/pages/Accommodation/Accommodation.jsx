import React from 'react';
import { useParams } from 'react-router-dom';
import Error from '../../pages/Error/Error';
import Slideshow from '../../components/Slideshow';
import Items from '../../components/Items';
import Rate from '../../components/Rate';
import Collapse from '../../components/Collapse';

import { useEffect } from 'react';
import accommodationsList from '../../logements.json';

export default function Accommodation() {
    const accommodationId = useParams().id;
    const accommodation = accommodationsList.find(
        (data) => data.id === accommodationId
    );

    useEffect(() => {
        document.title = 'Kasa / ' + accommodation.title;
    }, [accommodation]);

    if (accommodation) {
        return (
            <main>
                <Slideshow slides={accommodation.pictures} />
                <section className="accommodation__info">
                    <div className="accommodation__info__location">
                        <h1>{accommodation.title}</h1>
                        <h3>{accommodation.location}</h3>
                        <div className="accommodation__info__location__tags">
                            <Items list={accommodation.tags} />
                        </div>
                    </div>
                    <div className="accommodation__info__host">
                        <Rate rating={accommodation.rating} />
                        <div className="accommodation__info__host__person">
                            <div className="accommodation__info__host__person__name">
                                {accommodation.host.name}
                            </div>
                            <img
                                src={accommodation.host.picture}
                                alt="Votre hôte"
                            ></img>
                        </div>
                    </div>
                </section>
                <section className="accommodation__collapse">
                    <article className="collapse">
                        <Collapse
                            title={'Description'}
                            content={accommodation.description}
                        />
                    </article>
                    <article className="collapse">
                        <Collapse
                            title={'Équipements'}
                            content={<Items list={accommodation.equipments} />}
                        />
                    </article>
                </section>
            </main>
        );
    } else {
        return <Error />;
    }
}
