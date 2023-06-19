
import React, { useState } from "react";

let MessageCard=()=> {
    let [messageCard, setMessageCard]=useState({
        name:'',
        message:''
    })

/*    let updateName = (event) => {
        setMessageCard({
            ...messageCard,
            name:event.target.value
        })
    }
   let updateMessage = (event) => {

       setMessageCard({
        ...messageCard,
        message:event.target.value
       })
    } */

//short way 
    let updateInput=e=>{
        //alert(e.target.name)
        setMessageCard({
            ...messageCard,
           [ e.target.name]:e.target.value
        })
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
                                            value={messageCard.name}
                                             onChange={updateInput} />
                                        </div>
                                        <div className="mb-3">
                                            <input type="test" className="form-control" placeholder="Message..." 
                                            name="message"
                                            value={messageCard.message}
                                            onChange={updateInput} />
                                        </div>
                                        <h3 id="message">Name :{messageCard.name}</h3>
                                        <h3 id="message">Message :{messageCard.message}</h3>
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