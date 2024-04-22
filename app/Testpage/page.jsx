'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
function page() {

    const router = useRouter();
    const query = router.query;
    const regNum = query && query?.regNum;
    console.log(regNum);
    
  return (
    <div>
        {regNum && <p>Registration Number: {regNum}</p>}
        {!regNum && <p>Registration Number is not defined.</p>}
    </div>
  )
}

export default page
