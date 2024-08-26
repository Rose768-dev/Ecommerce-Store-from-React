import React from 'react'
import AllProduct from '../AllProduct/AllProduct'
import CategorySidebar from '../CategorySiderbar/CategorySiderbar'
import './Prodect_Siderbar.css'
const Product_Sidebar = () => {
  return (
    <div className='product_sidebar'>
        <CategorySidebar/>
        <AllProduct/>
    </div>
  )
}

export default Product_Sidebar