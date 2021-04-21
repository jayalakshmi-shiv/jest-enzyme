import {actionType, actionTypes} from '../actions';
import successReducer from './successReducers';

test('when previous state is undefined, return false', () =>{
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
})

test('return previous state when unknown action type', () =>{
    const newState = successReducer(false, {type: 'unknown'});
    expect(newState).toBe(false);
})

test('return `true` for action type CORRECT+GUESS', () =>{
    const newState = successReducer(false, {type: actionType.CORRECT_GUESS});
    expect(newState).toBe(true);
})