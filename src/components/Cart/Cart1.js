import React from "react";
import { useSelector } from "react-redux";

function Cart1(){
  const cart = useSelector((state) => state.items);
return (
    <div>
        <h1>Cart</h1>
        <ul>
            {Object.keys(cart).map((key) => (
                <li key={key}>
                    {cart[key].title} - {cart[key].quantity}
                </li>
            ))}
        </ul>
    </div>
);
};
export default Cart1;