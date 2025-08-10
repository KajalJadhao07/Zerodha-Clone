import React, { Component } from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom' style={{textAlign: "center", padding: "75px 0 100px"}}>
            <h3>Zerodha Products</h3>
            <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>
            <p>Check out our <a href='' style={{textDecoration: "none"}}>investment offerings →</a></p>
        </div>
     );
}

export default Hero;