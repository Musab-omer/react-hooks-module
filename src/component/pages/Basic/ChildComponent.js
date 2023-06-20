import React from "react";

class ChildCoponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            childMessage:"Hello I am Form CHILD"
        }
    }

    sendData = () => {
        //alert(this.state.childMessage)
        this.props.resiveData(this.state.childMessage);
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Child Coponent</p>
                                </div>
                                <div className="card-body bg-light">
                                    <h2>From Parent :{this.props.message}</h2>
                                    <button className="btn btn-success btn-sm" onClick={this.sendData}>send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ChildCoponent;