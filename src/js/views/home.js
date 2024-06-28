import React, { useContext } from "react";
import { Form } from "../component/form";
import { Contact } from "../component/contacts";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
    const { store } = useContext(Context);



    return (
        
        <div className="container w-50 p-3">
            <Form />
            {store.contacts.map((contact, i) => (
                <Contact
                    key={i}
                    index = {i}
                    fName={contact.fName}
                    email={contact.email}
                    phone={contact.phone}
                    address={contact.address}
                />
            
            ))}
           
            
            
        </div>
    );
};