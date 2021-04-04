import { func } from "prop-types";
import GuessedWords from "../Containers/GuessedWords";

export function getLetterMatchCount(guessedWord, secretWord){
    const secreteLetters = secretWord.split('');
    const guessedLetterSet = new Set(guessedWord);
    return secreteLetters.filter(letter =>guessedLetterSet.has(letter)).length;
}