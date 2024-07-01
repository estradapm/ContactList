import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const Form = () => {
  const { actions } = useContext(Context);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address);
    actions.addContact(name, email, phone, address);
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="d-flex justify-content-center">Add a new contact</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          className="form-control"
          id="name"
          placeholder="Full Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          value={phone}
          onChange={handlePhoneChange}
          type="text"
          className="form-control"
          id="phone"
          placeholder="Enter phone"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          value={address}
          onChange={handleAddressChange}
          type="text"
          className="form-control"
          id="address"
          placeholder="Enter address"
        />
      </div>
      <div className="d-grid gap-2">
        <input type="submit" className="btn btn-primary" value="Save" />
      </div>
      <Link to="/">
        <p>
          <a className="link-opacity-100" href="#">
            or get back to contacts
          </a>
        </p>
      </Link>
    </form>
  );
};