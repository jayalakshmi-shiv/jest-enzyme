import React from 'react'
import { mount } from 'enzyme'
import App from '../App'
import {findByTestAttr, checkProps} from '../../test/testUtils';
import { sub, substring } from 'prop-types/lib/ReactPropTypesSecret';


const setUp = (state = {}) =>{
    const wrapper = mount(<App/>)
    // add value to input box
    const inputBox = findByTestAttr(wrapper,'input-box');
    inputBox.simulate('change', {target:{value:'train'}});

    // simpulate click on submit button
    const submitButton = findByTestAttr(wrapper,'submit-button');
    submitButton.simulate('click',{preventDefault(){}})

    return wrapper;
}


describe.skip('no wordds guessed',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=setUp({
            secretWord:'party',
            success: false,
            guessedWord:[]
        })
    });
    test('creates guessedwords table with one row',()=>{
        const guessedWordRows = findByTestAttr(wrapper,'guessed-word');
        expect(guessedWordRows).toHaveLength(1);
    })
})
describe.skip('some wordds guessed',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=setUp({
            secretWord:'party',
            success: false,
            guessedWord:[{guessedWord:'agile', letterMatchCount: 1}]
        })
    });
    test('adds row to guessedWords table',()=>{
        const guessedWordNodes = findByTestAttr(wrapper,'guessed-word');
        expect(guessedWordNodes).toHaveLength(2);
    })
    
})
describe.skip('guess secret word',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=setUp({
            secretWord:'party',
            success: false,
            guessedWord:[{guessedWord:'agile', letterMatchCount: 1}]
        })
        // add value to input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = {target:{value:'party'}};
    inputBox.simulate('change',mockEvent);

    // simulate click on submit button
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click',{preventDefault(){}});
    });
    
    test('adds row to guessedWords table',()=>{
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(3);
    })
    
    test('display congrats component',()=>{
        const congrats = findByTestAttr(wrapper, 'component-congrats');
        expect(congrats.text().length).toBeGreaterThan(0);
    })

    test('does not display input component contents',()=>{
        const inputBox = findByTestAttr(wrapper,'input-box');
        expect(inputBox.exists()).toBe(false);

        const submitButton = findByTestAttr(wrapper,'submit-button');
        expect(submitButton.exists()).toBe(false);
    })
});

