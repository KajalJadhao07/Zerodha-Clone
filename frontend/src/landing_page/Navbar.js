import React from 'react';

function Navbar() {
    return ( 
            <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
                <div className="container p-3" style={{height: "20%"}}>
                    <a className="navbar-brand" href="#"><img src='media/images/logo.svg' alt='logo' style={{width: "25%", display: "flex", justifyContent: "center"}}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Signup</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>
                            <li className="nav-item mt-1" >
                                <a className="nav-link" href="#"><i class="fa fa-bars" aria-hidden="true"></i></a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
     );
}

export default Navbar;