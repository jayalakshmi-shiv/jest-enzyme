import React from 'react'
import { shallow } from 'enzyme'
import Congrats from './Congrats';
import {findByTestAttr, checkProps} from '../../test/testUtils';
import checkPropsType from 'check-prop-types';

const defaultProps = {sucess:false};

const setUp = (props={}) => {
    const setUpProps = {...defaultProps,...props}
    return shallow(<Congrats {...setUpProps}/>)}


test('render without error',()=>{
    const wrapper = setUp();
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.length).toBe(1);
})

test('render no text when `success` props is false',()=>{
    const wrapper = setUp({sucess:false});
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.text()).toBe('');
})

test('render non-empty  message when `success` prop is true',()=>{
    const wrapper = setUp({success:true});
    const component = findByTestAttr(wrapper,'component-message');
    expect(component.text().length).not.toBe(0)

})

test('does not throw warning with expected props',()=>{
    const expectedProps = {success:false};
    checkProps(Congrats, expectedProps);

})
