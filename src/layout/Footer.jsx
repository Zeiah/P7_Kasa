import React from 'react';
import logo from '../assets/logo-footer.png';

/**
 * Affichage footer
 *  @param {img} logo - logo footer
 * @returns html
 */

export default function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Kasa, location d'appartement"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
