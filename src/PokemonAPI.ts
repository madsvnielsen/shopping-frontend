import {Card} from "./interfaces/Card.tsx";

export class PokemonAPI {

    static apiURL = 'http://130.225.170.52:10261/api';
    static token = 'e7c3a10b-7fc1-4ddc-a225-f3412514f740';
    static async getCard(id: string): Promise<Card> {
        return fetch('https://api.pokemontcg.io/v2/cards/'+id,
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
                return data.data;
            })
            .catch(error => {
                Promise.reject(error);
            });
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
    static async addToCart(itemID: string){
        try {
            const response: Response = await fetch(
                `${PokemonAPI.apiURL}/basket/add`,
                {method: "POST",
                headers:{
                Accept: 'application/json',
                    'Content-Type':
                'application/json',
                    Authorization:
                'Bearer ' + PokemonAPI.token,
                },
                    body: JSON.stringify({itemID})
            }
        );
            return await response.json();}
    catch (error) {
            console.error("Couldn't add item to cart", error);
            throw new Error("Couldn't add item to cart");
        }
    }

    static async getBasket(){
        try {
            const response: Response = await fetch(
                `${PokemonAPI.apiURL}/basket/`,
                {method: "get",
                    headers:{
                        Accept: 'application/json',
                        'Content-Type':
                            'application/json',
                        Authorization:
                            'Bearer ' + PokemonAPI.token,
                    },
                }
            );
            return await response.json();}
        catch (error) {
            console.error("Couldn't get basket", error);
            throw new Error("Couldn't get basket");
        }
    }
}

