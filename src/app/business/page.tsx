import { Icon } from "@iconify/react/dist/iconify.js";
import {
    useWidth, useDesign, IListView, Theme, Container, Responsive, Row, SizedBox,
    Column, Padding, Center, SpreadView, TextBlock, Expanded, IconBlock, LeftProps,
    Image, Text
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import Asset from "../../assets/Asset";
import { RouteInterface } from "../../configuration/Route";
import Routing from "../../configuration/Routing";
import Layout from "../../layout/Layout";
import AppDownload from "../widgets/AppDownload";
import CountriesInSerch from "../widgets/CountriesInSerch";
import Title from "../widgets/Title";

export const BusinessRoute: RouteInterface = {
    path: "/business",
    page: <BusinessPage />
}

export default function BusinessPage() {
    const width = useWidth();
    const { generalPadding, noMobilePadding, imageRadius, isMobile, isDesktop } = useDesign()

    const increaseSales: IListView[] = [
        {
            header: "Manage accounts",
            description: [
                "You setup the account, while they make use of it.",
                "You only need to sit back while they increase sales for your business."
            ],
            color: Theme.primary,
            image: "fluent:person-accounts-24-regular"
        },
        {
            header: "Always in the loop",
            description: [
                "As a business, we keep you in constant communication of what is happening with your service providers.",
                "We make sure you are in the know of what you should know"
            ],
            color: Theme.primary,
            image: "line-md:uploading-loop"
        },
        {
            header: "Let the money flow in",
            description: [
                "The more they fix, the more your business earns.",
                "You can see their performance so as to know why the money isn't flowing in as it should."
            ],
            color: Theme.primary,
            image: "solar:wad-of-money-bold",
        },
    ]

    const getStarted: IListView[] = [
        {
            header: "Create account",
            description: [
                "You'll need an email address to start account creation.",
                "You will need to verify the email and provide some extra details for your account and business organization."
            ],
            color: Theme.primary,
            image: "ion:create"
        },
        {
            header: "Add associate providers",
            description: [
                "Create accounts for service providers that will belong to your business.",
                "We will send them an invite link to complete their profile. You can track these events on your dashboard."
            ],
            color: Theme.primary,
            image: "lets-icons:user-add-alt-duotone",
            link: Routing.instance.associateProvider.path,
            linkText: "Learn more about associate providers"
        },
        {
            header: "Get verified",
            description: [
                "Verification gives you and your associate providers, added advantage",
                "to provide services and earn in the Serch platform. We give visibility to verified providers."
            ],
            color: Theme.primary,
            image: "solar:verified-check-bold-duotone",
            link: Routing.instance.businessVerification.path,
            linkText: "Understand how business verification works"
        },
    ]

    /// SUSTAINABILITY DEFINITIONS
    const sustainTitle = "Sustainability"
    const sustainDescription = [
        "Serch is committed to building a culture that fosters growth, for",
        "not just the company, but for your business. We see a future where",
        "your business excels in all its shapes and forms. We will do this by",
        "offering your business more opportunities and ways to scale your",
        "service providers, so that they go beyond their skillset and provide",
        "more services that will earn both money and a good certification,",
        "thereby boosting your business ratings and visibility."
    ]
    const sustainIcon = "carbon:sustainability"

    /// GROWTH DEFINITIONS
    const growthTitle = "Your growth is vital"
    const growthDescription = [
        "As a business, we understand the needs and pain points you face. And",
        "as such, we stride to give your business the opportunities to grow",
        "with your service providers. We keep on building technologies that",
        "will boost your success, since we believe in doing business that excels."
    ]
    const growthIcon = "fluent:arrow-growth-20-filled"

    return (
        <Layout>
            <Title title="Business" description="Understand how Serch Business platform works" />
            {/** FIRST SECTION - HEADER */}
            <Container backgroundColor={Theme.primary} padding={noMobilePadding} width="100%">
                <Responsive tablet={
                    <Row crossAxis="center">
                        <LeftHeading isMobile={false} isDesktop={false} />
                        <SizedBox width={30} />
                        <Image image={Asset.home.business} style={imageRadius} height={400} width={400} />
                    </Row>
                } phone={
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <Padding all={28}>
                            <LeftHeading isMobile isDesktop={false} />
                        </Padding>
                        <Image image={Asset.home.business} width="100%" height={400} />
                    </Column>
                }>
                    <Row crossAxis="center">
                        <LeftHeading isMobile={false} isDesktop />
                        <SizedBox width={30} />
                        <Image image={Asset.home.business} style={imageRadius} height={400} width={width <= 1200 ? 450 : "auto"} />
                    </Row>
                </Responsive>
            </Container>
            {/** SECOND SECTION - PLATFORM TO INCREASE SALES */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Give them a platform to increase sales"
                    />
                    <SizedBox height={30} />
                    <Center>
                        <Icon icon="uim:briefcase" width="10em" height="10em" />
                    </Center>
                    <SizedBox height={80} />
                    <Center>
                        <SpreadView list={increaseSales} />
                    </Center>
                </Column>
            </Container>
            {/* THIRD SECTION - GET STARTED */}
            <Container backgroundColor={Theme.appbarLight} padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Get Started"
                    />
                    <SizedBox height={30} />
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 15 : 18}
                        opacity={0.6}
                        text="Go global"
                    />
                    <SizedBox height={10} />
                    <Container height={2} backgroundColor={Theme.primaryDark} width="95%" />
                    <SizedBox height={80} />
                    <SpreadView list={getStarted} />
                </Column>
            </Container>
            {/* FOURTH SECTION - SUSTAINABILITY */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive tablet={
                    <Row crossAxis="center">
                        <TextBlock color={Theme.primary} title={sustainTitle} description={sustainDescription} isMobile={false} isDesktop={false} />
                        <SizedBox width={50} />
                        <Expanded>
                            <IconBlock backgroundColor={Theme.primary} color={Theme.secondary} icon={sustainIcon} height={400} width={400} />
                        </Expanded>
                    </Row>
                } phone={
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <TextBlock color={Theme.primary} title={sustainTitle} description={sustainDescription} isMobile isDesktop={false} />
                        <SizedBox height={50} />
                        <IconBlock backgroundColor={Theme.primary} color={Theme.secondary}
                            icon={sustainIcon}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                    </Column>
                }>
                    <Row crossAxis="center">
                        <TextBlock color={Theme.primary} title={sustainTitle} description={sustainDescription} isMobile={false} isDesktop />
                        <SizedBox width={50} />
                        <Expanded>
                            <IconBlock backgroundColor={Theme.primary} color={Theme.secondary} icon={sustainIcon} height={400} width={width <= 1200 ? 450 : 600} />
                        </Expanded>
                    </Row>
                </Responsive>
            </Container>
            {/** FIFTH SECTION - APP SHOWCASE */}
            <AppDownload type="business" />
            {/* SIXTH SECTION - GROWTH */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive tablet={
                    <Row crossAxis="center">
                        <TextBlock
                            color={Theme.primary}
                            title={growthTitle}
                            description={growthDescription}
                            isMobile={false}
                            isDesktop={false}
                        />
                        <SizedBox width={50} />
                        <Expanded>
                            <IconBlock
                                backgroundColor={Theme.primary}
                                color={Theme.secondary}
                                icon={growthIcon}
                                height={400}
                                width={400}
                            />
                        </Expanded>
                    </Row>
                } phone={
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <TextBlock
                            color={Theme.primary}
                            title={growthTitle}
                            description={growthDescription}
                            isMobile
                            isDesktop={false}
                        />
                        <SizedBox height={50} />
                        <IconBlock
                            backgroundColor={Theme.primary}
                            color={Theme.secondary}
                            icon={growthIcon}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                    </Column>
                }>
                    <Row crossAxis="center">
                        <TextBlock
                            color={Theme.primary}
                            title={growthTitle}
                            description={growthDescription}
                            isMobile={false}
                            isDesktop
                        />
                        <SizedBox width={50} />
                        <Expanded>
                            <IconBlock
                                backgroundColor={Theme.primary}
                                color={Theme.secondary}
                                icon={growthIcon}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                    </Row>
                </Responsive>
            </Container>
            {/* SEVENTH SECTION - COUNTRIES IN SERCH SHORTCUT */}
            <CountriesInSerch />
        </Layout>
    )
}

const LeftHeading: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={Theme.secondary}
                size={isMobile ? 22 : isDesktop ? 48 : 32}
                text="Serch, reimagined for your business"
            />
            <SizedBox height={8} />
            <Text
                color={Theme.secondary}
                size={isMobile ? 14 : 18}
                text="Manage your service providers with the Serch platform as a business, increase income and track their performance."
            />
        </Column>
    )
})