'use client'
import { useEffect, useState } from 'react';
import Table from './Table';

import medicalrecordAPI from '../_Utils/medicalrecordAPI'

function Patient_Id({data}) {



  const [patientsByLabId, setPatientsByLabId] = useState([]);
  useEffect(() => {
    getPatientsByLabId_();
  }, [])

  const getPatientsByLabId_ = () => {
    medicalrecordAPI.getMedicalRecordsByLabId(data).then(res => {
      console.log(res.data.data);
      setPatientsByLabId(res.data.data);
      

    })
  }

    // const [data, setData] = useState([]); 
    
    // useEffect(() => {
    //     const fetchedData = [
    //       {
    //         "Registrationnumber": "R123456",
    //         "Name": "John Doe",
    //         "Phone": "+1234567890",
    //         "Email": "john.doe@example.com",
    //         "Address": "123 Main St, City, Country"
    //       },
    //       {
    //         "Registrationnumber": "R987654",
    //         "Name": "Jane Smith",
    //         "Phone": "+1987654321",
    //         "Email": "jane.smith@example.com",
    //         "Address": "456 Elm St, Town, Country"
    //       },
    //       {
    //         "Registrationnumber": "R654321",
    //         "Name": "Alice Johnson",
    //         "Phone": "+1122334455",
    //         "Email": "alice.johnson@example.com",
    //         "Address": "789 Oak St, Village, Country"
    //       },
    //       {
    //         "Registrationnumber": "R321654",
    //         "Name": "Bob Brown",
    //         "Phone": "+9876543210",
    //         "Email": "bob.brown@example.com",
    //         "Address": "321 Pine St, Hamlet, Country"
    //       }
    //     ];
    
    //     setData(fetchedData);
    // }, []);
    
  return (
    <div>
        <Table data={patientsByLabId} />
        {/* <Table data={data} /> */}
     
    </div>
  )
}

export default Patient_Id
