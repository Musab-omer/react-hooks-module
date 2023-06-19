import React from "react";

class EmployeeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                {
                    sno: "AAAA100",
                    fName: "Musab",
                    MName: 'Mohammed',
                    lName: "Omer",
                    age: 34,
                    designation: "Software Engineer",
                    address: "Cairo Egypt"
                },
                {
                    sno: "AAAA102",
                    fName: "Amna",
                    MName: 'Abdallah',
                    lName: "Ahmed",
                    age: 24,
                    designation: "Doctor",
                    address: "Khartoum Sudan"
                },
                {
                    sno: "AAAA103",
                    fName: "Mohammed",
                    MName: 'Jaly',
                    lName: "Ali",
                    age: 25,
                    designation: "Seels Manager",
                    address: "Dubai"
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container bg-info mt-3">
                    <div className="row">
                        <div className="col">

                            {
                                this.state.employees.map(employee => {
                                    return (
                                        <React.Fragment>
                                            <ul className="list-group bg-light mt-3">
                                                <li className="list-group-item">SNO :  {employee.sno}</li>
                                                <li className="list-group-item">first Name : {employee.fName}</li>
                                                <li className="list-group-item">Middle Name : {employee.MName}</li>
                                                <li className="list-group-item">Age : {employee.age}</li>
                                                <li className="list-group-item">designation : {employee.designation}</li>
                                                <li className="list-group-item">address : {employee.address}</li>
                                            </ul>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default EmployeeCard;