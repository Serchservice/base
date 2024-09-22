import { Column, Container, Loading, useDesign, useRedirect, useWidth } from "@serchservice/web-ui-kit";
import { RouteInterface } from "@serchservice/web-ui-kit/build/src/interfaces/Base";
import React from "react";
import { useSearchParams } from "react-router-dom";
import Connect from "../../../../backend/Connect";
import CertificateDb from "../../../../backend/database/VerifyCertificateDb";
import { VerifyCertificateResponse } from "../../../../backend/models/CertificateResponse";
import Routing from "../../../../configuration/Routing";
import Layout from "../../../../layout/Layout";
import Title from "../../../widgets/Title";

export const VerifyCertificateRoute: RouteInterface = {
    path: "/certificate/verify",
    page: <VerifyCertificatePage />
}

export default function VerifyCertificatePage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isVerified, setIsVerified] = React.useState(false);
    const [ searchParams ] = useSearchParams()
    const isMounted = React.useRef(false);

    const redirect = useRedirect()
    const width = useWidth();
    const { isMobile, isDesktop } = useDesign()

    /// DEFINITIONS
    const generalPadding = isMobile ? "120px 28px" : isDesktop ? `120px ${width <= 1110 ? '100px' : '140px'}` : "120px 56px";

    const verifyCertificate = React.useCallback(async (token: string) => {
        setIsLoading(true)
        const response = await Connect.get(`/certificate/verify?token=${token}`);

        setIsLoading(false)
        if(response && response.isSuccess) {
            setIsVerified(true)
            CertificateDb.set(VerifyCertificateResponse.fromJson(response.data))
            redirect(Routing.instance.certificate.path)
        }
    }, [ redirect ])

    React.useEffect(() => {
        var token = searchParams.get("verify");
        if(!isMounted.current) {
            if(token != null) {
                verifyCertificate(token)
            } else {
                redirect(Routing.instance.error.path, 3000)
            }
            isMounted.current = true;
        }
    }, [redirect, searchParams, verifyCertificate ])

    return (
        <Layout>
            <Title title="Reading Certificate Link" description="Let's understand this link" />
            <Container padding={generalPadding} width="100%">
                <Column crossAxis="center" mainAxis="center">
                    <Loading
                        isLoading={isLoading}
                        isVerified={isVerified}
                        loading='Verifying link...'
                        verified='Link Verified'
                        unverified='Error while verifying link'
                    />
                </Column>
            </Container>
        </Layout>
    )
}