import axios from "axios"
import * as types from "./actiontypes"

export const addtocartrequest=()=>{
    return {
        type:types.ADD_TO_CART_REQUEST
    }
}
export const addtocartsuccess=(payload)=>{
    return {
        type:types.ADD_TO_CART_SUCCESS,
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
    return axios.post("https://mean-buy.herokuapp.com/cart",data).then((res)=>{
        dispatch(addtocartsuccess)
     }).catch((err)=>{
        dispatch(addtocartfailure)
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

export const getcart=()=>(dispatch)=>{

    dispatch(getcartrequest)
     return axios.get(`https://mean-buy.herokuapp.com/cart`).then((res)=>{
        console.log(res.data)
        dispatch(getcartsuccess(res.data))
     }).catch((err)=>{
            dispatch(getcartfailure)
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

    dispatch(removefromcartrequest)
    return axios.delete(`https://mean-buy.herokuapp.com/cart/${id}`).then((res)=>{
        dispatch(removefromcartsuccess)
        dispatch(getcart)
     }).catch((err)=>{
        dispatch(removefromcartfailure)
     })
   
}

