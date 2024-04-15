'use client'
import React, { useEffect, useState} from "react";
import PatientAPI from '../../_Utils/PatientAPI'
import Testform from './_components/testform'

function patient_details({params}) {
  const [patientDetails, setPatientDetails] = useState({});
  useEffect(() => {
    getPatientById_();
  }, [params?.productId]);

  const getPatientById_ = () => {
    PatientAPI.getPatientById(params?.patientId).then((res) => {
      console.log("patient item ", res.data.data);
      setPatientDetails(res.data.data);
      // getPatientByRegistrationNumber_(res.data.data);
    });
  };

  // const getPatientByRegistrationNumber_ = (product) => {
  //   ProductApis.getPatientByRegistrationNumber(product?.attributes.category).then(
  //     (res) => {
  //       console.log(res?.data?.data);
        // setProductList(res?.data?.data);
  //     }
  //   );
  // };
  return (
    <div>
      <Testform patient={patientDetails}/>
    </div>
  )
}

export default patient_details