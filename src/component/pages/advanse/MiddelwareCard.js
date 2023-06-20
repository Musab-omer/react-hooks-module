import React, { useState } from "react";
import ClientCard from './ClientCard';
import ServerCard from './ServerCard';

let MiddelwareCard = () => {
    let [Message, setMessage] = useState({
        cMessage: '',
        sMessage: ''
    })
    let updateState = (data, name) => {

        name === "client" ?
            setMessage({
                ...Message,
                cMessage: data
            }) :
            setMessage({
                ...Message,
                sMessage: data
            })
    }
    return (
        <React.Fragment>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-6'>
                        <ClientCard ServerMessage={Message.sMessage} updateMiddelware={updateState} />
                    </div>
                    <div className='col-md-6'>
                        <ServerCard clientMessage={Message.cMessage} updateMiddelware={updateState} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default MiddelwareCard