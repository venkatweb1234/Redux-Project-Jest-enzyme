import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr, checkPropTypesvalues} from './../../Utils/commonTestfun';
import SharedButton from './button-component';

describe('SahredButton Component', () =>{
    describe('Checking PropTypes', () =>{
        it('Should NOT throw a warning', () =>{
            const exxpectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () =>{

                }
            };
            const propsError = checkPropTypesvalues(SharedButton, exxpectedProps);
            expect(propsError).toBeUndefined();
        });
    });
});


describe('Renders', () =>{
    let wrapper;
    let mockFunc;
    beforeEach(() =>{
        mockFunc =jest.fn();
        const props = {
            buttonText: 'Example Button Text',
            emitEvent: mockFunc
        }
        wrapper = shallow(<SharedButton {...props} />)
    });
    it('Should Render a button', () =>{
        const button = findByTestAttr(wrapper, 'buttonComponent');
        expect(button.length).toBe(1);
    });

    it('Should emit callback on click event', () =>{
        const button = findByTestAttr(wrapper, 'buttonComponent');
        button.simulate('click');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    })
})