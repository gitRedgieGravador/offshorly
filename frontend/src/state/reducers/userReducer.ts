import { ActionConst } from "../action-const/index"
import { Action } from "../actions-types"
import { IUser } from "../../interfaces";

const initialState = {
    fistname: "redgie",
    lastname: "gravador",
    age: 20,
    role: 'admin'
};

const reducer = (state: IUser = initialState, action: Action): IUser => {
    switch (action.type) {
        case ActionConst.SET_USER:
            return {
                ...action.payload
            };
        default:
            return state;
    }
}

export default reducer