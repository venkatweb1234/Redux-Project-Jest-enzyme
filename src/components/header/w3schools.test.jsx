import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../Utils/commonTestfun'
import Header from './w3schools-header.component';

const setup =(props={}) =>{
    const component = shallow(<Header {...props}/>);
    return component;
};

describe('Header Component', () =>{
    let component;
    beforeEach(() =>{
        component = setup();
    })
    it('Should render Header Component', () =>{ 
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () =>{
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    })
});
