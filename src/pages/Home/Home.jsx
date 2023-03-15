import Gallery from '../../components/Gallery';

export default function Home() {
    return (
        <main>
            <section className="home__banner">
                <h1>Chez vous, partout et ailleurs</h1>
            </section>
            <section className="home__gallery">
                <Gallery />
            </section>
        </main>
    );
}
