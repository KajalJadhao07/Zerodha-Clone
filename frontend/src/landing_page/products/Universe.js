import React from 'react';

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row text-center mb-5'>
                <p className='fs-5 text-center mb-5 pb-5'>Want to know more about our technology stack? Check out the <a href='' style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.</p>
                <h3>The Zerodha Universe</h3>
                <p className='pt-3 pb-5'>Extend your trading and investment experience even further with our partner platforms</p>


                <div className="row justify-content-center" style={{ padding: "0 200px 0 200px" }}>
                    <div className='col-md-4 d-flex flex-column align-items-center p-4'>
                        <img src="\media\images\zerodhaFundhouse.png" style={{ width: "70%", marginBottom: "15px" }} alt="Zerodha Fundhouse" />
                        <p className='text-muted text-center' style={{ fontSize: "0.8em" }}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className='col-md-4 d-flex flex-column align-items-center p-4'>
                        <img src="\media\images\sensibullLogo.svg" style={{ width: "80%", marginBottom: "24px"  }} alt="Sensibull" />
                        <p className='text-muted text-center' style={{ fontSize: "0.8em" }}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, and more.
                        </p>
                    </div>
                    <div className='col-md-4 d-flex flex-column align-items-center p-4'>
                        <img src="\media\images\tijori.svg" style={{ width: "50%", marginBottom: "15px" }} alt="Tijori" />
                        <p className='text-muted text-center' style={{ fontSize: "0.8em" }}>Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center mb-5" style={{ padding: "0 200px 0 200px" }}>
                    <div className='col-md-4 d-flex flex-column align-items-center p-4'>
                        <img src="\media\images\streakLogo.png" style={{ width: "45%", marginBottom: "24px" }} alt="Streak" />
                        <p className='text-muted text-center' style={{ fontSize: "0.8em" }}>Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.</p>
                    </div>
                    <div className='col-md-4 d-flex flex-column align-items-center p-4'>
                        <img src="\media\images\smallcaseLogo.png" style={{ width: "60%", marginBottom: "24px" }} alt="Smallcase" />
                        <p className='text-muted text-center' style={{ fontSize: "0.8em" }}>Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.</p>
                    </div>
                    <div className='col-md-4 d-flex flex-column align-items-center p-4'>
                        <img src="\media\images\dittoLogo.png" style={{ width: "40%", marginBottom: "24px" }} alt="Ditto" />
                        <p className='text-muted text-center' style={{ fontSize: "0.8em" }}>Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.</p>
                    </div>
                </div>

                <button className='p-2 fs-5 mb-5' style={{ width: "15%", margin: "20 0 0", textAlign: 'center', backgroundColor: "#387ed1", border: "1px solid rgba(0,0,0,0)", color: "#fff", fontSize: "1.2rem", fontWeight: "500", display: "inline-block", padding:"10px 30px", borderRadius: "3px", fontFamily: "Inter, serif" }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;