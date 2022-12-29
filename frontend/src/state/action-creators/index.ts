import { Dispatch } from "redux"
import { ActionConst } from "../action-const"
import { Action } from "../actions-types"
import { IUser } from "../../interfaces"

export const setUser = (user: IUser) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionConst.SET_USER,
            payload: user
        })
    }
}

export const SetToken = (token: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionConst.SET_TOKEN,
            payload: token
        })
    }
}