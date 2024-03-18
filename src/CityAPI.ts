import { ICity } from "./interfaces/ICity";

export class CityAPI {
    static async getCity(): Promise<Array<ICity>> {
        return fetch('https://api.dataforsyningen.dk/postnumre',
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                Promise.reject(error);
            });
    }
}