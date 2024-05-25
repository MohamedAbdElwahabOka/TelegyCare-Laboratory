// PrintableTemplate.js
// import React from 'react';

const PrintableTemplate = ({ name, email, phone, address }) => {
  return (
    <div>
      <h1>Printable Template</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </div>
  );
};

export default PrintableTemplate;