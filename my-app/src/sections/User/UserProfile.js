import React from 'react'
import { useParams } from 'react-router-dom'
import './UserProfile.css'
import {LegalNotice,UserAddress,YourOrders,ChangePassword,AccountSettings
,UserSidebar,SingleBanner,SectioWrapper,ProductesAper} from '../../components/index'
import {Chat,MessagingApp} from '../../sections/index'
import { OrderProvider } from '../../context/OrderContext';

const UserProfile = () => {

    const {activepage} = useParams()


    // alert(activepage)
  return (
     <OrderProvider>
    <div className='userprofile' style={{ textAlign: "right", border: "5px solid var(--color-light)" ,marginBottom:"24px",borderRadius:"12px",padding:"24px"
  }} dir="rtl">
        <SingleBanner 
        heading={`My Profile`}
        bannerimage = 'https://images.unsplash.com/photo-1609881583302-61548332039c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZG1hZGV8ZW58MHx8MHx8fDA%3D' 
        />
        {/* UserProfile , showing {activepage} */}
        

         <div className='userprofilein'>
            <div className='left'>
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
              {activepage === 'accountsettings' && <AccountSettings/>}
              {activepage === 'changepassword' && <ChangePassword/>}
              
              {activepage === 'yourorders' && <YourOrders/>}
             
              {activepage === 'productesaper' && <ProductesAper/>}
              {/* {activepage === 'productesaper' && <Chat/>} */}
              {activepage === 'messagingapp' && <MessagingApp/>}
              {activepage === 'address' && <UserAddress/>}
              {activepage === 'legalnotice' && <LegalNotice/>}
            </div>
         </div>
        </div>
        </OrderProvider>
  
  )
}

export default UserProfile