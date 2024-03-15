import {Card} from "../interfaces/Card.tsx";
import "./CardComponent.css"


function CardComponent( props: {card: Card}){



    return(
        <div className="CardBox">
        <div>
            <img src={props.card.images == undefined ? "-" : props.card.images.small} className="pokemonImg"
                 alt={props.card.name}/>
        </div>
            <p className="pricetext">
            ${props.card.cardmarket.prices.averageSellPrice}
            </p>
            <button className="Button">
                Add to cart
            </button>
        </div>
    )
    /*return(
        <div>
            <div>
                {props.cards.map((card: CardComponent)   => <img src={card.images == undefined ? "-" : card.images.small} className="pokemonImg"
                                        alt={card.name}/>)}
            </div>
        </div>

    )
    */
}



export default CardComponent