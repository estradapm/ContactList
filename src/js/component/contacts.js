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
            <button className="btn btn-danger" onClick={handleClick}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};




