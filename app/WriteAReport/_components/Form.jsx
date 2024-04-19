'use client'
import { useState } from "react";
import Link from "next/link";

function Form() {
  const [name, setName] = useState("M");
  const [age, setAge] = useState("0");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <Link
  href={{
    pathname: 'Result',
    query: {
      name: name,
      age: age
    }
  }}
>
  <button type="button">
    Send data to result page
  </button>
</Link>
    </>
  );
}

export default Form;





















// import Link from "next/link"


// function Form() {
  

//   return (
//     <>
//     <Link
//     href={
//       {
//         pathname:'/WriteAReport/Result',
//         query: {
//           name: 'John',
//           age: '25'
//         }
//       }
//     }
    
//     >\
//     send data to result page
//     </Link>
//     </>
//   )
// }

// export default Form