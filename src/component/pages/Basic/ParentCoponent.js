import React, { useState } from "react";
import ChildCoponent from "./ChildComponent";

let ParentCoponent=()=>{
    let[Parent,setParent]=useState({
        parentMessage: 'Hello I am From PARENT',
        wishingMessage: ''
    });
    let childData = (data) => {
        setParent({
            ...Parent,
            wishingMessage:data
        })
    }
    return(
        <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">ParentCoponent</p>
                                </div>
                                <div className="card-body orange">
                                    <h2>From child :{Parent.wishingMessage}</h2>
                                    <ChildCoponent message={Parent.parentMessage} resiveData={childData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
    )
}
export default ParentCoponent;