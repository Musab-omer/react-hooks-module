import React, { useState } from "react";


let AuthUser = () => {
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">

                                {
                                    isLoggedIn ?
                                        <button className="btn btn-warning" onClick={()=>setIsLoggedIn(false)}>LogOut</button> :
                                        <button className="btn btn-success" onClick={()=>setIsLoggedIn(true)}>LogIn</button>
                                }

                                {
                                    isLoggedIn ?
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
export default AuthUser;