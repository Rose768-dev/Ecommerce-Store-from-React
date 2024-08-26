import React from 'react'
import handmd from '../../ASSETS/handmd.png'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1' style={{ textAlign: "right"}} dir="rtl">
            <div className='left'>
                <img src={handmd} alt='handmade' />
            </div>
            <div className='right'>
                <h1>استكشف عالم الإبداع وامتلك الجمال في منصتنا الإلكترونية للمنتجات اليدوية المميزة
                </h1>
                <p>نرحب بك في منصتنا الإلكترونية حيث يمكنك استكشاف وشراء مجموعة رائعة من المنتجات اليدوية المميزة.
                </p>
            </div>
        </div>
    )
}

export default Footer1