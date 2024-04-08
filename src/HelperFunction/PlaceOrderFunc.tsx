import {PokemonAPI} from "../PokemonAPI.ts";
function PlaceOrderFunc(firstname: string, lastName: string){
    PokemonAPI.order(firstname,lastName)
}
export default PlaceOrderFunc