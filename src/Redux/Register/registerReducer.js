 
import * as types from "./actiontypes"
const initState={
   isRegistering:false,
   registerationSuccess:false,
   registrationFailed:false,
}

export const RegisterReducer=(state=initState,{type,payload})=>{
       switch(type){
           case types.REGISTER_REQUEST:{
               return{
                   ...state,
                   isRegistering:true
               }
           }
           case types.REGISTER_SUCCESS:{
               return{
                   ...state,
                   registerationSuccess:true
               }
           }
           case types.REGISTER_FAILURE:{
               return{
                   ...state,
                   registrationFailed:true
               }
           }
           default:{
            return{
                state
            }
       }
    }
}
