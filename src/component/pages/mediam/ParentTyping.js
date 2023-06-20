import React from "react";
import ChildCoponent from "./ChildTyping";
import ChildTyping from "./ChildTyping";


class ParentTyping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           pMessage: '',
            messageFromChild: ''
        }
    }

    typingMessage = (event) => {
        this.setState(
            {
                //...this.state,
                pMessage: event.target.value
            }
        );
    }

    getMessage = (msg) => {
        this.setState(
            {
                ...this.state,
                messageFromChild: msg
            }
        );
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
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" value={this.state.message}
                                                onChange={this.typingMessage}
                                                placeholder="type here.." />
                                        </div>
                                    </form>
                                    <p className="h4">From Child : {this.state.messageFromChild}</p>
                                    <ChildTyping chMessage={this.state.pMessage} resiveMessage={this.getMessage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
export default ParentTyping;