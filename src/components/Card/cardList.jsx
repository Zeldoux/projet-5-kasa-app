import cardData from '../../data/logements.json';
import Card from './card.jsx';
import '../../styles/cardlist.scss'

function CardList() {
    return (
        <div className="card-list">
            {cardData.map(card => (
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