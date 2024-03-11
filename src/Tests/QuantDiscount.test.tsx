import { render, screen, waitFor} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {BasketOverview} from "../views/BasketOverview.tsx";
import {BasketItem, DetailedBasketItem} from "../interfaces/BasketItem.ts";
import {Card} from "../interfaces/Card.tsx";
import {PokemonAPI} from "../PokemonAPI.ts";
import quantDiscount from "../HelperFunction/QuantDiscount.ts";



const basketMockSingleCard : BasketItem[] = [{
    id: "base1-3",
    quantity : 4,
    isLaminated: false
}
]
describe(quantDiscount.name, () => {



  it("Should give discount", async() =>{

      const basketItems : DetailedBasketItem[] = []
      for await (const item of basketMockSingleCard) {
          const card : Card = await PokemonAPI.getCard(item.id)
          basketItems.push({
              id: item.id,
              card: card,
              quantity: item.quantity,
              isLaminated: item.isLaminated
          } as DetailedBasketItem)
      }
      render(<BasketOverview basketMock={basketMockSingleCard} />);

      await waitFor(() => expect(screen.getByText(basketItems[0].card.name)).toBeInTheDocument(), { timeout: 5000 });

      const price : string = ((basketItems[0].card.cardmarket.prices.averageSellPrice*4)*0.1).toFixed(2);
      console.log(price)
      const priceRegex= new RegExp(price)
      expect(screen.getByText(priceRegex)).toBeInTheDocument();

    } )

})
