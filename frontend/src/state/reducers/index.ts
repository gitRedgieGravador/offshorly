import { combineReducers } from "redux";
import userReducer from "./userReducer"
import tokenReducer from "./tokenReducer"

const reducers = combineReducers({
    user: userReducer,
    token: tokenReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>