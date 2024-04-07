import './CardDetails.css';

function PhoneDetails(){
    return(
        <div className="box">
            <label htmlFor="phone_no">Phone Number</label>
            <input className="form-control" type="text" id="phone_no" name="user_phone_no" pattern="[1-9]{1}[0-9]{7}"/>
        </div>
    )
}

export default PhoneDetails