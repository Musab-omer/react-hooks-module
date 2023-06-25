import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

let EmployeesList = () => {
    let[employees,setEmployees]=useState([]);
    let[errorMessage,setErrorMessage]=useState('');
    useEffect(()=>{
        let dataUrl="https://gist.githubusercontent.com/Musab-omer/59475f20b0d1fcb3268b3fc4bcab3015/raw/ee38dfe4276eb9c0b16ca02af1402e4862158101/customers.31-05-2023.json";
        axios.get(dataUrl).then(response=>{
            setEmployees(response.data);
        }).catch(error=>{
            setErrorMessage(error.message);
        });
    },[])
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1>Employees</h1>
                        <p>Nostrud irure pariatur cillum elit. Laboris amet ea enim aliqua labore dolore commodo consequat. Mollit voluptate adipisicing nulla laborum ipsum excepteur qui labore eu. Laboris labore Lorem proident enim pariatur irure elit. Cillum excepteur esse fugiat qui quis magna ipsum esse exercitation eu adipisicing enim reprehenderit. Est labore esse quis ut in consequat quis ipsum Lorem sunt consequat nisi ad.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-secondary table-sm table-responsive-md table-hover table-striped text-center">
                            <thead className="table-dark text-dark text-uppercase">
                                <tr>
                                    <th>SNO</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Location</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.length > 0 ?
                                        <React.Fragment>
                                            {
                                                employees.map(employee => {
                                                    return (
                                                        <tr key={employee.login.uuid}>
                                                            <td>{employee.login.uuid.substring(employee.login.uuid.length - 4)}</td>
                                                            <td><img src={employee.picture.large} className="rounded rounded-circle" width="30px" alt=""></img></td>
                                                            <td><Link to={`/employees/${employee.login.uuid}`} className="text-primary"><i className="text-white bi bi-eye "></i> {employee.name.first} {employee.name.last}</Link></td>
                                                            <td>{employee.gender}</td>
                                                            <td>{employee.location.city}</td>
                                                            <td>{employee.phone}</td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </React.Fragment> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default EmployeesList