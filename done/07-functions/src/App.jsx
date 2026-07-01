import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState({name:"om" , age:"10"});
  function f (){
    const newObj = {...num};

    newObj.age = 20 ;

    setNum({name :"photon" , rating :1000 , age : 50});
    console.log(num)
  }


  return (
    <div >

      <h1> {num.age} {num.name} </h1>
      <button onClick={f}> button </button>
    </div>

  )
}

export default App