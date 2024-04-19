import React from 'react'
// import Sidebar_for_PatientD  from 'patient-Detail/_components/Sidebar_For_PatientD'
import SidebarForTestOrders from '../_components/SidebarForTestOrders'
import Test_Orders from '../_components/Test_Orders'
function TestOrders() {
  return (



<div className="flex h-screen">  
<SidebarForTestOrders className="w-64 bg-gray-800 text-white px-4 py-8" />
<div className="flex-grow bg-gray-100 p-8">

<Test_Orders/>

</div>
</div>
 )
}

export default TestOrders
