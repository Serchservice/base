import React, { useRef, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Loading from '../../components/loading/Loading'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Links from '../../config/Links'
import Title from '../../config/Title'

const VerifyPayment = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isVerified, setIsVerified] = useState(false);
    const [ searchParams ] = useSearchParams()
    const isMounted = useRef(false);
    const navigate = useNavigate()

    useEffect(() => {
        loadPage()
    }, [])

    const loadPage = () => {
        var token = searchParams.get("reference");
        if(!isMounted.current) {
            if(token != null) {
                verifyPayment(token)
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

    async function verifyPayment(token) {
        setIsLoading(true)
        await Axios.get(`/payment/verify?reference=${token}`)
        .then((response) => {
            setIsLoading(false)
            if(response.data["code"] === 200) {
                SweetAlert(response.data["message"], "success")
                setIsVerified(true)
                redirect(Links.home)
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
            <Title title="Verify Payment" description='Wait a moment while we verify your payment...' />
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

export default VerifyPayment
