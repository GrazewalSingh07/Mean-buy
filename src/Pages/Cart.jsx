import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { Navigate, useNavigate } from "react-router-dom"
import { getcart, removefromcart } from "../Redux/Cart/action"

export const Cart=()=>{
    const isAuth=useSelector((state)=>state.login.token)
    console.log(isAuth)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const cart=useSelector((state)=>state.cart.cart)
    useEffect(()=>{
        
        dispatch(getcart()) 
    },[])
    
    // if(isAuth===undefined){
    //     alert("Kindly, Login")
    //    navigate("/login")
      
    // }
    return <div>
         {cart?.map((el)=>{
            if(el.category=="men's clothing"||el.category=="women's clothing"||el.category=="jewelery"||el.category=="electronics"){
                // console.log(el)
               return <div key={el.id} className="prodcard" onClick={()=>{navigate(`/product-detail/${el.id}`)}}>
                    <div >
                     <img className="img"src={el.image} alt="" />
                     <div className="proddetail">
                        <span><p> {el.title}</p></span>
                      <div style={{display:"flex"}}>
                        <span><p style={{color:"#F98D29"}}><b>Price :</b><b>INR </b>{el.price*78}/-</p></span>
                        <span><p style={{background:"green",color:"white", padding:" .2rem .4rem", marginLeft:"3rem"}} ><b>Rating :</b>{el.rating.rate}/5 </p></span>
                      </div>
                      <p style={{color:"green"}}>SHIPPING FREE</p>
                      <button onClick={()=>dispatch(removefromcart(el.id)).then(getcart())}>Remove from cart</button>
                      {/* <button style={{background:"#F98D29",color:"white", padding:" .5rem 1rem",border:"none",cursor:"pointer"}}>Add To Cart</button> */}
                    </div>
                    </div>
                   
                </div>
                }
            else{
                 return <div key={el.id} className="prodcard" >
                    <div>
                         <img className="img" src={el.images} alt="" onClick={()=>{navigate(`/product-detail/${el.id}`)}}/>
                         <div className="proddetail">

                            <span><p> {el?.title}</p></span>

                            <span style={{display:"flex"}}>
                                <span><p><b>Price :</b>INR {el.price*78}/-</p></span>
                                <span><p  style={{display:"flex",background:"green",color:"white", padding:" .5rem 1rem", margin:"1rem"}}><b>Rating :</b>{(Math.random() * (5 - 1 + 1) + 1).toFixed(1)}/5</p></span>
                            </span>
                            <p style={{color:"green"}}>SHIPPING FREE</p>
                            <button onClick={()=>dispatch(removefromcart(el.id)).then(()=>{dispatch(getcart())})}>Remove from cart</button>
                         </div>
                    </div>
                   
                    
                </div>
             }
            
            })}
    </div>
}