import React from "react";

let MainNavbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a href="/" className="navbar-brand">React Hooks</a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#main-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main-nav">
                        <ul className="nav nav-underline">
                            <li className="nav-item">
                                <a href="" className="nav-link text-white">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link text-white">About</a>
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