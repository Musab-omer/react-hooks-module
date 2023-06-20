
import React, { Component } from 'react'

import img from '../../../assets/imgs/Healthy2.jpeg'


let ContactCard =(props)=>{
    return(
        <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='card shadow'>
                                <div className='cardd-header bg-secondary text-center'>
                                    <img src={props.customerData.picture.medium} className='img-fluid' style={{ border: "5px solid purple", borderRadius: "50%", width: "150px", height: "150px", marginBottom: "-50px" }} alt='' />
                                </div>
                                <div className='card-body mt-5'>
                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group-item list-group-item-warning'>Name : {props.customerData.name.first} {props.customerData.name.last}</li>
                                        <li className='list-group-item list-group-item-warning'>Gender : {props.customerData.gender}</li>
                                        <li className='list-group-item list-group-item-warning'>City : {props.customerData.location.city}</li>
                                        <li className='list-group-item list-group-item-warning'>Email : {props.customerData.email}</li>
                                        <li className='list-group-item list-group-item-warning'>Age : {props.customerData.dob.age}</li>
                                        <li className='list-group-item list-group-item-warning'>Phone : {props.customerData.phone}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

    )
}
export default ContactCard
