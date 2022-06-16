import {AiOutlineMail} from "react-icons/ai"
import { useState } from "react"
import {FaInstagram,FaFacebook,FaCcMastercard} from "react-icons/fa"
import {FiChevronRight,FiChevronLeft} from "react-icons/fi"
import { FaAmazon} from "react-icons/fa"
import {GrAmex} from "react-icons/gr"
import {SiGooglepay} from "react-icons/si"
import {RiVisaFill} from "react-icons/ri"
import {BsPaypal} from "react-icons/bs"
import "./Footer.css"

export const Footer=()=>{
    return <div>
            <div style={{ width:"80%",margin:"auto"}}>
                <div><h1>Featured</h1> <hr /></div>
                
            </div>
         <div className="featuredslide">
            <FiChevronLeft style={{fontSize:"3rem", color:"#F98D29",marginTop:"10%"}}/>
                 <div>
                    <img src="https://d64lkarmo2mrq.cloudfront.net/img/as_seen_on/chainmag.jpg"  alt="#" />
                    <h4>Chain Magazine</h4>
                    <h3>MeanBuy - An Indian StartUp eCommerce Market Place</h3>
                </div>
                <div>
                    <img src="https://d64lkarmo2mrq.cloudfront.net/img/as_seen_on/sillicon.jpg" alt="#" />
                    <h4>Silicon India</h4>
                    <h3>10 Most Promising E- Commerce Startups</h3>
                </div>
                <div>
                    <img src="https://d64lkarmo2mrq.cloudfront.net/img/as_seen_on/medium.jpg" alt="#" />
                    <h4>Flair Explorer</h4>
                    <h3>E-commerce Inside the Startup Ecosystem in India</h3>
                </div>
           <FiChevronRight style={{fontSize:"3rem", color:"#F98D29",marginTop:"10%"}}/>
         </div>
         <div style={{width:"80%", margin:"auto"}}>
            <div className="Footerlist">
                <div>
                    <div>
                     <p>OUR POLICIES</p>
                    </div>
                   
                    <div>
                        <p>Covid-19 Precautions</p>
                        <p>Our Promise</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div>
                    <div>
                    <p>CORPORTE</p>
                    </div>
                   
                  <div>
                        <p>Sale wit us</p>
                        <p>Carrier opportunities</p>
                        <p>Sitemap</p>
                         
                    </div>
                </div>
                <div>
                    <div>
                    <p>HELP</p>
                    </div>
                   
                  <div>
                        <p>How MeanBuy Works</p>
                        <p>My orders</p>
                        <p>Exchanges, Returns and Refunds</p>
                        <p>Contact us</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <div>
                    <div>
                    <p>SELL WIT US</p>
                    </div>
                   
                     <div>
                        <p>General information</p>
                        <p>Signup</p>
                        <p>Exchanges, Returns and Refunds</p>
                        
                    </div>
                </div>
                <div>
                    <div>
                        <input type="text" placeholder="Your Email Address" />
                        <input type="submit"value="Subscribe" />
                    </div>
                    <div  style={{ display:"flex",margin:"auto"}}>
                        <FaAmazon style={{fontSize:"1rem", margin:"5px", cursor:"pointer"}}/>
                        <GrAmex style={{fontSize:"1rem",margin:"5px", cursor:"pointer"}}/>
                        <SiGooglepay style={{fontSize:"1rem",margin:"5px", cursor:"pointer"}}/>
                        <RiVisaFill style={{fontSize:"1rem",margin:"5px", cursor:"pointer"}}/>
                        <FaCcMastercard style={{fontSize:"1rem",margin:"5px", cursor:"pointer"}}/>
                        <BsPaypal style={{fontSize:"1rem",margin:"5px", cursor:"pointer"}}/>
         
                     </div>
            </div>
                
          </div>
            <hr />
            <div>


            </div>
         </div>

    </div>
}