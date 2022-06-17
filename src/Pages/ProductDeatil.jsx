import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addtocart } from "../Redux/Cart/action"
import { useSelector } from "react-redux/es/exports"
import "./ProductDeatil.css"
export const ProductDeatail=()=>{ 
    const {id}=useParams()
    // console.log(id)
    const [tempdata,setempdata]=useState(null)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const isAuth=useSelector((state)=>state.login.LoginSuccess)
    useEffect(()=>{
        axios.get(`https://mean-buy.herokuapp.com/products/${id}`).then((res)=>{
           setempdata(res.data)
            
        })
    },[])

    function posttocart(){
        if(isAuth==false){
            alert("Login to add the item in your cart")
            return navigate("/login")
        }
        else{
            delete tempdata.id;
            dispatch(addtocart(tempdata)).then((r)=>{
                alert("Added to cart Successfully")
            }).catch("Something went wrong,Try again")
        }
       
    }
    return <div >
       {tempdata?.category=="men's clothing"||tempdata?.category=="women's clothing"||tempdata?.category=="jewelery"||tempdata?.category=="electronics"?
       <div className="container">
            <div  className="imgdiv">
                <img src={tempdata?.image} alt="" />
            </div>
            <div  className="detaildiv">
                <p><b>{tempdata?.title}</b></p>
                <p><b>INR {tempdata?.price*78}/-</b></p>
               
                <button className="btn" onClick={posttocart}>Add to cart</button>
                <p>{tempdata?.description}</p>
            </div>
             
               
            
       </div>
       :
        <div className="container">
             <div className="imgdiv">
                <img src={tempdata?.images[0]} alt="" />
            </div>
            <div  className="detaildiv">
                <p><b>{tempdata?.title}</b></p>
                <p><b>INR {tempdata?.price*78}/-</b></p>
                <button className="btn" onClick={posttocart}>Add to cart</button>
                <p>{tempdata?.Description?.Para}</p>
                <ul>
                    {tempdata?.Description?.List?.map((el)=>(
                        <li>{el}</li>
                    ))}
                </ul>
            </div>
            
        </div>}
    </div>
}