'use client'
import { useEffect, useState } from 'react';
import Table from './Table';

function Patient_Id() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchedData = [
          {
            "Name": "Tiger Nixon",
            "Position": "System Architect",
            "Office": "Edinburgh",
            "Age": 61,
            "Start date": "2011-04-25",
            "Salary": 320800
          },
          {
            "Name": "Garrett Winters",
            "Position": "Accountant",
            "Office": "Tokyo",
            "Age": 63,
            "Start date": "2011-07-25",
            "Salary": 170750
          },
          {
            "Name": "Ashton Cox",
            "Position": "Junior Technical Writer",
            "Office": "San Francisco",
            "Age": 66,
            "Start date": "2009-01-12",
            "Salary": 86000
          },
          {
            "Name": "Cedric Kelly",
            "Position": "Senior Javascript Developer",
            "Office": "Edinburgh",
            "Age": 22,
            "Start date": "2012-03-29",
            "Salary": 433060
          },
          {
            "Name": "Airi Satou",
            "Position": "Accountant",
            "Office": "Tokyo",
            "Age": 33,
            "Start date": "2008-11-28",
            "Salary": 162700
          },
          {
            "Name": "Brielle Williamson",
            "Position": "Integration Specialist",
            "Office": "New York",
            "Age": 61,
            "Start date": "2012-12-02",
            "Salary": 372000
          },
          {
            "Name": "Herrod Chandler",
            "Position": "Sales Assistant",
            "Office": "San Francisco",
            "Age": 59,
            "Start date": "2012-08-06",
            "Salary": 137500
          },
          {
            "Name": "Rhona Davidson",
            "Position": "Integration Specialist",
            "Office": "Tokyo",
            "Age": 55,
            "Start date": "2010-10-14",
            "Salary": 327900
          },
          {
            "Name": "Colleen Hurst",
            "Position": "Javascript Developer",
            "Office": "San Francisco",
            "Age": 39,
            "Start date": "2009-09-15",
            "Salary": 205500
          },
          {
            "Name": "Sonya Frost",
            "Position": "Software Engineer",
            "Office": "Edinburgh",
            "Age": 23,
            "Start date": "2008-12-13",
            "Salary": 103600
          },
          {
            "Name": "Jena Gaines",
            "Position": "Office Manager",
            "Office": "London",
            "Age": 30,
            "Start date": "2008-12-19",
            "Salary": 90560
          },
          {
            "Name": "Quinn Flynn",
            "Position": "Support Lead",
            "Office": "London",
            "Age": 22,
            "Start date": "2013-03-03",
            "Salary": 342000
          }
        ];
    
        setData(fetchedData);
    }, []);
    
  return (
    <div>
        <Table data={data} />
    </div>
  )
}

export default Patient_Id
