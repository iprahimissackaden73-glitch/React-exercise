
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter {count}</h2>
      {/* <h1>{count}</h1> */}
      <div>
        <button onClick={decrease} disabled={count === 0}>
          Decrease
        </button>
        <button onClick={increase}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;

