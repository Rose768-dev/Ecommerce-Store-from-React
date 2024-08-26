import {BrowserRouter as Router,Route,Routes }  from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import './App.css'
import { Container,Footer1,Footer2,ProductesAper,ProductsAperture } from './components/index'
import { Header,Footer,MassagingAPP,OrderTracker } from './sections/index'
import {Home,SignUpPage,StepOnePage, StepTwoPage,StepThreePage,Homes,ProductPage,About,Contact,
  StepSixPage,Login,Signup,ForgotPassword,Cart,UserProfile,PrivacyPolicy,StepFourPage,
  LoginPage,ConfirmPasswordPage,StepFivePage,Dashboard,Sidebar,DashBoards,Maindash,DashboardCharts
,CategoriesPage,SettingPage,ReportsPage,CustomerManagementPage,InventoryManagementPage} from './Page/index'
import ShoppingCartProvider  from './context/ShoppingCartContext'
// import { AuthContext } from "./context/AuthContext";
const App = () => {

  return(
   <ShoppingCartProvider>
     <Router>
     <Header />
     <Container>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/signup' element={<SignUpPage/>}/>
     <Route path='/steponepage' element={<StepOnePage/>}/>
     <Route path='/steptwopage' element={<StepTwoPage/>}/>
     <Route path='/stepthreepage' element={<StepThreePage/>}/>
     <Route path='/loginpage' element={<LoginPage/>}/>
     <Route path='/confirmpasswordpage' element={<ConfirmPasswordPage/>}/>
     <Route path='/stepsixpage' element={<StepSixPage/>}/>
     <Route path='/stepfourpage' element={<StepFourPage/>}/>
     <Route path='/stepfivepage' element={<StepFivePage/>}/>
    {/*  */}
     <Route path="/about" element={<About/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path='/user/:activepage' element={<UserProfile/>} />  
     <Route path="/product/:prodid"  element={<ProductPage/>}/>
     <Route path="/cart" element={<Cart/>} />
     <Route path="/dashboard" element={<Dashboard/>} />
     <Route path="/productesaper" element={<ProductesAper/>} />
     <Route path="/productsaperture" element={<ProductsAperture/>} />
     <Route path="/ordertracker" element={<OrderTracker/>} />
     <Route path="/maindash" element={<Maindash/>} />
     <Route path="/dashboardcharts" element={<DashboardCharts/>} />
     <Route path="/categoriespage" element={<CategoriesPage/>} />
     <Route path="/settingpage" element={<SettingPage/>} />
     <Route path="/reportspage" element={<ReportsPage/>} />
     <Route path="/customermanagementpage" element={<CustomerManagementPage/>} />
     <Route path="/inventorymanagementpage" element={<InventoryManagementPage/>} />
     </Routes>
     </Container>
     <Footer1 />
     <Footer2 />
     </Router>  
     </ShoppingCartProvider>
  )
}
  export default App