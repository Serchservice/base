import { Icon } from "@iconify/react/dist/iconify.js";
import {
    useWidth, useDesign, IListView, Theme, Container, Responsive, Row, TextBlock,
    SizedBox, Column, Padding, Center, SpreadView, Expanded, IconBlock,
    Text,
    Image
} from "@serchservice/web-ui-kit";
import Asset from "../../assets/Asset";
import { RouteInterface } from "../../configuration/Route";
import Routing from "../../configuration/Routing";
import Layout from "../../layout/Layout";
import AppDownload from "../widgets/AppDownload";
import CountriesInSerch from "../widgets/CountriesInSerch";
import Title from "../widgets/Title";

export const UserRoute: RouteInterface = {
    path: "/user",
    page: <UserPage />
}

export default function UserPage() {
    const width = useWidth();
    const  { generalPadding, imageRadius, noMobilePadding, isMobile, isDesktop } = useDesign()

    const headerTitle = "Get the fix you want"
    const headerDescription = [
        "Pick or search for a provider, invite, and relax.",
        "Use our multiple request modes to get the fix you desire"
    ]

    const whyUseSerch: IListView[] = [
        {
            header: "On-demand services",
            description: ["Access services that you want, anytime, any moment and anywhere."],
            color: Theme.primary,
            image: "lets-icons:pin-alt-duotone",
            linkText: "How requesting works",
            link: Routing.instance.howItWorksWithRequesting.path
        },
        {
            header: "Your nearest location",
            description: [
                "Invite or drive to the nearest shop for the service you are looking for. Access catered",
                "attention and top-notch fix."
            ],
            color: Theme.primary,
            image: "solar:point-on-map-perspective-bold-duotone"
        },
        {
            header: "Sharing is earning",
            description: [
                "Earn when your guest friend uses the requestSharing technology to request for",
                "the services of the provider."
            ],
            color: Theme.primary,
            image: "solar:money-bag-bold-duotone",
            linkText: "Read more",
            link: Routing.instance.howItWorksWithProvideSharing.path
        },
    ]

    const getStarted: IListView[] = [
        {
            header: "Create account",
            description: [
                "You'll need an email address to start account creation.",
                "You will need to verify the email and provide some extra details for your account."
            ],
            color: Theme.primary,
            image: "ion:create"
        },
        {
            header: "Pick the request mode",
            description: [
                "Serch offers multiple ways of getting the fix you want. You can drive to the shop location,",
                "speak to a service provider, do it yourself and also invite the service provider.",
            ],
            color: Theme.primary,
            image: "material-symbols-light:motion-mode",
        },
        {
            header: "Make your choice",
            description: [
                "While we handle the connection and the logic involved, Serch gives you the power to",
                "select a service provider, handle, control and finish the conversation with any service provider."
            ],
            color: Theme.primary,
            image: "hugeicons:agreement-01",
        },
        {
            header: "Rate the provider",
            description: [
                "When you are done, always try to provide a rating for the service provider."
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
            description: [
                "Get the support and help you need in the app, anytime you need it.",
                "Utilize the power of ticketing in our 'Speak with Serch' feature to get the support tailored to you."
            ],
            color: Theme.primary,
            image: "fluent:chat-bubbles-question-24-filled",
            linkText: "Learn about ticketing in Serch",
            link: Routing.instance.speakWithSerch.path
        },
    ]

    const reserveTitle = "Reserve a provider that's ready when you are"
    const reserveDescription = [
        "The world is changing always, and with that change, we cannot do",
        "without reservations. With Serch, you can reserve a provider that",
        "will be ready when you are."
    ]
    const reserveIcon = "uim:schedule"

    return (
        <Layout>
            <Title title="User" description="Start requesting the services you prefer" />
            {/* HEADER */}
            <Container backgroundColor={Theme.primary} padding={noMobilePadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <TextBlock title={headerTitle} description={headerDescription} isMobile={false} isDesktop={isDesktop} />
                        <SizedBox width={30} />
                        <Image
                            image={Asset.common.user}
                            style={imageRadius}
                            height={isDesktop ? 713 : 500}
                            width={width <= 1200 ? 450 : "auto"}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <Padding all={28}>
                            <TextBlock title={headerTitle} description={headerDescription} isMobile isDesktop={false} />
                        </Padding>
                        <Image image={Asset.common.user} width="100%" height={400} />
                    </Column>
                </Responsive>
            </Container>
            {/* WHY USE SERCH USER */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Why use the Serch user app?"
                    />
                    <SizedBox height={30} />
                    <Center>
                        <Icon icon="solar:users-group-two-rounded-bold-duotone" width="10em" height="10em" />
                    </Center>
                    <SizedBox height={80} />
                    <Center>
                        <SpreadView list={whyUseSerch} />
                    </Center>
                </Column>
            </Container>
            {/* APP DISPLAY */}
            <AppDownload type='user' />
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
            {/* RESERVE */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={reserveIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={reserveTitle}
                            color={Theme.primary}
                            description={reserveDescription}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={reserveIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={reserveTitle}
                            color={Theme.primary}
                            description={reserveDescription}
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