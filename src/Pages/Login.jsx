import {Link} from "react-router-dom"
import {BsBag,BsSearch} from "react-icons/bs" 
import {FaShoppingCart} from"react-icons/fa"

import "./Login.css"
export const Login=()=>{
    return  <div>
        <div style={{width:"90%",margin:" 1rem auto", }}>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div className="logoandsearch">
                <span ><img className="logo" src="https://d64lkarmo2mrq.cloudfront.net/baselogo.png" alt="" /></span>
               <span> <input type="text" placeholder="Search"className="inputbox" /> <BsSearch style={{marginLeft:"-3.5rem"}}/></span>
            </div>
            <div className="rightNavtop">
                <div style={{display:"flex", width:"100%"}}>
                    <p style={{padding:"10px"}}>Seller's Corner | </p>
                    <p  style={{padding:"10px"}}>Feedback | </p>
                    <p  style={{padding:"10px"}}>Delivery info</p>
                </div>
                <div className="siguplogin">
                    <p><Link style={{ color:"black"}}to="/login">LOGIN</Link> / <Link   style={{ color:"black"}}to="/signup">SIGN UP</Link></p>
                    <p><b>WELCOME GUEST</b></p>
                </div>
                <div>
                    <FaShoppingCart style={{fontSize:"2rem",color:"#F98D29"}}/>
                </div>
            </div>
        </div>
        
    </div>
        <hr/>
       <section className="section">
        <div>
            <h3>Login or Create Account</h3>
            <div>
                <p>Email Address</p>
                <input className="input" type="text" placeholder="Email Address" />
                <p>Password</p>
                <input className="input" type="text"placeholder="password"/>
                 
                <button className="loginbtn">Login</button>

               <div style={{textAlign:"center", margin:"1rem"}}> 
                <p>Forgot Password?</p>
                <p>New to MeanBuy? <Link  style={{color:"black"}} to="/signup">Sign Up</Link></p>
                </div>
            </div>
       </div>
       <div className="rightside">
        <div className="righttop">
            <p className="titles">Cart Details</p>
            <hr />
            <div className="titles" >
                <p ><b>Total items :</b> </p>
                <p ><b>Sub Total :</b> </p>
                
            </div>
            <hr />
            <p className="titles"><b>Cart Total : </b> </p>
            <button className="editcart">EDIT CART</button>
        </div>
         <div className="rightbottom">
            <img  style={{width:"100px"}} src="https://www.meanbuy.com/assets/img/india/logo/logo_main.png" alt="" />
            <p>Our Shop. Your Price</p>
            <p>Fell the power to buy at your price</p>
            <hr style={{width:"50px" ,height:"3px",background:"#F98D29",border:"none"}} />
        </div>
       </div>
       
       </section>
    </div>
}