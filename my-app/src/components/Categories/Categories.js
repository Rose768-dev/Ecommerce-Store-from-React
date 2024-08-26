
import './Categories.css'
const Categories = (props) => {
  return (
  
    <div className='card-wrapper1'>
       <img className='Categories-image' src={props.image} style={{borderRadius: '50%'}}/>     
       <h4 className='title7'>
        {props.title}<br />
       </h4>            
    </div>
   
  )
}

export default Categories
