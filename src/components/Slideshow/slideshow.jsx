/**
 * SlideShow Component
* 
* @component
* @param {Object} props - Component properties
* @param {string[]} props.image - Array of image URLs to be displayed in the slideshow
* 
* @description
* A slideshow component that displays images with next and previous controls.
* The component allows cycling through images in both directions and handles cases
* where there's only one image to display.
* 
* @example
* // Example usage:
* <SlideShow image={["img1.jpg", "img2.jpg", "img3.jpg"]} />
*/

import React, { useState } from 'react';
import '../../styles/slideshow.scss';



// set slide function using useState and setting an index 
const SlideShow = ({image}) => {
    const [currentIndex,setCurrentIndex] = useState(0);
     /**
     * Advances to the next slide. 
     * Uses modulo to wrap around to the first image after the last one.
     */
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex +1) % image.length);
    };
     /**
     * Goes back to the previous slide. 
     * Uses modulo to wrap around to the last image if currently at the first one.
     */
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex -1 + image.length) % image.length)
    };


    return(
         
         <article className="slideshow">
         <section className="slideshow-content">

            {image.length > 1 ? (  // Check if there is more than 1 image to display in the slideshow
                <>
                    <button className="slideshow-prev" onClick={prevSlide}></button>
                    <img src={image[currentIndex]} alt="Slideshow" className="slideshow-image" />
                    <p className="slideshow-index">{currentIndex + 1}/{image.length}</p>
                    <button className="slideshow-next" onClick={nextSlide}></button>
                </>
            ) : (  // if there is not more than 1 not display button and slideshow index 
                <img src={image[currentIndex]} alt="Slideshow" className="slideshow-image" />
            )}
         </section>
     </article>
    )

};

export default SlideShow;