import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import PageNotFound from "./components/PageNotFound"
import ProductsList from "./components/ProductsList"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./components/Admin/Dashboard"
import ViewCategories from "./components/Admin/ViewCategories"
import AddCategory from "./components/Admin/AddCategory"
import AddProduct from "./components/Admin/AddProduct"
import AddSlider from "./components/Admin/AddSlider"
import ViewSlider from "./components/Admin/ViewSlider"
import ViewProducts from "./components/Admin/ViewProducts"
import Cart from "./components/Cart"
import CheckoutDetails from "./components/CheckoutDetails"
import { Protected } from "./components/HiddenLinks"
function App() {

  return (
   <>
   <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={true}
    newestOnTop={false} closeOnClick  rtl={false}  pauseOnFocusLoss={false}
    draggable   pauseOnHover={false} theme="colored"/>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductsList/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/admin'element={<Dashboard/>}>
            <Route path='viewcategories'  element={<ViewCategories/>} />
            <Route path='addcategory'  element={<AddCategory/>} />
            <Route path='editcategory/:id'  element={<AddCategory/>} />
            <Route path='addproduct'  element={<AddProduct/>} />
            <Route path='editproduct/:id'  element={<AddProduct/>} />
            <Route path='addslider'  element={<AddSlider/>} />
            <Route path='viewsliders'  element={<ViewSlider/>} />
            <Route path='editslider/:id'  element={<AddSlider/>} />
            <Route path='viewproducts'  element={<ViewProducts/>} />
        </Route>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout-details' element={<Protected><CheckoutDetails/></Protected>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
   </>
  )
}

export default App
