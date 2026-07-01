import React from 'react'
import Rightpart from './Rightpart.jsx'
import Leftpart from './Leftpart.jsx'
function Center() {
  return (
    <div className="flex justify-center items-start gap-4">
      <Leftpart/>
      <Rightpart/>
    </div>
  )
}

export default Center