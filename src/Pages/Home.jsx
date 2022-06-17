import { useEffect, useState } from "react"
import { Slider } from "../components/Slider"
import "./home.css"
 import {Link} from "react-router-dom"
import axios from "axios"
import {FiChevronRight,FiChevronLeft} from "react-icons/fi"


export const Home=()=>{
    
const [fastmovingproduct,setfastmovingproduct]=useState(null)

const [belt,setbelt]=useState(null)
const [wallet,setwallet]=useState(null)
const [homedecor,sethomedecor]=useState(null)

const [fashion,setfashion]=useState(null)

const [toys,settoys]=useState(null)
    
const [wirelessSpeakers,setWirelessSpeakers]=useState(null)

const [makeupaccessories,setmakeupaccessories]=useState(null)

const [smartwatches,setsmartwatches]=useState(null)

const [kitchenwares,setkitchenwares]=useState(null)

const [gardening,setgardening]=useState(null)
const [usbfans,setusbfans]=useState(null)
const [bathStorage,setBathstorage]=useState(null)

const [jwellery,setjwellery]=useState(null)


useEffect(()=>{
    axios.get(`http://localhost:4000/products`).then((res)=>{
       let roomdecordata=res.data.filter((el)=>{
        if(el.category=="Roomdecor"){
            return el
        }  })
      sethomedecor(roomdecordata)
       let fashion= res.data.filter((el)=>{
        if(el.category=="men's clothing"||el.category=="women's clothing"){
            return el
        }
       })
       setfashion(fashion)
       let jwellery=res.data.filter((el)=>{
        if(el.category=="jewelery"){
            return el
        }
       })
       setjwellery(jwellery)
       let belt=res.data.filter((el)=>{
        if(el.category=="belt"){
            return el
        }
       })
       setbelt(belt)
       let wallet=res.data.filter((el)=>{
        if(el.category=="wallet"){
            return el
        }
       })
       setwallet(wallet)
       let electronics=res.data.filter((el)=>{
        if(el.category=="electronics"){
            return el
        }
       })
    settoys(electronics)
    }).catch((err)=>{
        console.log(err)
    })
},[])
    return  <div style={{margin:"auto"}}>
        <Slider/>
        <div  className="jewellery">
            <div style={{display:"flex" , textAlign:"center", margin:"auto"}}>
                <h2 style={{textAlign:"center"}}>Fast moving product</h2>
                <p style={{textAlign:"center",}} > _______________________________________________________________________________________________________________________________________________ <Link to={`products/jewelery`}>VIEW ALL</Link></p>
  
            </div>
            <div style={{display:"flex"}}>
                    {jwellery?.map((el)=>(
                        <div key ={el.id}className="Homeprodcard">
                            <div>
                                <img src={el.image} alt="" />
                            </div>
                            <span style={{display:"flex"}}>
                               <span> <p>{el.title}</p></span> 
                               <span> <p style={{background:"green",color:"white", padding:" .5rem 1rem", margin:"1rem"}}>{el.rating.rate}/5</p></span>
                            </span>
                            <hr />
                            <span>
                                <span style={{marginRight:"1rem"}}>{el.price*78}</span>
                                <span style={{marginLeft:"5rem"}}>Up to 37% OFF</span>
                            </span>
                        </div>
                    ))}
                </div>
        </div>
       
            <div style={{display:"flex" , textAlign:"center", margin:"2rem 5rem 2rem 20rem"}}>
                <h2 style={{textAlign:"center"}}>Flash Sale</h2>
                <p style={{textAlign:"center",}} >  __________________________________________________________________________________________________________________________________________________ <Link to="products/Roomdecor">VIEW ALL</Link></p>

            </div>
            <div  className="flashsale">
            <div style={{display:"flex"}}>
                    {homedecor?.map((el)=>(
                        <div key ={el.id}className="Homeprodcard">
                            <div>
                                <img src={el.images[0]} alt="" />
                            </div>
                            <span style={{display:"flex"}}>
                               <span> <p>{el.title}</p></span> 
                               <span> <p style={{background:"green",color:"white", padding:" .5rem 1rem", margin:"1rem"}}>{el.rating}/5</p></span>
                            </span>
                            <hr />
                            <span>
                                <span style={{marginRight:"1rem"}}>{el.price*78}</span>
                                <span style={{marginLeft:"5rem"}}>Up to 37% OFF</span>
                            </span>
                        </div>
                    ))}
                </div>
        </div>
        <div style={{display:"flex" , textAlign:"center", margin:"2rem 5rem 2rem 20rem"}}>
                <h2 style={{textAlign:"center"}}>Fashion</h2>
                <p style={{textAlign:"center",}} >  _________________________________________________________________________________________________________________________________________________________ <Link to="products/fashion">VIEW ALL</Link></p>
  
         </div>
        <div  className="flashsale">
            
            <div style={{display:"flex"}}>
                    {fashion?.map((el)=>(
                        <div key ={el.id}className="Homeprodcard">
                            <div>
                                <img src={el.image} alt="" />
                            </div>
                            <span style={{display:"flex"}}>
                               <span> <p>{el.title}</p></span> 
                               <span> <p style={{background:"green",color:"white", padding:" .5rem 1rem", margin:"1rem"}}>{el.rating.rate}/5</p></span>
                            </span>
                            <hr />
                            <span>
                                <span style={{marginRight:"1rem"}}>{el.price*78}</span>
                                <span style={{marginLeft:"5rem"}}>Up to 37% OFF</span>
                            </span>
                        </div>
                    ))}
                </div>
        </div>
        <div style={{display:"flex" , textAlign:"center", margin:"2rem 5rem 2rem 20rem"}}>
                <h2 style={{textAlign:"center"}}>Belts</h2>
                <p style={{textAlign:"center",}} >  _________________________________________________________________________________________________________________________________________________________ <Link to="products/belt">VIEW ALL</Link> </p>
  
            </div>
        <div  className="flashsale">
           
            <div style={{display:"flex"}}>
                    {belt?.map((el)=>(
                        <div key ={el.id}className="Homeprodcard">
                            <div>
                                <img src={el.images[0]} alt="" />
                            </div>
                            <span style={{display:"flex"}}>
                               <span> <p>{el.title}</p></span> 
                               <span> <p style={{background:"green",color:"white", padding:" .5rem 1rem", margin:"1rem"}}>{el.rating}/5</p></span>
                            </span>
                            <hr />
                            <span>
                                <span style={{marginRight:"1rem"}}>{el.price*78}</span>
                                <span style={{marginLeft:"5rem"}}>Up to 37% OFF</span>
                            </span>
                        </div>
                    ))}
                </div>
        </div>
        <div style={{display:"flex" , textAlign:"center",margin:"2rem 5rem 2rem 20rem"}}>
                <h2 style={{textAlign:"center"}}>Wallets</h2>
                <p style={{textAlign:"center",}} >  _________________________________________________________________________________________________________________________________________________<Link to="products/wallet">VIEW ALL</Link></p>
  
            </div>
        <div  className="flashsale">
            
            <div style={{display:"flex"}}>
                    {wallet?.map((el)=>(
                        <div key ={el.id} className="Homeprodcard">
                            <div>
                                <img src={el.images[0]} alt="" />
                            </div>
                            <span style={{display:"flex"}}>
                               <span> <p>{el.title}</p></span> 
                               <span> <p style={{background:"green",color:"white", padding:" .5rem 1rem", margin:"1rem"}}>{el.rating}/5</p></span>
                            </span>
                            <hr />
                            <span>
                                <span style={{marginRight:"1rem"}}>{el.price*78}</span>
                                <span style={{marginLeft:"5rem"}}>Up to 37% OFF</span>
                            </span>
                        </div>
                    ))}
                </div>
        </div>
        <div style={{display:"flex" , textAlign:"center", margin:"2rem 5rem 2rem 20rem"}}>
                <h2 style={{textAlign:"center"}}>Electronics</h2>
                <p style={{textAlign:"center",}} >  ______________________________________________________________________________________________________________________________________________________ <Link to="products/electronics">VIEW ALL</Link></p>
  
            </div>
        <div  className="flashsale">
            
            <div style={{display:"flex"}}>
                    {toys?.map((el)=>(
                        <div key ={el.id} className="Homeprodcard">
                            <div>
                                <img src={el.image} alt="" />
                            </div>
                            <span style={{display:"flex"}}>
                               <span> <p>{el.title}</p></span> 
                               <span> <p style={{background:"green",color:"white", padding:" .5rem 1rem", margin:"1rem"}}>{el.rating.rate}/5</p></span>
                            </span>
                            <hr />
                            <span>
                                <span style={{marginRight:"1rem"}}>{el.price*78}</span>
                                <span style={{marginLeft:"5rem"}}>Up to 37% OFF</span>
                            </span>
                        </div>
                    ))}
                </div>
        </div>
        <div style={{display:"flex" , textAlign:"center", margin:"2rem 5rem 2rem 20rem"}}>
                <h2 style={{textAlign:"center"}}>kitchenwares</h2>
                <p style={{textAlign:"center",}} >  __________________________________________________________________________________________________________________________________________________ <Link to="products/Roomdecor">VIEW ALL</Link></p>
  
            </div>
        <div  className="flashsale">
            
            <div style={{display:"flex"}}>
                    {homedecor?.map((el)=>(
                        <div key ={el.id}className="Homeprodcard">
                            <div>
                                <img src={el.images[0]} alt="" />
                            </div>
                            <span style={{display:"flex"}}>
                               <span> <p>{el.title}</p></span> 
                               <span> <p style={{background:"green",color:"white", padding:" .5rem 1rem", margin:"1rem"}}>{el.rating}/5</p></span>
                            </span>
                            <hr />
                            <span>
                                <span style={{marginRight:"1rem"}}>{el.price*78}</span>
                                <span style={{marginLeft:"5rem"}}>Up to 37% OFF</span>
                            </span>
                        </div>
                    ))}
                </div>
        </div>
       <div className="grid">
             
            <Link to=""><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/2022fashion.webp" alt="" /></Link>
            <Link to=""><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/2022kitchenware.webp" alt="" /></Link>
            <Link to=""> <img src="https://d64lkarmo2mrq.cloudfront.net/img/home/2022jewelry.webp" alt="" /></Link>
            <Link to=""><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/2022kidsshoes.webp" alt="" /></Link>
            <Link to=""><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/2022earphones.webp" alt="" /></Link>
            <Link to=""><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/2022homedecor.webp" alt="" /></Link>
            <Link to=""><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/2022wirelesspeakers.webp" alt="" /></Link>
            <Link to=""><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/2022makeupacc.webp" alt="" /></Link>
            <Link to=""><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/2022powerbanks.webp" alt="" /></Link>
        
       </div>
       <div style={{display:"flex" , textAlign:"center", margin:"auto"}}>
                <h2>New Arrivals</h2>
                <p>  ____________________________________________________________________________________________________________________________________________________________________________________</p>

                <div>

                </div>
        </div>


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
    </div>
}