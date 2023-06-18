import React from "react";

class CounterClass extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            counter:0
        }
    }

    /*  counterInq=()=>{
        this.setState({
            counter:this.state.counter+1
        });
    } */
    render() {
        return (
            <React.Fragment>
               <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary">
                                <p className="h4">Counter Class</p>
                            </div>
                            <div className="card-body">
                                <p className="h2">{this.state.counter}</p>
                                {/* <button className="btn btn-success" onClick={this.counterInq}>Increment</button> */}
                                <button className="btn btn-success" onClick={()=>{this.setState({counter:this.state.counter+1})}}>Increment</button>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </React.Fragment>
        );
    }
    
}
export default CounterClass;