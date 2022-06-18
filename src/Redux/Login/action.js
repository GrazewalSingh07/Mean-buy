import axios from "axios"
import * as types from "./actiontypes"


export const loginrequest=()=>{
    return {
        type:types.LOGIN_REQUEST
    }
}
export const loginSuccess=(payload)=>{
    return {
        type:types.LOGIN_SUCCESS,
        payload

    }
}
export const loginFailure=()=>{
    return {
        type:types.LOGIN_FAILURE
    }
}

export const login=(data)=>(dispatch)=>{

    dispatch(loginrequest)
    console.log(data)
   return axios.post("https://shop-clone-api.herokuapp.com/login",data).then((res)=>{
    console.log(res.data.token)
    localStorage.setItem(JSON.stringify("token",token))
        dispatch(loginSuccess(res.data.token))
    }).catch((err)=>{
        dispatch(loginFailure)
    })
}