import React , {useState} from 'react'

import axios from  'axios';

import { useEffect } from 'react';



function App() {
  // const [state, setstate] = useState({})
  //   const fun = async ()=>{
  //       const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        
  //       console.log(response.data)
  //   }


    const [num, setnum] = useState(0);

    useEffect(() => {
      console.log("num  is changing ... !")
    }, [num])


  return (
    <div>

      <h1>{num}</h1>
      
      <button onClick={()=>{
        setnum( num + 1 );
      }}>button</button>
    </div>
  )
}

export default App