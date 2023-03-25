import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Affichage page d'erreur
 * @return lien vers page d'accueil avec Link
 * @returns html
 */

export default function Error() {
    useEffect(() => {
        document.title = 'Kasa / Erreur';
    }, []);

    return (
        <div className="error">
            <h1 className="error__404"> 404 </h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error__link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}
