import { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Number of clicks: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default Button