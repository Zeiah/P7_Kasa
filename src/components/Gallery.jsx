import React from 'react';
import { Link } from 'react-router-dom';
import accommodationsList from '../logements.json';
//import '../styles/index.css';

export default function Gallery() {
    //affichage
    return (
        <>
            {accommodationsList.map((accommodation) => {
                return (
                    <Link to={`/accommodation/${accommodation.id}`}>
                        <article
                            key={accommodation.id}
                            className="home__gallery__card"
                        >
                            <img
                                src={accommodation.cover}
                                alt={`${accommodation.title}`}
                            ></img>
                            <h2>{accommodation.title}</h2>
                        </article>
                    </Link>
                );
            })}
        </>
    );
}

/*** !! il faut préciser la prop Key 
afin que React puisse identifier les éléments de la liste qui ont changé***
    * une key doit être unique au sein du tableau
    * une key doit être stable dans le temps
        (pr la mm donnée source = tjs mm valeur key=)
la key permet d'associer une donnée au composant correspondant ds le DOM virtuel
Pr générer une key unique >> utiliser l'id associée à la donnée ds BDD
(sinon exploiter valeur de la donnée si stable et unique)
(sinon définir une string et la combiner avec index de la donnée ds tableau)
 */
