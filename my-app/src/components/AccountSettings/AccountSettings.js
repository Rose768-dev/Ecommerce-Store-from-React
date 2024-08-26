import React from 'react'
import './AccountSettings.css'

const AccountSettings = () => {
  return (
    <div className='accountsettings'style={{ textAlign: "right", border: "5px solid var(--color-light)" ,marginBottom:"24px",borderRadius:"12px",padding:"24px"
  }} dir="rtl">
      <h1 className='mainhead1'>معلومات شخصية</h1>

      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>الايميل<span>*</span></label>
          <input type='text' name='name' id='name' />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>الهاتف المحمول<span>*</span></label>
          <input type='text' name='phone' id='phone'

          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>البريد الإلكتروني<span>*</span></label>
          <input type='email' name='email' id='email'

          />
        </div>

      
      </div>

      <button className='mainbutton1' style={{color:"var(--color-dark)",backgroundColor:"var(--color-primary)"}}      
        >حفظ التغييرات</button>
    </div>
  )
}

export default AccountSettings