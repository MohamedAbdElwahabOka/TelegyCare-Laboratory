'use client'
import { useEffect, useState } from 'react';

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
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:w-64 sm:ml-4 sm:text-sm mb-4"
    />
    <table className="w-full table-auto">
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
          <tr key={index}>
            {/* <td className="border px-4 py-2">{item?.attributes?.reg_Num}</td>
            <td className="border px-4 py-2">{item?.attributes?.Name}</td>
            <td className="border px-4 py-2">{item?.attributes?.phone}</td>
            <td className="border px-4 py-2">{item?.attributes?.Email}</td>
            <td className="border px-4 py-2">{item?.attributes?.Address}</td> */}



            <td className="border px-4 py-2">{item.Registrationnumber}</td>
            <td className="border px-4 py-2">{item.Name}</td>
            <td className="border px-4 py-2">{item.Phone}</td>
            <td className="border px-4 py-2">{item.Email}</td>
            <td className="border px-4 py-2">{item.Address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table
