import React from "react";
import {Link} from 'react-router-dom';

let MainNavbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a href="/" className="navbar-brand">React Hooks Routing</a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#main-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main-nav">
                        <ul className="nav nav-underline">
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-white">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/employees/list' className="nav-link text-white">Employees</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/stocks/list' className="nav-link text-white">Stocks</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link text-white">About</Link>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default MainNavbar;