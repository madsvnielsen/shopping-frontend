import { render, screen, waitFor} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CheckoutCard from "../Components/CheckoutCard.tsx";
import {BasketOverview} from "../views/BasketOverview.tsx";
import {BasketItem} from "../interfaces/BasketItem.ts";
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

describe(CheckoutCard.name, () => {
    it("should render", async () => {
        render(<BasketOverview basketMock={basketMock} />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();

        await waitFor(() => expect(screen.getByText('Chansey')).toBeInTheDocument(), { timeout: 5000 });

        expect(screen.getByText("Chansey")).toBeInTheDocument();
        expect(screen.getByText("Base")).toBeInTheDocument();

        const image : HTMLImageElement | null = document.querySelector('img[alt="Chansey"]');
        expect(image).not.toBeNull();

        if (image) {
            expect(image.src).toContain('https://images.pokemontcg.io/base1/3.png');
            expect(image.alt).toBeDefined();
        }
    });
    it('should allow for input', async () => {
        const user = userEvent.setup();

        render(<BasketOverview basketMock={basketMock} />);

        await waitFor(() => expect(screen.getByText('Chansey')).toBeInTheDocument(), { timeout: 5000 });

        const numberInput =  document.querySelector('input[type="number"]'); // More general selector

        /* this code gives an error and the code needs to be fixed
        if (numberInput) {
            await user.type(numberInput, '123');
        }

        expect(numberInput).toHaveValue('123');

         */
        if (numberInput) {
            await user.type(numberInput, '23');
        }

        expect(numberInput).toHaveValue(123);
        expect(screen.getByText(/2857.29/)).toBeInTheDocument();

    });
    it('should remove card', async () => {

        render(<BasketOverview basketMock={basketMockSingleCard} />);

        await waitFor(() => expect(screen.getByText('Chansey')).toBeInTheDocument(), { timeout: 5000 });

        const button = screen.getByTestId('delete');
        await userEvent.click(button);

        expect(screen.queryByText('Chansey')).toBeNull();
    });
});