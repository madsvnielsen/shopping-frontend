import Banner from "../Components/Banner.tsx";
import StatusBar from "../Components/StatusBar.tsx";
import RecieptSummary from "../Components/RecieptSummary.tsx";
import "./RecieptView.css";
import {useContext} from "react";
import {BasketContext} from "../App.tsx";
import {DetailedBasketItem} from "../interfaces/BasketItem.ts";
import {PokemonAPI} from "../PokemonAPI.ts";
import RecieptProducts from "../Components/RecieptProducts.tsx";




export function RecieptView() {
    const { basket, setBasket } = useContext(BasketContext);
    const updateBasketItem = async (basketItem: DetailedBasketItem) => {

        const index = basket.findIndex(item => item.id === basketItem.id);
        const newBasketItems = [...basket];

        //Change item if quantity is positive, otherwise remove item.
        if (basketItem.quantity >= 0 || isNaN(basketItem.quantity)) {
            await PokemonAPI.removeFromBasket(basketItem.id)
            await PokemonAPI.addToBasket(basketItem.id, basketItem.quantity.toString())
            newBasketItems[index] = basketItem;
        } else {
            await PokemonAPI.removeFromBasket(basketItem.id)
            newBasketItems.splice(index, 1);
        }
        setBasket(newBasketItems)
    }






        return (
            <div className="shopPage">
                <Banner goToBasket={true}/>
                <StatusBar activeStep={4}/>
                <p className="OrderText">Your order has been confirmed</p>
                <RecieptSummary/>
                <div className="line"></div>
                <div className="info">
                    <p className="productText"> Order information </p>

                    <p className="productText"> Products</p>
                </div>
                <div className="line"></div>
                {basket.map((basketItem, index) => (
                    <RecieptProducts key={index} basketItem={basketItem} updateBasketItem={updateBasketItem} />
                ))}
            </div>)
    }