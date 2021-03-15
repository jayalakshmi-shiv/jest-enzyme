import React from 'react';
import '../App.css';

function Counter() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState('');

  const decrementCounter = () =>{
    count>1?setCount(count-1):setError('Counter value can not be less than 0')
  }
  const incementCounter = () =>{
    error.length>1 && setError('');
    setCount(count + 1)
  }

  return (
    <div data-test="counter-app" className="App">
      <h1 data-test="counter-display">
        The counter is currently&nbsp; 
        <span data-test="count">{count}</span>
      </h1>
      <div style={{display:"flex"}}>
      <button
        data-test="increment-button"
        // onClick={error.length>1 && (setError(''),setCount(count + 1))}
        onClick={() => {
          if (error) { setError(false); }
          setCount(count + 1)
        }
      }
      >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        // onClick={count>1?setCount(count-1):setError('Counter value can not be less than 0')}
        onClick={() => {
          if (count > 0) {
            setCount(count - 1)
          } else {
            setError(true);
          }
        }
      }
      >
        Decrement counter
      </button>
      <div data-test="error-message" className={`error ${error ? '' : 'hidden'}`}>
        The counter cannot go below 0
      </div>
      </div>
      
    </div>
  );
}

export default Counter;