import checkPropsType from 'check-prop-types'

export const findByTestAttr  = (wrapper, val) =>{
    return wrapper.find(`[data-test='${val}']`);
}


export const checkProps = (component, confirmingProps) =>{
    const propsErr = checkPropsType(component.checkPropsType, confirmingProps, 'props', component.name);
    expect(propsErr).toBeUndefined();
    
}