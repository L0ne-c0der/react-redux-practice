import { getAccUserFulfilled, getAccUserPending, getAccUserRejected, dec, inc, incByAmt } from "../actions";

export default function accountReducer(state={amount:1}, action){
    switch (action.type) {
        case getAccUserFulfilled:
            return {amount : action.payload, pending: false};   
            break;
        case getAccUserRejected:
            return {...state, error: action.error, pending: false};
            break;
        case getAccUserPending:
            return {...state, pending: true};
            break;
        case inc:
            return {amount : state.amount+1}
            break;
        case dec:
            return {amount : state.amount-1};
             break;
        case incByAmt:
            return {amount : state.amount + action.payload};
            break;
        default:
            return state;
    }
}