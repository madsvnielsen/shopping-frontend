import { render, screen, waitFor} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CheckoutCard from "../Components/CheckoutCard.tsx";
import RecommendedProducts from "../Components/RecommendedProducts.tsx";
import {BasketItem} from "../interfaces/BasketItem.ts";
import {Card} from "../interfaces/Card.ts";
import { userEvent } from '@testing-library/user-event';
import {PokemonAPI} from "../PokemonAPI.ts"

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

const mockProductsList : Array<Card> = []

const recommendedMock : string[] = [
    "base2-4",
    "xy1-4",
    "xy2-5",
    "base3-4",
    "base4-4",
    "base5-4"
]

async function loadRecommendedProducts(){
    for await (const id of recommendedMock){
        const card : Card = await PokemonAPI.getCard(id);
        mockProductsList.push(card);
    }
}


describe(RecommendedProducts.name, async () => {

    await loadRecommendedProducts()

    it("should render", async () => {
        render(<RecommendedProducts productsList={mockProductsList}  onProductAdded={(card : Card) => {}}/>);
        expect(screen.getByText("We think you might like...")).toBeInTheDocument();

        await waitFor(() => expect(screen.getByText('Jolteon')).toBeInTheDocument(), { timeout: 5000 });
        expect(screen.getByText("Only $25.24")).toBeInTheDocument();

    });
    it('should allow for adding', async () => {
        const user = userEvent.setup();
        let chosenCard : Card | undefined= undefined;
        render(<RecommendedProducts productsList={mockProductsList}  onProductAdded={(card : Card) => {chosenCard = card}}/>);
        const addButton = screen.getByTestId("rec-btn-Jolteon")
        expect(addButton).not.null
        if(addButton != null){
            await userEvent.click(addButton)
        }
        expect(screen.getByText("Added to basket!")).toBeInTheDocument()

    });
});
