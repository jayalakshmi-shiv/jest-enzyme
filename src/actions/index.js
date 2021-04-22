import axios from  'axios';

export const actionType = {
    CORRECT_GUESS : 'CORRECT_GUESS'
}

// export function correctGuess () {
//     return {type : actionType.CORRECT_GUESS};
// }


// thunk middle ware action creator
export const guessWord = (guessedWord) =>{
    return function(dispatch, getState){
        
    }
}


export const getSecretWord = () =>{
    return axios.get('http://localhost:3000')
    .then(response => response.data)
} 