import {useEffect, useState} from "react";
import ShoppingCart from "./../Components/ShoppingCart.tsx";
import {BasketItem, DetailedBasketItem} from "./../interfaces/BasketItem";
import {Card} from "./../interfaces/Card.tsx";
import {PokemonAPI} from "./../PokemonAPI.ts";
import Banner from "./../Components/Banner.tsx";
import StatusBar from "./../Components/StatusBar";
import DiscountBanner from "./../Components/DiscountBanner";
import RecommendedProducts from "./../Components/RecommendedProducts";

const recommendedMock: string[] = [
    "base2-4",
    "xy1-4",
    "xy2-5",
    "base3-4",
    "base4-4",
    "base5-4"
]


export function BasketOverview() {
    const [basketItems, setBasketItems] = useState([] as DetailedBasketItem[])
    const [isLoading] = useState(true)
    const [recommendedItems, setRecommendedItems] = useState([] as Card[])


    const updateBasketItem = (basketItem: DetailedBasketItem) => {

        const index = basketItems.findIndex(item => item.id === basketItem.id);
        const newBasketItems = [...basketItems];

        //Change item if quantity is positive, otherwise remove item.
        if (basketItem.quantity >= 0 || isNaN(basketItem.quantity)) {
            newBasketItems[index] = basketItem;
        } else {
            newBasketItems.splice(index, 1);
        }
        setBasketItems(newBasketItems)
    }


    const addBasketItem = async (card: Card) => {

        const newItem: DetailedBasketItem = {
            id: card.id,
            card: card,
            quantity: 1,
            isLaminated: false
        }


        PokemonAPI.addToBasket(card.id, "1")
        setBasketItems([...basketItems, newItem]);
    }

    useEffect(() => {
            async function loadBasketItems() {
                try {
                    const basketItems: BasketItem[] = await PokemonAPI.getBasket();

                    const detailedBasketItems: DetailedBasketItem[] = await Promise.all(
                        basketItems.map(async (item) => ({
                            id: item.id,
                            quantity: item.quantity,
                            isLaminated: item.isLaminated,
                            card: await PokemonAPI.getCard(item.id),
                        }))
                    );

                    setBasketItems(detailedBasketItems);
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

            loadBasketItems()
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
            <DiscountBanner/>
            {basketItems.length > 0 && <ShoppingCart basketItems={basketItems} updateBasketItem={updateBasketItem}/>}
            {basketItems.length === 0 && nothingToDisplayText}
            <RecommendedProducts
                productsList={recommendedItems}
                onProductAdded={addBasketItem}
            />
        </div>
    );
}
