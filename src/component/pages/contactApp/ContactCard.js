
import React, { Component } from 'react'

import img from '../../../assets/imgs/Healthy2.jpeg'

class ContactCard extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        //alert(JSON.stringify(this.props.customerData))
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <div className='cardd-header bg-secondary text-center'>
                                    <img src={this.props.customerData.picture.medium} className='img-fluid' style={{ border: "5px solid purple", borderRadius: "50%", width: "150px", height: "150px", marginBottom: "-50px" }} alt='' />
                                </div>
                                <div className='card-body mt-5'>
                                    <ul className='list-group bg-light'>
                                        <li className='list-group-item'>Name : {this.props.customerData.name.first} {this.props.customerData.name.last}</li>
                                        <li className='list-group-item'>Gender : {this.props.customerData.gender}</li>
                                        <li className='list-group-item'>City : {this.props.customerData.location.city}</li>
                                        <li className='list-group-item'>Email : {this.props.customerData.email}</li>
                                        <li className='list-group-item'>Age : {this.props.customerData.dob.age}</li>
                                        <li className='list-group-item'>Phone : {this.props.customerData.phone}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ContactCard;
