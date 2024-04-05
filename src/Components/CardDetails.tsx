import './CardDetails.css';

function CardDetails(){
    return(
        <div className="box">
            <label htmlFor="card_no">Card Number </label>
            <input className="form-control" type="text" id="card_no" name="user_card" required pattern="[0-9]{16}"/>
            <label htmlFor="exp_date">Exp. date </label>
            <input className="form-control" type="text" id="exp_date" name="user_expdate" required
                   pattern="[0-3]{1}[0-9]{1}[0-1]{1}[0-9]{5}"/>
            <label htmlFor="card_cvv">CVV </label>
            <input className="form-control" type="text" id="card_cvv" name="user_cardcvv" required pattern="[0-9]{3}"/>
        </div>
    )
}

export default CardDetails
