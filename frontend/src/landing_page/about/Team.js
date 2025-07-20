import React from 'react';

function Team() {
    return ( 
        <div className="container mb-5 pb-5">
            <div className="row p-5">
                <h1 className='fs-3' style={{marginLeft: "620px"}}>People</h1>
            </div>

            <div className="row">
                <div className="col-6 p-3">
                    <img src='\media\images\nithinKamath.jpg' style={{borderRadius: "100%", width: "45%", marginLeft: "250px"}}/>
                    <p className='fs-5 mt-3' style={{marginLeft: "330px"}}>Nithin Kamath</p>
                    <p className='text-muted' style={{marginLeft: "340px"}}>Founder, CEO</p>
                </div>
                <div className="col-6 text-muted mb-5" style={{lineHeight: "1.8", fontSize: "1.1em"  , padding: "30px 100px 0 0"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href='' style={{textDecoration: "none"}}>Homepage</a> / <a href='' style={{textDecoration: "none"}}>TradingQnA</a> / <a href='' style={{textDecoration: "none"}}>Twitter</a></p>
                </div>
                
            </div>
        </div>
     );
}

export default Team;