'use client'
import Sidebar from './_components/Sidebar';
import ProductApis from './_utils/ProductApis'

import React, { useEffect, useState } from 'react'

export default function Home() {
  const [tests, setTests] = useState([]);
  useEffect(() => {
    getTests_();
  }, [])

  const getTests_ = () => {
    ProductApis.getTests().then(res => {
      console.log(res.data.data);
      // setLatestProducts(res.data.data);
      // setLoading(true)

    })
  }


  return (
    <>
      <Sidebar />

    </>

  );
}
