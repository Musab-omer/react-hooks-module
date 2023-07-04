import React, { useReducer } from "react";

let MessageThree = () => {

    let initialState = {
        message: 'Hello'
    };
    let reducer = (state = initialState, action) => {
        switch (action) {
            case "gm":
                return {
                    message: "Good Morning"
                };
                break;
            case "ga":
                return {
                    message: "Good Afternoon"
                };
                break;
            case "ge":
                return {
                    message: "Good Evening"
                }
                break;
                default:
                    return{
                        message:"Hello"
                    }
        }
    }
    let [state, dispatch] = useReducer(reducer, initialState)
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card ">
                            <div className="card-header bg-danger text-white">
                                <p className="h4">Functional | useReducer() | Action string</p>
                            </div>
                            <div className="card-body">
                                <p className="h4">{state.message}</p>
                                <button onClick={e=>dispatch("gm")} className="btn btn-warning mx-2">Good Morning</button>
                                <button onClick={e=>dispatch("ga")} className="btn btn-success mx-2">Good Afternoon</button>
                                <button onClick={e=>dispatch("ge")} className="btn btn-dark">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default MessageThree