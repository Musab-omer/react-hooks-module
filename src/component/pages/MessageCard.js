
import React, { useState } from "react";

let MessageCard=()=> {
    let [name,setName]=useState('');
    let [message,setMessage]=useState('');
    let updateInput=e=>{
        switch(e.target.name){
           case "name":
            setName(e.target.value);
            break;
            case "message":
                setMessage(e.target.value);
        }
    }
   
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h4">React Hooks With Form Biding</p>
                                </div>
                                <div className="card-body">
                                    <form className=""  >
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Name"
                                            name="name"
                                            value={name}
                                             onChange={updateInput} />
                                        </div>
                                        <div className="mb-3">
                                            <input type="test" className="form-control" placeholder="Message..." 
                                            name="message"
                                            value={message}
                                            onChange={updateInput} />
                                        </div>
                                        <h3 id="message">Name :{name}</h3>
                                        <h3 id="message">Message :{message}</h3>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    
}
export default MessageCard;