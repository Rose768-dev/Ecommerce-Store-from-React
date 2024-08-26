import './MostPopular.css'
import {SectionHeader,SectioWrapper} from '../..//components/index'
import Store from '../../components/Store'
import Store5 from '../../Page/Cart/Store5'
import StoreItem from '../../components/CardStore/StoreItem'
const MostPopular = () => {    
  return (
    <>
     <SectioWrapper>
     <SectionHeader >المٌنتجات</SectionHeader>
      <Store5/>
      </SectioWrapper>
    </>
  )
}

export default MostPopular
