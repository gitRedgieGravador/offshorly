import { ActionConst } from "../action-const/index"
import {Action} from '../actions-types'

const token = "";

const tokenReducer = (state: string = token, action: Action): string => {
    switch (action.type) {
        case ActionConst.SET_TOKEN:
            let token = action.payload
            return token
        default:
            return state;
    }
}

export default tokenReducer