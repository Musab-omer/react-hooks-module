
import React, { Component } from 'react'
import ContactList from './ContactList';
import ContactCard from './ContactCard';


class ContactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: null
        }
    }

    getCustomer = (data) => {
        this.setState({
            customer: data
        });
    }
    render() {
        //alert(this.state.customer)
        return (
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
                            <ContactList getCustomer={this.getCustomer} />
                        </div>
                        <div className='col-md-4'>
                            {
                                this.state.customer !== null ?
                                    <ContactCard customerData={this.state.customer} />
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ContactApp;
