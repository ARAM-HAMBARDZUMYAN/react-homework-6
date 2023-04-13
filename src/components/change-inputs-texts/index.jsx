import { useState } from 'react';

function ChangeInputText() {
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');

  const handleInputChange1 = (event) => {
    setInputText1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputText2(event.target.value);
  };

  const handleButtonClick = () => {
    setInputText1(inputText2);
    setInputText2(inputText1);
  };

  return (
    <div>
      <input type="text" value={inputText1} onChange={handleInputChange1} />
      <input type="text" value={inputText2} onChange={handleInputChange2} />
      <button onClick={handleButtonClick}>Exchange Text</button>
    </div>
  );
}
export default ChangeInputText