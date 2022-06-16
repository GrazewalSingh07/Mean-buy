import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/loginReducer";
import { RegisterReducer } from "./Register/registerReducer";
const rootReducer =combineReducers({
    login:loginReducer,
    register:RegisterReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk))


