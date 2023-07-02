import React from "react";
import {Link} from 'react-router-dom';

let MainNavbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a href="/" className="navbar-brand">
                    <i className="bi bi-cart4 mx-1"></i> React Hooks useRef() and useReducer()</a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#main-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="collapse navbar-collapse" id="main-nav">
                        <ul className="navbar-nav nav-underline">
                           <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                           </li>
                           <li className="nav-item">
                            <Link to="/products/list" className="nav-link">Product</Link>
                           </li>
                        </ul>
                        <ul className="navbar-nav nav-underline" style={{marginLeft:"auto"}}>
                        <li className="nav-item">
                            <Link to="/products/admin" className="nav-link">Admin</Link>
                           </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        </React.Fragment>
    );
}
export default MainNavbar;