import { ActionConst } from "../action-const/index"
import { IUser } from '../../interfaces'

interface SetUser {
    type: ActionConst.SET_USER,
    payload: IUser
}

interface SetToken {
    type: ActionConst.SET_TOKEN,
    payload: string
}

export type Action = SetUser | SetToken