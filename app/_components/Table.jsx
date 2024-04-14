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
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Position</th>
          <th className="px-4 py-2">Office</th>
          <th className="px-4 py-2">Age</th>
          <th className="px-4 py-2">Start date</th>
          <th className="px-4 py-2">Salary</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{item.Name}</td>
            <td className="border px-4 py-2">{item.Position}</td>
            <td className="border px-4 py-2">{item.Office}</td>
            <td className="border px-4 py-2">{item.Age}</td>
            <td className="border px-4 py-2">{item.Start_date}</td>
            <td className="border px-4 py-2">{item.Salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table
