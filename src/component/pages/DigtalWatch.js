import React, { Component, useEffect, useState } from 'react'

let DigtalWatch = () => {
    let[currentTime,setCurrentTime]=useState(new Date().toLocaleTimeString())
    
    //when component is fully loaded on DOM
    useEffect(() => {
        //componentDidMount
        let timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000);

        //when the component is removed from DOM
        return () => {
            //componentWillUnmount
            clearInterval(timer);
        }
    })
    return (
        <React.Fragment>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col'>
                        <div className='card w-50 m-auto text-center'>
                            <div className='card-header bg-warning'>
                                <p className='h4'>Digtal Watch</p>
                            </div>
                            <div className='card-body'>
                                <p className='h2'>{currentTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default DigtalWatch