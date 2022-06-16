  
import {Routes,Route} from "react-router-dom"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { About } from "./Pages/About"
import { ContactUs } from "./Pages/Contactus"
import { Home } from "./Pages/Home"
import { Login } from "./Pages/Login"
import { Products } from "./Pages/Product"
import { SignUp } from "./Pages/Signup"
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
        
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
