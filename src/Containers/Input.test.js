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