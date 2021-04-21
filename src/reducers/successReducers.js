import {actionType} from '../actions'

export default(state = false, action) =>{
    switch(action.type) {
        case (actionType.CORRECT_GUESS): return true;
        default: return state;
    }
}