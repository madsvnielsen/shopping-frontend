import {useEffect, useState, useContext} from "react";
import ShoppingCart from "./../Components/ShoppingCart.tsx";
import {BasketItem, DetailedBasketItem} from "./../interfaces/BasketItem";
import {Card} from "./../interfaces/Card.tsx";
import {PokemonAPI} from "./../PokemonAPI.ts";
import Banner from "./../Components/Banner.tsx";
import StatusBar from "./../Components/StatusBar";
import DiscountBanner from "./../Components/DiscountBanner";
import RecommendedProducts from "./../Components/RecommendedProducts";
import { BasketContext } from "../App.tsx";



const recommendedMock: string[] = [
    "base2-4",
    "xy1-4",
    "xy2-5",
    "base3-4",
    "base4-4",
    "base5-4"
]


export function BasketOverview() {
    const [isLoading] = useState(true)
    const [recommendedItems, setRecommendedItems] = useState([] as Card[])
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


    const addBasketItem = async (card: Card) => {

        const newItem: DetailedBasketItem = {
            id: card.id,
            card: card,
            quantity: 1,
            isLaminated: false
        }

        await PokemonAPI.addToBasket(card.id, "1")
        setBasket([...basket, newItem]);
    }

    useEffect(() => {
            async function loadBasketItems() {
                try {
                    const itemsInBasket: BasketItem[] = await PokemonAPI.getBasket();

                    const temp = [];
                    console.log(itemsInBasket)

                    for await (const item of itemsInBasket) {
                        const detailedItem = {
                            id: item.id,
                            quantity: item.quantity,
                            card: await PokemonAPI.getCard(item.id),
                            isLaminated: item.isLaminated,
                        };
                        temp.push(detailedItem)
                    }
                    setBasket(temp)


                } catch (error) {
                    console.error("Error loading basket items:", error);
                }
            }

            async function loadRecommendedProducts() {
                const newRecommendedItems: Card[] = []
                for await (const id of recommendedMock) {
                    const card: Card = await PokemonAPI.getCard(id);
                    newRecommendedItems.push(card);
                }

                setRecommendedItems(newRecommendedItems);

            }
        loadBasketItems();
        loadRecommendedProducts()
        }

        ,
        []
    )

    const nothingToDisplayText = isLoading ? <h1 className="loading-text">Loading...</h1> :
        <h1>Your shopping cart is empty!</h1>


    return (
        <div>
            <Banner goToBasket={false}/>
            <StatusBar activeStep={1}/>
            <DiscountBanner />
            {recommendedItems.length > 0 && <ShoppingCart basketItems={basket} updateBasketItem={updateBasketItem} />}
            {recommendedItems.length === 0 && nothingToDisplayText}
            <RecommendedProducts
                productsList={recommendedItems}
                onProductAdded={addBasketItem}
            />
        </div>
    );
}
