
import React, { useState } from "react";

import { Component, Fragment } from "react";

let SMSApp = () => {
    let [Characters, setCharacters] = useState({
        maxCount: 100,
        charCount: 100
    })

    let messageCounter=(e)=>{
        //alert()
        setCharacters({
            ...Characters,
            charCount:100-e.target.value.length>0?100-e.target.value.length:0
        })
    }
    return (
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-info text-white">
                                <p className="h4">App Message</p>
                            </div>
                            <div className="card-body bg-light">
                                <form>
                                    <div className="mb-3">
                                        <textarea rows="5" cols="50" maxLength={Characters.maxCount}
                                            onChange={messageCounter}
                                            className="form-control form-control-lg"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer bg-info text-white">
                                <p className="h5">The remaining Characters : {Characters.charCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default SMSApp;