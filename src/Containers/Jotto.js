import React from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input'

export default function Jotto (){
    const success = false;
    const secretWord = 'party';
    const guessedWords = [];
    return(
        <div>
            <h1>Jotto!!</h1>
            <Congrats success={success}/>
            <Input success={success} secretWord={secretWord}/>
            <GuessedWords guessedWords= {guessedWords} /> 
        </div>
    )
}