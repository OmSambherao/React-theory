import React from 'react'

function App() {
  
    const user = { 'name' : "om" , 'age' : 40 , 'college' : 'IITBHU'}
    localStorage.setItem( 'user' , JSON.stringify(user)  );

    const dataFromLocalStorage = JSON.parse(localStorage.getItem('user'));

    console.log(dataFromLocalStorage);

  
  
  return (


    <div>
      <header> this is local storage </header>
    </div>
  )
}

export default App