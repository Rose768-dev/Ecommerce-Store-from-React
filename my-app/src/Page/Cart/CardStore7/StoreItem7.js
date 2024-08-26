import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import FormatCurrency from ".././FormatCurrency3";
import { Link } from 'react-router-dom';
import { FaHeartCirclePlus } from "react-icons/fa6";
import React, { useState } from 'react'
import './StoreItem7.css'

const StoreItem7 = ({ id, name, price, imgUrl }) => {
  
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  // =========
  const [show, setshow] = useState(false)
  const [count, setCount] = useState(1)

  // const getproductid = () => {
  //   alert(data.id)
  // }

  const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let productdata = id
    if (cart) {
      // alert('1 item is already added to cart')
      let itemincart = cart.find(item => item.productdata.ProductId === productdata.ProductId)
      if (itemincart) {
        cart = cart.map(item => {
          if (item.productdata.ProductId === productdata.ProductId) {
            return {
              ...item,
              quantity: item.quantity + count
            }
          }
          else {
            return item
          }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
      }
      else {
        cart = [
          ...cart,
          {
            productdata,
            quantity: count
          }
        ]
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    }
    else {
      cart = [{
        productdata,
        quantity: count
      }]

      // console.log(cart)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    // setreloadnavbar(!reloadnavbar)
    window.location.reload()
    // toast.success('Item added to cart')
  }
  return (
    <Card style={{ textAlign: "right", backgroundColor: "var(--color-dark)",
    borderRadius: "25px",
    padding: "calc(var(--padding-primary) / 2)",
    margin: "calc(var(--margin-primary) / 5)"}} dir="rtl"  className="h-100" >
<Card.Img
  variant="top"
  src={imgUrl}
  style={{
    height: "200px",
    width: "100%",
    borderRadius: "6.5px",
    marginBottom: "calc(var(--margin-primary) / 6)",
    position: "relative"
  }}
/>
<div
  className='addbtn'
  style={{
    position: "absolute",
    top: "45%",
    left: "50%",
    right: "10px", 
    transform: "translate(-50%, -50%)",
    width: '30px',
    height: '30px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    padding: '5px',
    transition: 'all 0.5s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }}
>
  <Link
              to={`/product/${id}`}
            >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
   </Link>
</div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4" style={{ lineHeight: "1.5rem",fontSize: "4px",
          color: "var(--color-darkest)"}}>{name}</span>
          <span className="price" style={{color:"var(--color-darkest)"}}>{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '0px'}}>
            <Button style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}className="w-100" onClick={() => increaseCartQuantity(id)}>
              إضافة الى السلة
            </Button>
            <Link to="/signup">
            <span style={{ color: '#ba1212', fontSize: '25px', marginTop: '-10px', marginRight: '20px' }}>
            <FaHeartCirclePlus />
            </span>
            </Link>
            </div>
          ) : ( 
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)} style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>-</Button>
                <div>
                  <span className="fs-3">{quantity}  في السلة</span>
                </div>
                <Button onClick={() => increaseCartQuantity(id)} style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                الحذف
              </Button>
            </div>
          )}
        </div>
   
      </Card.Body>
    </Card>
  );
};

export default StoreItem7;
