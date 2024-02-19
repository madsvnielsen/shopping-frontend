import {ISet} from "./ISet";
import {ICardImage} from "./ICardImage.tsx";
import {ICardmarket} from "./ICardMarket.tsx";

export interface Card {
    id: string;
    name: string;
    set: ISet;
    rarity: string;
    images: ICardImage;
    cardmarket: ICardmarket;
}
