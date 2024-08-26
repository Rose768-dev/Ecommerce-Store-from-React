import './Header.css'
import NavIte from '../../components/NavIte/NavIte'
import { Link } from 'react-router-dom'
import {SearchBox} from '../..//components/index'
import {Button,Dropdown} from 'react-bootstrap'
import { useShoppingCart } from "../../context/ShoppingCartContext";
import ha from '../../ASSETS/ha.png'
import React, { useEffect, useState } from 'react'

const Header = ({ reloadnavbar }) => {
  const { openCart, cartQuantity } = useShoppingCart();
//   ooooooooooooooo
  const [cartquantity, setcartquantity] = useState(0)


  const getcarttotalitems = () => {
      let cart = JSON.parse(localStorage.getItem('cart'))
      if (cart) {
          let total = 0
          cart.forEach(item => {
              total += item.quantity
          })
          setcartquantity(total)
      }
      else {
          setcartquantity(0)
      }
  }

  useEffect(() => {
      getcarttotalitems()
  }, [reloadnavbar])


  const [shows3, setshows3] = useState(false)
  return (
    <nav>
    <div className="navbar navbar-expand-md  navbar-dark cyborg-navbar ">
    <div className="container">
    <a href="/" className="navbar-brand">
    <img src={ha} alt="Souqol Logo" style={{ height: '150px', width: 'auto' }} />
    </a>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
            <NavIte>
                  
                  <div style={{padding:"2px",margin:"5px"}}>
                    <li>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" id="dropdown-basic" >المزيد</Dropdown.Toggle >
    
                                        <Dropdown.Menu style={{backgroundColor:"#835948",textAlign:"right"}}>
                                        <Dropdown.Item href="/maindash">لوحة القيادة</Dropdown.Item>
                                        <Dropdown.Item href="/contact">تواصل معنا</Dropdown.Item>
                                        <Dropdown.Item href="/about">معلومات عنا</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                    </li>
                    </div>
                    </NavIte>
      <NavIte>
          <Link to="/"  className="nav-link">الصفحة الرئيسية</Link>
           </NavIte>
           
           <li>
                      <Dropdown style={{padding:"2px",margin:"5px"}} >
                                    <Dropdown.Toggle variant="" id="dropdown-basic" >الفئات
                                    </Dropdown.Toggle >

                                    <Dropdown.Menu style={{backgroundColor:"#835948",textAlign:"right"}}>
                                        <Dropdown.Item href="/loginpage">ملابس</Dropdown.Item>
                                        <Dropdown.Item href="/signup">فخار</Dropdown.Item>
                                        <Dropdown.Item href="/user/accountsettings">فن</Dropdown.Item>
                                        <Dropdown.Item href="#">شموع</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                </li>
                    
                <NavIte> 
                {cartQuantity > 0 && (     
            <Button
            style={{ width: "3rem", height: "3rem", position: "relative", 
            transform: "scale(0.6)" }}
            variant=""
            className="cart"
            onClick={openCart}
            >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
             </svg>
            <div  
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>   

)}
                </NavIte>
                <NavIte>
                  
              <div style={{padding:"2px",margin:"5px"}}>
                <li>
                   <Dropdown>
                       <Dropdown.Toggle variant="" id="dropdown-basic" >
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" strokeWidth={1.5} stroke="var(--color-dark)" className="w-6 h-6">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                           </svg>
                       </Dropdown.Toggle >

                       <Dropdown.Menu style={{backgroundColor:"#835948",textAlign:"right"}}>
                           <Dropdown.Item href="/loginpage">تسجيل الدخول</Dropdown.Item>
                           <Dropdown.Item href="/signup">إنشاء حساب</Dropdown.Item>
                           <Dropdown.Item href="/steponepage">إنشاء متجر</Dropdown.Item>
                           <Dropdown.Item href="/user/:activepage">الصفحة الشخصية</Dropdown.Item>
                           <Dropdown.Item href="*">خروج</Dropdown.Item>
                       </Dropdown.Menu>
                   </Dropdown>
                </li>
                </div>
                </NavIte>
                <NavIte>
          <SearchBox></SearchBox>
                </NavIte>
            </ul>
          
        </div>
    </div>
</div>
</nav>
  )
}

export default Header