import { combineReducers } from "redux"
import Portfolio from "./portfolio"
// import Auth from '../reducers/Auth'
// import AuthSignUp from '../reducers/AuthSignUp';


const rootReducers= combineReducers({
    portfolio: Portfolio,
    // auth: Auth,
    // authSignup: AuthSignUp
})

export default rootReducers