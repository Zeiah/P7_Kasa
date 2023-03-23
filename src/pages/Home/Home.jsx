import React from 'react';
import { useEffect } from 'react';
import Gallery from '../../components/Gallery';

export default function Home() {
    useEffect(() => {
        document.title = 'Kasa / Home';
    }, []);

    return (
        <main>
            <section className="home__banner">
                <h1>
                    <span>Chez vous,</span>
                    <span>partout et ailleurs</span>
                </h1>
            </section>
            <section className="home__gallery">
                <Gallery />
            </section>
        </main>
    );
}
