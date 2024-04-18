'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
function Table({ data }) {
    const [filteredData, setFilteredData] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        if (searchTerm) {
          const filtered = data.filter((item) =>
            Object.values(item)
              .join('')
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          );
          setFilteredData(filtered);
        } else {
          setFilteredData(data);
        }
      }, [searchTerm, data]);
  return (
    <div className="p-4">
  <div className="flex justify-between mb-4">
  <h1 className="text-2xl font-bold">Patient List</h1>
  <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-64 px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:w-auto"
    />
</div>
      <table className="w-full border border-gray-300">
    
      <thead>
        <tr>
          <th className="px-4 py-2">Registration number</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Phone</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Address</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          // <Link href="/" >
          <tr key={index}>
            <td className="border px-4 py-2"><Link href={`/patient-details/${item.id}`}>{item?.attributes?.reg_Num}</Link></td>
            <td className="border px-4 py-2"><Link href={`/patient-details/${item.id}`}>{item?.attributes?.Name}</Link></td>
            <td className="border px-4 py-2"><Link href={`/patient-details/${item.id}`}>{item?.attributes?.phone}</Link></td>
            <td className="border px-4 py-2"><Link href={`/patient-details/${item.id}`}>{item?.attributes?.Email}</Link></td>
            <td className="border px-4 py-2"><Link href={`/patient-details/${item.id}`}>{item?.attributes?.Address}</Link></td>
          </tr>
     
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table
