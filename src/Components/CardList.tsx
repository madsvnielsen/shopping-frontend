import {Card} from "../interfaces/Card.tsx";
import CardComponent from "./CardComponent.tsx";
import "./CardList.css"

function cardList(props: {cards: Card[]}) {
    return(
    <div className="CardList">
        {props.cards.map((basketItem) => (
            <CardComponent card={basketItem}/>
        ))}
    </div>
    )
}
export default cardList