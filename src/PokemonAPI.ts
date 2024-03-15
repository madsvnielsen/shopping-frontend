import {Card} from "./interfaces/Card.tsx";

export class PokemonAPI {

    static apiURL = "http://dtu62597.eduhost.dk:10261/api"


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

    static async listOfCards() :Promise<Array<Card>>{
        return fetch('https://api.pokemontcg.io/v2/cards?page=1&pageSize=3',
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
}
