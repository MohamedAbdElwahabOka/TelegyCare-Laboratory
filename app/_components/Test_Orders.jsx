import React from 'react';
import Link from 'next/link';
function Test_Orders() {
  return (
    <div>
    <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Test Orders</h1></div>
    <div className="bg-white p-4 shadow-md rounded-md">
      
    {/* <div className="text-xl font-semibold mb-4">{patient?.attributes?.reg_Num}</div> */}
    <fieldset className="border border-gray-300 p-4 rounded-md">
      <legend className="text-lg font-semibold mb-2">Tests:  </legend>
      <div className="flex items-center mb-4">
     <ul> <li className="flex items-center mb-4">
    <span className="font-semibold mr-2 w-24">one</span>
  </li>
  </ul>
      </div>




      
    </fieldset>
   
    <div className="flex justify-end">
 <Link href="#"

  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Send Results
    </Link>
</div>
  </div></div>
  )
}

export default Test_Orders
