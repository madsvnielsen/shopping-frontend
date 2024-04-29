import { render, screen, waitFor} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CheckoutCard from "../Components/CheckoutCard.tsx";
import {BasketOverview} from "../views/BasketOverview.tsx";
import {BasketItem, DetailedBasketItem} from "../interfaces/BasketItem.ts";
import {PokemonAPI} from "../PokemonAPI.ts";
import {  MemoryRouter } from "react-router-dom";
import { useState } from "react";
import { BasketContext, OrderInfoContext } from "../App.tsx";
import { userEvent } from '@testing-library/user-event';

const basketMock : BasketItem[] = [{
        id: "base1-3",
        quantity : 1,
        isLaminated: false
    },
    {
        id: "xy1-4",
        quantity : 1,
        isLaminated: false
    }
]


const basketMockSingleCard : BasketItem[] = [{
    id: "base1-3",
    quantity : 1,
    isLaminated: false
}
]


const localStorageMock = (() => {
    let store : {key : string, value : str} = {};
  
    return {
      getItem(key : string) {
        return store[key] || null;
      },
      setItem(key : string, value : string) {
        
        store[key] = value.toString();
      },
      removeItem(key : string) {
        delete store[key];
      },
      clear() {
        store = {};
      }
    };
  })();
  
  

function MockComponent(){

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
    <BasketOverview />
    </MemoryRouter>
    </OrderInfoContext.Provider>
    </BasketContext.Provider>
    );

}


async function MockBasket(items : BasketItem[]) : Promise<DetailedBasketItem[]>{
    Object.defineProperty(window, 'sessionStorage', {
        value: localStorageMock
      });

    window.sessionStorage.setItem("sessionId", "test")
    await PokemonAPI.clearBasket();
    const basketItems : DetailedBasketItem[] = []
        for await(const item of items) {
            await PokemonAPI.addToBasket(item.id, "1");
            const card = await PokemonAPI.getCard(item.id)
            basketItems.push({
                card: card,
                quantity: 1
            } as DetailedBasketItem);
        }
    return basketItems;
}

describe(CheckoutCard.name, async () => {
    

    it("should render", async () => {
        const basketItems : DetailedBasketItem[] = await MockBasket(basketMock);

        
        render(<MockComponent/>);


        expect(screen.getByText("Loading...")).toBeInTheDocument();

        await waitFor(() =>{
            expect(screen.getByText(basketItems[0].card.name)).toBeInTheDocument();
            expect(screen.getByText(basketItems[0].card.set.name)).toBeInTheDocument();
            const image : HTMLImageElement | null = document.querySelector('img[alt="Chansey"]');
            expect(image).not.toBeNull();
            if (image) {
                expect(image.src).toContain(basketItems[0].card.images.small);
                expect(image.alt).toBeDefined();
            }

        } , {timeout: 10000})    
        
        
    
    });
    it('should allow for input', async () => {
        const basketItems : DetailedBasketItem[] = await MockBasket(basketMock);
        const user = userEvent.setup();
        render(<MockComponent/>);
        await waitFor(async () =>{
        const numberInput =  document.querySelector('input[type="number"]'); 
            
        if (numberInput) {
            await user.clear(numberInput);
            await user.type(numberInput, '123');
        }

        expect(numberInput).toHaveValue(123);

        let itemPrice: string = "0";
        if (basketItems[0].card.cardmarket.prices.averageSellPrice !== null) {
            itemPrice = (basketItems[0].card.cardmarket.prices.averageSellPrice*123).toString();
        }
        const priceRegex = new RegExp(itemPrice);
        expect(screen.getByText(priceRegex)).toBeInTheDocument();
    } , {timeout: 10000})   
    }) 

    it('should remove card', async () => {
        const basketItems : DetailedBasketItem[] = await MockBasket(basketMockSingleCard);
        
        render(<MockComponent/>);
        await waitFor(async () =>{
        const button = screen.getByTestId('delete');
        await userEvent.click(button);

        expect(screen.queryByText(basketItems[0].card.name)).toBeNull();
    } , {timeout: 10000}) 
    })  
});