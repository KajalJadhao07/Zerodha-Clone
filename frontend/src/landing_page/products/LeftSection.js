import React from 'react';

function LeftSection({ imageURL, productName, description, tryDemoLink, learnMoreLink, googlePlayLink, appStoreLink }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5 ' style={{paddingLeft: "250px"}}>
                    <img src={imageURL} alt={productName} />
                </div>
                <div className='col-6 p-5 mt-5 mb-5'>
                    <h4 >{productName}</h4>
                    <p className='mt-4' style={{marginRight: "100px", paddingRight: "100px", lineHeight: "1.8", fontSize: "1.1em" }}>{description}</p>

                    <div>
                        <a href={tryDemoLink} style={{ textDecoration: "none"}}>Try Demo →</a>
                        <a href={learnMoreLink} style={{ textDecoration: "none", marginLeft:"50px" }}>Learn More →</a>
                    </div>

                    <div className='mt-3'>
                        <a href={googlePlayLink}><img src='\media\images\googlePlayBadge.svg' alt='Google Play Store' /></a>
                        <a href={appStoreLink} style={{ marginLeft: "50px" }}><img src='\media\images\appstoreBadge.svg' alt='Apple App Store' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;