import { Icon } from "@iconify/react/dist/iconify.js";
import {
    useWidth, useDesign, IListView, Theme, Container, Responsive, Row, TextBlock,
    SizedBox, Column, Padding, Center, SpreadView, Expanded, IconBlock, Image, Text
} from "@serchservice/web-ui-kit";
import Asset from "../../assets/Asset";
import { LinkConfig } from "../../configuration/ButtonView";
import { RouteInterface } from "../../configuration/Route";
import Routing from "../../configuration/Routing";
import Layout from "../../layout/Layout";
import AppDownload from "../widgets/AppDownload";
import CountriesInSerch from "../widgets/CountriesInSerch";
import Title from "../widgets/Title";

export const GuestRoute: RouteInterface = {
    path: "/guest",
    page: <GuestPage />
}

export default function GuestPage() {
    const width = useWidth();
    const  { generalPadding, imageRadius, noMobilePadding, isMobile, isDesktop } = useDesign()

    const headerTitle = "Fix, without an account"
    const headerDescription = [
        "Without an account, you can get the fix you want, with all safety",
        "nets and some platform features attached to it."
    ]

    const whyBecomeAGuest: IListView[] = [
        {
            header: "Service as testified",
            description: [
                "The top-notch delivery, the humanitarian act, everything and more is already accounted",
                "by the one who has used such service."
            ],
            color: Theme.primary,
            image: "fluent-mdl2:common-data-service-c-d-s",
            linkText: "How requesting works",
            link: Routing.instance.howItWorksWithRequesting.path
        },
        {
            header: "Profile Check",
            description: [
                "Check if the service provider shared to you is actually active, view the profile details,",
                "and make more informed decisions."
            ],
            color: Theme.primary,
            image: "iconamoon:profile-circle-duotone"
        },
        {
            header: "Just what you need",
            description: [
                "Focus more on the service provider you need, you don't need to search for providers,",
                "when you already have a testified provider."
            ],
            color: Theme.primary,
            image: "solar:target-bold-duotone",
            linkText: "Learn about the concept of SOC",
            link: LinkConfig.instance.soc
        },
    ]

    const getStarted: IListView[] = [
        {
            header: "Get a shared link",
            description: [
                "You can always get a shared link from a Serch User who have gone a trip with the service provider",
                "you love the skillset."
            ],
            color: Theme.primary,
            image: "ion:create"
        },
        {
            header: "Create a temporary account",
            description: [
                "The account you create expires when the link expires. We use this for personalization and for communication.",
                "You only need an email address and a profile picture."
            ],
            color: Theme.primary,
            image: "ion:create"
        },
        {
            header: "Rate the provider",
            description: [
                "Send your quotation, invite the provider when it is accepted. And when you are done,",
                "always try to provide a rating for the service provider."
            ],
            color: Theme.primary,
            image: "line-md:star-half-filled",
        },
    ]

    const safety: IListView[] = [
        {
            header: "Safety features",
            description: [
                "Utilize the in-app safety features and our safety recommendations in order to make",
                "your servicing or repair experience, safe at all times."
            ],
            color: Theme.primary,
            image: "solar:safe-circle-bold-duotone",
            linkText: "See our recommendations",
            link: Routing.instance.safetyGuideline.path
        },
        {
            header: "SafeGuard Community",
            description: [
                "Join our all-inclusive safe-guard community.",
                "Speak your mind on how we can improve the quality of our security."
            ],
            color: Theme.primary,
            image: "healthicons:community-meeting"
        },
        {
            header: "Get 24/5 help when in need",
            description: ["Get the support and help you need in the app, anytime you need it."],
            color: Theme.primary,
            image: "fluent:chat-bubbles-question-24-filled",
        },
    ]


    const helloTitle = "Hello guest"
    const helloDescription = [
        "As a part of the Serch ecosystem, you need to understand that you",
        "are important to us. Inasmuch as you don't have an account with",
        "Serch, we also give adequate attention to you and your service",
        "trips. This is why we made it possible that you can reuse a",
        "requestSharing link up to 5 times. This is our commitment as a",
        "company to make sure that you have a wonderful experience with our",
        "platform and the service provider, and as well, give the necessary",
        "security we have in mind."
    ]
    const helloIcon = "mdi:human-hello-variant"

    return (
        <Layout>
            <Title title="Guest" description="Requesting in Serch as a guest" />
            {/* HEADER */}
            <Container backgroundColor={Theme.primary} padding={noMobilePadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <TextBlock title={headerTitle} description={headerDescription} isMobile={false} isDesktop={isDesktop} />
                        <SizedBox width={30} />
                        <Image image={Asset.home.grow} style={imageRadius} height={400} width={width <= 1200 ? 450 : "auto"} />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <Padding all={28}>
                            <TextBlock title={headerTitle} description={headerDescription} isMobile isDesktop={false} />
                        </Padding>
                        <Image image={Asset.home.grow} width="100%" height={400} />
                    </Column>
                </Responsive>
            </Container>
            {/* WHY USE SERCH Guest */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Why become a Serch Guest?"
                    />
                    <SizedBox height={30} />
                    <Center>
                        <Icon icon="fluent:guest-12-filled" width="10em" height="10em" />
                    </Center>
                    <SizedBox height={80} />
                    <Center>
                        <SpreadView list={whyBecomeAGuest} />
                    </Center>
                </Column>
            </Container>
            {/* APP DISPLAY */}
            <AppDownload type='guest' />
            {/* GET STARTED */}
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
                        text="Start requesting, fixing, repairing and making extra cash with Serch!"
                    />
                    <SizedBox height={10} />
                    <Container height={2} backgroundColor={Theme.primaryDark} width="95%" />
                    <SizedBox height={80} />
                    <SpreadView list={getStarted} />
                </Column>
            </Container>
            {/* YOUR SAFETY */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Your safety is important"
                    />
                    <SizedBox height={70} />
                    <Container width="100%" backgroundColor={Theme.primary} padding="24px">
                        <Center>
                            <Icon icon="ic:outline-safety-divider" color={Theme.secondary} width="6em" height="6em" />
                        </Center>
                    </Container>
                    <SizedBox height={80} />
                    <SpreadView list={safety} />
                </Column>
            </Container>
            {/* HELLO GUEST */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={helloIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={helloTitle}
                            color={Theme.primary}
                            description={helloDescription}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={helloIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={helloTitle}
                            color={Theme.primary}
                            description={helloDescription}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* COUNTRIES IN SERCH SHORTCUT */}
            <CountriesInSerch />
        </Layout>
    )
}