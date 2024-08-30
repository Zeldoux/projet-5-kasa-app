// data (img)
import emptyStar from '../../img/icon/emptyStar.png';
import fullStar from '../../img/icon/Fullstar.png';

// style 
import '../../styles/rating.scss';

/**
 * Rating component displays a star-based rating system.
 * 
 * @component
 * @param {Object} props - The properties passed to this component.
 * @param {number} props.rating - The rating value (from 1 to 5) to be displayed using star icons.
 * @returns {JSX.Element} The rendered component showing the appropriate number of full and empty stars based on the rating.
 */


const Rating = ({rating}) => {
    // Array representing the star positions (1 to 5)
    const starRating = [1,2,3,4,5]
    

    return ( // Map over the starRating array to generate star icons based on the rating 
        <section className="rating">
        {starRating.map((starsrating) => 
        rating >= starsrating ? <span key={starsrating.toString() }><img src={fullStar} alt="Yellow Stars"/></span> : <span key={starsrating.toString()}><img src={emptyStar} alt="Grey stars"/></span>
            
        )}
        </section>

    )

}
export default Rating;