  
import {Routes,Route, Router} from "react-router-dom"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { About } from "./Pages/About"
import { ContactUs } from "./Pages/Contactus"
import { Home } from "./Pages/Home"
import { Login } from "./Pages/Login"
import { Products } from "./Pages/Product"
import { SearchedProducts } from "./Pages/SearchedProducts"
import { SignUp } from "./Pages/Signup"
import "./App.css"
import { ProductDeatail } from "./Pages/ProductDeatil"
import { Cart } from "./Pages/Cart"
function App() {
  

  return (
    <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contactUs" element={<ContactUs/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/products/:cat" element={<Products/>} ></Route>
        <Route path="/search-page/:query" element={<SearchedProducts/>}></Route>
        <Route path="product-detail/:id" element={<ProductDeatail/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="*" element={<h1>Page does not exists</h1>}></Route>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
