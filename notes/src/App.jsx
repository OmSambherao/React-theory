import React, { useState } from 'react'

function App() {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [taskArray , setArray] = useState([]);

  const working= (e)=>{
      e.preventDefault();
      setArray([...taskArray, { title, detail }]);
      setTitle("");
      setDetail("");

  }

  const deleteNote = (idx)=>{
    
     const newArray = [...taskArray];

     newArray.splice( idx , 1 );

     setArray( newArray);
    
  }

 
  return (
    <div className='flex flex-col'>
    {/* this is input div */}
    <div className="bg-gray-900 h-2/3 flex items-center justify-center p-4 text-white mt-10">

          <div className='bg-gray-800 rounded-3xl shadow-2xl flex flex-wrap-reverse overflow-hidden max-w-4xl border border-gray-700'>

              <form action="" className='p-8 md:p-10 flex flex-col gap-6 w-full md:w-1/2'
                onSubmit={(e)=>{
                  working(e);
                }}
              >

                    <input type="text" 
                    placeholder='Enter your name'
                    className='bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition'
                    value={title}
                    onChange={
                      (e)=>{
                        setTitle (e.target.value);
                      }
                    }
                    />

                    <textarea
                    placeholder='Write your notes here .. !!'
                    className='bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 p-3 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition'
                    value={detail}
                    onChange={
                      (e)=>{
                        setDetail(e.target.value);
                      }
                    }
                    />


                    <button
                    className='bg-green-600 text-white font-bold p-3 rounded-xl hover:bg-green-700 transition-colors duration-300'>
                        Add Note
                    </button>

              </form>

              <div className='w-full md:w-1/2 flex items-center justify-center p-8'>

                <img 
                  src="https://img.magnific.com/premium-vector/notes-book-cartoon-vector-icon-illustration-education-object-isolated-flat-vector_138676-14256.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="A cartoon illustration of a notebook." 
                  className="w-full h-auto max-w-xs"
                  />

              </div>  
          </div>
    </div>

    {/* here is your tasks  */}
    <div className='text-white p-4 md:p-10'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Your Notes</h1>

      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

        {taskArray.map(function(elem , idx ){
          return <div key ={idx}>

          <li className='bg-gray-800 rounded-xl p-6 border border-gray-700 flex flex-col justify-between shadow-lg hover:shadow-green-400/20 transition-shadow duration-300'>
            <div>
              <h2 className='font-bold text-xl mb-2 text-green-400'> {elem.title} </h2>
              <p className='text-gray-300 whitespace-pre-wrap'>{elem.detail}</p>
            </div>
             
          </li>

          <button 
              onClick={() => {
                deleteNote( idx );
              }}
              className='bg-red-600 text-white font-bold p-2 rounded-lg hover:bg-red-700 transition-colors duration-300 mt-4 self-end'
            >
              Delete
            </button>


          </div>

        })}
        
      </ul>
    </div>
    </div>
  )
}

export default App