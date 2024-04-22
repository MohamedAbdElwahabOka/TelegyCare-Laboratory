'use client'
import React, { useEffect, useState } from 'react'
import Login from "./_components/Login";
import LaboratoriesAPI from './_Utils/LaboratoriesAPI'

export default function Home() {


  const [laboratories, setLaboratories] = useState([]);
  useEffect(() => {
    getLaboratories_();
  }, [])

  const getLaboratories_ = () => {
    LaboratoriesAPI.getLaboratories().then(res => {
      console.log(res.data.data);
      setLaboratories(res.data.data);
      // setLoading(true)

    })
  }


  return (
    <>
      <Login data={laboratories} />

    </>

  );
}