import * as types from "./actionTypes"
import axios from "axios"
export const getproductrequest=()=>{
    return{
        type:types.GET_PRODUCT_REQUEST
    }
}
export const getproductsuccess=()=>{
    return{
        type:types.GET_PRODUCT_SUCCESS
    }
}
export const getproductfailure=()=>{
    return{
        type:types.GET_PRODUCT_FAILURE
    }
}
export const getproduct=(query)=>(dispatch)=>{
    dispatch(getproductrequest)
    return axios.get(`http://localhost:4000/products?category=${query}`).then((res)=>{
        dispatch(getproductsuccess(res.data))
        // console.log(res.data)
    }).catch((err)=>{
        dispatch(getproductfailure)
    })
}