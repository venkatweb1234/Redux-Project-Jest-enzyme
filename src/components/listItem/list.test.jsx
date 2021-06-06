import React from 'react';
import {shallow} from 'enzyme';
import {checkPropTypesvalues,findByTestAttr} from '../../Utils/commonTestfun';
import ListItem from './list-component';

describe('ListItem Component', () =>{

    describe('Checking PropTypes', () =>{
        it('Should NOT throw a warning', () =>{
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some text'
            };
            const propsError = checkPropTypesvalues(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Componet Renders', () =>{
        let wrapper;
        beforeEach(() =>{
            const props ={
                title: 'Example Title',
                desc: 'Some text'
            };
            wrapper = shallow(<ListItem {...props} />)
        });

        it('Should renders without error', () =>{
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render title', () =>{
            const componentTitle = findByTestAttr(wrapper, 'CompoentTitle');
            expect(componentTitle.length).toBe(1);
        });

        it('Should render desc' , () =>{
            const compoentDesc = findByTestAttr(wrapper, 'componentDesc');
            expect(compoentDesc.length).toBe(1);
        });
    });

    describe('Should not render', () =>{
        let wrapper;
        beforeEach(() =>{
            const props ={
                desc: 'Some text'
            };
            wrapper = shallow(<ListItem {...props} />)
        });

        it('Componet is not rendered', ()=>{
            const ComponentnotRender = findByTestAttr(wrapper, 'listItemComponent');
            expect(ComponentnotRender.length).toBe(0);
        });
    });
});