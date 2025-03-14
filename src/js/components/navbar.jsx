import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <a className="navbar-brand" href="#">
                GameLibrary
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">
                        Home <span className="sr-only"></span>
                    </a>
                    <a className="nav-item nav-link" href="#">
                        Pricing
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
