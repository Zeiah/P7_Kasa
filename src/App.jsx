import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/prefixed/index.css';
import Header from './layout/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Accommodation from './pages/Accommodation/Accommodation';
import Error from './pages/Error/Error';
import Footer from './layout/Footer';

export default function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/accommodation/:id" element={<Accommodation />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
}
