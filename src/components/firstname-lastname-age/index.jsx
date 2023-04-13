import React, { useState ,useEffect} from 'react';

function ChangeText() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [Age, setAge] = useState('');
  const addItem = () => {
    setfirstName(inputValue1)
    setlastName(inputValue2)
    setAge(inputValue3)
  };
  useEffect(() => {
            
  }, [addItem])
  return (
    <div>  
    <input value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />
    <input value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
    <input value={inputValue3} onChange={(e) => setInputValue3(e.target.value)} />
    <button onClick={addItem}>Add</button>
     {firstName && lastName && Age?<p>Barev dzez im anunn e {firstName}, im azganunn e {lastName}, ev es {Age} tarekan em</p>: null}
      
      
    </div>
  );
}
export default ChangeText