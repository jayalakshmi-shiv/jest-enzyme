import React from 'react'
import { mount } from 'enzyme'
import Input from './Input';
import {findByTestAttr, checkProps, storeFactory} from '../../test/testUtils';
import { beforeAll } from 'jest-circus';
import {Provider} from 'react-redux'

const defaultProps = {};


const setUp = (initialState ={}, secretWord = "party") =>{
    const store = storeFactory(initialState);
    return mount(<Provider store={store}><Input secretWord = {secretWord}/></Provider>)
}

describe('render',()=>{
    describe('Success is true',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp({success: true});
        })  
        test('input render without error',()=>{
            const component = findByTestAttr(wrapper,'component-input');
            expect(component.length).toBe(1);
        })
        test('input box does not show',()=>{
            const inputBox = findByTestAttr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(false);
        })
        test('input box does not show',()=>{
            const submitButton = findByTestAttr(wrapper, 'submit-button');  
            expect(submitButton.exists()).toBe(false);
        })
    })
    describe('Success is false',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp({success: false});
        })
        test('input render without error',()=>{
            const component = findByTestAttr(wrapper,'component-input');
            expect(component.length).toBe(1);
        })
        test('input box shows',()=>{
            const inputBox = findByTestAttr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(true);
        })
        test('input box shows',()=>{
            const submitButton = findByTestAttr(wrapper, 'submit-button');  
            expect(submitButton.exists()).toBe(true);
        })

    })
})



test ('does not throw warning with expected props',()=>{
    checkProps(Input,{secretWord: "party"})
})

describe('state controlled input field',()=>{
    let mockSetCurrentGuess = jest.fn(), wrapper, originalUseState;

    beforeEach(()=>{
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        React.useState = jest.fn(()=>["",mockSetCurrentGuess]);
        wrapper = setUp({success: false});
    })
    afterEach(()=>{
        React.useState = originalUseState;
    })
    test('state updates with value of input box upon change',()=>{
        

        
        const inputBox = findByTestAttr(wrapper,'input-box')
        const mockEvent = {target:{value:'train'}};

        inputBox.simulate("change",mockEvent)
        expect(mockSetCurrentGuess).toHaveBeenLastCalledWith('train');
    });

    test('field is cleared upon submit button click',()=>{
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click',{preventDefault(){}});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("")
    })
})