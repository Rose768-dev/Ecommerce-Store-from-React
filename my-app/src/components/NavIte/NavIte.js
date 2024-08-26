import './NavIte.css'

const NavIte = (props) => {
  return (
    <li className='nav-item'>
      {props.children}
    </li >
  )
}

const NavIteDropDown = (props) => {
    return (
      <li className='nav-item dropdown'>
        {props.children}
      </li >
    )
  }

export default NavIte
export {NavIteDropDown}
