import { render, screen, waitFor} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CheckoutCard from "../Components/CheckoutCard.tsx";
import {BasketOverview} from "../views/BasketOverview.tsx";
import {BasketItem, DetailedBasketItem} from "../interfaces/BasketItem.ts";
import { userEvent } from '@testing-library/user-event';
import { MockBasket, MockComponent } from "./TestHelper.tsx";

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


function BasketMockComponent() {
    return(
        <MockComponent>
            <BasketOverview/>
        </MockComponent>
    )
}






describe(CheckoutCard.name, async () => {
    

    it("should render", async () => {
        const basketItems : DetailedBasketItem[] = await MockBasket(basketMock);
        render(<BasketMockComponent/>);
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

        } , {timeout: 20000})    
        
        
    
    });
    it('should allow for input', async () => {
        const basketItems : DetailedBasketItem[] = await MockBasket(basketMock);
        const user = userEvent.setup();
        render(<BasketMockComponent/>);
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
    } , {timeout: 20000})   
    }) 

    it('should remove card', async () => {
        const basketItems : DetailedBasketItem[] = await MockBasket(basketMockSingleCard);
        
        render(<BasketMockComponent/>);
        await waitFor(async () =>{
        const button = screen.getByTestId('delete');
        await userEvent.click(button);

        expect(screen.queryByText(basketItems[0].card.name)).toBeNull();
    } , {timeout: 20000}) 
    })  
});