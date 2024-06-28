import React from 'react';

export const Form = () => {
  return (
    <form>
        <h1 className="d-flex justify-content-center">Add a new contact</h1>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Full Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="Enter phone"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="Enter address"
        />
      </div>
        <div class="d-grid gap-2">
            <input type="submit" className="btn btn-primary" value="Save"></input>
        </div>
        <p><a class="link-opacity-100" href="#">or get back to contacts</a></p>
    </form>
  );
};