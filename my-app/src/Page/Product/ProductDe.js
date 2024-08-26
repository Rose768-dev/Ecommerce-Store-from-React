import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Wedding from '../../aasets/imgase/Wedding.jpg'
import kiddes from '../../aasets/imgase/kiddes.jpg'
import meed from '../../aasets/imgase/meed.jpg'
import {ProductsSlider} from '../../components/index'
import './ProductPage.css'
import FormatCurrency from "../../components/FormatCurrency"
import { useShoppingCart }  from "../../context/ShoppingCartContext";

const ProductDe = () => {
  return (
    <div>
        <div className='c11'>
                    <div className='imgset'>
                        {
                            imageset && imageset?.map((item, index) => {
                                return (
                                    <div className='imgsmall'
                                        onClick={() => {
                                            setactiveimg(item)
                                        }}
                                    >
                                        <img src={item.image} alt=""
                                            className={
                                                activeimg.id == item.id ? 'active' : ''
                                            }
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='imgbig'>
                        <img src={activeimg.image} alt="" />
                    </div>
                </div>

                <div className='c12'>
                    <h1 className='head1' style={{color:'var(--color-darkest)'}}>{productdata.ProductName}</h1>
                    <div className='c121'>
                        <p className='price'>
                        {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
                            <span>${productdata.ProductPrice * count}</span>
                        </p>
{/* price */}         
                    </div>

                    <div className='btncont'>
                        <button
                            onClick={() => {
                                addtocart()
                            }}
                        >
                           أضف إلى السلة
                        </button>
                        <button
                            onClick={() => {
                                alert('إشتري الأن')
                            }}
                        >
                           اشتري الآن
                        </button>
                    </div>
                </div>
    </div>
  )
}

export default ProductDe
