import React , {useEffect, useState} from 'react'

import axios from 'axios';

function App() {
  const [num, setnum] = useState('20');

  const [userData, setUserData] = useState([]);

  const getData = async ()=>{
    
    const response = await axios.get(`https://picsum.photos/v2/list?page=${num}&limit=50`);
    
    console.log(response)
    
    setUserData( response.data);
    // console.log(response.data)
  }
  

  useEffect(()=>{
    getData()

  } , [num])
  let printData = " no data available ";

  if( userData.length > 0 ){

    printData = userData.map((elem, idx) => {
          return (
          <div key={idx} >
            <a href= {elem.url}>

              <div  className='h-40 w-44 align-middle rounded-xl overflow-hidden'>
                  <img src={elem.download_url} alt=""
                  className=' h-full object-cover w-full rounded-xl '
                  />
              </div>
              <h1 className='font-bold '> {elem.author}</h1>

            </a>
              

          </div>
            
          );
    });

  }


  return (
    <div className='bg-black h-screen text-white p-5 overflow-auto'>
      <div className='flex flex-wrap gap-5' >
        {printData}
      </div>


      <div className='flex flex-row justify-center gap-3 m-10'>
        <button className='bg-amber-300 text-black p-3 rounded active:scale-95'
        onClick={()=>{
          if( num > 1 ){

            setnum( num - 1 );
          }
        }}
        >
            prev
        </button>

        <h1 className=' p-3 rounded '
        >{num}</h1>
        <button className='bg-amber-300 text-black p-3 rounded active:scale-95'
        onClick={()=>{
          setnum( num + 1 );
        }}
        >
            next
        </button>
      </div>
    </div>
  )
}

export default App