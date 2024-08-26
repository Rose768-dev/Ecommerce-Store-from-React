import React from 'react'
import './UserAddress.css'

const UserAddress = () => {
    const [show, setShow] = React.useState(false)

    const savedaddress = [
        {
            AddressLine1: 'العنوان سطر 1',
            AddressLine2: 'العنوان سطر 2',
            AddressLine3: 'العنوان سطر 3',
        },
        {
            AddressLine1: 'العنوان سطر 4',
            AddressLine2: 'العنوان سطر 5',
            AddressLine3: 'العنوان سطر 6',
        },
        {
            AddressLine1: 'العنوان سطر 7',
            AddressLine2: 'العنوان سطر 8',
            AddressLine3: 'العنوان سطر 9',
        }
    ]
    return (
        <div className='useraddress' >
            {
                !show && <h1 className='mainhead1' style={{color:"var(--color-darkest)"}}>عنوانك</h1>
            }
            {
                !show &&

                <div className='addressin'>
                    {
                        savedaddress.map((item, index) => {
                            return (
                                <div className='address' key={index}>
                                    <span>{item.AddressLine1}</span>,
                                    <span>{item.AddressLine2}</span>,
                                    <span>{item.AddressLine3}</span>


                                    <div className='delbtn'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                !show && <div className='addnewbtn'

                    onClick={() => setShow(true)}
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>


                </div>
            }
            {
                show &&

                <div className='addnew'>
                    <h1 className='mainhead1' style={{color:"var(--color-darkest)"}}>إضافة عنوان جديد</h1>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='postalcode'>رمز بريدي</label>
                            <input type="text" />
                        </div>

{/*                        
                    </div>



                    <div className='form'>
                       */}

                        <div className='form-group'>
                            <label htmlFor='addressline1'>العنوان سطر 1</label>
                            <input type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='addressline2'>العنوان سطر 2</label>
                            <input type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='addressline3'>العنوان سطر 3</label>
                            <input type="text" />
                        </div>
                    </div>

                    <button className='mainbutton1' style={{color:"var(--color-dark)",backgroundColor:"var(--color-primary)"}} 
                        onClick={() => setShow(false)}
                    >يحفظ</button>
                </div>
            }
        </div>
    )
}

export default UserAddress