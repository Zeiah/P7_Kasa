import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Barre de navigation
 * @returns liens vers page About et page Home avec Link
 */

export default function NavBar() {
    return (
        <nav className="navBar">
            <ul>
                <li>
                    <Link to="/" className="navBar__link">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="navBar__link">
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
