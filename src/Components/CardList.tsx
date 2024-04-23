import { Card } from "../interfaces/Card.tsx";
import ShopCard from "./ShopCard.tsx";
import "./CardList.css";

function CardList(props: { cards: Card[]; currentPage: number; totalPages: number; setIsAdded: (cardId: string) => void; addedCards: Set<string>; setAddedCards: (cards: Set<string>) => void }) {
    const cardsPerPage = 8; // Assuming 8 cards per page
    const startIndex = (props.currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return (
        <div className="CardList">
            {props.cards.slice(startIndex, endIndex).map((card, index) => (
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
