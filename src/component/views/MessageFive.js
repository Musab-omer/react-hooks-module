import React, { useReducer } from "react";

let MessageFive = () => {

    let initialState = {
        message: 'Hell'
    }

    //Action types
    const GOOD_MORING = 'GOOD_MORING'
    const GOOD_EVENING = 'GOOD_EVENING'
    const GOOD_AFTERNOON = 'GOOD_AFTERNOON'

    //Actions
    let sayGoodMorning = () => {
        return {
            type: GOOD_MORING
        }
    }
    let sayGoodAfternoon = () => {
        return {
            type: GOOD_AFTERNOON
        }
    }
    let sayGoodEvening = () => {
        return {
            type: GOOD_EVENING
        }
    }
    let reducer = (state = initialState, action) => {
        switch (action.type) {
            case GOOD_MORING:
                return {
                    message: "Good Morning"
                }
                break;
            case GOOD_AFTERNOON:
                return {
                    message: "Good Afternoon"
                }
                break;
            case GOOD_EVENING:
                return {
                    message: "Good Evening"
                }
                break;
            default:
                return state
                break;
        }
    }
    let [state, dispatch] = useReducer(reducer, initialState)
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card ">
                            <div className="card-header bg-info text-white">
                                <p className="h4">Functional | useReducer() | REDEX WAY</p>
                            </div>
                            <div className="card-body">
                                <p className="h4">{state.message}</p>
                                <button onClick={e=>dispatch(sayGoodMorning())} className="btn btn-warning mx-2">Good Morning</button>
                                <button onClick={e=>dispatch(sayGoodAfternoon())} className="btn btn-success mx-2">Good Afternoon</button>
                                <button onClick={e=>dispatch(sayGoodEvening())} className="btn btn-dark">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default MessageFive