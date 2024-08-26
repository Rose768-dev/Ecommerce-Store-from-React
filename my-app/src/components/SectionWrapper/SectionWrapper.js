import './SectionWrapper.css'
const SectioWrapper = (props) => {
  return (
   
      <div className='section-wrapper' style={{ borderRadius: "50px"} }>
        {props.children}
      </div>
  )
}

export default SectioWrapper
