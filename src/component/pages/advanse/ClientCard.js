import React, { useState } from "react";

let ClientCard=(props)=>{
    let[Message,setMessage]=useState('');
    let SendToMiddelware=(event)=>{
        event.preventDefault();
        props.updateMiddelware(Message,"client")
    }
    return(
        <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Client</p>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline" onSubmit={SendToMiddelware}>
                                        <div className="form-group">
                                            <input type="text"  className="form-control"
                                            value={Message}
                                            onChange={e => setMessage(e.target.value)}
                                            placeholder="message..."/>
                                            <input type="submit" value="send" className="btn btn-success btn-sm"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    From Server : {props.ServerMessage}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    )
}
export default ClientCard