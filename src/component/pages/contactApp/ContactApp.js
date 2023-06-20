
import React, { Component, useState } from 'react'
import ContactList from './ContactList';
import ContactCard from './ContactCard';

let ContactApp =()=>{
    let [Customer,setCustomer]=useState(null)
    let getCustomer=(data)=>{
        setCustomer(data);
    }

    return(
        <React.Fragment>
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col'>
                            <p className='h3 text-danger'>Contact App</p>
                            <p>Mollit occaecat pariatur sunt ipsum ad commodo nostrud mollit amet. Amet officia incididunt qui elit labore. Ipsum aliqua laborum Lorem reprehenderit labore Lorem amet quis laborum tempor. Elit deserunt ea et laboris consequat id ad eu eu laborum nulla consectetur. Labore laboris ullamco Lorem ullamco veniam mollit id et est. Laboris in anim excepteur non fugiat sint mollit voluptate culpa consectetur id dolor sint. Deserunt aliquip esse exercitation officia dolore irure voluptate ea laboris est exercitation nostrud mollit est.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <ContactList getCustomer={getCustomer} />
                        </div>
                        <div className='col-md-4'>
                            {
                                Customer !== null ?
                                    <ContactCard customerData={Customer} />
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        
    )
}
export default ContactApp