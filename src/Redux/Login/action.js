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
   return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",data).then((res)=>{
        dispatch(loginSuccess(res.data.token))
    }).catch((err)=>{
        dispatch(loginFailure)
    })
}