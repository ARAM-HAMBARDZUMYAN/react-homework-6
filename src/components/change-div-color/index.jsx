import { useState,useEffect} from 'react';


function ChangeDivColor() {
    const [items, setItems] = useState(''); 
      const changeBackground =() => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let background ="rgb(" + red + ", " + green + ", " + blue + ")";
         setItems(background);
          }
          useEffect(() => {
            
        }, [changeBackground])
        return (
          <div style={{
            width: "300px",
            height:"600px",
            backgroundColor:items
          }}> 
            <button onClick={changeBackground}>Change color</button>
          </div>
        )   
      }
    

export default ChangeDivColor