import axios from "axios"
import * as types from "./actiontypes"


export const Registerrequest=()=>{
    return {
        type:types.REGISTER_REQUEST
    }
}
export const loginSuccess=(payload)=>{
    return {
        type:types.REGISTER_SUCCESS,
        payload

    }
}
export const RegisterFailure=()=>{
    return {
        type:types.REGISTER_FAILURE
    }
}

export const Register=(data)=>(dispatch)=>{

    dispatch(loginrequest)
   return axios.post("https://shop-clone-api.herokuapp.com/register",data).then((res)=>{
        dispatch(RegisterSuccess())
    }).catch((err)=>{
        dispatch(RegisterFailure)
    })
}