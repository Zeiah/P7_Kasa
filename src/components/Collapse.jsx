import { useState } from 'react';
import arrow from '../assets/arrow_back_collapse.png';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="collapse__close">
                <h2>{title}</h2>
                <button onClick={handleIsOpen}>
                    <img src={arrow} alt="button"></img>
                </button>
            </div>
            <div className="collapse__open">
                {isOpen ? <p>{content}</p> : null}
            </div>
        </>
    );
};

export default Collapse;
