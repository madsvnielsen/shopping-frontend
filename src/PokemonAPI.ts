import {Card} from "./interfaces/Card.tsx";

export class PokemonAPI {


    static apiURL = "http://130.225.170.52:10261/api"


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
        try {
            const response = await fetch(
                `${PokemonAPI.apiURL}/products/search/` + search,
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
            console.error("Couldn't search for cards:", error);
            throw new Error("Couldn't search for cards");
        }
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
}
