import { useState } from "react";
import OrderInfo from "./OrderInfo";

function OrderForm() {

    const products = ['Iphone 11 (399€)', 'Iphone 12 (499€)', 'Iphone 13 (599€)', 'Iphone 14 (699€)', 'Iphone 15 (799€)', 'Iphone 16 (899€)'];

    const prices = [399, 499, 599, 699, 799, 899];

    const [amount, setAmount] = useState(0);
    const [productIndex, setProductIndex] = useState(null);
    
    const increaseAmount = () => {
        setAmount(prevAmount => prevAmount + 1);
    };
    
    const decreaseAmount = () => {
        if (amount > 1) {
            setAmount(prevAmount => prevAmount - 1);
        } else {
            setAmount(0);
        }
    };  

    const ProductSelection = (event) => {
        const index = event.target.value;
        setProductIndex(index);
    };

    const totalPrice = productIndex !== null ? prices[productIndex] * amount : 0;

    return (
        <div className="order-form">
            <p><b>Select product</b></p>

            <p>Product: 
                <select onChange={ProductSelection}> 
                    <option value="">-- Select product --</option>
                    {products.map((product, index) => (
                        <option key={index} value={index}>
                            {product}
                        </option>
                    ))}
                </select>
            </p>
            
            <p>Quantity: 
                <button onClick={decreaseAmount}>-</button>
                <span style={{ margin: '0 10px' }}>{amount}</span>
                <button onClick={increaseAmount}>+</button>
            </p>
            
            <OrderInfo
                product={productIndex !== null ? products[productIndex] : ""}
                quantity={amount}
                totalPrice={totalPrice}
            />
        </div>
    );
}

export default OrderForm;
