import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import Assets from '../../assets/Assets'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Loading from '../../components/loading/Loading'
import './associate-account-setup.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Links from '../../config/Links'
import { Axios } from '../../api/Axios'
import SweetAlert from '../../config/SweetAlert'
import { wait } from '@testing-library/user-event/dist/utils'

const VerifyAccountSetup = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isVerified, setIsVerified] = useState(false);
    const [ searchParams ] = useSearchParams()
    const isMounted = useRef(false);
    const navigate = useNavigate()

    useEffect(() => {
        loadPage()
    }, [])

    const loadPage = () => {
        var token = searchParams.get("invite");
        if(!isMounted.current) {
            if(token != null) {
                verifyLink(token)
            } else {
                redirect(Links.error)
            }
            isMounted.current = true;
        }
    }

    async function redirect(route = '', duration = 1000) {
        await wait(duration)
        navigate(route)
    }

    async function verifyLink(token) {
        setIsLoading(true)
        await Axios.get(`/auth/associate?token=${token}`)
        .then((response) => {
            setIsLoading(false)
            if(response.data["code"] === 200) {
                SweetAlert(response.data["message"], "success")
                setIsVerified(true)

                var scope = `scope=${response.data["data"]["scope"]}`
                var name = `name=${response.data["data"]["name"]}`
                var emailAddress = `email_address=${response.data["data"]["email_address"]}`
                redirect(`${Links.associateAccountSetup}?${scope}&${name}&${emailAddress}`)
            } else {
                setIsVerified(false)
                SweetAlert(response.data["message"], "error")
            }
        }).catch((error) => {
            setIsLoading(false)
            if(error?.code === "ERR_NETWORK") {
                SweetAlert("Network error. Please check your internet connection", "error")
            } else {
                SweetAlert(error, "error")
            }
        })
    }

    return (
        <div className="about-us-container">
            <Helmet>
                <title>You are invited | Serch</title>
                <meta name="description" content="An invite link to join the Serch platform as an associate provider" />
                <meta property="og:title" content="You are invited | Serch" />
                <meta property="og:description" content="An invite link to join the Serch platform as an associate provider" />
                <meta property="og:image" content={ Assets.logo } />
            </Helmet>
            <Header />
            <div className="associate-account-setup-body">
                <span className="associate-account-setup-header">Hey there,</span>
                <span className="associate-account-setup-text">Nice of you to honor your invitation, wait a moment while we verify it</span>
                <div className="associate-account-setup-divider"></div>
                <Loading
                    isLoading={isLoading}
                    isVerified={isVerified}
                    loading='Verifying link...'
                    verified='Link verified'
                    unverified='Error while verifying link'
                />
            </div>
            <Footer />
        </div>
    )
}

export default VerifyAccountSetup
