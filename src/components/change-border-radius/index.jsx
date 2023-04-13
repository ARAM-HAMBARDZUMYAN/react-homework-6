import { useState,useEffect} from 'react';


function ChangeBorderRadius() {
    const [items, setItems] = useState(''); 
    const [items2,setItems2]=useState('')
      const changeBackground =() => {
     
           setItems2(items)
          }
          useEffect(() => {
            
        }, [changeBackground])
 
  
   
  

 

        return (
          <div style={{
            width: "300px",
            height:"300px",
            backgroundColor:"blue",
            borderRadius:items2+"px"
          }}> 
          <input value={items} onChange={(e) => setItems(e.target.value)} />
            <button onClick={changeBackground}>Change color</button>
          </div>
        )   
      }
    

export default ChangeBorderRadius