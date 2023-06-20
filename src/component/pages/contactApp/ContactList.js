import React, { Component, useState } from 'react'
import {customerData} from '../../../DataSource/customerStore'

let ContactList =(props)=>{
    let [Customers,setCustomers]=useState(customerData)
   let sendData=(data)=>{
    props.getCustomer(data);
   }
    return(
        <React.Fragment>
                <table className='table table-hover table-striped table-warning table-sm text-center'>
                    <thead className='table-dark fw-bolder'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">gender</th>
                            <th scope="col">city</th>
                            <th scope="col">email</th>
                            <th scope="col">age</th>
                            <th scope="col">phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Customers.map(customer => {
                                return(
                                    <tr key={customer.login.uuid} onClick={sendData.bind(this,customer)}>
                                        <td>{customer.login.uuid.substring(customer.login.uuid.length-4)}</td>
                                        <td><img src={customer.picture.medium} height="30px" alt=""/></td>
                                        <td>{customer.name.first}</td>
                                        <td>{customer.gender}</td>
                                        <td>{customer.location.city}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.dob.age}</td>
                                        <td>{customer.phone}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment>

    )
}
export default ContactList