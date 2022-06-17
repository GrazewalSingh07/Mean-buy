import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/cartreducer";
import { loginReducer } from "./Login/loginReducer";
import { productReducer } from "./Product/productReducer";
import { RegisterReducer } from "./Register/registerReducer";
import { SearchproductReducer } from "./search/SearchReducer";

const rootReducer =combineReducers({
    login:loginReducer,
    register:RegisterReducer,
    cart:cartReducer,
    product:productReducer,
    search:SearchproductReducer,
})
export const store=createStore(rootReducer,applyMiddleware(thunk))


