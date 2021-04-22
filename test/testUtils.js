import checkPropsType from 'check-prop-types';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../src/reducers';
import {middleWares} from '../src/configureStore'; 
import reducers from '../src/reducers';



/** 
* create testing store with imported reducers, middleware, and initial StaticRange.
* globals: rootReducer.
* @param {object} initialState = Initial state for store.
* @function storeFactory
* @returns {Store} - Redux store
*/


export const storeFactory = (initialState) =>{
    return createStore (rootReducer, initialState, applyMiddleware(...middleWares));
}

export const findByTestAttr  = (wrapper, val) =>{
    return wrapper.find(`[data-test='${val}']`);
}


export const checkProps = (component, confirmingProps) =>{
    const propsErr = checkPropsType(component.checkPropsType, confirmingProps, 'props', component.name);
    expect(propsErr).toBeUndefined();
    
}