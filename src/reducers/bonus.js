import { incByAmt, incBonus } from "../actions";
export default function bonusReducer(state={points:0}, action){
    switch(action.type){
        case incByAmt:
            if(action.payload>=100)
                return {points: state.points + 1}
        case incBonus:
            return {points: state.points+1}
        default:
            return state;
            break;
    }
}
