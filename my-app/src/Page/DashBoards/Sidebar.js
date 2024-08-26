import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> المتجر
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> لوحة القيادة
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="dashboardcharts">
                    <BsFillArchiveFill className='icon'/> المنتجات والفئات
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="categoriespage">
                    <BsFillGrid3X3GapFill className='icon'/> الفئات
                </a>
            </li> */}
            <li className='sidebar-list-item'>
                <a href="/customermanagementpage">
                    <BsPeopleFill className='icon'/> العملاء
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/inventorymanagementpage">
                    <BsListCheck className='icon'/> ادارة المخزون
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/reportspage">
                    <BsMenuButtonWideFill className='icon'/> التقارير
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/settingpage">
                    <BsFillGearFill className='icon'/> الإعدادت
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar