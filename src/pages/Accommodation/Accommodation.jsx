import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import accommodationsList from '../../logements.json';
import Error from '../../pages/Error/Error';
import Slideshow from '../../components/Slideshow';
import Items from '../../components/Items';
import Rate from '../../components/Rate';
import Collapse from '../../components/Collapse';

/** Afffichage des caractéristiques pour chaque logement
 * @param {string} id - id du logement dans URL
 * @param {array} accommodationsList - data logements.json
 * @param {Objet} accommodation - logement
 * @param {array} slides - images du logement
 * @param {string} accommodation.title - nom du logement
 * @param {string} accommodation.location - lieu où se trouve ce logement
 * @param {array} list - liste contenant les éléments tags ou equipments
 * @param {list} accommodation.tags - tags pour ce logement
 * @param {number} rating - score pour ce logement
 * @param {string} accommodation.host.name - nom de l'hôte
 * @param {img} accommodation.host.picture - image de l'hôte
 * @param {string} title - titre du collapse
 * @param {string} content - contenu du collapse
 * @param {string} accommodation.description - description logement
 * @param {list} accommodation.equipments -équipement disponible pour ce logement
 * @returns logique d'identification du logement avec useParams() et find()
 * @returns html
 */

export default function Accommodation() {
    const accommodationId = useParams().id;
    const accommodation = accommodationsList.find(
        (data) => data.id === accommodationId
    );

    useEffect(() => {
        document.title = 'Kasa / Logement';
    }, []);

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
