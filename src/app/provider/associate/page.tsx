import { Icon } from "@iconify/react/dist/iconify.js";
import {
    useDesign, IListView, Theme, Container, Responsive, Row,
    TextBlock, SizedBox, Column, Padding, Center, SpreadView,
    Image, Text
} from "@serchservice/web-ui-kit";
import Asset from "../../../assets/Asset";
import { RouteInterface } from "../../../configuration/Route";
import Routing from "../../../configuration/Routing";
import Layout from "../../../layout/Layout";
import AppDownload from "../../widgets/AppDownload";
import CountriesInSerch from "../../widgets/CountriesInSerch";
import Title from "../../widgets/Title";

export const AssociateProviderRoute: RouteInterface = {
    path: "/provider/associate",
    page: <AssociateProviderPage />
}

export default function AssociateProviderPage() {
    const  { generalPadding, imageRadius, noMobilePadding, isMobile, isDesktop } = useDesign()

    const headerTitle = "Grow without the payment charges"
    const headerDescription = [
        "Show off your skills and expertise without taking into account, the money charges",
        "that comes with it. Let your business manager handle the rest while you focus on growing."
    ]

    const elevate: IListView[] = [
        {
            header: "Elevate your business organization",
            description: [
                "Be extraordinary with the things you're already used to! Provide the services you've been",
                "providing, with better access and security, elevating the business you already work for."
            ],
            color: Theme.primary,
            image: "bi:sort-up",
        },
        {
            header: "Provide without charge",
            description: [
                "Let the business organization take care of Serch service charges, while you focus more on doing what you",
                "already do best --- Providing"
            ],
            color: Theme.primary,
            image: "arcticons:color-switch",
            linkText: "How providing works",
            link: Routing.instance.howItWorksWithProviding.path
        },
        {
            header: "Grow with confidence",
            description: [
                "Measure your growth with our analytics on what users are saying about you and your services.",
                "Keep stacking up that employee of the month!"
            ],
            color: Theme.primary,
            image: "solar:graph-up-bold-duotone"
        },
    ]

    const getStarted: IListView[] = [
        {
            header: "Setup your account",
            description: [
                "Let your business admin create your account from the business dashboard.",
                "You will get an invite link to your account once that is done perfectly.",
                "Click on the link to finish setup."
            ],
            color: Theme.primary,
            image: "fluent:comment-link-20-filled"
        },
        {
            header: "Go online | Be active",
            description: [
                "In order to be visible to users, you need to toggle the online switch in your dashboard.",
                "You cannot be seen or requested if you are not online",
            ],
            color: Theme.primary,
            image: "entypo:switch",
        },
        {
            header: "Get verified",
            description: [
                "Verification gives you an added advantage to provide services and earn in the Serch platform.",
                "We give visibility to verified providers. Your verification is always completed with your",
                "business admin verification."
            ],
            color: Theme.primary,
            image: "solar:diploma-verified-bold-duotone",
            link: Routing.instance.associateVerification.path,
            linkText: "Understand how associate verification works"
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
            description: [
                "Get the support and help you need in the app, anytime you need it.",
                "Utilize the power of ticketing in our 'Speak with Serch' feature to get the support tailored to you."
            ],
            color: Theme.primary,
            image: "solar:chat-round-call-bold-duotone",
            linkText: "Learn about ticketing in Serch",
            link: Routing.instance.speakWithSerch.path
        },
    ]

    return (
        <Layout>
            <Title title="Associate Provider" description='Growth within your existing organization' />
            {/* HEADER */}
            <Container backgroundColor={Theme.primary} padding={noMobilePadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <TextBlock title={headerTitle} description={headerDescription} isMobile={false} isDesktop={isDesktop} />
                        <SizedBox width={30} />
                        <Image
                            image={Asset.common.provider}
                            style={imageRadius}
                            height={isDesktop ? 713 : 500}
                            width={isDesktop ? 550 : 400}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <Padding all={28}>
                            <TextBlock title={headerTitle} description={headerDescription} isMobile isDesktop={false} />
                        </Padding>
                        <Image image={Asset.common.provider} width="100%" height={400} />
                    </Column>
                </Responsive>
            </Container>
            {/* MAKE MONEY */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Become extraordinary on your expertise"
                    />
                    <SizedBox height={30} />
                    <Center>
                        <Icon icon="solar:shield-up-bold-duotone" width="10em" height="10em" />
                    </Center>
                    <SizedBox height={80} />
                    <Center>
                        <SpreadView list={elevate} />
                    </Center>
                </Column>
            </Container>
            {/* APP DISPLAY */}
            <AppDownload type='associate' />
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
                        text="Start providing with ease and comfort!"
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
            {/* COUNTRIES IN SERCH SHORTCUT */}
            <CountriesInSerch />
        </Layout>
    )
}