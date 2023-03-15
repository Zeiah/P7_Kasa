import Collapse from '../../components/Collapse';
import banner from '../../assets/banner__about.png';

export default function About() {
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
            {aboutData.map((data) => {
                return (
                    <section key={data.id} className="about__collapse">
                        <Collapse title={data.title} content={data.content} />
                    </section>
                );
            })}
        </main>
    );
}
