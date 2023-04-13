import React, { useState ,useEffect} from 'react';

function ManyChanges() {
    const [inputValue1, setInputValue1] = useState('');
    const [text, settext] = useState('');
   
  const addItem = () => {
    settext(inputValue1)
  
  };
  useEffect(() => {
            
  }, [addItem])
  return (
    <div>  
    <input value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />
    
    <button onClick={addItem}>Add</button>
     {text?<p>{text.toUpperCase()} <span>{text.length}</span></p>: null}
      
      
    </div>
  );
}
export default ManyChanges