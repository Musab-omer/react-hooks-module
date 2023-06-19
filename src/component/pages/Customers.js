import React from "react";
import { customerData } from "../../DataSource/customerStore";

class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: customerData
        }
    }

    render() {
        let { customer } = this.state.customers[0];
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-striped table-responsive-md table-primary">
                                <thead className="thead-dark text-uppercase text-center">
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
                                <tbody className="text-center">
                                    {
                                        this.state.customers.map(customer => {
                                            return (
                                                <tr>
                                                    <td>{customer.login.uuid.substring(customer.login.uuid.length-4)}</td>
                                                    <td><img src={customer.picture.large} width="50px" height="40px" alt="" /></td>
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
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Customers;