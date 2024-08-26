import './Card.css'
import { FaStar , FaWallet} from "react-icons/fa";
import PrimaryButtons from '../Buttons/Buttons'
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Card = (props) => {
  return (
    <div className='most-popular-item'>
            <div className='card-wrapper'>
                <img className='most-popular-item-image'src={props.image}/>
                <div className='most-popular-item-content'>
                <ul style={{marginBottom:'23px'}}>
                        <li><span style={{'color':'var(--color-icons)'}}><FaStar/></span><span style={{'color':'var(--color-darkest)'}}>{props.rate}</span></li>
                        <li><span style={{'color':'var(--color-primary)'}}><FaWallet /></span><span style={{'color':'var(--color-darkest)'}}>{props.download}</span></li>
                    </ul>
                    <h4 className='most-popular-item-title'>
                        {props.title} <br />
                        <span>{props.category}</span>
                    </h4>
           z   
                </div> 
                <div style={{ display: 'flex', alignItems: 'center' }}>
  <PrimaryButtons>إضافة الى السلة</PrimaryButtons>
  <Link to="/signup">
    <span style={{ color: '#ba1212', fontSize: '25px', marginTop: '-10px', marginLeft: '10px' }}>
      <FaHeartCirclePlus />
    </span>
  </Link>
</div>
            </div>
        </div>
  )
}

export default Card
