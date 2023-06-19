import React from "react";

class AuthUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }

    logIn = () => {
        this.setState(
            {
                isLoggedIn: true
            }
        );
    }

    logOut = () => {
        this.setState({
            isLoggedIn: false
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">

                                    {
                                        this.state.isLoggedIn ?
                                            <button className="btn btn-warning" onClick={this.logOut}>LogOut</button> :
                                            <button className="btn btn-success" onClick={this.logIn}>LogIn</button>
                                    }

                                    {
                                        this.state.isLoggedIn ?
                                            <p className="h3">Hello! Welcome User</p>
                                            :
                                            <p className="h3">Welcome Guest </p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default AuthUser;