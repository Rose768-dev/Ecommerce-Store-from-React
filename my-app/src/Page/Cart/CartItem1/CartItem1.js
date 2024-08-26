import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import storeItems from "../../../Data/storeItem.json";
import FormatCurrency from "../../../components/FormatCurrency";
import './CartItem1.css';

const CartItem1 = ({ id, quantity }) => {
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    const item = storeItems.find((i) => i.id === id);

    if (!item) return null;

    return (
        <tr key={item.id} className="cartitemrow">
            <td data-label="Product">
            <img
    src={item.imgUrl}
    alt={item.name}
    style={{
        height: "150px", // تم تغيير الارتفاع لأقصى ارتفاع ممكن دون تشويه الصورة
        width: "auto", // السماح للعرض بالتكيف مع الارتفاع المحدد
        borderRadius: "6.5px",
        marginBottom: "calc(var(--margin-primary) / 6)",
        position: "relative",
    }}
       />
                <p>{item.name}</p>
            </td>
            <td></td>

            <td data-label="Quantity">
                <div className="quantity">
                    <button className="minus" onClick={() => decreaseCartQuantity(item.id)}>-</button>
                    <span>{quantity}</span>
                    <button className="plus" onClick={() => increaseCartQuantity(item.id)}>+</button>
                </div>
            </td>
            <td data-label="Price">{FormatCurrency(item.price)}</td>
            <td data-label="Total">{FormatCurrency(item.price * quantity)}</td>
            <td data-label="Remove">
                <div className="delbtn" onClick={() => removeFromCart(item.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </td>
        </tr>
    );
};

export default CartItem1;
