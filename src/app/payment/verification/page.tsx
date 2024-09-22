import { Column, Container, Loading, useDesign, useRedirect, useWidth } from "@serchservice/web-ui-kit";
import React from "react";
import { useSearchParams } from "react-router-dom";
import Connect from "../../../backend/Connect";
import { RouteInterface } from "../../../configuration/Route";
import Routing from "../../../configuration/Routing";
import Layout from "../../../layout/Layout";
import Title from "../../widgets/Title";

export const PaymentVerificationRoute: RouteInterface = {
    path: "/payment/verify",
    page: <PaymentVerificationPage />
}

export default function PaymentVerificationPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isVerified, setIsVerified] = React.useState(false);
    const [ searchParams ] = useSearchParams()
    const isMounted = React.useRef(false);

    const redirect = useRedirect()
    const width = useWidth();
    const { isMobile, isDesktop } = useDesign()

    /// DEFINITIONS
    const generalPadding = isMobile ? "120px 28px" : isDesktop ? `120px ${width <= 1110 ? '100px' : '140px'}` : "120px 56px";

    const verifyPayment = React.useCallback(async (token: string) => {
        setIsLoading(true)
        const response = await Connect.get(`/payment/verify?reference=${token}`);

        setIsLoading(false)
        if(response && response.isSuccess) {
            setIsVerified(true)
            redirect(Routing.instance.home.path, 3000)
        }
    }, [ redirect ])

    React.useEffect(() => {
        var token = searchParams.get("reference");
        if(!isMounted.current) {
            if(token != null) {
                verifyPayment(token)
            } else {
                redirect(Routing.instance.error.path, 3000)
            }
            isMounted.current = true;
        }
    }, [redirect, searchParams, verifyPayment ])

    return (
        <Layout>
            <Title title="Verify Payment" description='Wait a moment while we verify your payment...' />
            <Container padding={generalPadding} width="100%">
                <Column crossAxis="center" mainAxis="center">
                    <Loading
                        isLoading={isLoading}
                        isVerified={isVerified}
                        loading='Verifying payment...'
                        verified='Payment Verified'
                        unverified='Error while verifying payment'
                    />
                </Column>
            </Container>
        </Layout>
    )
}