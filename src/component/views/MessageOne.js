import React from "react";

class MessageOne extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            message:'hello'
        }
    }
    
    render(){
        return(
            <React.Fragment>
               <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card ">
                            <div className="card-header bg-primary text-white">
                                <p className="h4">Class based component </p>
                            </div>
                            <div className="card-body">
                                <p className="h4">{this.state.message}</p>
                                <button onClick={e=>this.setState({message:"Good Morning"})} className="btn btn-warning mx-2">Good Morning</button>
                                <button onClick={e=>this.setState({message:"Good Afternoon"})} className="btn btn-success mx-2">Good Afternoon</button>
                                <button onClick={e=>this.setState({message:"Good Evening"})} className="btn btn-dark">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </React.Fragment>
        );
    }
}
export default MessageOne