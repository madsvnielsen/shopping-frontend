import './CardDetails.css';

function GiftDetails(){
    return(
        <div className="box">
            <label htmlFor="amount">Amount</label>
            <input className="form-control" type="text" id="amount" name="user_amount"/>
            <label htmlFor="card_no">Gift card number</label>
            <input className="form-control" type="text" id="card_no" name="user_card_no" />
        </div>
    )
}

export default GiftDetails