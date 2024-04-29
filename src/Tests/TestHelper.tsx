import { PropsWithChildren, useState } from "react";
import { BasketItem, DetailedBasketItem } from "../interfaces/BasketItem";
import { BasketContext, OrderInfoContext } from "../App";
import { MemoryRouter } from "react-router-dom";
import { PokemonAPI } from "../PokemonAPI";




  export function MockComponent(props: PropsWithChildren){

    const [basket, setBasket] = useState([] as DetailedBasketItem[])
    const [orderInfo, setOrderInfo] = useState({
        paymentMethod: "credit_card",
        streetName: "",
        city: "",
        zipCode: "",
        fullName: "",
        phoneNumber: "",
        email: ""
    } as OrderInfo)

    return(
    <BasketContext.Provider value={{basket, setBasket}}>
    <OrderInfoContext.Provider value={{orderInfo, setOrderInfo}}>
    <MemoryRouter>
    {props.children}
    </MemoryRouter>
    </OrderInfoContext.Provider>
    </BasketContext.Provider>
    );

}


export async function MockBasket(items : BasketItem[]) : Promise<DetailedBasketItem[]>{
    

    window.sessionStorage.setItem("sessionId", "test")
    await PokemonAPI.clearBasket();
    const basketItems : DetailedBasketItem[] = []
        for await(const item of items) {
            await PokemonAPI.addToBasket(item.id, item.quantity.toString());
            const card = await PokemonAPI.getCard(item.id)
            basketItems.push({
                card: card,
                quantity: 1
            } as DetailedBasketItem);
        }
    return basketItems;
}