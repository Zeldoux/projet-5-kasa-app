
// react proptypes and navigate
import PropTypes from 'prop-types'; // PropTypes is used for type-checking the props passed to the component
import { useNavigate } from 'react-router-dom'; // to navigate to another page use navigate


// style 
import '../../styles/card.scss'; // Importing the stylesheet for the Card component

/**
 * Card Component
 * 
 * @component
 * 
 * @description
 * This component represents a single card element that displays an image and a title. 
 * Each card is clickable and navigates the user to the accommodation details page when clicked.
 * 
 * @param {Object} props - The properties passed to this component
 * @param {string} props.id - The unique identifier for the accommodation associated with this card
 * @param {string} props.image - The URL of the image to be displayed on the card
 * @param {string} props.title - The title of the accommodation to be displayed on the card
 * 
 * @returns {JSX.Element} A clickable card element that navigates to the accommodation page
 */

const Card = ({ id, image, title}) => { //props needed for each card 
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/accommodation/${id}`);
    }
    return (
        <div className="card" style={{ backgroundImage: `url(${image})` }} onClick={handleClick} aria-label={title} >
            
            <h3 className="card-title">{title}</h3>
        </div>
    );
}
// set card props type and set it to required 
Card.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};


export default Card;