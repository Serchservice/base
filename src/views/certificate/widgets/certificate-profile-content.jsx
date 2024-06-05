import React from 'react'
import './certificate-profile-content.css'

const CertificateProfileContent = ({content = 'Name: Francis Denver'}) => {
    return (
        <div className="certificate-profile-content-container">
            <div className="certificate-profile-content-body">
                <div className="certificate-profile-content-header">
                    <div className="certificate-profile-content-step"></div>
                    <div className="certificate-profile-content-step-line"></div>
                </div>
                <div className="certificate-profile-content-container1">
                    <span className="certificate-profile-content-text">{ content }</span>
                </div>
            </div>
        </div>
    )
}

export default CertificateProfileContent