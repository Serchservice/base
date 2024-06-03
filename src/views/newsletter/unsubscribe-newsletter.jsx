import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import Assets from '../../assets/Assets'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Loading from '../../components/loading/Loading'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Links from '../../config/Links'

const UnsubscribeNewsletter = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isVerified, setIsVerified] = useState(false);
    const [ searchParams ] = useSearchParams()
    const isMounted = useRef(false);
    const navigate = useNavigate()

    useEffect(() => {
        loadPage()
    }, [])

    const loadPage = () => {
        var token = searchParams.get("emailAddress");
        if(!isMounted.current) {
            if(token != null) {
                unsubscribe(token)
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

    async function unsubscribe(token) {
        setIsLoading(true)
        await Axios.get(`/company/newsletter/unsubscribe?email_address=${token}`)
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
            <Helmet>
                <title>Payment verification | Serch</title>
                <meta name="description" content="Let's verify your payment" />
                <meta property="og:title" content="Payment verification | Serch" />
                <meta property="og:description" content="Let's verify your payment" />
                <meta property="og:image" content={ Assets.logo } />
            </Helmet>
            <Header />
            <div className="associate-account-setup-body">
                <Loading
                    isLoading={isLoading}
                    isVerified={isVerified}
                    loading='Unsubscribing...'
                    verified='Unsubscribed'
                    unverified="Couldn't finish request"
                />
            </div>
            <Footer />
        </div>
    )
}

export default UnsubscribeNewsletter
