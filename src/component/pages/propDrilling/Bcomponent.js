import React, { Component } from 'react'
import Ccomponent from './Ccomponent';

let Bcomponent =(props)=>{
    return(
        <React.Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body bg-secondary'>
                            <p className='h4'>B Component</p>
                            <pre>{JSON.stringify(props.resivePersonalInfo)}</pre>
                            <Ccomponent resivePersonalInfo={props.resivePersonalInfo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}
export default Bcomponent
