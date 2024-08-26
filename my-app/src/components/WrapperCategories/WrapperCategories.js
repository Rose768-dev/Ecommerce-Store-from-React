import './WrapperCategories.css'

const WrapperCategories = (props) => {
  return (
    <div className='wrapper-cate'>
        {props.children}
      </div>
  )
}

export default WrapperCategories
