import React from 'react';
import { useState } from 'react';
import arrow from '../assets/arrow_back_collapse.png';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="collapse__title">
                <h2>{title}</h2>
                <button onClick={handleIsOpen}>
                    <img
                        src={arrow}
                        alt="button"
                        className={isOpen ? 'arrow__rotated' : 'arrow'}
                    ></img>
                </button>
            </div>
            {isOpen ? <p className="collapse__content">{content}</p> : null}
        </>
    );
};

export default Collapse;
