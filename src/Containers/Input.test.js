import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input';
import {findByTestAttr, checkProps} from '../../test/testUtils';

const defaultProps = {};


const setUp = (secretWord = "party") =>{
    return shallow(<Input secretWord = {secretWord}/>)
}

test('render without wrror',()=>{
    let wrapper = setUp();
    const component = findByTestAttr(wrapper,'component-input');
    expect(component.length).toBe(1);
})

test ('does not throw warning with expected props',()=>{
    checkProps(Input,{secretWord: "party"})
})

describe('state controlled input field',()=>{
    test('state updates with value of input box upon change',()=>{
        const mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(()=>["",mockSetCurrentGuess]);

        const wrapper = setUp();
        const inputBox = findByTestAttr(wrapper,'input-box')
        const mockEvent = {target:{value:'train'}};

        inputBox.simulate("change",mockEvent)
        expect(mockSetCurrentGuess).toHaveBeenLastCalledWith('train');
    })
})