import { render, screen, waitFor} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {BasketOverview} from "../views/BasketOverview.tsx";
import {BasketItem, DetailedBasketItem} from "../interfaces/BasketItem.ts";
import quantDiscount from "../HelperFunction/QuantDiscount.ts";
import { MockBasket, MockComponent } from "./TestHelper.tsx";



const basketMockSingleCard : BasketItem[] = [{
    id: "base1-3",
    quantity : 4,
    isLaminated: false
}
]
describe(quantDiscount.name, () => {



  it("Should give discount", async() =>{

      const basketItems : DetailedBasketItem[] = await MockBasket(basketMockSingleCard)
      render(<MockComponent>
        <BasketOverview/>
      </MockComponent>);

      await waitFor(() => expect(screen.getByText(basketItems[0].card.name)).toBeInTheDocument(), { timeout: 15000 });
      let price: string = "0";
      if (basketItems[0].card.cardmarket.prices.averageSellPrice !== null) {
          price = ((basketItems[0].card.cardmarket.prices.averageSellPrice * 4) * 0.1).toFixed(2);
      }
      const priceRegex= new RegExp(price)
      expect(screen.getByText(priceRegex)).toBeInTheDocument();

    } )

})
