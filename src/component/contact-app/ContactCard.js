import React from "react";

let ContactCard = (props) => {
    return (
        <React.Fragment>
            {
                Object.keys(props.customer).length > 0 ?
                    <React.Fragment>
                        <div className="card shadow">
                            <div className="card-header bg-warning text-center">
                                <img src={props.customer.picture.large} className="border border-4 border-white rounded-circle" alt="" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><span className="fw-bold">Name :</span> {props.customer.name.first} {props.customer.name.last}</li>
                                    <li className="list-group-item"><span className="fw-bold">City :</span> {props.customer.location.city}</li>
                                    <li className="list-group-item"><span className="fw-bold">Gender :</span> {props.customer.gender}</li>
                                    <li className="list-group-item"><span className="fw-bold">DoB :</span> {props.customer.dob.date}</li>
                                    <li className="list-group-item"><span className="fw-bold">Member Scince :</span> {props.customer.registered.date}</li>
                                </ul>
                            </div>
                        </div>
                    </React.Fragment> :
                    null
            }
        </React.Fragment>
    )
}
export default ContactCard