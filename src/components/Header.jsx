import '../styles/index.css';
import logo from '../assets/logo-header.png';
import NavBar from './NavBar';

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
