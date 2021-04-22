import axios from  'axios';
import { getLetterMatchCount } from '../helpers.js';

export const actionType = {
    CORRECT_GUESS : 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD'
}

// export function correctGuess () {
//     return {type : actionType.CORRECT_GUESS};
// }


// thunk middle ware action creator
export const guessWord = (guessedWord) =>{
    return function(dispatch, getState){
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount (guessedWord, secretWord);
        dispatch({
            type: actionType.GUESS_WORD,
            payload:{guessedWord, letterMatchCount}
        });

        if(guessedWord === secretWord) {
            dispatch({type: actionType.CORRECT_GUESS})
        }
    }
}


export const getSecretWord = () =>{
    return axios.get('http://localhost:3000')
    .then(response => response.data)
} 