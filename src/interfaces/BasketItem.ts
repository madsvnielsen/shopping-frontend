import {Card} from "./Card"

export interface BasketItem{
    id: string,
    quantity : number,
    isLaminated: boolean
}

export interface DetailedBasketItem extends BasketItem {
    card : Card,
}
