import {Card} from "./interfaces/Card.tsx";
import {BasketItem} from "./interfaces/BasketItem.ts";

export class PokemonAPI {


    static apiURL = "http://130.225.170.52:10261/api"
    


    static token = 'e7c3a10b-7fc1-4ddc-a225-f3412514f740';


    static async postOrder(orderInfo : OrderInfo): Promise<{ Order : string }> {
        try {
            const sessionId = window.sessionStorage.getItem("sessionId")
            const response = await fetch(
                `${PokemonAPI.apiURL}/basket/order`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...orderInfo, sessionId }),

                }

            );
            const data = await response.json()

            return await data;
        } catch (error) {
            console.error("Couldn't place order", error);
            throw new Error("Couldn't place order");
        }
    }


    static async addToBasket(cardID: string, quantity: string): Promise<unknown> {
        try {
            const sessionId = window.sessionStorage.getItem("sessionId")
            const response = await fetch(
                `${PokemonAPI.apiURL}/basket/add`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ itemId: cardID, quantity: quantity, sessionId }),

                }

            );
            const data = await response.json()
            window.sessionStorage.setItem("sessionId", data.sessionId)
            return await data;
        } catch (error) {
            console.error("Couldn't add card:", error);
            throw new Error("Couldn't add card");
        }
    }

    static async removeFromBasket(cardID: string){
        try {
            const response = await fetch(
                `${PokemonAPI.apiURL}/basket/`+ window.sessionStorage.getItem("sessionId")+ "/" + cardID,
                {
                    method: 'DELETE',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }

            );
            return await response.json();
        } catch (error) {
            console.error("Couldn't delete card:", error);
            throw new Error("Couldn't delete card");
        }
    }


    static async clearBasket(){
        try {
            const response = await fetch(
                `${PokemonAPI.apiURL}/basket/`+ window.sessionStorage.getItem("sessionId"),
                {
                    method: 'DELETE',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }

            );
            return await response.json();
        } catch (error) {
            console.error("Couldn't delete basket:", error);
            throw new Error("Couldn't delete basket");
        }
    }

    

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

    static async listOfCards(pagenumber : number) {
        try {
            const response = await fetch(
                `${PokemonAPI.apiURL}/products/list?pagenumber=`+pagenumber,
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
            let url =`${PokemonAPI.apiURL}/basket/`;
            if(window.sessionStorage.getItem("sessionId") != null) {
                url = `${PokemonAPI.apiURL}/basket/` + window.sessionStorage.getItem("sessionId")
            }
            const response = await fetch(
                url,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + PokemonAPI.token,

                    }
                }
            );
            const data = await response.json()
            window.sessionStorage.setItem("sessionId", data.sessionId)
            return data.basket
        } catch (error) {
            console.error("Couldn't get basket:", error);
            throw new Error("Couldn't get basket");
        }
    }


}


