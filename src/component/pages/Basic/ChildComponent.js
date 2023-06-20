import React, { useState } from "react";


let ChildComponent=(props)=>{
    let[Child,setChild]=useState({
        childMessage:'Hello I am From Child'
    })

    let sendData=()=>{
        props.resiveData(Child.childMessage)
    }
    return(
        <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-info text-white">
                                    <p className="h4">Child Coponent</p>
                                </div>
                                <div className="card-body bg-light">
                                    <h2>From Parent :{props.message}</h2>
                                    <button className="btn btn-success btn-sm" onClick={sendData}>send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    )
}
export default ChildComponent

