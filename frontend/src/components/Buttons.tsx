import React from 'react';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../state/action-creators'

// export const Buttons = () => {
//     const dispatch = useDispatch()

//     const { setUser } = bindActionCreators(actionCreators, dispatch)
//     return (
//         <>
//             <button onClick={() => setUser({ fistname: "Jessa", lastname: "Yosores", age: 20, role: "client" })}>change</button>
//         </>
//     )
// }