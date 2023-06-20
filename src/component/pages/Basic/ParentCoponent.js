import React from "react";
import ChildCoponent from "./ChildComponent";

class ParentCoponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parentMessage: 'Hello I am From PARENT',
            wishingMessage: ''
        }
    }

    childData = (data) => {
        this.setState({
            ...this.state,
            wishingMessage: data
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">ParentCoponent</p>
                                </div>
                                <div className="card-body orange">
                                    <h2>From child :{this.state.wishingMessage}</h2>
                                    <ChildCoponent message={this.state.parentMessage} resiveData={this.childData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
export default ParentCoponent;