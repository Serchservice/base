import React, { useState } from 'react'
import './complaintForm.css'
import SweetAlert from '../../config/SweetAlert'
import { Axios } from '../../api/Axios'
import Loader from '../../components/loading/Loader'

const ComplaintForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [comment, setComment] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function complain(event) {
        event.preventDefault()
        if(comment === "") {
            SweetAlert("State your complaint")
        } else {
            setIsLoading(true)
            await Axios.post("/company/complaint/complain", {
                    "email_address": emailAddress,
                    "first_name": firstName,
                    "last_name": lastName,
                    "comment": comment
                })
                .then((response) => {
                    setIsLoading(false)
                    if(response.data["code"] === 200 || response.data["code"] === 201) {
                        SweetAlert(response.data["message"], "success")
                        setEmailAddress("")
                        setFirstName("")
                        setLastName("")
                        setComment("")
                    } else {
                        SweetAlert(response.data["message"], "error")
                    }
                })
                .catch((error) => {
                    setIsLoading(false)
                    if(error?.code === "ERR_NETWORK") {
                        SweetAlert("Network error. Please check your internet connection", "error")
                    } else {
                        SweetAlert(error, "error")
                    }
                })
        }
    }

    return (
        <div className="complaint-form-complaint-body">
            <div className="complaint-form-complaint-information">
                <span className="complaint-form-complaint-information-intro">Want to make a complaint?</span>
                <h1 className="complaint-form-complaint-information-header">Get in touch</h1>
                <span className="complaint-form-complaint-information-location">Abuja, Nigeria</span>
                <a href="mailto:customercomplaints@serchservice.com" target="_blank" className="complaint-form-complaint-information-email">customercomplaints@serchservice.com</a>
            </div>
            <form onSubmit={complain} className="complaint-form-complaint-information-form">
                <div className="complaint-form-complaint-information-form-name">
                    <div className="complaint-form-first-name">
                        <label className="complaint-form-first-name-label">First Name</label>
                        <input
                            type="text"
                            placeholder="John"
                            required={true}
                            autoComplete="given-name"
                            className="complaint-form-first-name-input input"
                            value={ firstName }
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="complaint-form-last-name">
                        <label className="complaint-form-last-name-label">Last Name</label>
                        <input
                            type="text"
                            placeholder="Doe"
                            required={true}
                            autoComplete="family-name"
                            className="complaint-form-last-name-input input"
                            value={ lastName }
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="complaint-form-complaint-information-form-email">
                    <div className="complaint-form-email-address">
                        <label className="complaint-form-email-address-label">Email Address</label>
                        <input
                            type="email"
                            placeholder="johndoe@gmail.com"
                            required={true}
                            autoComplete="email"
                            className="complaint-form-first-name-input1 input"
                            value={ emailAddress }
                            onChange={e => setEmailAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className="complaint-form-complaint-information-form-complaint">
                    <label className="complaint-form-complaint-label">Complaint</label>
                    <textarea
                        placeholder="Tell us what the problem is, let's start fixing it"
                        rows="12"
                        required={true}
                        className="complaint-form-complaint-input textarea"
                        value={ comment }
                        onChange={e => setComment(e.target.value)}
                    ></textarea>
                </div>
                <span className="complaint-form-disclaimer">
                    By submitting this form, you agree and accept Serchservice privacy
                    policy and other policies that govern how we use and process data.
                </span>
                <div className="complaint-form-complaint-information-form-button">
                    <button type="submit" className="complaint-form-form-button button">
                        {isLoading ? <Loader width={60}/> : <span className="footer-text04">Setup account</span>}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ComplaintForm