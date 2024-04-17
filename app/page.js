'use client'

// import Payment from './_components/Payment';

import Login from "./_components/Login";
import ProductApis from './_Utils/ProductApis'
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
      <Login/>
    </>

  );
}