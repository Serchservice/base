import React from 'react'
import './complaintForm.css'

const ComplaintForm = () => {
    return (
        <div className="complaint-form-complaint-body">
            <div className="complaint-form-complaint-information">
                <span className="complaint-form-complaint-information-intro">Want to make a complaint?</span>
                <h1 className="complaint-form-complaint-information-header">Get in touch</h1>
                <span className="complaint-form-complaint-information-location">Abuja, Nigeria</span>
                <a href="mailto:customercomplaints@serchservice.com" target="_blank" className="complaint-form-complaint-information-email">customercomplaints@serchservice.com</a>
            </div>
            <form netlify className="complaint-form-complaint-information-form">
                <div className="complaint-form-complaint-information-form-name">
                    <div className="complaint-form-first-name">
                        <label className="complaint-form-first-name-label">First Name</label>
                        <input type="text" placeholder="John" required="true" autoComplete="given-name" className="complaint-form-first-name-input input"/>
                    </div>
                    <div className="complaint-form-last-name">
                        <label className="complaint-form-last-name-label">Last Name</label>
                        <input type="text" placeholder="Doe" required="true" autoComplete="family-name" className="complaint-form-last-name-input input"/>
                    </div>
                </div>
                <div className="complaint-form-complaint-information-form-email">
                    <div className="complaint-form-email-address">
                        <label className="complaint-form-email-address-label">Email Address</label>
                        <input type="email" placeholder="johndoe@gmail.com" required="true" autoComplete="email" className="complaint-form-first-name-input1 input"/>
                    </div>
                </div>
                <div className="complaint-form-complaint-information-form-complaint">
                    <label className="complaint-form-complaint-label">Complaint</label>
                    <textarea placeholder="Tell us what the problem is, let's start fixing it" rows="12" className="complaint-form-complaint-input textarea"></textarea>
                </div>
                <span className="complaint-form-disclaimer">
                    By submitting this form, you agree and accept Serchservice privacy
                    policy and other policies that govern how we use and process data.
                </span>
                <div className="complaint-form-complaint-information-form-button">
                    <button type="submit" className="complaint-form-form-button button">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ComplaintForm