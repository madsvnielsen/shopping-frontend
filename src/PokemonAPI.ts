import {Card} from "./interfaces/Card.tsx";
import {BasketItem} from "./interfaces/BasketItem.ts";

export class PokemonAPI {


    //static apiURL = "http://130.225.170.52:10261/api"
    static apiURL = "http://localhost:3000"


    static token = 'e7c3a10b-7fc1-4ddc-a225-f3412514f740';

    static async getCard(id: string): Promise<Card> {
        try {
        const response: Response = await fetch(`${PokemonAPI.apiURL}/products/` + id,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + "e7c3a10b-7fc1-4ddc-a225-f3412514f740",
                }
            }
        );
        return await response.json();
        } catch (error){
            console.error("Could not get card", error);
            throw new Error("Could not get card");
        }
    }
    static async searchcard(search: string) :Promise<Array<Card>>{
        return fetch('https://api.pokemontcg.io/v2/cards?q=name:' + search+'*&page=1&pageSize=3',
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + "e7c3a10b-7fc1-4ddc-a225-f3412514f740",
                }
            }
        )
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return data.data;
            })
            .catch(error => {
                Promise.reject(error);
            });
    }

    static async listOfCards() {
        try {
            const response = await fetch(
                `${PokemonAPI.apiURL}/products/list`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + PokemonAPI.token,

                    }
                }
            );
            return await response.json();
        } catch (error) {
            console.error("Couldn't get ShopCardt:", error);
            throw new Error("Couldn't get ShopCardt");
        }
    }
    static async order(firstName: string, lastName: string): Promise<unknown> {
        try {
            const response = await fetch(
                `${PokemonAPI.apiURL}/order`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ firstName, lastName }), // Send firstName and lastName in the request body
                }
            );
            return await response.json();
        } catch (error) {
            console.error("Couldn't post order:", error);
            throw new Error("Couldn't post order");
        }
    }

    static async getBasket(): Promise<BasketItem[]>{
        try {
            const response = await fetch(
                `${PokemonAPI.apiURL}/basket/get`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + PokemonAPI.token,

                    }
                }
            );
            return await response.json();
        } catch (error) {
            console.error("Couldn't get basket:", error);
            throw new Error("Couldn't get basket");
        }
    }
    static async addToBasket(cardID: string, quantity: number): Promise<unknown> {
        try {
            const response = await fetch(
                `${PokemonAPI.apiURL}/basket/add`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cardID, quantity }),
                }
            );
            return await response.json();
        } catch (error) {
            console.error("Couldn't add card:", error);
            throw new Error("Couldn't add card");
        }
    }
}


