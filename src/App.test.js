import { mount } from 'enzyme'
import {findByTestAttr, checkProps} from '../test/testUtils';
import App from './App';

// activate global mock to make sure getSecteWord doesn't make network call
jest.mock('./actions');
import {getSecretWord as mockGetSecretWord} from './actions'
const setUp = () =>{
    //use mount, because useEffect not called on 'shallow'
    return mount(<App/>);
}

test('renders without error',()=>{
    const wrapper = setUp();
    const appComponent = findByTestAttr(wrapper,'component-app')
    expect(appComponent).toHaveLength(1);
})

describe('get secret word', ()=>{
    beforeEach (()=>{
        mockGetSecretWord.mockClear();
    })
    test('getSecretWord on app mount',()=>{
        const wrapper = setUp();
        expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
    })
    test('getSecretWord does not run on app update', ()=>{
        const wrapper = setUp();
        mockGetSecretWord.mockClear();
        // using setProps because wrapper.update() does not trigger useEffect
        wrapper.setProps();
        expect(mockGetSecretWord).toHaveBeenCalledTimes(0)

    })
})

