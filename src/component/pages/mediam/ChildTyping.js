import React from "react";

class ChildTyping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chMessage: ''
        }

    }
    typingMessage = (event) => {
        this.setState(
            {
                chMessage: event.target.value
            }
        );
        this.props.resiveMessage(event.target.value);
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
                                    
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                value={this.state.message}
                                                onChange={this.typingMessage}
                                                placeholder="type here..." />
                                        </div>
                                    </form>
                                    <p className="h4">From Parent : {this.props.chMessage}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ChildTyping;