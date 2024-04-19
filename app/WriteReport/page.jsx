import React from 'react'
import Sidebar from '../_components/Sidebar'

import Make from './_components/Make'

function Ai_result() {
  return (
    <div>
     <div className="flex h-screen">  
      <Sidebar className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
   
   
         <Make/>


      </div>
    </div>
    </div>
  )
}

export default Ai_result
