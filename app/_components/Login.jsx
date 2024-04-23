"use client"

import React, { useState } from 'react';
import queryString from 'query-string';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Login = ({ data }) => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const user = data.find(
  //     (item) =>
  //       item.attributes.reg_Num == registrationNumber &&
  //       item.attributes.Password == password
  //   );
  //   if (!user) {
  //     setErrorMessage('Invalid registration number or password.');
  //   } else {
  //     const query = { regNum: user.attributes.reg_Num };

  //     const queryStringified = queryString.stringify(query);
  //     router.push(`/Testpage?${queryStringified}`);
  //     console.log(query);
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = data.find(
      (item) =>
        item.attributes.reg_Num == registrationNumber &&
        item.attributes.Password == password
    );
    if (!user) {
      setErrorMessage('Invalid registration number or password.');
    } else {
      router.push(`/PatientID/${user?.attributes?.reg_Num}`);


    }
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center border border-gray-300">
      <div className="flex-1 max-w-lg w-full mx-auto">
        <form method="post" onSubmit={(e) => handleLogin(e)} className="space-y-6">
          <div className="flex items-center justify-center">
            <Image src="/logo.svg" alt="Logo" width={150} height={75} />
          </div>
          <div className="text-center">
            <p className="text-xl font-medium text-gray-700 mt-4">
              Telegy Care
            </p>
          </div>
          <div>
            <label className="block text-xl font-medium text-gray-700">
              Registration Number
            </label>
            <div className="mt-1">
              <input
                id="registrationNumber"
                name="registrationNumber"
                required
                className="appearance-none block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-xl font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
              id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="text-red-500">{errorMessage}</div>

          <div>
            <button
              onClick={(e) => handleLogin(e)}
              type="submit"
              className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;



// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// const Login = ({data}) => {
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [password, setPassword] = useState('');


// const router = useRouter();

// const handleLogin = (e) => {
//   e.preventDefault();
//    data.find(item => {
//     if (item.attributes.reg_Num == registrationNumber && item.attributes.Password == password) {
//       return router.push('/PatientID');
//     } else {
//       return  console.log("Invalid registration number or password.");;
//     }
//   });
// }
  
//   return (
    
//     <div className="bg-white h-screen flex justify-center items-center border border-gray-300">
//       {/* {console.log(data)} */}
//       <div className="flex-1 max-w-lg w-full mx-auto">
      
//         <form method="post" onSubmit={(e) => handleLogin(e)} className="space-y-6">
//           <div className="flex items-center justify-center">
//             <Image src="/logo.svg" alt="Logo" width={150} height={75} />
//           </div>
//           <div className="text-center">
//             <p className="text-xl font-medium text-gray-700 mt-4">
//               Telegy Care
//             </p>
//           </div>
//           <div>
//             <label className="block text-xl font-medium text-gray-700">
//             Registration Number
//             </label>
//             <div className="mt-1">
//               <input
//                 id="registrationNumber"
//                 name="registrationNumber"
//                 // type="number"
//                 // autoComplete="email"
//                 required
//                 className="appearance-none block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 value={registrationNumber}
//                 onChange={(e) => setRegistrationNumber(e.target.value)}
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-xl font-medium text-gray-700">
//               Password
//             </label>
//             <div className="mt-1">
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="appearance-none block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           <div>

// <button 
//      onClick={(e)=>handleLogin(e)}
//     type="submit"
//     className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//   >
//     Sign in

// </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login