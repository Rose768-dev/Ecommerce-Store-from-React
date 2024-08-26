import React from 'react'
import payimg from '../../ASSETS/pay.png'
import ha from '../../ASSETS/ha.png'
import social from '../../ASSETS/social.png'
import './Footer2.css'
import { Link } from 'react-router-dom'
const Footer2 = () => {
  return (
    <div className='footer' style={{ textAlign: "right"}} dir="rtl">
      <div className='footerin1'>
        <div className='f1'>
          <img src={ha} alt='hand' className='logo' />
          <p>منصتنا الإلكترونية لأصحاب المشاريع اليدوية. نحن نهتم بتمكين أصحاب المشاريع اليدوية والحرفيين والمبدعين من عرض وبيع منتجاتهم عبر الإنترنت. </p>
          <img src={social} alt='social' className='social' />

        </div>
        <div className='f2'>
          <h3>معلومات عنا</h3>
          <Link to='/about' className='stylenone'>
            <p>معلومات عنا</p>
          </Link>
          <Link to='/contact' className='stylenone'>
            <p>اتصل بنا</p>
          </Link>
          <p>عن الفريق</p>
          <p>دعم العملاء</p>
        </div>
        <div className='f2'>

          <h3>معلوماتنا</h3>
          <Link to='/privacypolicy' className='stylenone'>
            <p>سياسة الخصوصية</p>
          </Link>
          <Link to='/termsandconditions' className='stylenone'>
            <p>البنود و الظروف</p>
          </Link>
          <p>سياسة العائدات</p>
          <p>خريطة الموقع</p>

        </div>
        <div className='f2'>
          <h3>مجتمع</h3>
          <p>الإعلانات</p>
          <p>مركز الإجابة</p>
          <p>مجالس المناقشة</p>
          <p>إعطاء أعمال</p>
        </div>
        <div className='f2'>
          <h3>إشترك الآن</h3>
          <p>اشترك في بريدك الإلكتروني للحصول على النشرة الإخبارية والأخبار المميزة بناءً على اهتماماتك</p>
          <div className='inputcontainer'>
            <span className='icon1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
              </svg>

            </span>
            <input type='text' placeholder='  أدخل بريدك الإلكتروني' />
            <span className='icon2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12L20.731 3.126A59.768 59.768 0 002.515 12 59.77 59.77 0 0020.73 20.876L18.001 12zM18.001 12H10.501"/>
            </svg>
            
            </span>
          </div>
        </div>
      </div>
      <div className='footerin2'>
      <h3>
      © حقوق الطبع والنشر 2023 Souqol جميع الحقوق محفوظة
        </h3>
        <img src={payimg} alt='payimg' />
      </div>
    </div>
  )
}

export default Footer2