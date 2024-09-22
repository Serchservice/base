import { Column, Container, Loading, useDesign, useRedirect } from "@serchservice/web-ui-kit";
import React from "react";
import { useSearchParams } from "react-router-dom";
import Connect from "../../../backend/Connect";
import { RouteInterface } from "../../../configuration/Route";
import Routing from "../../../configuration/Routing";
import Layout from "../../../layout/Layout";
import Title from "../../widgets/Title";

export const NewsletterUnsubscribeRoute: RouteInterface = {
    path: "/newsletter/unsubscribe",
    page: <NewsletterUnsubscribePage />
}

export default function NewsletterUnsubscribePage() {
    const [isUnsubscribing, setIsUnsubscribing] = React.useState(true);
    const [isUnsubscribed, setIsUnsubscribed] = React.useState(false);
    const [ searchParams ] = useSearchParams()
    const isMounted = React.useRef(false);

    const redirect = useRedirect()
    const { generalPadding } = useDesign()

    const unsubscribe = React.useCallback(async (token: string) => {
        setIsUnsubscribing(true)
        const response = await Connect.get(`/company/newsletter/unsubscribe?email_address=${token}`);

        setIsUnsubscribing(false)
        if(response && response.isSuccess) {
            setIsUnsubscribed(true)
            redirect(Routing.instance.home.path, 3000)
        }
    }, [ redirect ])

    React.useEffect(() => {
        var token = searchParams.get("emailAddress");
        if(!isMounted.current) {
            if(token != null) {
                unsubscribe(token)
            } else {
                redirect(Routing.instance.error.path, 3000)
            }
            isMounted.current = true;
        }
    }, [redirect, searchParams, unsubscribe ])

    return (
        <Layout>
            <Title title="Unsubscribe newsletter" description='Sorry to see you go!' />
            <Container padding={generalPadding} width="100%">
                <Column crossAxis="center" mainAxis="center">
                    <Loading
                        isLoading={isUnsubscribing}
                        isVerified={isUnsubscribed}
                        loading='Unsubscribing...'
                        verified='Unsubscribed'
                        unverified="Couldn't finish request"
                    />
                </Column>
            </Container>
        </Layout>
    )
}