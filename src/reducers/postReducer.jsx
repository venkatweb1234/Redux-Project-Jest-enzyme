import {types} from './../actions/type';
import {type} from 'os';

export default (state =[], action) =>{
    switch(action.type){
        case types.GET_POSTS:
            return action.payload;
        default:
            return state;
    }
};