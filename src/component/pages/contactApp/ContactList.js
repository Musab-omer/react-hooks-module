
import React, { Component } from 'react'
import {customerData} from '../../../DataSource/customerStore'

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state={
            customers:customerData
        }
    }

    sendData =(data)=>{
        this.props.getCustomer(data);
    }
    
    render() {
        return (
            <React.Fragment>
                <table className='table table-hover table-striped table-warning'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>picture</th>
                            <th>Name</th>
                            <th>gender</th>
                            <th>city</th>
                            <th>email</th>
                            <th>age</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map(customer => {
                                return(
                                    <tr onClick={this.sendData.bind(this,customer)}>
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
}
export default ContactList;
