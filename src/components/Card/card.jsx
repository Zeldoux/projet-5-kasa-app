import PropTypes from 'prop-types';
import '../../styles/card.scss';

function Card({ id, image, title }) { //props needed for each card 
    return (
        <div className="card" id={id} style={{ backgroundImage: `url(${image})` }}>
            
            <h3 className="card-title">{title}</h3>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};


export default Card;