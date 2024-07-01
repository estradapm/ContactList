import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Contact = ({ name, email, phone, address, index }) => {
    const { actions } = useContext(Context);
    const [newContact, setNewContact] = useState({ name, email, phone, address });

    const handleClickDelete = () => {
        actions.delContact(index);
    };

    const handleClickEdit = () => {
        actions.editContact(index, newContact);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
        
    };

    
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
                        <h5 className="card-title">{newContact.name}</h5>
                        <p className="card-text">Email: {newContact.email}</p>
                        <p className="card-text">Phone: {newContact.phone}</p>
                        <p className="card-text">Address: {newContact.address}</p>
                        <div className="d-flex justify-content-end">
                            <button
                                type="button"
                                className="btn btn-danger me-2"
                                data-bs-toggle="modal"
                                data-bs-target={`#deleteModal${index}`}
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target={`#editModal${index}`}
                            >
                                Edit
                            </button>
                        </div>

                        <div
                            className="modal fade"
                            id={`deleteModal${index}`}
                            tabIndex="-1"
                            aria-labelledby="deleteModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="deleteModalLabel">
                                            Are you sure?
                                        </h1>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">Do you want to delete this contact?</div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            data-bs-dismiss="modal"
                                            onClick={handleClickDelete}
                                        >
                                            Delete contact
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="modal fade"
                            id={`editModal${index}`}
                            tabIndex="-1"
                            aria-labelledby="editModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="editModalLabel">
                                            Edit Contact
                                        </h1>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="name" className="form-label">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    value={newContact.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    value={newContact.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="phone" className="form-label">
                                                    Phone
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    name="phone"
                                                    value={newContact.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="address" className="form-label">
                                                    Address
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="address"
                                                    name="address"
                                                    value={newContact.address}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            data-bs-dismiss="modal"
                                            onClick={handleClickEdit}
                                        >
                                            Save changes
                                        </button>
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
