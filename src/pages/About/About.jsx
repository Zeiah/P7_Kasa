import React from 'react';
import { useEffect } from 'react';
import Collapse from '../../components/Collapse';
import banner from '../../assets/banner__about.png';

/**
 * Affichage de la page About
 * @param {array} aboutData - tableau des données pour chaque collapse (objet)
 * @param {string} title - titre du collapse
 * @param {string} content - contenu du collapse
 * @returns itération pour chaque collapse avec map()
 */

export default function About() {
    useEffect(() => {
        document.title = 'Kasa / À propos';
    }, []);

    const aboutData = [
        {
            id: 1,
            title: 'Fiabilité',
            content:
                'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
        },
        {
            id: 2,
            title: 'Respect',
            content:
                'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
            id: 3,
            title: 'Service',
            content:
                "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            id: 4,
            title: 'Responsabilité',
            content:
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ];

    return (
        <main>
            <section className="about__banner">
                <img src={banner} alt="banner"></img>
            </section>
            <section className="about__collapse">
                {aboutData.map((data) => {
                    return (
                        <div key={data.id} className=" collapse">
                            <Collapse
                                title={data.title}
                                content={data.content}
                            />
                        </div>
                    );
                })}
            </section>
        </main>
    );
}
