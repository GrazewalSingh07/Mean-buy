import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import {useParams} from "react-router"
import { getproduct } from "../Redux/Product/actions"
 
import { useNavigate } from "react-router-dom"
 
export const Products=()=>{
    const [filter,setfilter]=useState("all")
    const [filtereddata,setfiltereddata]=useState([])
    const navigate=useNavigate()
    const data=useSelector((state)=>state.product.data)
    const {cat}=useParams()
    const dispatch=useDispatch()
   
  
    useEffect(()=>{
        dispatch(getproduct(cat))
    },[cat])
    const [sort,setsort]=useState("asc")
    
    
    
    function handleChange(value){
      setfilter(value)
    }

    useEffect(()=>{
        
        if(filter=="all"){
            setfiltereddata(data)
        }
        else{
            let temp=data?.filter((el)=>{
                if(el.colors[0]==filter){
                 return el
                }
         })
         setfiltereddata(temp)
        }
       
        // console.log(temp)
       
    },[filter,cat])

    useEffect(()=>{
        setfiltereddata(data)
    },[])
    return <div style={{display:"flex"}}>
       <div style={{width:"20%"}}>
         <div>
            <select defaultValue="tan" onChange={(e)=>handleChange(e.target.value)}>
                <option value="">Filter by color</option>
                <option value="all">All</option>
                <option value="Black">Black</option>
                <option value="Natural">Natural</option>
                <option value="Golden">Golden</option>
            </select>
         </div>
            <h1>Sort</h1>
       </div>

       <div className="products">
        {filtereddata?.map((el)=>{
            if(el.category=="men's clothing"||el.category=="women's clothing"||el.category=="jewelery"||el.category=="electronics"){
                
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
                      {/* <button style={{background:"#F98D29",color:"white", padding:" .5rem 1rem",border:"none",cursor:"pointer"}}>Add To Cart</button> */}
                    </div>
                    </div>
                   
                </div>
                }
            else{
                 return <div key={el.id} className="prodcard" onClick={()=>{navigate(`/product-detail/${el.id}`)}}>
                    <div>
                         <img className="img" src={el.images[0]} alt="" />
                         <div className="proddetail">
                            <span><p> {el.title}</p></span>
                            <span style={{display:"flex"}}>
                                <span><p><b>Price :</b>INR {el.price*78}/-</p></span>
                                <span><p  style={{display:"flex",background:"green",color:"white", padding:" .5rem 1rem", margin:"1rem"}}><b>Rating :</b>{(Math.random() * (5 - 1 + 1) + 1).toFixed(1)}/5</p></span>
                            </span>
                            <p style={{color:"green"}}>SHIPPING FREE</p>
                         </div>
                    </div>
                   
                    
                </div>
             }
            
            })}
        </div>
        
    </div>
}
     