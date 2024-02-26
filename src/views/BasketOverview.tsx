
import {useEffect, useState} from "react";
import ShoppingCart from "./../Components/ShoppingCart.tsx";
import {BasketItem, DetailedBasketItem} from "./../interfaces/BasketItem";
import {Card} from "./../interfaces/Card.tsx";
import {PokemonAPI} from "./../PokemonAPI.ts";
import Banner from "./../Components/Banner.tsx";

const basketMock : BasketItem[] = [{
    id: "base1-3",
    quantity : 1,
    isLaminated: false
},
{
    id: "xy1-5",
    quantity : 2,
    isLaminated: false
},
{
    id: "base1-2",
    quantity : 1,
    isLaminated: false
},
{
    id: "base1-7",
    quantity : 4,
    isLaminated: true
},
{
    id: "base2-7",
    quantity : 3,
    isLaminated: false
},
]



export function BasketOverview() {
    let [basketItems, setBasketItems] = useState([] as DetailedBasketItem[])





    const updateBasketItem = (basketItem : DetailedBasketItem) =>  {



        const index = basketItems.findIndex(item => item.id === basketItem.id);
        const newBasketItems = [... basketItems];


        //Change item if quantity is positive, otherwise remove item.
        if(basketItem.quantity > 0){
            newBasketItems[index] = basketItem;
        } else{
            newBasketItems.splice(index, 1);
        }

        setBasketItems(newBasketItems)
    }

    useEffect(() => {
        async function loadBasketItems(){
            const newBasketItems : DetailedBasketItem[] = []
            for await (const item of basketMock) {
                const card : Card = await PokemonAPI.getCard(item.id)
                newBasketItems.push({
                    id: item.id,
                    card: card,
                    quantity: item.quantity,
                    isLaminated: item.isLaminated
                } as DetailedBasketItem)
            }
            setBasketItems(newBasketItems)
        }

        loadBasketItems()

    }, [])

    return (
        <div style={{width: "100%"}}>
            <Banner/>
            <ShoppingCart basketItems={basketItems} updateBasketItem={updateBasketItem} />
        </div>

    )
}
