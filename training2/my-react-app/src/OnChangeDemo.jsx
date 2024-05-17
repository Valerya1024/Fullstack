import { useState } from "react";

function OnChangeDemo() {
    const[name, setName]= useState("Guest");
    const [quantity, setQuantity]=useState(0);

    function handleNamechange(event){
        setName(event.target.value);
    }
    function handleQuantitychange(event){
        setQuantity(event.target.value);
    }

    const[comment, setComment]= useState("");
    function handleCommentchange(event){
        setComment(event.target.value);
    }

    const [payment, serPayment] = useState("");
    function handlePaymentchange(event){
        serPayment(event.target.value);
    }

    const [shipping, serShipping] = useState("Delivery");
    function handleShippingchange(event){
        serShipping(event.target.value);
    }

    return(<div>
            <input value={name} onChange={handleNamechange}/>
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantitychange} type="number" />
            <p>Quantity:{quantity}</p>

            <textarea value={comment} onChange={handleCommentchange} placeholder="Enter delivery instructions"/>
            <p>Comment:{comment}</p>

            <select value={payment} onChange={handlePaymentchange}><option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option></select>
            <p>Payment:{payment}</p>

            <label>
                <input type="radio" value="Pick Up"checked={shipping === "Pick Up"}onChange={handleShippingchange}/>
                Pick Up
            </label>
            <br/>
            <label>
                <input type="radio" value="Delivery"checked={shipping === "Delivery"}onChange={handleShippingchange}/>
                Delivery
            </label>
            <p>shipping:{shipping}</p>
        </div>
    );
}

export default OnChangeDemo;