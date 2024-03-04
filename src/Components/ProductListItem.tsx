import {Card} from "./../interfaces/Card"
import {useState} from "react";


function ProductListItem (props : {card: Card, onProductAdded : (card : Card ) => void}){

    const [isAdded, setIsAdded] = useState(false);

    return (<li className="productItem">
    <span className="productTitle">{props.card.name}</span>
    <img src={props.card.images.small} className="pokeImg"/>
    <br/>
    <span className="productPrice">{'Only $'+props.card.cardmarket.prices.averageSellPrice}</span>
    {isAdded ? <span className="productPrice">Added to basket!</span>: <button className="addProductButton" onClick={() => {
        props.onProductAdded(props.card);
        setIsAdded(true);
    }}>+</button>}

    </li>
    )
}


export default ProductListItem;
