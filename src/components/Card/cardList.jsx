
// component
import Card from './card.jsx';
// data
import cardData from '../../data/logements.json';
// style
import '../../styles/cardlist.scss'

/**
 * CardList component that maps over the card data and generates a list of Card components.
 * 
 * @function CardList
 * @returns {JSX.Element} The rendered list of Card components, each representing an accommodation.
 */

// function to set each card in cardlist with their own props
const CardList = () => {  
    return ( // Wrapper element for the card list, applying styles defined in 'cardlist.scss'
        <article className="card-list">
            {cardData.map(card => ( // iterate trough all card in cardData with map()
                <Card
                    key={card.id}
                    id={card.id}
                    image={card.cover}
                    title={card.title}
                />
            ))}
        </article>
    );
};

export default CardList;