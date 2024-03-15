import { Card } from "../interfaces/Card.tsx";
import CardComponent from "./CardComponent.tsx";
import "./CardList.css";

function CardList(props: { cards: Card[], currentPage: number, totalPages: number }) {
    const { cards, currentPage } = props;
    const cardsPerPage = 9; // Assuming 10 cards per page
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return (
        <div className="CardList">
            {cards.slice(startIndex, endIndex).map((card, index) => (
                <CardComponent key={index} card={card} />
            ))}
        </div>
    );
}

export default CardList;
