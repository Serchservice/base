import { Icon } from "@iconify/react/dist/iconify.js";
import {
    useWidth, useDesign, IListView, Theme, Container, Responsive, Row,
    TextBlock, SizedBox, Column, Padding, Center, SpreadView, Expanded, IconBlock,
    Image,
    Text
} from "@serchservice/web-ui-kit";
import Asset from "../../../assets/Asset";
import { RouteInterface } from "../../../configuration/Route";
import Routing from "../../../configuration/Routing";
import Layout from "../../../layout/Layout";
import AppDownload from "../../widgets/AppDownload";
import CountriesInSerch from "../../widgets/CountriesInSerch";
import Title from "../../widgets/Title";

export const ExploreSharingRoute: RouteInterface = {
    path: "/explore/sharing",
    page: <ExploreSharingPage />
}

export default function ExploreSharingPage() {
    const width = useWidth();
    const  { generalPadding, imageRadius, noMobilePadding, isMobile, isDesktop } = useDesign()

    const headerTitle = "Service requesting and providing, extended beyond the normal"
    const headerDescription = [
        "Tired of the clustered things you need to do in order to get a fix? Or you keep losing money over problems",
        "from a client you couldn't solve? Or you're tired of the endless cycle of requesting providers over and over again?",
        "Welcome to the world of service sharing!"
    ]

    const explore: IListView[] = [
        {
            header: "RequestSharing",
            description: [
                "Share that problem you found out that you couldn't fix. Let someone else take the reins and still",
                "get compensation for the time spent and the little service rendered."
            ],
            color: Theme.secondary,
            image: "solar:share-circle-bold-duotone",
            link: Routing.instance.howItWorksWithRequestSharing.path,
            linkText: "Learn more about requestSharing here"
        },
        {
            header: "ProvideSharing",
            description: [
                "Avoid the clustered things you need to do as a Serch user, and use a shared link to get quick fix",
                "with a provider you've seen and confirmed its expertise.",
            ],
            color: Theme.secondary,
            image: "solar:screen-share-bold-duotone",
            link: Routing.instance.howItWorksWithProvideSharing.path,
            linkText: "Learn more about provideSharing here"
        },
    ]

    const safetyTitle = "Share and move with safety"
    const safetyDescription = [
        "Whether you are invited to a trip or you are using a provideShared link, you are always protected",
        "with safety features that serve for your benefit.",
    ]
    const safetyIcon = "mingcute:safe-shield-2-fill"
    const safetyLink = Routing.instance.safetyGuideline.path;
    const safetyLinkText = "Read more about our safety guidelines"

    return (
        <Layout>
            <Title title="Sharing" description="Explore the world of sharing in Serch" />
            {/* HEADER */}
            <Container backgroundColor={Theme.primary} padding={noMobilePadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <TextBlock title={headerTitle} description={headerDescription} isMobile={false} isDesktop={isDesktop} />
                        <SizedBox width={100} />
                        <Image
                            image={Asset.common.users}
                            style={imageRadius}
                            height={isDesktop ? 713 : 500}
                            width={width <= 1200 ? 450 : 500}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <Padding all={28}>
                            <TextBlock title={headerTitle} description={headerDescription} isMobile isDesktop={false} />
                        </Padding>
                        <Image image={Asset.common.users} width="100%" height={400} />
                    </Column>
                </Responsive>
            </Container>
            {/* EXPLORE */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Column crossAxis="center">
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Explore the world of sharing in Serch"
                    />
                    <SizedBox height={120} />
                    <Center>
                        <Icon icon="fluent:channel-share-28-filled" color={Theme.secondary} width="10em" height="10em" />
                    </Center>
                    <SizedBox height={120} />
                    <SpreadView list={explore} isCentered />
                </Column>
            </Container>
            {/* APP DISPLAY */}
            <AppDownload type='user' />
            {/* SAFETY */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={safetyIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.secondary}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={safetyTitle}
                            color={Theme.secondary}
                            description={safetyDescription}
                            links={[{link: safetyLink, text: safetyLinkText}]}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={safetyIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.secondary}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={safetyTitle}
                            color={Theme.secondary}
                            description={safetyDescription}
                            links={[{link: safetyLink, text: safetyLinkText}]}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* COUNTRIES IN SERCH */}
            <CountriesInSerch />
        </Layout>
    )
}