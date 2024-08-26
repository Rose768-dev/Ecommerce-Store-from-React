import './Buttons.css'

const PrimaryButtons = (props) => {
  return (
    <div className='button primary-btn'>
      <a href='/#'>{props.children}</a>
    </div>
  )
}

const SecondaryButtons = (props) => {
    return (
      <div className='button secodary-btn'>
        <a href='/#'>{props.children}</a>
      </div>
    )
  }
  
export default PrimaryButtons
export {SecondaryButtons}
