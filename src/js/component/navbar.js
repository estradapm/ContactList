import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const navbarStyle = {
        backgroundColor: "#2f4f4f",
        color: "white",
    };

    return (
        <nav className="navbar mb-3" style={navbarStyle}>
            <div class="container-fluid">
            <Link to="/">
                <span className="navbar-brand mb-0 h1" style={{ color: "white" }}>Home</span>
            </Link>
            <div className="ml-auto">
                <Link to="/demo">
                    <button className="btn btn-success">Add new Contact</button>
                </Link>
            </div>
            </div>
        </nav>
    );
};
