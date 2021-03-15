import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Counter from './Counter';

Enzyme.configure({adapter: new EnzymeAdapter()})

 /**
  * Factory function to create a ShallowWrapper for the App component.
  * @function setup
  * @param {object} props - Component props specific to this setup.
  * @returns {ShallowWrapper}
  */
const setUp = () =>shallow(<Counter/>)


const findByValue = (wrapper, value) => wrapper.find(`[data-test='${value}']`);


test('renders without error', () => {
  const wrapper = setUp();
  // console.log(wrapper.debug()); //display DOM
  const counterComponent = findByValue(wrapper, 'counter-app');
  expect(counterComponent.length).toBe(1);
});

test('render button', ()=>{
  const wrapper = setUp();
  // console.log(wrapper.debug()); //display DOM
  const incrementButton = findByValue(wrapper, 'increment-button');
  expect(incrementButton.length).toBe(1);
})

test('render counter display', ()=>{
  const wrapper = setUp();
  // console.log(wrapper.debug()); //display DOM
  const counterDisplay = findByValue(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
})

test('counter starts at 0',()=>{
  const wrapper = setUp();
  const count = findByValue(wrapper, 'count').text();
  expect(count).toBe("0");
})
 
// increment button test cases
describe('increment',()=>{
  test("renders increment button", () => {
    const wrapper = setUp();
    const button = findByValue(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });

  test('Clicking on button increments counter display',()=>{
    const wrapper = setUp();
    const incrementButton = findByValue(wrapper, 'increment-button');
    incrementButton.simulate('click');
    const count = findByValue(wrapper, 'count').text();
    expect(count).toBe("1");
  })
})

// decrement button test cases
describe('decrement',()=>{
  test('renders decrement button',()=>{
    const wrapper = setUp();
    const decrementButton = findByValue(wrapper, 'decrement-button')
    expect(decrementButton.length).toBe(1);
  })

  test('Clicking on button decrements counter display',()=>{
    const wrapper = setUp();

    const incrementButton = findByValue(wrapper, 'increment-button');
    incrementButton.simulate('click');

    const decrementButton = findByValue(wrapper, 'decrement-button')
    decrementButton.simulate('click');

    const count = findByValue(wrapper, 'count').text();
    expect(count).toBe("0");

  })
})

// for showing errors
describe('Error when counter value goes below 0',()=>{
  test('Does not show error when not needed',()=>{
    const wrapper = setUp();
    const errorDiv = findByValue(wrapper, 'error-message');
    const noError = errorDiv.hasClass('hidden');
    expect(noError).toBe(true)
  })
})


describe('Counter is 0 and decrement is clicked',()=>{
  // using a describe here so I can use a "beforeEach" for shared setup
  // scoping wrapper to the describe, so it can be used in beforeEach and the tests
  let wrapper;
  beforeEach(() => {
    // no need to set counter value here; default value of 0 is good
    wrapper = setUp();

    // find button and click
    const button = findByValue(wrapper, "decrement-button");
    button.simulate("click");
  });
  test('error shows',()=>{
    const errorDiv = findByValue(wrapper, "error-message");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(false);
  })
  test("counter still displays 0", () => {
    const count = findByValue(wrapper, "count").text();
    expect(count).toBe("0");
  });
  test('clicking increment clears the error',()=>{
    const incButton = findByValue(wrapper, "increment-button");
    incButton.simulate("click");
    const errorDiv = findByValue(wrapper, "error-message");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(true)
  })
})

