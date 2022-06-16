 
import * as types from "./actiontypes"
const initState={
   isLoggingin:false,
   LoginSuccess:false,
   LoginFailed:false,
   token:null
}

export const loginReducer=(state=initState,{type,payload})=>{
       switch(type){
           case types.LOGIN_REQUEST:{
               return{
                   ...state,
                   isLoggingin:true
               }
           }
           case types.LOGIN_SUCCESS:{
               return{
                   ...state,
                  LoginSuccess:true,
                  token:payload
               }
           }
           case types.LOGIN_FAILURE:{
               return{
                   ...state,
                 LoginFailed:true,
                 LoginSuccess:false,
               }
           }
           default:{
            return{
                state
            }
           }
       }
}