import React, { Component } from 'react';

function Hero() {
    return (
        <div className='container mt-5'>
            <div className='row text-center mt-5' style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                <h3>Charges</h3>
                <h5 className='text-muted pt-2'>List of all charges and taxes</h5>
            </div>


            <div className='row' style={{marginTop: "50px", paddingTop : "50px", paddingRight: "100px", paddingLeft: "100px"}}>
                <div className='col-4 p-2'>
                    <img src='media/images/pricing-eq.svg' alt='Hero' style={{ width: "85%", height: "auto", padding: "0 20px 0 20px" }} />
                    <h3 className='pt-4 text-center' >Free equity delivery</h3>
                    <p className='text-muted pt-3 text-center'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className='col-4 p-2'>
                    <img src='media/images/other-trades.svg' alt='Hero' style={{ width: "85%", height: "auto", padding: "0 20px 0 20px" }} />
                    <h3 className='pt-4 text-center' >Intraday and F&O trades</h3>
                    <p className='text-muted pt-3 text-center'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className='col-4 p-2'>
                    <img src='media/images/pricing-eq.svg' alt='Hero' style={{ width: "85%", height: "auto", padding: "0 20px 0 20px" }} />
                    <h3 className='pt-4 text-center' >Free direct MF</h3>
                    <p className='text-muted pt-3 text-center'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>

        </div>
    );
}

export default Hero;
<h1>Hero Section</h1>