import React from 'react';
import {findByTestAttr, testStore} from './Utils/commonTestfun';
import {shallow} from 'enzyme';
import App from './App';

const setUp = (initialState={}) =>{
    const store = testStore(initialState);
    const wrapper = shallow(<App store ={store} />).childAt(0).dive();
    return wrapper;
};

describe('App Coponent testing', ()=>{
 let wrapper;
 beforeEach(()=>{
     const initialState ={
         posts:[{title:'Example title 1',
        body:'Some text'},
        {title:'Example title 2',
        body:'Some text'},
        {title:'Example title 3',
        body:'Some text'}]
     }
     wrapper = setUp();
 });
 it('Should render without errors', () =>{
     const Component = findByTestAttr(wrapper,'appComponent');
     expect(Component.length).toBe(1);
 });
})