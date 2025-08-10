import React from 'react';

function Footer() {
    return (
        <footer className='border-top' style={{ backgroundColor: "rgb(250,250,250)" }}>
            <div className='container'>
                <div className='row mt-5' style={{ marginLeft: "100px", marginRight: "100px" }}>
                    <div className='col'>
                        <img src='media/images/logo.svg' alt='Zerodha Logo' style={{ width: "70%" }} />
                        <p className='text-muted mt-3' style={{ fontSize: "12px" }}>&copy; 2010 - 2025, Zerodha Broking Ltd.<br></br> All rights reserved.</p>
                        <div>
                            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '20px', marginTop: '10px', marginBottom: '15px', marginLeft: '5px'}}>
                                <i className="fa fa-twitter text-muted" aria-hidden="true" style={{fontSize: '20px'}}></i>
                                <i className="fa fa-facebook-official text-muted" aria-hidden="true" style={{fontSize: '20px'}}></i>
                                <i className="fa fa-instagram text-muted" aria-hidden="true" style={{fontSize: '20px'}}></i>
                                <i className="fa fa-linkedin text-muted" aria-hidden="true" style={{fontSize: '20px'}}></i>
                            </div>
                            <div className='border-top' style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '20px', marginTop: '22px', marginBottom: '10px', marginLeft: '5px', paddingTop: '14px'}}>
                                <i className="fa fa-youtube-play text-muted" aria-hidden="true" style={{fontSize: '20px'}}></i>
                                <i className="fa fa-whatsapp text-muted" aria-hidden="true" style={{fontSize: '20px'}}></i>
                                <i className="fa fa-telegram text-muted" aria-hidden="true" style={{fontSize: '20px'}}></i>
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <p style={{ fontWeight: 500, fontSize: "18px" }}>Account</p>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Open demat account</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Minor demat account</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>NRI demat account</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Commodity</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Dematerialisation</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Fund transfer</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>MTF</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Referral program</a>
                    </div>
                    <div className='col'>
                        <p style={{ fontWeight: 500, fontSize: "18px" }}>Support</p>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Contact us</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Support portal</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>How to file a complaint?</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Status of your complaints</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Bulletin</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Circular</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Z-Connect blog</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Downloads</a>
                    </div>
                    <div className='col'>
                        <p style={{ fontWeight: 500, fontSize: "18px" }}>Company</p>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>About</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Philosophy</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Press & media</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Careers</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Zerodha Cares (CSR)</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Zerodha.tech</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Open source</a>
                    </div>
                    <div className='col'>
                        <p style={{ fontWeight: 500, fontSize: "18px" }}>Quick links</p>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Upcoming IPOs</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Brokerage charges</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Market holidays</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Economic calendar</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Calculators</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Markets</a>
                        <br></br>
                        <a href='' className="text-muted" style={{ textDecoration: "none", marginBottom: "10px", display: "inline-block", fontSize: "14px" }}>Sectors</a>
                    </div>
                </div>
                <div className='mt-5' style={{ fontSize: "11px", color: "rgb(169,169,169)", marginLeft: "100px", marginRight: "100px" }}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='' style={{ textDecoration: "none" }}>complaints@zerodha.com</a>, for DP related to <a href='' style={{ textDecoration: "none" }}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p>Procedure to file a complaint on <a href='' style={{ textDecoration: "none" }}>SEBI SCORES:</a> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <a href=''>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='' style={{ textDecoration: "none" }}>create a ticket here.</a></p>
                </div>
                <div style={{ display: 'flex', textAlign: "center", justifyContent: "center", flexWrap: "wrap", marginTop: "15px", marginBottom: "18px"}}>
                    <p className='text-muted' style={{ margin: "0 18px", fontSize: "12px", fontWeight:"500", color: "#f0f0f0" }}>NSE</p>
                    <p className='text-muted' style={{ margin: "0 18px", fontSize: "12px", fontWeight:"500", color: "#f0f0f0" }}>BSE</p>
                    <p className='text-muted' style={{ margin: "0 18px", fontSize: "12px", fontWeight:"500", color: "#f0f0f0" }}>MCX</p>
                    <p className='text-muted' style={{ margin: "0 18px", fontSize: "12px", fontWeight:"500", color: "#f0f0f0" }}>Terms & conditions</p>
                    <p className='text-muted' style={{ margin: "0 18px", fontSize: "12px", fontWeight:"500", color: "#f0f0f0" }}>Policies & procedures</p>
                    <p className='text-muted' style={{ margin: "0 18px", fontSize: "12px", fontWeight:"500", color: "#f0f0f0" }}>Privacy policy</p>
                    <p className='text-muted' style={{ margin: "0 18px", fontSize: "12px", fontWeight:"500", color: "#f0f0f0" }}>Disclosure</p>
                    <p className='text-muted' style={{ margin: "0 18px", fontSize: "12px", fontWeight:"500", color: "#f0f0f0" }}>For investor's attention</p>
                    <p className='text-muted' style={{ margin: "0 18px", fontSize: "12px", fontWeight:"500", color: "#f0f0f0" }}>Investor charter</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;