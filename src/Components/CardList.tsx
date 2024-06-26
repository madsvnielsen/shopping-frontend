import { Card } from "../interfaces/Card.tsx";
import ShopCard from "./ShopCard.tsx";
import "./CardList.css";

function CardList(props: { cards: Card[]; currentPage: number; totalPages: number; setIsAdded: (cardId: string) => void; addedCards: Set<string>; setAddedCards: (cards: Set<string>) => void }) {

    return (
        <div className="CardList">
            {props.cards && props.cards.map((card, index) => (
                <ShopCard
                    key={index}
                    card={card}
                    setIsAdded={() => props.setIsAdded(card.id)}
                    addedCards={props.addedCards}
                />
            ))}
        </div>
    );
}

export default CardList;
