import React from 'react'
import { shallow } from 'enzyme'
import GuessedWords from './GuessedWords';
import {findByTestAttr, checkProps} from '../../test/testUtils';



const defaultProps = {guessedWords: [{guessedWord: 'train', letterMatchCount:3}]};


const setUp = (props={}) =>{
    const setUpProps = {...defaultProps,...props};
    return shallow(<GuessedWords {...setUpProps}/>)
}


test ('does not through warning with expected props',()=>{
    checkProps(GuessedWords, defaultProps)
})


describe('if there are no words guessed',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setUp({guessedWords:[]});
    })
    test('render without wrror',()=>{
        const component = findByTestAttr(wrapper,'component-guessed-word');
        expect(component.length).toBe(1);
    })

    test('',()=>{
        const instructions = findByTestAttr(wrapper,'component-instructions');
        expect(instructions.text().length).not.toBe(0)
    })

})

describe('if there are words guessed',()=>{
    const guessedWords = [
                    {guessedWord: 'train', letterMatchCount:3},
                    {guessedWord: 'agile', letterMatchCount:1},
                    {guessedWord: 'party', letterMatchCount:5}
                   ]
    let wrapper;
    beforeEach(()=>{
        wrapper = setUp({guessedWords});
    })
    
    test('render without error',()=>{
        const component = findByTestAttr(wrapper,'component-guessed-word');
        expect(component.length).toBe(1);
    })
    test('render guessed word section',()=>{
        const guessedWordsNode = findByTestAttr(wrapper,'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    })
    test('Correct number of guessed words',()=>{
        const guessedWordsNode = findByTestAttr(wrapper,'guessed-word');
        expect(guessedWordsNode.length).toBe(guessedWords.length);
    })
})