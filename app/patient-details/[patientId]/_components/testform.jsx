import React from 'react'

function Testform({patient}) {
  return (
    <div>
      {patient?.attributes?.reg_Num}
    </div>
  )
}

export default Testform
