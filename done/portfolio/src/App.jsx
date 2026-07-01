import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Center from './components/Center/Center.jsx'

import CodeforcesStats from './CodeforcesStats.jsx'
function App() {
  return (
    <div>

      
      <Navbar/>
      <Center/>

        {/* <h2 className="text-3xl font-bold mb-4">LeetCode Stats</h2>
      <div className="w-full flex justify-center mt-8">

        <img
          src="https://leetcard.jacoblin.cool/photon_iithbucera?ext=heatmap"
          alt="LeetCode Stats"
          className="rounded-xl shadow-lg w-1/3"
        />
        <p align="center">
        <img src="https://codeforces-readme-stats.vercel.app/api/card?username=PHOTONx045&theme=dark" />
      </p>
      </div> */}

    
          <CodeforcesStats/>

    </div>


  )
}

export default App