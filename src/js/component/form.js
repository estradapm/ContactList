import React, { useState } from 'react';

export const Form = () => {

  const [fName, setFname] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [phone, setPhone] = useState(""); 
  const [address, setAddress] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar los valores al enviar el formulario
    console.log('Full Name:', fName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address);
  }

  const handleFnameChange = (e) => {
    setFname(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="d-flex justify-content-center">Add a new contact</h1>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">Full Name</label>
        <input onChange={handleFnameChange}
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Full Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input onChange={handleEmailChange}
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input onChange={handlePhoneChange}
          type="text"
          className="form-control"
          id="phone"
          placeholder="Enter phone"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input onChange={handleAddressChange}
          type="text"
          className="form-control"
          id="address"
          placeholder="Enter address"
        />
      </div>
      <div className="d-grid gap-2">
        <input type="submit" className="btn btn-primary" value="Save" />
      </div>
      <p><a className="link-opacity-100" href="#">or get back to contacts</a></p>
    </form>
  );
};