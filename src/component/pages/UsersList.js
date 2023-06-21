import Axios from 'axios';
import React, { useEffect, useState } from 'react'

let UsersList = () => {
   
    let [users,setUsers]=useState([]);
    let [error,setError]=useState('');

    //get data from server , when the component is fully loaded 
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            console.log('Featching Data from server')
           setUsers(response.data)
        }).catch((error) => {
          setError(error.message)
          console.error(error.message)
        });
    },[])
    return (
        <React.Fragment>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col'>
                        <h1>Users List</h1>
                        <p>Culpa exercitation cupidatat occaecat labore velit do consequat esse occaecat veniam sint. Irure laboris voluptate laborum in aliquip sit non sit ad duis voluptate sunt et proident. Ea anim anim occaecat incididunt in et culpa. Occaecat amet sunt qui irure id do in et et pariatur. Eu labore adipisicing culpa ad do esse.</p>
                    </div>
                </div>
                {/* <pre>{JSON.stringify(this.state.users)}</pre> */}
                <div className='row'>
                    <div className='col'>
                        <table className='table table-hover table-striped table-primary text-cneter'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Emaile</th>
                                    <th>Street</th>
                                    <th>City</th>
                                    <th>Website</th>
                                    <th>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 ?
                                        <React.Fragment>
                                            {
                                               users.map(user => {
                                                    return (
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.name}</td>
                                                            <td><i className='fa fa-envelope text-danger' /> {user.email}</td>
                                                            <td>{user.address.street}</td>
                                                            <td>{user.address.city}</td>
                                                            <td><a href=""><i className='fa fa-globe' /> {user.website}</a></td>
                                                            <td>{user.company.name}</td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </React.Fragment> :
                                        null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default UsersList