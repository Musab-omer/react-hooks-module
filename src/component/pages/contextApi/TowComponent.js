import React, { Component, useContext } from 'react'
import ThreeComponent from './ThreeComponent';
import UserContext from './UserContext';

let TowComponent = () => {
    let userInfo = useContext(UserContext)
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body bg-light'>
                                <p className='h4'>Component Two</p>
                                <pre>{JSON.stringify(userInfo)}</pre>
                                <ThreeComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}
export default TowComponent