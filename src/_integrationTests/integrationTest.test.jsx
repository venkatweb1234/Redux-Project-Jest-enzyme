import moxios from 'moxios';
import {testStore} from './../Utils/commonTestfun';
import {fetchPosts} from './../actions/action';

describe('FetchPosts action', () =>{
    beforeEach(() =>{
        moxios.install();
    });

    afterEach(() =>{
        moxios.uninstall();
    });
    test('Store is updated correctly', () =>{
        const expectedState =[{
            title: 'Example title 1',
            body:'Some Text'
        },{
            title: 'Example title 2',
            body:'Some Text'
        },
        {
            title: 'Example title 3',
            body:'Some Text'
        }];
        const store = testStore();
        moxios.wait(() =>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:expectedState
            })
        })

        return store.dispatch(fetchPosts()).then(() =>{
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    });
});