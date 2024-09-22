import React, { useEffect, useRef, useState } from 'react'
import './associate-account-setup.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Loader from '../../components/loading/Loader'
import SweetAlert from '../../config/SweetAlert'
import DeviceInfo from '../../api/DeviceInfo'
import { Axios } from '../../api/Axios'
import { wait } from '@testing-library/user-event/dist/utils'
import Links from '../../config/Links'
import Title from '../../config/Title'

const AssociateAccountSetup = () => {
    const [name, setName] = useState("")
    const [scope, setScope] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [ searchParams ] = useSearchParams()
    const isMounted = useRef(false);
    const navigate = useNavigate()
    const [deviceDetails, setDeviceDetails] = useState(null);

    useEffect(() => {
        loadPage()
    }, [])

    const loadPage = async () => {
        var name = searchParams.get("name");
        var scope = searchParams.get("scope");
        var emailAddress = searchParams.get("email_address");
        if(!isMounted.current) {
            if(name != null) {
                setName(name)
            }
            if(scope != null) {
                setScope(scope)
            }
            if(emailAddress != null) {
                setEmailAddress(emailAddress)
            }
            isMounted.current = true;
        }
        fetchDeviceDetails()
    }

    const fetchDeviceDetails = async () => {
        const details = await DeviceInfo();
        setDeviceDetails(details);
    };

    async function redirect(route = '', duration = 1000) {
        await wait(duration)
        navigate(route)
    }

    async function setup() {
        if(password === "" || confirmPassword === "") {
            SweetAlert("Set your password", "info")
        } else if(password !== confirmPassword) {
            SweetAlert("Password does not match", "error")
        } else {
            setIsLoading(true)
            await Axios.post("/auth/associate", {
                    "email_address": emailAddress,
                    "password": password,
                    "scope": scope,
                    "device": deviceDetails
                })
                .then((response) => {
                    setIsLoading(false)
                    if(response.data["code"] === 200 || response.data["code"] === 201) {
                        setEmailAddress("")
                        SweetAlert(response.data["message"], "success")
                        redirect(Links.home)
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
        <div className="about-us-container">
            <Title title="Setup your associate account" description='Join the Serch platform as an associate provider and increase your earnings' />
            <Header />
            <div className="associate-account-setup-body">
                <span className="associate-account-setup-header">Welcome {name}</span>
                <span className="associate-account-setup-text">Create a strong and unique password you can remember</span>
                <div className="associate-account-setup-divider"></div>
                <div className="associate-account-setup-content">
                    <div className="associate-account-setup-instructions">
                        <h2 className="associate-account-setup-text1">...</h2>
                        <span className="associate-account-setup-text2">
                            Password must contain special characters like *!@ etc, numbers,
                            uppercase and lowercase characters.
                        </span>
                    </div>
                    <div className="associate-account-setup-form-body">
                        <form
                            name="formaccount"
                            autoComplete="on"
                            className="associate-account-setup-form"
                        >
                            <input
                                type="text"
                                placeholder="Create password"
                                required={true}
                                autoComplete="new-password"
                                autoFocus={true}
                                name="New Password"
                                className="associate-account-setup-create-password input"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Confirm password"
                                required={true}
                                autoComplete="new-password"
                                name="Confirm Password"
                                className="associate-account-setup-confirm-password input"
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                            <button type="button" className="associate-account-setup-button button" onClick={setup}>
                                {isLoading ? <Loader width={60}/> : <span className="footer-text04">Setup account</span>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AssociateAccountSetup