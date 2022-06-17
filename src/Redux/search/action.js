import * as types from "./actionTypes"
import axios from "axios"
export const getproductrequest=()=>{
    return{
        type:types.GET_PRODUCT_REQUEST
    }
}
export const getproductsuccess=(payload)=>{
    return{
        type:types.GET_PRODUCT_SUCCESS,
        payload
    }
}
export const getproductfailure=()=>{
    return{
        type:types.GET_PRODUCT_FAILURE
    }
}
export const searchproduct=(q)=>(dispatch)=>{
    console.log(q)
    if(q=="fashion"){
        dispatch(getproductrequest)
        return axios.get(`http://localhost:4000/products/?category_like=men's clothing&women's clothing`).then((res)=>{
        dispatch(getproductsuccess(res.data))
        // console.log(res.data)
        }).catch((err)=>{
            dispatch(getproductfailure)
        })
    }
    else{
        dispatch(getproductrequest)
        return axios.get(`http://localhost:4000/products/?category_like=${q}`).then((res)=>{
            dispatch(getproductsuccess(res.data))
            // console.log(res.data)
        }).catch((err)=>{
            dispatch(getproductfailure)
        })
    }
   
}