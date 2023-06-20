import React, { useState } from "react";

let ChildTyping = (props) => {
    let [Child, setChild] = useState({
        chMessage: ''
    })

    let typingMessage = (event) => {
        setChild({
            chMessage:event.target.value
        })
        props.resiveMessage(event.target.value);
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                <p className="h4">Child Coponent</p>
                            </div>
                            <div className="card-body bg-light">

                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            value={Child.chMessage}
                                            onChange={typingMessage}
                                            placeholder="type here..." />
                                    </div>
                                </form>
                                <p className="h4">From Parent : {props.chMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ChildTyping