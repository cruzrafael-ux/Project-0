import { useState } from "react";

export default function ProductCard(props) {
    
    const [showCheckout, setCheckout] = useState(false);
    
    
    return (
        <article className="product-entry">
            <div className="product-image-container">
                <img className="product-image" 
                src={props.product.image}
                alt="Product Image"
                />
            </div>
            <div className="product-info">
                <span className="product-price">{props.product.price}</span>
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
                        <form>
                            <label>Cardholder Name</label>
                            <input type="text" placeholder="Cardholder Name" />
                            <br />
                            <label>Card Number</label>
                            <input type="text" placeholder="Card Number" />
                            <br />
                            <label>CVV</label>
                            <input type="text" placeholder="CVV" />
                            <br />
                            <label>Expiration Date</label>
                            <input type="text" placeholder="MM/YY" />
                        </form>

                        <button>
                            Purchase
                        </button>

                        <button
                            onClick={() => setCheckout(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </article>
    )
}