
import React, { useState } from 'react'
import './Cart.css'
import './Progress.css'
import './CartContainer.css'
import './ShippingContainer.css'
import './PaymentContainer.css'
import './OrderSucessfull.css'
import {OrderSuccessfulProvider,Navbar,SingleBanner,} from '../../components/index'
// ------------
import { Stack, Button } from "react-bootstrap"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import FormatCurrency from "../../components/FormatCurrency"
import storeItems from '../../Data/storeItem.json'
import CartItem1 from "./CartItem1/CartItem1";

const Cart = ({ isOpen }) => {
  const [cartdata, setcartdata] = React.useState([])
  const [subtotal, setsubtotal] = React.useState(0)
  const [shipping, setshipping] = React.useState(0)
  const [active, setactive] = React.useState(1)
  const [tax, settax] = React.useState(0)
  const [deliverydate, setdeliverydate] = React.useState(
    new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  )


  const checklogin = () => {
    return true
  }


  const savedaddress = [
    {
      AddressLine1: "Address Line 1",
      AddressLine2: "Address Line 2",
      AddressLine3: "Address Line 3",
      postalcode: "123456"
    },
    {
      AddressLine1: "Address Line 1",
      AddressLine2: "Address Line 2",
      AddressLine3: "Address Line 3",
      postalcode: "123456"
    }
  ]


  const [selectedorderid, setselectedorderid] = useState(0)
  // ----------------------------------------------------------

  const { closeCart, cartItems } = useShoppingCart();
  return (

      <div show={isOpen} onHide={closeCart} placement="end" className='cart' style={{ textAlign: "right"}} dir="rtl">
        <div className='progress'>
          {
            active == 1 ?
              <div className='c11'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(1)
                }}
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                
                <span>السلة</span>

              </div>
              :
              <div className='c1'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(1)
                }}
              >
          
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span>السلة</span>
              </div>
          }


          {
            active == 2 ?
              <div className='c11'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(2)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

                <span>الشحن</span>

              </div>
              :
              <div className='c1'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(2)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

                <span>الشحن</span>
              </div>
          }

          {
            active == 3 ?
              <div className='c11'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(3)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>


                <span>الدفع</span>

              </div>
              :
              <div className='c1'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(3)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>

                <span>الدفع</span>
              </div>
          }
          {
            active == 4 ?
              <div className='c11'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(4)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>

                <span>نجاح</span>

              </div>
              :
              <div className='c1'
                onClick={() => {
                  cartdata.length > 0 && checklogin() && setactive(4)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>


                <span>نجاح</span>
              </div>
          }
        </div>

        {
          active == 1 &&
          <div className='cartcont'>
            {/* <p>Cart cont</p> */}
            {
              cartdata.length > 0 ?
                <table className='carttable'>
                  <thead>
                    <tr>
                      <th>منتج</th>
                      <th>الكمية</th>
                      <th>السعر</th>
                      <th>الإجمالي</th>
                      <th >حذف</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartdata.map((item, id) => {
                        return (
                          <tr key={id} className="cartitemrow">
                            <td data-label="Product"
                            >
                              <div className='cartproduct'
                                onClick={() => {
                                  window.location.href = `/product/${     cartItems.map((item) => (
                                    <CartItem1 key={item.id} {...item} />
                                  ))}`
                                }}
                              >
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }

                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>المجموع الفرعي</td>
                      <td className='totaltableright'>
                        $ {subtotal.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>الشحن</td>
                      <td className='totaltableright'>
                        $ {shipping.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>المجموع</td>
                      <td className='totaltableright'>
                        $ {(subtotal + shipping).toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>فاكس</td>
                      <td className='totaltableright'>
                        $ {tax.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>صافي الإجمالي</td>
                      <td className='totaltableright'>
                        $ {(tax + subtotal + shipping).toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                :
                <div className='emptycart'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>

                  <p>عربة التسوق فارغة</p>
                </div>
            }
          </div>
        }

        {
          active == 2 &&
          <div className='shippingcont'>
            <div className='selectdate'>
              <h2 className='mainhead1'>حدد تاريخ التسليم</h2>
              <input
                min={new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                type='date'
                value={deliverydate}
                onChange={(e) => {
                  setdeliverydate(e.target.value)
                }}
              />
            </div>
            <div className='previous'>
              <h2 className='mainhead1'>العنوان المحفوظ السابق</h2>
              {
                savedaddress.length > 0 ?
                  savedaddress.map((item, id) => {
                    return (
                      <div className='radio' key={id}>
                        <input type='radio' name='address' id={id} />
                        <span>
                          {
                            item.AddressLine1 + ', ' + item.AddressLine2 + ', ' + item.AddressLine3 + ', ' + item.postalcode
                          }
                        </span>
                      </div>
                    )
                  })
                  :
                  <div className='emptyaddress'>
                    <p>لم يتم العثور على عنوان</p>
                  </div>
              }
            </div>
            <h3>أو</h3>
            <div className='shippingadd'>
              <input type='text' placeholder='Address Line 1' />
              <input type='text' placeholder='Address Line 2' />
              <input type='text' placeholder='Address Line 3' />
              <input type='text' placeholder='Postal Code' />
              <button>حفظ</button>
            </div>

          </div>
        }
        {
          active == 3 &&
          <div className='paymentcont'>
            <h2 className='mainhead1'>اختار طريقة الدفع</h2>
            <div className='paymenttypes'>
              <div className='c1'>
                <input type='radio' name='payment' id='payment1' />
                <img src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png'
                  alt='paypal'
                />
              </div>
              <div className='c1'>
                <input type='radio' name='payment' id='payment1' />
                <img src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png'
                  alt='paypal'
                />
              </div>
              <div className='c1'>
                <input type='radio' name='payment' id='payment1' />
                <img src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png'
                  alt='paypal'
                />
              </div>
            </div>

            <div
              className='paymentagreement'
            >
              <input type='checkbox' name='agreement' id='agreement' />
              <label htmlFor='agreement'>أوافق على الشروط</label>
            </div>

            <div className='c2'>
              <span>صافي المجموع</span>
              &nbsp;&nbsp;
              <span>$ {(subtotal + tax + shipping).toFixed(2)}</span>
            </div>
          </div>
        }
        {
          active == 4 &&
          <div className='ordersuccessfull'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>

            <h2 className='mainhead1'>تم تقديم الطلب بنجاح</h2>
            <p>شكرا للتسوق معنا</p>
            <span>معرف الطلب: 12345</span>
          </div>
        }




        {/* CART BUTTONS */}
        {
          active == 1 && cartdata.length > 0 &&
          <div className='btns'>
            <button className='nextbtn'
              onClick={() => {
                checklogin() && setactive(2)
              }}
            >التالي</button>
          </div>
        }

        {
          active == 2 &&
          <div className='btns'>
            <button className='backbtn'
              onClick={() => {
                checklogin() && setactive(1)
              }}
            >الرجوع</button>
            <button className='nextbtn'
              onClick={() => {
                checklogin() && setactive(3)
              }}
            >التالي</button>
          </div>
        }

        {
          active == 3 &&
          <div className='btns'>
            <button className='backbtn'
              onClick={() => {
                checklogin() && setactive(2)
              }}
            >الرجوع</button>
            <button className='nextbtn'
              onClick={() => {
                checklogin() && setactive(4)
              }}
            >التالي</button>
          </div>
        }
        {
          active == 4 &&
          <div className='btns'>
            {/* <button className='backbtn'
              onClick={() => {
                checklogin() && setactive(3)
              }}
            >Back</button> */}
            <button className='nextbtn'
              onClick={() => {
                setselectedorderid(12345)
            
              }}
            >عرض الفاتورة</button>
          </div>
        }
      </div>

)
}

export default Cart