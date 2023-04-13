import { useState } from 'react';

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleButtonClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Toggle</button>
      {isToggled && <p>Toggle is on</p>}
    </div>
  );
}
export default Toggleg