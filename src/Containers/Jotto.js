import React from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

export default function Jotto (){
    return(
        <div>
            <h1>Jotto!!</h1>
            <Congrats success={true}/>
            <GuessedWords guessedWords= {[{guessedWord: 'train', letterMatchCount:3}]} /> 
        </div>
    )
}