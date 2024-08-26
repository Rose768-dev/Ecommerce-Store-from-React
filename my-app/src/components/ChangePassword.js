
const ChangePassword = () => {
    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>تغيير كلمة المرور</h1>

            <div className='form'>
                <div className='form-group'>
                    <label htmlFor='oldpass'>كلمة المرور القديمة<span>*</span></label>
                    <input type="password"
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='newpass'>كلمة المرور الجديدة<span>*</span></label>
                    <input type="password"
                    />
                </div>


            </div>

            <button className='mainbutton1'  style={{color:"var(--color-dark)",backgroundColor:"var(--color-primary)"}}

            >حفظ التغييرات</button>
        </div>
    )
}

export default ChangePassword