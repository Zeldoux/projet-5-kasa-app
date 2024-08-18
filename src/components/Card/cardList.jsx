
// import of data and component
import cardData from '../../data/logements.json';
import Card from './card.jsx';
import '../../styles/cardlist.scss'


// function to set each card in cardlist with their own props
function CardList() {
    return (
        <div className="card-list">
            {cardData.map(card => ( // iterate trough all card in cardData with map()
                <Card
                    key={card.id}
                    id={card.id}
                    image={card.pictures[0]}
                    title={card.title}
                />
            ))}
        </div>
    );
};

export default CardList;