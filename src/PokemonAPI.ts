import {Card} from "./interfaces/Card.tsx";

export class PokemonAPI {
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
                console.log(data)
                return data.data;
            })
            .catch(error => {
                Promise.reject(error);
            });
    }
}
