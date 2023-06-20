import React, { useState } from "react";
import ChildTyping from "./ChildTyping";

let ParentType = () => {
    let [Parent, setParent] = useState({
        pMessage: '',
        messageFromChild: ''
    })

    let typingMessage = (event) => {
        setParent({
            ...Parent,
            pMessage:event.target.value
        })
    }

    //get message from child 
    let getMessage = (msg) => {
        setParent({
            ...Parent,
            messageFromChild:msg
        })
    }

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                <p className="h4">Parent Coponent</p>
                            </div>
                            <div className="card-body orange">
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" value={Parent.pMessage}
                                            onChange={typingMessage}
                                            placeholder="type here.." />
                                    </div>
                                </form>
                                <p className="h4">From Child : {Parent.messageFromChild}</p>
                                <ChildTyping chMessage={Parent.pMessage} resiveMessage={getMessage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default ParentType

