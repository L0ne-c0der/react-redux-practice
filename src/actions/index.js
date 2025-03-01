//action constants
import axios from "axios";

export const init = 'accounts/init'
export const inc =  'accounts/increment'
export const dec = 'accounts/decrement'
export const incByAmt = 'accounts/incrementByAmount'
export const getAccUserPending = 'accounts/getUser/pending'
export const getAccUserFulfilled = 'accounts/getUser/fulfilled'
export const getAccUserRejected = 'accounts/getUser/rejected'
export const incBonus = 'bonus/increment';

//action creators

export function getUserAccount(id){
    return async (dispatch, getState)=> {
        dispatch(getAccountUserPending())
        try {
            const {data} = await axios.get(`http://localhost:8080/accounts/${id}`)
            dispatch(getAccountUserFulfilled(data.amount))
        } catch (error) {
            dispatch(getAccountUserRejected(error.message))
        }
        
    }
}

export function getAccountUserFulfilled(value){
    return {type: getAccUserFulfilled,
        payload: value
    }
}
export function getAccountUserRejected(error){
    return {type: getAccUserRejected,
        error: error
    }
}
export function getAccountUserPending(){
    return {type: getAccUserPending
    }
}

export function initUser(value){
    return {type: init,
        payload: value
    }
}

export function increment(){
    return {type: inc}
}
export function decrement(){
    return {type: dec}
}
export function incrementByAmount(value){
    return {type: incByAmt,
        payload: value
    }
}

//for bonus
export function incrementBonus(){
    return {type: incBonus}
}

