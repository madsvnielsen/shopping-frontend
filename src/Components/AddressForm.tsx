import {ICity} from "../interfaces/ICity";
import {CityAPI} from '../CityAPI';
import {useState} from 'react';
import './AddressForm.css';

function AddressForm(){

    const [city, setCity] = useState("")

    async function ValidateZip(value: string) {
        const newCity: ICity[] = await CityAPI.getCity()
        const result = newCity.find((a) => a.nr.toString() === value)

        if (result) {
            setCity(result.navn)
        }
    }

    return(
        <div className="form-control-group">
            <label htmlFor="country">Country </label>
            <select className="form-control" id="country" name="user_country" autoFocus>
                <option selected>Denmark</option>
            </select>
            <label htmlFor="address1">Street address </label>
            <input className="form-control" type="text" id="address1" name="user_address1" required
                    maxLength={65}/>
            <input className="form-control" type="text" id="address2" name="user_address2" maxLength={65}/>
            <label htmlFor="zip">Postal code </label>
            <input className="form-control" type="text" id="zip" name="user_zip" required
                    onChange={e => ValidateZip(e.target.value)}

            />
            <label htmlFor="city">City </label>
            <input className="form-control" type="text" id="city" name="user_city"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}/>
        </div>
    )
}

export default AddressForm