import { combineReducers } from "redux";
import iceCreamReducer from "./iceCreams/iceCreamsReducer";
import cakeReducer from './cakes/cakeReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer