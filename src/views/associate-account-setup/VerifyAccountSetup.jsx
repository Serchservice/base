import React, { useEffect, useRef, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Loading from '../../components/loading/Loading'
import './associate-account-setup.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Links from '../../config/Links'
import { Axios } from '../../api/Axios'
import { wait } from '@testing-library/user-event/dist/utils'
import Title from '../../config/Title'
import notify from '../../config/Notify'

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
                notify.success(response.data["message"])
                setIsVerified(true)

                var scope = `scope=${response.data["data"]["scope"]}`
                var name = `name=${response.data["data"]["name"]}`
                var emailAddress = `email_address=${response.data["data"]["email_address"]}`
                redirect(`${Links.associateAccountSetup}?${scope}&${name}&${emailAddress}`)
            } else {
                setIsVerified(false)
                notify.error(response.data["message"])
            }
        }).catch((error) => {
            setIsLoading(false)
            if(error?.code === "ERR_NETWORK") {
                notify.error("Network error. Please check your internet connection")
            } else {
                notify.error(error)
            }
        })
    }

    return (
        <div className="about-us-container">
            <Title title='You are invited' description='An invite link to join the Serch platform as an associate provider' />
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
