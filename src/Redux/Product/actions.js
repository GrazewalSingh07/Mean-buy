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
export const getproduct=(query)=>(dispatch)=>{
    dispatch(getproductrequest)
    if(query=="fashion"){
        return axios.get(`https://mean-buy.herokuapp.com/products?category=women's clothing`).then((res)=>{
        dispatch(getproductsuccess(res.data))
        // console.log(res.data)
        }).catch((err)=>{
            dispatch(getproductfailure)
        })
    }
    return axios.get(`https://mean-buy.herokuapp.com/products?category=${query}`).then((res)=>{
        dispatch(getproductsuccess(res.data))
        // console.log(res.data)
    }).catch((err)=>{
        dispatch(getproductfailure)
    })
}