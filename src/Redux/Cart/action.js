import axios from "axios"
import * as types from "./actiontypes"

export const addtocartrequest=()=>{
    return {
        type:types.ADD_TO_CART_REQUEST
    }
}
export const addtocartsuccess=(payload)=>{
    return {
        type:types.ADD_TO_CART_SADD_TO_CART_SUCCESS,
        payload
    }
}
export const addtocartfailure=()=>{
    return {
        type:types.ADD_TO_CART_FAILURE
    }
}


export const addtocart=(data)=>(dispatch)=>{

    dispatch(addtocartrequest)
     axios.post("http://localhost:8080/cart",data).then((res)=>{
        dispatch(addtocartsuccess)
     }).catch((err)=>{
        dispatch(addtocartfailure)
     })
   
}


//remove from cart
export const removefromcartrequest=()=>{
    return {
        type:types.REMOVE_FROM_CART_REQUEST
    }
}
export const removefromcartsuccess=()=>{
    return {
        type:types.REMOVE_FROM_CART_SUCCESS
        
    }
}
export const removefromcartfailure=()=>{
    return {
        type:types.REMOVE_FROM_CART_FAILURE
    }
}

export const removefromcart=(id)=>(dispatch)=>{

    dispatch(addtocartrequest)
     axios.delete(`http://localhost:8080/cart/${id}`).then((res)=>{
        dispatch(removefromcartsuccess)
     }).catch((err)=>{
        dispatch(removefromcartfailure)
     })
   
}

//get cart

export const getcartrequest=()=>{
    return {
        type:types.GET_CART_REQUEST
    }
}
export const getcartsuccess=(payload)=>{
    return {
        type:types.GET_CART_SUCCESS,
        payload
    }
}
export const getcartfailure=()=>{
    return {
        type:types.GET_CART_FAILURE
    }
}

export const getcart=(id)=>(dispatch)=>{

    dispatch(addtocartrequest)
    return axios.get(`http://localhost:8080/cart`).then((res)=>{
        dispatch(removefromcartsuccess(res.data))
     }).catch((err)=>{
            dispatch(getcartfailure)
     })
}