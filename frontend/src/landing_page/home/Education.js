import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row' style={{ marginLeft: "100px", marginRight: "100px" }}>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width: "70%"}}></img>
                </div>
                <div className='col-6 mb-5'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>

                    <p className='mt-3'>Varsity, the largest online stock market education book in the world coveringeverything from the basics to advanced tranding.</p>
                    <a href='' style={{textDecoration: "none"}}>Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <p>TrandingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration: "none"}}>TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
            </div>
        </div>
     );
}

export default Education;