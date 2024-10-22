import { useState } from "react"








function OrderForm() {

    const products = ['Iphone 11', 'Iphone 12', 'Iphone 13', 'Iphone 14', 'Iphone 15', 'Iphone 16']

    const prices = ['399', '499', '599', '699', '799', '899', '999']
    
    const [amount, setAmount] = useState(1);
    
    const increaseAmount = () => {
        setAmount(prevAmount => prevAmount + 1);
    };
    
    const decreaseAmount = () => {
        if (amount > 1) {
            setAmount(prevAmount => prevAmount -1);
        } else {
            setAmount(0);
        }
    }

    return (
        <div className="order-form">
            <p></p>
        <p><b>Select product</b></p>
        <p></p>
        <p>Product: </p>
        <select>
            <option value="">--Select product --</option>
            {products.map((product, index)=> (
                <option key={index} value={product}>
                    {product}
                </option>
            ))}
        </select>
        <p>Quantity:</p>
        <div>
            <button onClick={decreaseAmount}>-</button>
            <span style={{ margin: '0 10px' }}>{amount}</span>
            <button onClick={increaseAmount}>+</button>
        </div>
    </div>
    )
    
}


export default OrderForm