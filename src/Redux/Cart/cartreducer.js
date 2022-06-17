 
import * as types from "./actiontypes"
const initState={
    cart:[],
    isloading:false,
    isError:false,


    addingtocart:false,
    addedtocart:false,
    addingtocartfailed:false,

    removingfromcart:false,
    removedfromcart:false,
    removefromcartfailed:false,

}
export const cartReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.GET_CART_REQUEST:{
            return{
                ...state,
                isloading:true,

            }
        }
        case types.GET_CART_SUCCESS:{
            return{
                ...state,
                cart:payload,
                isloading:false
            }
        }
        case types.GET_CART_FAILURE:{
            return{
                ...state, 
                isloading:false,
                isError:true
            }
        }

        case types.ADD_TO_CART_REQUEST:{
            return{
                ...state,
                addedtocart:true,

            }
        }
        case types.ADD_TO_CART_SUCCESS:{
            return{
                ...state,
                
                addedtocart:true,
                addingtocart:false
            }
        }
        case types.ADD_TO_CART_FAILURE:{
            return{
                ...state, 
               addingtocart:false,
               addedtocart:false,
               addingtocartfailed:true
            }
        }
        case types.REMOVE_FROM_CART_REQUEST:{
            return{
                ...state,
                removingfromcart:true,

            }
        }
        case types.REMOVE_FROM_CART_SUCCESS:{
            return{
                ...state,
                
                removedfromcart:false,
                removedfromcart:true
            }
        }
        case types.REMOVE_FROM_CART_FAILURE:{
            return{
                ...state, 
                
                removedfromcart:false,
                removedfromcart:false,
                removefromcartfailed:true
            }
        }
        default:{
            return state
        }
    }
}