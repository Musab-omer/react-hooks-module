import axios from "axios";
import React, { useEffect, useState } from "react";

let ContactList=(props)=>{
    let[customers,setCustomers]=useState([]);
    let[errorMessage,setErrorMessage]=useState('');

    //get data when component is fully loaded on dom 
    useEffect(()=>{
        let dataUrl="https://gist.githubusercontent.com/Musab-omer/59475f20b0d1fcb3268b3fc4bcab3015/raw/ee38dfe4276eb9c0b16ca02af1402e4862158101/customers.31-05-2023.json";
        axios.get(dataUrl).then((response)=>{
           try {
            setCustomers(response.data)
           } catch (error) {
            
           }
        },[]).catch((error)=>{
            setErrorMessage(error.message)
            console.error(error.message)
        })
    })

    let sendData=(id)=>{
        let custoemr=customers.find(c=>c.login.uuid==id);
        props.getCustomer(custoemr);
    }
return(
    <React.Fragment>
       <table className="table table-sm table-warning table-striped table-hover text-center">
        <thead className="table-dark fw-bold">
            <tr>
                <td>#</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Location</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {
                customers.length>0?
                <React.Fragment>
                    {
                        customers.map(customer=>{
                            return(
                                <tr key={customer.login.uuid} >
                                    <td>{customer.login.uuid.substring(customer.login.uuid.length-4)}</td>
                                    <td>{customer.name.first}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.location.country}</td>
                                    <td><i className="fa fa-eye text-info" onClick={sendData.bind(this,customer.login.uuid)}></i></td>
                                </tr>
                            )
                        })
                    }
                </React.Fragment>:
                <tr>
                    <td colSpan="5" className="text-danger">--- No Data ---</td>
                </tr>
            }
        </tbody>
       </table>
    </React.Fragment>
)
}
export default ContactList