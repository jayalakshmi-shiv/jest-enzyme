import React from 'react';
import PropTypes from 'prop-types'

const GuessedWords = (props) =>{
    let contents;

    if(props.guessedWords.length === 0){
       contents = <span data-test ="component-instructions"> Try to guess the secret word! </span>
    }
    else{
        const guessedWordsRow = props.guessedWords.map((words,index)=>
        <tr data-test="guessed-word" key={index}>
            <th>{words.guessedWord}</th>
            <th>{words.letterMatchCount}</th>
        </tr>
        );
        contents = (
            <div data-test ="guessed-words">
                <h3>Guessed words</h3>
                <table className="table table-sm"> 
                    <thead className="thead-light">
                        <tr><th>Guess</th><th>Matching Letters</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordsRow}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test="component-guessed-word">
            {contents}
        </div>
    )
}





GuessedWords.propTypes ={
    GuessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired, 
            letterMatchCount:PropTypes.number.isRequired
        })
    ).isRequired

}
export default GuessedWords; 