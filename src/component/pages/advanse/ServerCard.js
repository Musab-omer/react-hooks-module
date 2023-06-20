import React, { useState } from "react";

let ServerCard =(props)=>{
    let[Message,setMessage]=useState('');
    let SendToMiddelware = (event) => {
        event.preventDefault();
        props.updateMiddelware(Message, "server")
    }
return(
    <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <p className="h4">Server</p>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline">
                                        <div className="form-group">
                                            <input type="text" value={Message}
                                                onChange={e => setMessage(e.target.value)}
                                                className="form-control" placeholder="message..." />
                                            <button className="btn btn-primary btn-sm"
                                                onClick={SendToMiddelware}
                                            >Send</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    From Client : {props.clientMessage}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
)
}
export default ServerCard