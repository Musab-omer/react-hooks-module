import React, { Component, useContext } from 'react'
import Ccomponent from '../propDrilling/Ccomponent'
import UserContext from './UserContext';

let ThreeComponent=()=>{
    let userInfo=useContext(UserContext)
    return(
        <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-body bg-success'>
                                    <p className='h4'> Component Three</p>
                                    <pre>{JSON.stringify(userInfo)}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    )
}
export default ThreeComponent
