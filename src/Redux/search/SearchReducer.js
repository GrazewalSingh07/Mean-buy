import * as types from "./actionTypes"

const initState={
   isloading:false,
   isError:false,
   data:null,
   change:null
}
export const SearchproductReducer=(state=initState,{type,payload})=>{
       switch(type){
           case types.GET_PRODUCT_REQUEST:{
               return{
                   isloading:true
               }
           }
           case types.GET_PRODUCT_SUCCESS:{
               return{
                   isloading:false,
                   data:payload,
               }
           }
           case types.GET_PRODUCT_FAILURE:{
               return{
                   ...state,
                   isError:true
               }
           }
           default:{
               return state
           }
       }
}