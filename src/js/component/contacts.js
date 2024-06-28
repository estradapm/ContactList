import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Contact = ({ fName, email, phone, address, index }) => {
  
  const {store, actions} = useContext (Context);
  
  const handleClick = () => {
    actions.delContact(index)
  }
  
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"
            className="img-fluid rounded-start"
            alt="User"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{fName}</h5>
            <p className="card-text">Email: {email}</p>
            <p className="card-text">Phone: {phone}</p>
            <p className="card-text">Address: {address}</p>
            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      Do you want to delete this contact?
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleClick}>Delate contact</button>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};




