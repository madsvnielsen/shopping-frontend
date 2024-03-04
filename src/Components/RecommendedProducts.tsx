import './RecommendedProducts.css'
import {Card} from "./../interfaces/Card"
import ProductListItem from "./ProductListItem"

function RecommendedProducts( props : {productsList : Array<Card>, onProductAdded : (card :Card ) => void}) {

    return (
        <div className="recommendedWrapper">
            <h1>We think you might like...</h1>
            <div className="productsContainer">
            <ul className="productList">
                {props.productsList.map((card : Card) => {
                    return (<ProductListItem key={card.id} card={card}
                        onProductAdded={props.onProductAdded}/>)
                })}
            </ul>
            </div>
        </div>

    )
}

export default RecommendedProducts
