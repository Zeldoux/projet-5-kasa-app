
// import of style and of the hook (useState)
import React, { useState } from 'react';
import '../../styles/collapse.scss';

/**
 * Collapse Component
 * 
 * @component
 * 
 * @description
 * This component handles the display of collapsible content sections.
 *  It allows content to be toggled open or closed when the user interacts with it.
 *  The component is versatile and can handle both string and array content.
 *  rendering them appropriately based on their type.
 * 
 * @param {Object} props - The properties passed to this component
 * @param {string} props.title - The title of the collapsible section
 * @param {string|string[]} props.content - The content to be displayed inside the collapsible section. It can be either a string or an array of strings.
 * 
 * @returns {JSX.Element} A collapsible content section
 */


// function that handle the state of the collapse 
const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false); // by default , collapse is false

    const toggleCollapse = () => {
        setIsOpen(!isOpen); // function to switch state  (false/true)
    };

    return (
        <section className={`collapse ${isOpen ? 'open' : ''}`}>
            <div className="collapse-header" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <button className={`arrow ${isOpen ? 'open' : ''}`}></button>
            </div>
            <div className="collapse-content">
                
                {Array.isArray(content) ? ( // check if content is an array
                    <ul> 
                    {content.map((item, index) => ( // if it is it render a list (ul)
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                // if not an array  (string)
                ) : ( // render text 
                    <p>{content}</p>
                )}
            </div>
        </section>
    );
};

export default Collapse;