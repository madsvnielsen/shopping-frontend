import {Card} from "../interfaces/Card.tsx";
import "./ShopCard.css"
import {PokemonAPI} from "../PokemonAPI.ts";


function ShopCard(props: { card: Card; setIsAdded: () => void; addedCards: Set<string> }) {
    const {card} = props;


    return (
        <div className="CardBox">
            <img src={props.card.images == undefined ? "-" : props.card.images.small} className="pokemonImg"
                 alt={props.card.name}/>
            <p className="pricetext">
                ${props.card.cardmarket.prices.averageSellPrice}
            </p>
            {props.addedCards.has(card.id) ? ( // Use addedCards prop
                <span className="pricetext">Added to cart!</span>
            ) : (
                <button
                    data-testid={"rec-btn-" + props.card.name}
                    className="Button"
                    onClick={() => {
                        PokemonAPI.addToBasket(props.card.id, "1")
                        props.setIsAdded();
                    }}
                >
                    Add to cart
                </button>
            )}
        </div>
    );
}

export default ShopCard