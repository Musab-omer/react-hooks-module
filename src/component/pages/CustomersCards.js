import axios from 'axios';
import React from 'react'

class CustomersCards extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            customers:[],
            errorMessage:''
        }
    }

    componentDidMount = () => {
        let dataUrl="https://gist.githubusercontent.com/Musab-omer/59475f20b0d1fcb3268b3fc4bcab3015/raw/ee38dfe4276eb9c0b16ca02af1402e4862158101/customers.31-05-2023.json";
        axios.get(dataUrl).then((response)=>{
            this.setState({
                ...this.state,
                customers:response.data
            });
        }).catch((error)=>{
            this.setState({
                ...this.state,
                errorMessage:error.message
            });
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col'>
                            <h1 className='text-primary  m-0'>Customers</h1>
                            <p>Exercitation do enim tempor cillum incididunt et dolor aliqua elit nostrud. Consequat pariatur ea minim ipsum enim. Ut duis magna ut mollit laboris labore fugiat aliquip. Eu nisi Lorem deserunt fugiat tempor.
                                Esse enim mollit ipsum et do adipisicing ut. Labore fugiat id laborum elit. Sint est Lorem aliqua consectetur nostrud excepteur excepteur deserunt duis consequat. Non aute do irure ex nisi sit reprehenderit anim voluptate consequat officia in. Aliqua consequat voluptate aute dolor nulla occaecat voluptate et aute enim deserunt sint tempor.
                            </p>
                        </div>
                    </div>
                    <div className='row text-center'>
                        {/* <pre>{JSON.stringify(this.state.customers)}</pre> */}
                        <div className='col '>
                            {
                                this.state.customers.length>0?
                                <React.Fragment>
                                    {
                                        this.state.customers.map(customer=>{
                                            return(
                                                <div className='card mt-5 mb-5 ml-3 d-inline-block zoom'>
                                                    <div className='card-header text-center bg-warning p-4'>
                                                        <img src={customer.picture.medium} className='img-fluid img-thumbnail rounded-circle' style={{marginTop:"-75px",border:"5px solid darkorange"}} alt=''/>
                                                    </div>
                                                    <div className='card-body bg-primary'>
                                                        <ul className='list-group'>
                                                            <li className='list-group-item card-title'>Name : {customer.name.first}</li>
                                                            <li  className='list-group-item card-text'>Email : {customer.email}</li>
                                                            <li  className='list-group-item card-text'>City : {customer.location.city}</li>
                                                            <li  className='list-group-item card-text'>Country : {customer.location.country}</li>
                                                            <li  className='list-group-item card-text'>Age : {customer.dob.age}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </React.Fragment>:
                                null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default CustomersCards