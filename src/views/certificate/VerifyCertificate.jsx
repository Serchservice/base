import React, { useContext, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Axios } from '../../api/Axios'
import DataContext from '../../api/DataProvider'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Loading from '../../components/loading/Loading'
import Links from '../../config/Links'
import SweetAlert from '../../config/SweetAlert'
import '../associate-account-setup/associate-account-setup.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { wait } from '@testing-library/user-event/dist/utils'
import LinkAssets from '../../assets/LinkAssets'
import Title from '../../config/Title'

const VerifyCertificate = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isVerified, setIsVerified] = useState(false);
    const {setData} = useContext(DataContext)
    const [ searchParams ] = useSearchParams()
    const isMounted = useRef(false);
    const navigate = useNavigate()

    useEffect(() => {
        loadPage()
    }, [])

    const loadPage = () => {
        var token = searchParams.get("verify");
        if(!isMounted.current) {
            if(token != null) {
                verifyCertificate(token)
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

    async function verifyCertificate(token) {
        setIsLoading(true)
        await Axios.get(`/certificate/verify?token=${token}`)
        .then((response) => {
            setIsLoading(false)
            if(response.data["code"] === 200) {
                SweetAlert(response.data["message"], "success")
                setIsVerified(true)
                setData(response.data["data"])
                redirect(Links.viewCertificate)
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
            <Title title="Reading Certificate Link" description="Let's understand this link" />
            <Header />
            <div className="associate-account-setup-body">
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

export default VerifyCertificate
