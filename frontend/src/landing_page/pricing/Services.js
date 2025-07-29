import React, { useState } from "react";

function Services() {
    const [activeTab, setActiveTab] = useState("Equity");

    const tabList = [
        { label: "Equity" },
        { label: "Currency" },
        { label: "Commodity" }
    ];

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        background: '#fff',
        fontFamily: 'Inter, serif',
        fontSize: '15px',
        marginTop: '24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
    };
    const thStyle1 = {
        border: '1px solid #f2f2f2',
        background: '#fafbfc',
        padding: '12px 10px',
        textAlign: 'left',
        color: '#424242'
    };

    const thStyle2 = {
        border: '1px solid #f2f2f2',
        background: '#ffffff',
        padding: '12px 10px',
        textAlign: 'left',
        color: '#424242'
    };

    const tdStyle = {
        border: '1px solid #f2f2f2',
        padding: '12px 10px',
        color: '#424242',
        verticalAlign: 'top',
        background: '#fff'
    };
    const tdListStyle = { ...tdStyle, paddingLeft: '30px', background: '#fafbfc' };

    const renderContent = () => {
        switch (activeTab) {
            case "Equity":
                return (
                    <div style={{overflowX: 'auto'}}>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle2}></th>
                                    <th style={thStyle2}>Equity delivery</th>
                                    <th style={thStyle2}>Equity intraday</th>
                                    <th style={thStyle2}>F&amp;O - Futures</th>
                                    <th style={thStyle2}>F&amp;O - Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{background: '#ffffff'}}>
                                    <td style={thStyle2}>Brokerage</td>
                                    <td style={tdStyle}>Zero Brokerage</td>
                                    <td style={tdStyle}>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td style={tdStyle}>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td style={tdStyle}>Flat Rs. 20 per executed order</td>
                                </tr>
                                <tr>
                                    <td style={thStyle1}>STT/CTT</td>
                                    <td style={thStyle1}>0.1% on buy &amp; sell</td>
                                    <td style={thStyle1}>0.025% on the sell side</td>
                                    <td style={thStyle1}>0.02% on the sell side</td>
                                    <td style={tdListStyle}>
                                        <ul style={{margin: 0, paddingLeft: 18}}>
                                            <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                                            <li>0.1% on sell side (on premium)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr style={{background: '#ffffff'}}>
                                    <td style={thStyle2}>Transaction charges</td>
                                    <td style={tdStyle}>NSE: 0.00297%<br/>BSE: 0.00375%</td>
                                    <td style={tdStyle}>NSE: 0.00297%<br/>BSE: 0.00375%</td>
                                    <td style={tdStyle}>NSE: 0.00173%<br/>BSE: 0</td>
                                    <td style={tdStyle}>NSE: 0.03503% (on premium)<br/>BSE: 0.0325% (on premium)</td>
                                </tr>
                                <tr style={{background: '#fafbfc'}}>
                                    <td style={thStyle1}>GST</td>
                                    <td style={thStyle1}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td style={thStyle1}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td style={thStyle1}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td style={thStyle1}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr style={{background: '#ffffff'}}>
                                    <td style={thStyle2}>SEBI charges</td>
                                    <td style={tdStyle}>₹10 / crore</td>
                                    <td style={tdStyle}>₹10 / crore</td>
                                    <td style={tdStyle}>₹10 / crore</td>
                                    <td style={tdStyle}>₹10 / crore</td>
                                </tr>
                                <tr style={{background: '#fafbfc'}}>
                                    <td style={thStyle1}>Stamp charges</td>
                                    <td style={thStyle1}>0.015% or ₹1500 / crore on buy side</td>
                                    <td style={thStyle1}>0.003% or ₹300 / crore on buy side</td>
                                    <td style={thStyle1}>0.002% or ₹200 / crore on buy side</td>
                                    <td style={thStyle1}>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            case "Currency":
                return (
                    <div style={{overflowX: 'auto'}}>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle2}></th>
                                    <th style={thStyle2}>Currency futures</th>
                                    <th style={thStyle2}>Currency options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{background: '#ffffff'}}>
                                    <td style={thStyle2}>Brokerage</td>
                                    <td style={tdStyle}>0.03% or ₹ 20/executed order whichever is lower</td>
                                    <td style={tdStyle}>₹ 20/executed order</td>
                                </tr>
                                <tr>
                                    <td style={thStyle1}>STT/CTT</td>
                                    <td style={thStyle1}>No STT</td>
                                    <td style={thStyle1}>No STT</td>
                                </tr>
                                <tr style={{background: '#ffffff'}}>
                                    <td style={thStyle2}>Transaction charges</td>
                                    <td style={tdStyle}>NSE: 0.00035%<br/>BSE: 0.00045%</td>
                                    <td style={tdStyle}>NSE: 0.0311%<br/>BSE: 0.001%</td>
                                </tr>
                                <tr style={{background: '#fafbfc'}}>
                                    <td style={thStyle1}>GST</td>
                                    <td style={thStyle1}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td style={thStyle1}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr style={{background: '#ffffff'}}>
                                    <td style={thStyle2}>SEBI charges</td>
                                    <td style={tdStyle}>₹10 / crore</td>
                                    <td style={tdStyle}>₹10 / crore</td>
                                </tr>
                                <tr style={{background: '#fafbfc'}}>
                                    <td style={thStyle1}>Stamp charges</td>
                                    <td style={thStyle1}>0.0001% or ₹10 / crore on buy side</td>
                                    <td style={thStyle1}>0.0001% or ₹10 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            case "Commodity":
                return (
                    <div style={{overflowX: 'auto'}}>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle2}></th>
                                    <th style={thStyle2}>Commodity futures</th>
                                    <th style={thStyle2}>Commodity options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{background: '#ffffff'}}>
                                    <td style={thStyle2}>Brokerage</td>
                                    <td style={tdStyle}>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td style={tdStyle}>₹ 20/executed order</td>
                                </tr>
                                <tr>
                                    <td style={thStyle1}>STT/CTT</td>
                                    <td style={thStyle1}>0.01% on sell side (Non-Agri)</td>
                                    <td style={thStyle1}>0.05% on sell side</td>
                                </tr>
                                <tr style={{background: '#ffffff'}}>
                                    <td style={thStyle2}>Transaction charges</td>
                                    <td style={tdStyle}>MCX: 0.0021%<br/>NSE: 0.0001%</td>
                                    <td style={tdStyle}>MCX: 0.0418%<br/>NSE: 0.001%</td>
                                </tr>
                                <tr style={{background: '#fafbfc'}}>
                                    <td style={thStyle1}>GST</td>
                                    <td style={thStyle1}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td style={thStyle1}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr style={{background: '#ffffff'}}>
                                    <td style={thStyle2}>SEBI charges</td>
                                    <td style={tdStyle}>Agri:<br/>₹1 / crore <br/>Non-agri:<br/>₹10 / crore</td>
                                    <td style={tdStyle}>₹10 / crore</td>
                                </tr>
                                <tr style={{background: '#fafbfc'}}>
                                    <td style={thStyle1}>Stamp charges</td>
                                    <td style={thStyle1}>0.002% or ₹200 / crore on buy side</td>
                                    <td style={thStyle1}>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container p-5 mb-1">
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", borderBottom: "1px solid #e1e1e1", marginBottom: "30px" }}>
                {tabList.map(tab => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveTab(tab.label)}
                        style={{
                            background: "none",
                            border: "none",
                            outline: "none",
                            color: activeTab === tab.label ? "#387ed1" : "#424242",
                            textDecoration: "none",
                            fontSize: "24px",
                            fontFamily: "Inter, serif",
                            lineHeight: "1.7",
                            fontWeight: activeTab === tab.label ? "600" : "400",
                            borderBottom: activeTab === tab.label ? "2.5px solid #387ed1" : "2.5px solid transparent",
                            marginRight: "32px",
                            padding: "8px 0",
                            cursor: "pointer",
                            transition: "color 0.2s, border-bottom 0.2s"
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    );
}

export default Services;