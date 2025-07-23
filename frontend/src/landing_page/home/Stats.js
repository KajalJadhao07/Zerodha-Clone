import React from 'react';

function Stats() {
    return ( 
        <div className="container p-1">
            <div className="row" style={{ marginLeft: "100px", marginRight: "100px" }}>
                <div className="col-6">
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4 pb-1'>Customer-first always</h2>
                    <p className='text-muted pb-2'>That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ lakh crores wroth of equity investments.</p>

                    <h2 className='fs-4 pb-1'>No spam or gimmicks</h2>
                    <p className='text-muted pb-2'>No gimmicks, spam, "gamification", or annoying push notification. High quality apps that you use at your pace, the way you like.</p>

                    <h2 className='fs-4 pb-1'>The Zerodha universe</h2>
                    <p className='text-muted pb-2'>Not jsut an app, but a whole ecosystem. Our investments in 30+ fintech startups offers you tailored services specific to your needs</p>

                    <h2 className='fs-4 pb-1'>Do better with money</h2>
                    <p className='text-muted pb-2'>With initiatives like Nudge and Kill Switch, we don't just favilitate transactions, but actively help you to do better with your money</p>

                </div>
                <div className="col-6 p-5">
                    <img src='media/images/ecosystem.png' style={{width: "85%"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration: "none"}}>Explore our products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration: "none"}}>Try Kite demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;