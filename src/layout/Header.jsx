import React from 'react';
import logo from '../assets/logo-header.png';
import NavBar from '../components/NavBar';

/**
 * Affichage header
 * @param {img} logo - logo header
 * @returns html
 */

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Kasa, location d'appartements"></img>
            </div>
            <NavBar />
        </header>
    );
}
