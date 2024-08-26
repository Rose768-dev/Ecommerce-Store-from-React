import './Hero.css'
import { PrimaryButtons,HeaderCategories,WrapperCategories, Categories} from '../../components/index'
import CategoriesData from '../../Data/CategoriesData'

const Hero = () => {
  const cate = CategoriesData.map(cate => {
    return < Categories key={cate.id} image={cate.image} title={cate.title} />
   })
  return (
    <>
    <WrapperCategories>
      <HeaderCategories>مرحباَ بك في سوكول</HeaderCategories>
      <div className='most-popular-items'>
         {cate} 
      </div>
    </WrapperCategories>
    </>
  )
}
export default Hero
