import { useState } from 'react'
import './DashBoards.css'
import Header from './Header'
import Sidebar from './Sidebar'
import DashBoards from './DashBoards'

function Maindash() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container' style={{ textAlign: "right" }} dir="rtl">
      <Header OpenSidebar={OpenSidebar}/> 
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <DashBoards />
    </div>
  )
}

export default Maindash
