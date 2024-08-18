
// import of style and proptypes (react)
import PropTypes from 'prop-types';
import '../../styles/card.scss';

function Card({ id, image, title }) { //props needed for each card 
    return (
        <div className="card" id={id} style={{ backgroundImage: `url(${image})` }}>
            
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