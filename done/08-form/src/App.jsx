import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with title:', title);
    // You can add logic here to handle the form data, like sending it to a server.
     // Clear the input after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value) ; 
            
          }}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;