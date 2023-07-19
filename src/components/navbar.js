import React from 'react';

function Navbar() {

    return (
        <nav>
            <div className="container-fluid">

                <span className="navbar-brand mb-0 h1 ms-5">ADD</span>
                <div className="navbar-nav me-5">
                    <a className="nav-link active h5 " aria-current="page" href="/">ACCUEIL</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
