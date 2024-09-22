import { useRedirect, useWidth, Container, Theme, SizedBox, Column, Loading, useDesign, Text } from "@serchservice/web-ui-kit";
import React from "react";
import { useSearchParams } from "react-router-dom";
import Connect from "../../../../backend/Connect";
import AuthAssociateResponse from "../../../../backend/models/AuthAssociateResponse";
import Routing from "../../../../configuration/Routing";
import Layout from "../../../../layout/Layout";
import Title from "../../../widgets/Title";
import { RouteInterface } from "../../../../configuration/Route";

export const AuthAssociateVerificationRoute: RouteInterface = {
    path: "/auth/associate/verify",
    page: <AuthAssociateVerificationPage />
}

export default function AuthAssociateVerificationPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isVerified, setIsVerified] = React.useState(false);
    const [ searchParams ] = useSearchParams()
    const isMounted = React.useRef(false);

    const redirect = useRedirect()
    const width = useWidth();
    const { isMobile, isDesktop } = useDesign()

    /// DEFINITIONS
    const generalPadding = isMobile ? "28px" : isDesktop ? `120px ${width <= 1110 ? '100px' : '140px'}` : "120px 56px";

    const verifyLink = React.useCallback(async (token: string) => {
        setIsLoading(true)
        const response = await Connect.get(`/auth/associate?token=${token}`);

        setIsLoading(false)
        if(response && response.isSuccess) {
            setIsVerified(true)
            const verification = AuthAssociateResponse.fromJson(response.data);
            const route = Routing.getRoute(Routing.instance.authAssociateSetup, {
                scope: verification.scope,
                emailAddress: verification.emailAddress,
                name: verification.name
            })
            redirect(route)
        }
    }, [ redirect ])

    React.useEffect(() => {
        var token = searchParams.get("invite");
        if(!isMounted.current) {
            if(token != null) {
                verifyLink(token)
            } else {
                redirect(Routing.instance.error.path, 3000)
            }
            isMounted.current = true;
        }
    }, [redirect, searchParams, verifyLink ])

    return (
        <Layout>
            <Title title="Verify Payment" description='Wait a moment while we verify your payment...' />
            <Container padding={generalPadding} width="100%">
                <Text
                    color={Theme.primary}
                    size={isMobile ? 18 : 20}
                    weight='bold'
                    text="Hey there,"
                />
                <SizedBox height={10} />
                <Text
                    color={Theme.primary}
                    opacity={0.8}
                    size={isMobile ? 14 : 16}
                    text="Nice of you to honor your invitation, wait a moment while we verify it"
                />
                <SizedBox height={10} />
                <Container height={2} backgroundColor={Theme.primaryDark} width="95%" />
                <SizedBox height={40} />
                <Column crossAxis="center" mainAxis="center">
                    <Loading
                        isLoading={isLoading}
                        isVerified={isVerified}
                        loading='Verifying link...'
                        verified='Link verified'
                        unverified='Error while verifying link'
                    />
                </Column>
            </Container>
        </Layout>
    )
}