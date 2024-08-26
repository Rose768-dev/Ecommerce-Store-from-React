import React, { useEffect } from 'react'
import SingleBanner from '../../components/Banners/SingleBanner'
import './Extrapages.css'
import {SectioWrapper} from '../../components/index'
const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <SectioWrapper>
    <div className='extrapage' style={{textAlign:"right", direction:"rtl"}}>

        <SingleBanner
        heading="معلومات عنا"
        bannerimage= 'https://images.unsplash.com/photo-1606328252399-393f9bb6cad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8'
        />
        <div className='pgleft pgcommon'>
            <img src='https://images.unsplash.com/photo-1506287375451-bb850eba44d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpZnQlMjBoYW5kbWFkZXxlbnwwfHwwfHx8MA%3D%3D' alt='noimg' />

            <div>
            <h1>قصتنا</h1>
                    <p> 
                        منصتنا الإلكترونية لأصحاب المشاريع اليدوية. نحن نهتم بتمكين أصحاب المشاريع اليدوية والحرفيين والمبدعين من عرض وبيع منتجاتهم عبر الإنترنت. نقدم منصة سهلة الاستخدام ومبتكرة تمكن الحرفيين من التركيز على إبداعاتهم ومشاريعهم والوصول إلى جمهور عالمي واسع .
     
                    </p>
            </div>
        </div>
        <div className='pgright pgcommon'>
            <img src='https://images.unsplash.com/photo-1517241600143-3315d2a45e6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lmdCUyMGhhbmRtYWRlfGVufDB8fDB8fHww' alt='noimg' />

            <div>
            <h1>من نحن</h1>
                    <p> 
                    نحن فريق متحمس وملتزم بتمكين الحرفيين وأصحاب المشاريع اليدوية من الوصول إلى جمهور أوسع وتحقيق نجاح تجاري عبر الإنترنت. نحن نؤمن بالفرادة والإبداع والقدرة على صنع منتجات فريدة ومميزة يمكن أن تلهم الناس. نحن نعمل على توفير بيئة تجارية تشجع على التواصل والتفاعل بين الحرفيين والعملاء، حيث يمكن للحرفيين عرض منتجاتهم وتسويقها وبيعها بسهولة وفاعلية.
                    </p>

            </div>
        </div>
        <div className='pgleft pgcommon'>
            <img src='https://images.unsplash.com/photo-1609881583302-61548332039c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZG1hZGV8ZW58MHx8MHx8fDA%3D' alt='noimg' />

            <div>
            <h1>قصتنا</h1>
                    <p>
                    منصتنا الإلكترونية لأصحاب المشاريع اليدوية. نحن نهتم بتمكين أصحاب المشاريع اليدوية والحرفيين والمبدعين من عرض وبيع منتجاتهم عبر الإنترنت. 

                    </p>
            </div>
        </div>

        </div>
        </SectioWrapper>
  )
}

export default About