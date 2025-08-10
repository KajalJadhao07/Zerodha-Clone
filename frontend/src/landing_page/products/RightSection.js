import React from 'react';

function RightSection({ imageURL, productName, description, learnMoreLink }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5 d-flex flex-column justify-content-center' style={{ minHeight: '100%' }}>
                    <h4 className='mt-4' style={{ marginLeft: "30px", paddingLeft: "30px" }}>{productName}</h4>
                    <p className='mt-4' style={{ marginLeft: "30px", paddingLeft: "30px", lineHeight: "1.8", fontSize: "1.1em" }}>{description}</p>
                    <a href={learnMoreLink} style={{ textDecoration: "none", marginLeft: "30px", paddingLeft: "30px"}}>Learn More →</a>
                </div>
                <div className='col-6 p-5 d-flex align-items-center justify-content-center'>
                    <img src={imageURL} alt={productName} style={{ maxWidth: '100%', maxHeight: '350px', objectFit: 'contain' }} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;