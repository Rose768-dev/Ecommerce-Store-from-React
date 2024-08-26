import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import FormatCurrency from "./FormatCurrency";
import storeItems from "../Data/storeItem.json";
import {PrimaryButtons,SecondaryButtons} from './index'
import { Link } from 'react-router-dom';
import {Cart} from '../Page/index'
const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas  show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>السلة</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div style={{ textAlign: "right"}} dir="rtl" className="ms-auto fw-bold fs-5">
            الاجمالي{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>   
      </Offcanvas.Body>    
    </Offcanvas>
    
  );
};

export default ShoppingCart;
