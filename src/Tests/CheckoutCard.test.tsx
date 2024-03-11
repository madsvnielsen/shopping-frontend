import { render, screen, waitFor} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CheckoutCard from "../Components/CheckoutCard.tsx";
import {BasketOverview} from "../views/BasketOverview.tsx";
import {BasketItem, DetailedBasketItem} from "../interfaces/BasketItem.ts";
import { userEvent } from '@testing-library/user-event';
import {Card} from "../interfaces/Card.tsx";
import {PokemonAPI} from "../PokemonAPI.ts";

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

describe(CheckoutCard.name, async () => {

    const basketItems : DetailedBasketItem[] = []
    for await (const item of basketMock) {
        const card : Card = await PokemonAPI.getCard(item.id)
        basketItems.push({
            id: item.id,
            card: card,
            quantity: item.quantity,
            isLaminated: item.isLaminated
        } as DetailedBasketItem)
    }

    it("should render", async () => {
        render(<BasketOverview basketMock={basketMock} />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();

        await waitFor(() => expect(screen.getByText('Chansey')).toBeInTheDocument(), { timeout: 5000 });


        expect(screen.getByText(basketItems[0].card.name)).toBeInTheDocument();
        expect(screen.getByText(basketItems[0].card.set.name)).toBeInTheDocument();

        const image : HTMLImageElement | null = document.querySelector('img[alt="Chansey"]');
        expect(image).not.toBeNull();

        if (image) {
            expect(image.src).toContain(basketItems[0].card.images.small);
            expect(image.alt).toBeDefined();
        }
    });


    it('should allow for input', async () => {
        const user = userEvent.setup();

        render(<BasketOverview basketMock={basketMock} />);

        await waitFor(() => expect(screen.getByText('Chansey')).toBeInTheDocument(), { timeout: 5000 });

        const numberInput =  document.querySelector('input[type="number"]'); // More general selector

        // this code gives an error and the code needs to be fixed
        if (numberInput) {
            await user.clear(numberInput);
            await user.type(numberInput, '123');
        }

        expect(numberInput).toHaveValue(123);

        const price : string = (basketItems[0].card.cardmarket.prices.averageSellPrice*123).toString();
        console.log(price)

        expect(screen.getByText(/price/gm)).toBeInTheDocument();
    });


    it('should remove card', async () => {

        render(<BasketOverview basketMock={basketMockSingleCard} />);

        await waitFor(() => expect(screen.getByText('Chansey')).toBeInTheDocument(), { timeout: 5000 });

        const button = screen.getByTestId('delete');
        await userEvent.click(button);

        expect(screen.queryByText(basketItems[0].card.name)).toBeNull();
    });
});