import './CheckoutCard.css'
import {DetailedBasketItem} from "../interfaces/BasketItem.ts";


function CheckoutCard(props: { basketItem: DetailedBasketItem, updateBasketItem: (item: DetailedBasketItem) => void }) {
    const card = props.basketItem.card;
    let price: number | string = "-";
    if (card.cardmarket?.prices.averageSellPrice != undefined) {
        price = (card.cardmarket.prices.averageSellPrice * props.basketItem.quantity).toFixed(2)
    }

    const updateItemQuantity = (newQuantity: number) => {
        const newItem = props.basketItem
        newItem.quantity = newQuantity
        props.updateBasketItem(newItem)
    }


    function clickCheckbox() {
        if (!card.laminate) {
            card.laminate = true;
        } else card.laminate = false;
    }

    const enforceMinMax = (event: React.ChangeEvent<HTMLInputElement>) => {

        const {value, max} = event.target;

        /*
        if (parseInt(value) < parseInt(min)) {
            event.target.value = min;
        }

         */
        if (parseInt(value) > parseInt(max)) {
            event.target.value = max;
        }
        if (parseInt(event.target.value) >= 0) {
            updateItemQuantity(parseInt(event.target.value))
        } else {
            updateItemQuantity(0)
        }



        updateItemQuantity(parseInt(event.target.value))

    };

    return (
        <div className="box">
            <div className="imgBox">
                <img src={card.images == undefined ? "-" : card.images.small} className="pokemonImg"
                     alt={card.name}/>
            </div>

            <div className="textBox">
                <p className="headline">
                    Name
                </p>
                <p>
                    {card.name}
                </p>
                <p className="headline">
                    Set
                </p>
                <p>
                    {card.set == undefined ? "-" : card.set.name}
                </p>
                <p className="headline">
                    Rarity
                </p>
                <p>
                    {card.rarity}
                </p>
            </div>
            <div className="textBox">
                <label className="quantity">Quantity</label>
                <input type="number" value={props.basketItem.quantity} min="0" max="1000" onChange={enforceMinMax}/>
                <label className="laminate">

                    <input
                        type="checkbox" id="box" name="laminating" value='box'
                        onClick={clickCheckbox}
                    />
                    Laminate
                </label>

                <p>
                    $ {card.cardmarket.prices.averageSellPrice} x {props.basketItem.quantity}
                    <br/>
                    $ {price}
                </p>
                <button className="deleteButton" data-testid="delete" onClick={() => {
                    updateItemQuantity(-1)
                }}>Remove
                </button>

            </div>
        </div>
    )
}

export default CheckoutCard
