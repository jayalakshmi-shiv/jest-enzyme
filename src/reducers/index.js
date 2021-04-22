import {combineReducers} from 'redux';
import success from './successReducers';
import guessedWord from './guessesWordsReducer';
import secretWord from './secretWordReducer'

export default combineReducers({
    success,
    guessedWord,
    secretWord,
})