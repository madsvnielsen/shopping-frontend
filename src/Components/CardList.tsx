import { Card } from "../interfaces/Card.tsx";
import ShopCardt from "./ShopCardt.tsx";
import "./CardList.css";

function CardList(props: { cards: Card[], currentPage: number}) {
    const { cards, currentPage } = props;
    const cardsPerPage = 10; // Assuming 10 cards per page
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return (
        <div className="CardList">
            {cards.slice(startIndex, endIndex).map((card, index) => (
                <ShopCardt key={index} card={card} />
            ))}
        </div>
    );
}

export default CardList;
