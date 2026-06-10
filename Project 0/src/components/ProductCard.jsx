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
                        <h2>Checkout</h2>

                        <input
                            type="text"
                            placeholder="Credit Card Number"
                        />

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