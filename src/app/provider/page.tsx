import { Icon } from "@iconify/react/dist/iconify.js"
import {
    useDesign, IListView, Theme, Container, Responsive, Row, TextBlock,
    SizedBox, Column, Padding, Wrap, Center, SpreadView, Image, Text
} from "@serchservice/web-ui-kit"
import Asset from "../../assets/Asset"
import { RouteInterface } from "../../configuration/Route"
import Routing from "../../configuration/Routing"
import Layout from "../../layout/Layout"
import AppDownload from "../widgets/AppDownload"
import CountriesInSerch from "../widgets/CountriesInSerch"
import Title from "../widgets/Title"

export const ProviderRoute: RouteInterface = {
    path: "/provider",
    page: <ProviderPage />
}

export default function ProviderPage() {
    const  { generalPadding, imageRadius, noMobilePadding, isMobile, isDesktop } = useDesign()

    const headerTitle = "Flex your providing skills"
    const headerDescription = [
        "Utilize that skill of yours, let it make some money for you, while",
        "you grow with the platform that bears your interest at heart."
    ]

    const makeMoney: IListView[] = [
        {
            header: "Define your goals",
            description: [
                "You're the boss when you're with Serch. You define when users can request for your",
                "service. You define your rate for any physical service. You earn what you want."
            ],
            color: Theme.primary,
            image: "lucide:goal",
            linkText: "How providing works",
            link: Routing.instance.howItWorksWithProviding.path
        },
        {
            header: "Make money on your terms",
            description: [
                "The more you fix, the more you earn. And an add-on, the more you share, the more you earn!",
                "You can even stay at home and still earn!"
            ],
            color: Theme.primary,
            image: "lets-icons:money-duotone"
        },
        {
            header: "Always be in loop",
            description: [
                "Keep your customers in constant communication with your movement.",
                "Don't keep them waiting or guessing."
            ],
            color: Theme.primary,
            image: "line-md:my-location-loop"
        },
    ]

    const getStarted: IListView[] = [
        {
            header: "Create account",
            description: [
                "You'll need an email address to start account creation.",
                "You will need to verify the email and provide some extra details for your account",
                "with someone as your character surety."
            ],
            color: Theme.primary,
            image: "ion:create"
        },
        {
            header: "Pick the service category",
            description: [
                "Serch has an inclusive service categories you can pick from. At the moment, we allow service providers",
                "to select one service category but you can add unlimited skills you have.",
            ],
            color: Theme.primary,
            image: "ic:twotone-miscellaneous-services",
            link: Routing.instance.marketplace.path,
            linkText: "See the categories we offer"
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
                "We give visibility to verified providers."
            ],
            color: Theme.primary,
            image: "solar:diploma-verified-bold-duotone",
            link: Routing.instance.providerVerification.path,
            linkText: "Understand how provider verification works"
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
            <Title title="Provider" description='Learn what it takes to become a Serch Partner' />
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
            {/* ASSOCIATE REDIRECT */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Wrap runSpacing={30} crossAxisAlignment="center">
                    <Container width={isMobile ? "100%" : "40%"}>
                        <TextBlock
                            isMobile={isMobile}
                            title="Grow without the charges"
                            description={[
                                "Not an individual provider? Or you don't want to pay the Serch charges?",
                                "Or are you working for a business organization already?",
                                "Worry not, we have an account for you! Learn about our Serch associate service provider account,",
                                "made for people like you!"
                            ]}
                            color={Theme.primary}
                            links={[
                                {
                                    link: Routing.instance.associateProvider.path,
                                    text: "Learn more about associates",
                                    withArrow: true,
                                    showLine: true
                                }
                            ]}
                            isDesktop={isDesktop}
                        />
                    </Container>
                    <SizedBox width={30} />
                    <Image image={Asset.home.grow} style={imageRadius} height={400} width={isMobile ? "100%" : "55%"} />
                </Wrap>
            </Container>
            {/* MAKE MONEY */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Make money on your terms"
                    />
                    <SizedBox height={30} />
                    <Center>
                        <Icon icon="solar:hand-money-bold-duotone" width="10em" height="10em" />
                    </Center>
                    <SizedBox height={80} />
                    <Center>
                        <SpreadView list={makeMoney} />
                    </Center>
                </Column>
            </Container>
            {/* APP DISPLAY */}
            <AppDownload type='provider' />
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
                        text="Flex your skill, earn more!"
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