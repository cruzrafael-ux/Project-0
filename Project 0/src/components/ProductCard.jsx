import { useState } from "react";

export default function ProductCard(props) {
    
    const [showCheckout, setCheckout] = useState(false);
    const [message, setMessage] = useState("");


    function verifyForm(file) {
    file.preventDefault();

    const form = file.target;
    const name = form.name.value;
    const cardNum = form.cardNum.value;
    const cvv = form.cvv.value;
    const doB = form.doB.value;

    if (name === "") {
        setMessage("Please enter the cardholder's name.");
    } else if (cardNum.length !== 16 || isNaN(cardNum)) {
        setMessage("Please enter a valid card number.");
    } else if (cvv.length !== 3 || isNaN(cvv)) {
        setMessage("Please enter a valid CVV.");
    } else if (doB.length !== 5) {
        setMessage("Please enter a valid date of birth.");
    } else {
        setMessage("Looks like a Credit Card! Purchase complete.");
    }

    setMessage(validationMessage);
}

    function closeCheckout() {
        setMessage("");
        setCheckout(false);
    }
    
    return (
        <article className="product-entry">
            <div className="product-image-container">
                <img className="product-image" 
                src={props.product.image}
                alt="Product Image"
                />
            </div>
            <div className="product-info">
                <span className="product-price">{props.product.price}</span> <span className="product-discounted-price">{props.product.discountedPrice} ✅</span>
                <p className="product-rating">{props.product.rating}</p>
                <h2>{props.product.name}</h2>
                <p>{props.product.description}</p>
                <button onClick={() => setCheckout(true)}>Click to Buy</button>
            </div>
            {showCheckout && (
                <div className="modal-overlay">
                    <div className="modal">
                        <header>
                            <h1>Checkout</h1>
                        </header>
                        <form onSubmit={verifyForm}>
                            
                            <p>{message}</p>
                            
                            <label>Cardholder Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Cardholder Name" 
                            />
                            <br />
                            <label>Card Number</label>
                            <input 
                                type="text" 
                                name="cardNum" 
                                placeholder="Card Number" 
                            />
                            <br />
                            <label>CVV</label>
                            <input 
                                type="text" 
                                name="cvv" 
                                placeholder="CVV" 
                            />
                            <br />
                            <label>Expiration Date</label>
                            <input 
                                type="text" 
                                name="doB" 
                                placeholder="MM/YY" 
                            />
                            <br />
                            <button type="submit">
                                Purchase
                            </button>

                            <button 
                                type="button"
                                onClick={closeCheckout}
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </article>
    )
}