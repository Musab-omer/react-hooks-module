import React from "react";
import {Link} from 'react-router-dom';

let MainNavbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">React Hooks Bigbasket</Link>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#main-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main-nav">
                        <ul className="nav nav-underline">
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default MainNavbar;