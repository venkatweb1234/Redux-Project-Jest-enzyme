import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, attr) =>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkPropTypesvalues = (component, expectedPropTypes) =>{
    const propTypesErr = checkPropTypes(component.prototype, expectedPropTypes, 'props', component.name);
    return propTypesErr;
}