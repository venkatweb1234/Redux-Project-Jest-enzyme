import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../Utils/commonTestfun';
import Headline from './headline.component';

const setup =(props={}) =>{
    const component = shallow(<Headline {...props}/>);
    return component;
};
describe('Headline Componet', () =>{
  
    describe('Have props', () =>{
        let wrapper;
        beforeEach(() =>{
            const props ={
                header:'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setup(props);
        });


        it('It should render without errors', () =>{ 
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });
    
       

        it('Should render header', () =>{
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        });

        it('Should render Desc', () =>{
            const component = findByTestAttr(wrapper, 'desc');
            expect(component.length).toBe(1);
        });

      
    });

    describe('Have No Props', () =>{
        let wrapper;
        beforeEach(() =>{
            wrapper = setup()
        });
        it('It should render without props', () =>{
            const wrapper1 = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(wrapper1.length).toBe(0);
        });

        it('Should render Desc', () =>{
            const component = findByTestAttr(wrapper, 'desc');
            expect(component.length).toBe(0);
        });

        it('Should render header', () =>{
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(0);
        });
    });
})