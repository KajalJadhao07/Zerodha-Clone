import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
            <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
                <div className="container p-1" style={{height: "15%"}}>

                    <Link className="navbar-brand" to="/"><img src='media/images/logo.svg' alt='logo' style={{width: "25%", display: "flex", justifyContent: "center"}}></img></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="support">Support</Link>
                            </li>
                            <li className="nav-item mt-1" >
                                <Link className="nav-link" to="#"><i class="fa fa-bars" aria-hidden="true"></i></Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
     );
}

export default Navbar;