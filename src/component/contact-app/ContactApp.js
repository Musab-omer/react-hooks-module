import React, { useState } from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

let ContactApp=()=>{
    let[customer,setCustomer]=useState({})

    let getCustomer=(data)=>{
        setCustomer(data);
    }
    return(
        <React.Fragment>
           <div className="container mt-4">
            <div className="row">
                <div className="col">
                <p className="h2 text-primary">Contact App</p>
            <p>Fugiat id sit laborum amet cillum irure qui et. In sit elit laborum culpa pariatur non labore pariatur amet. Non excepteur ea voluptate reprehenderit tempor aliquip. Labore dolor ad aliquip occaecat commodo. Ipsum irure ipsum anim in eu non aliquip cillum enim elit. Proident tempor consequat nostrud nostrud labore aliqua exercitation dolor nisi deserunt sit laborum culpa. Magna nulla in eiusmod commodo.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ContactList getCustomer={getCustomer}/>
                </div>
                <div className="col-md-4">
                    <ContactCard customer={customer}/>
                </div>
            </div>
           </div>
        </React.Fragment>
    )
}
export default ContactApp