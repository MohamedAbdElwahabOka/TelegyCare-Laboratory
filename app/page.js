'use client'

// import Payment from './_components/Payment';
import Sidebar from './_components/Sidebar';
import ProductApis from './_Utils/ProductApis'
import React, { useEffect, useState } from 'react'
import SendResult from './SendResult/page';

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
      {/* <SendResults/>
      <Sidebar /> */}
      {/* <Payment /> */}
      <div className="flex h-screen">
        <Sidebar className="w-64 bg-gray-800 text-white px-4 py-8" />
        <div className="flex-grow bg-gray-100 p-8">
        </div>
      </div>
      <SendResult />
    </>

  );
}