import { Column, Container, Loading, useDesign, useRedirect, useWidth } from "@serchservice/web-ui-kit";
import React from "react";
import Connect from "../../../backend/Connect";
import RequestProviderResponse from "../../../backend/models/RequestProviderResponse";
import { RouteInterface } from "../../../configuration/Route";
import Routing from "../../../configuration/Routing";
import Layout from "../../../layout/Layout";
import Title from "../../widgets/Title";

export const RequestProviderRoute: RouteInterface = {
    path: "/provider/request",
    page: <RequestProviderPage />
}

export default function RequestProviderPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isVerified, setIsVerified] = React.useState(false);
    const [data, setData] = React.useState<RequestProviderResponse | undefined>();

    const redirect = useRedirect()
    const width = useWidth();
    const { isMobile, isDesktop } = useDesign()

    /// DEFINITIONS
    const generalPadding = isMobile ? "120px 28px" : isDesktop ? `120px ${width <= 1110 ? '100px' : '140px'}` : "120px 56px";

    const verifyLink = React.useCallback(async () => {
        const link = LinkParser.parseUrl(window.location.href);

        setIsLoading(true);
        const response = await Connect.get(`/auth/guest/link/verify?link=${link.link}&shared_by=${link.sharedBy}`);

        setIsLoading(false);
        if(response && response.isSuccess) {
            setIsVerified(true);
            setData(RequestProviderResponse.fromJson(response.data));
        } else {
            setIsVerified(false);
            redirect(Routing.instance.home.path, 2000);
        }
    }, [redirect]);

    React.useEffect(() => {
        verifyLink();
    }, [verifyLink]);

    const getTitle = (): JSX.Element => {
        if(data) {
            return <Title
                title={data.name}
                description={data.category}
                image={data.avatar}
                isBlog={true}
                url={window.location.href}
            />
        } else {
            return <Title
                title="Shared service provider"
                description="Explore the world of servicing possibilities"
                isBlog={true}
                url={window.location.href}
            />
        }
    }

    return (
        <Layout>
            {getTitle()}
            <Container padding={generalPadding} width="100%">
                <Column crossAxis="center" mainAxis="center">
                    <Loading
                        isLoading={isLoading}
                        isVerified={isVerified}
                        loading='Verifying link...'
                        verified='Link Verified'
                        unverified="Couldn't finish request"
                    />
                </Column>
            </Container>
        </Layout>
    )
}

interface ILinkParser {
    link: string;
    sharedBy: string;
}

class LinkParser implements ILinkParser {
    link: string;
    sharedBy: string;

    constructor({link = "", sharedBy = ""}) {
        this.link = link;
        this.sharedBy = sharedBy;
    }

    static parseUrl(url: string): LinkParser {
        return new LinkParser({
            link: url.substring(0, url.indexOf("&")),
            sharedBy: url.substring(url.indexOf("&shared_by="))
        });
    }
}