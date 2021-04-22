import {combineReducers} from 'redux';
import success from './successReducers';
import guessedWord from './guessesWordsReducer';

export default combineReducers({
    success,
    guessedWord,
})