import React, { Component } from 'react'
import Bcomponent from './Bcomponent';

let Acomponent=(props)=>{
    return(
        <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-body bg-warning'>
                                    <p className='h4'>A Component</p>
                                    <pre>{JSON.stringify(props.resivePersonalInfo)}</pre>
                                    <Bcomponent resivePersonalInfo={props.resivePersonalInfo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    )
}
export default Acomponent

