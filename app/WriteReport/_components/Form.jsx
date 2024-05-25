import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import PrintableTemplate from './PrintableTemplate';
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const formRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => formRef.current,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePrint();
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <button type="submit">Generate PDF</button>
      </form>
      <PrintableTemplate
        ref={formRef}
        name={name}
        email={email}
        phone={phone}
        address={address}
      />
    </div>
  );
};

export default Form;