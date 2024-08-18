
// import of style and of the hook (useState)
import React, { useState } from 'react';
import '../../styles/collapse.scss';

// function that handle the state of the collapse 
const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false); // by default , collapse is false

    const toggleCollapse = () => {
        setIsOpen(!isOpen); // function to switch state  (false/true)
    };

    return (
        <article className={`collapse ${isOpen ? 'open' : ''}`}>
            <section className="collapse-header" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <button className={`arrow ${isOpen ? 'open' : ''}`}></button>
            </section>
            <section className="collapse-content">
                <ul>
                    {content.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Collapse;