import { Icon } from "@iconify/react/dist/iconify.js";
import {
    useWidth, useDesign, IListView, Theme, Container, Responsive, Row, TextBlock,
    SizedBox, Column, Padding, Center, SpreadView, Expanded, IconBlock, LeftProps,
    Wrap, UnderlinedButton, Step, Image, Text
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import Asset from "../../../assets/Asset";
import { LinkConfig } from "../../../configuration/ButtonView";
import { RouteInterface } from "../../../configuration/Route";
import Routing from "../../../configuration/Routing";
import { IStep } from "../../../layout/Interfaces";
import Layout from "../../../layout/Layout";
import AppDownload from "../../widgets/AppDownload";
import CountriesInSerch from "../../widgets/CountriesInSerch";
import Title from "../../widgets/Title";

export const HowItWorksWithRequestingRoute: RouteInterface = {
    path: "/how-it-works/requesting",
    page: <HowItWorksWithRequestingPage />
}

export default function HowItWorksWithRequestingPage() {
    const width = useWidth();
    const  { generalPadding, imageRadius, noMobilePadding, isMobile, isDesktop } = useDesign()

    const headerTitle = "Repair, Install, Do anything service, with Serch"
    const headerDescription = [
        "Learn how to request for service provider in the Serch pltform without any hassle.",
        "Utilize the Serch features to get the best of what you want."
    ]

    // SAFETY
    const safetyTitle = "Feeling safe at all times."
    const safetyDescription = [
        "Providing has never been easy, be assured that we are doing all we can to",
        "provide you the safety you deserve with Serch. You can join our SafeGuard Community to help us",
        "design secure ways we can protect you, the users or guests.",
    ]
    const safetyIcon = "mingcute:safe-lock-fill"
    const safetyLinkText = "Read more about our safety guidelines"
    const safetyLink = Routing.instance.safetyGuideline.path;

    // SMOOTH
    const smooth: IListView[] = [
        {
            header: "Upfront pricing",
            description: [
                "You can always challenge any quotation a provider sends to you.",
                "However, be human and humane"
            ],
            color: Theme.primary,
            image: "carbon:pricing-consumption"
        },
        {
            header: "Perfect Location",
            description: [
                "Before confirming your request, you can check if the location matches the one you want.",
                "This makes it possible for you to make sure you get the service where you want it to be."
            ],
            color: Theme.primary,
            image: "mdi:location-radius"
        },
        {
            header: "Know your provider",
            description: ["Always check the service provider's profile to learn more facts about the provider."],
            color: Theme.primary,
            image: "hugeicons:profile-02",
        },
    ]

    return (
        <Layout>
            <Title title="Requesting" description='Understand how service requesting works in Serch' />
            {/* HEADER */}
            <Container backgroundColor={Theme.primary} padding={noMobilePadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <TextBlock title={headerTitle} description={headerDescription} isMobile={false} isDesktop={isDesktop} />
                        <SizedBox width={30} />
                        <Image
                            image={Asset.home.repair}
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
                        <Image image={Asset.home.repair} width="100%" height={400} />
                    </Column>
                </Responsive>
            </Container>
            {/* STEPS */}
            <StepView isMobile={isMobile} isDesktop={isDesktop} />
            {/* SMOOTH SERVICING */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Smooth servicing in the app"
                    />
                    <SizedBox height={80} />
                    <Center>
                        <SpreadView list={smooth} />
                    </Center>
                </Column>
            </Container>
            {/* APP DISPLAY */}
            <AppDownload type="user" />
            {/* TIPS - BEFORE | DURING | AFTER */}
            <StepTipView isMobile={isMobile} isDesktop={isDesktop} />
            {/* SAFETY */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={safetyIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={safetyTitle}
                            color={Theme.primary}
                            description={safetyDescription}
                            isMobile={false}
                            isDesktop={isDesktop}
                            links={[
                                {link: safetyLink, text: safetyLinkText, withArrow: true}
                            ]}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={safetyIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={safetyTitle}
                            color={Theme.primary}
                            description={safetyDescription}
                            isMobile
                            isDesktop={false}
                            links={[
                                {link: safetyLink, text: safetyLinkText, withArrow: true}
                            ]}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* COUNTRIES IN SERCH */}
            <CountriesInSerch />
        </Layout>
    )
}

const StepView: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    const steps: IStep[] = [
        {
            image: isDesktop && Asset.steps.createAccount,
            content: (
                <Column>
                    <Text
                        text="Create an account | Get a shared link"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "As a Serch User, you need to create an account with your email address and some profile",
                                "details. However, for a Serch Guest, you need to get a shared link from a Serch User in order",
                                "to create temporary guest account.",
                            ].join(" ")}
                            color={Theme.primary}
                            size={isMobile ? 14 : 16}
                        />
                        <SizedBox height={30} />
                        <UnderlinedButton
                            text="Learn more about creating a user account."
                            textColor={Theme.primary}
                            link={Routing.instance.user.path}
                            withArrow={false}
                            textSize={isMobile ? 14 : 16}
                            styles={{width: "auto", paddingBottom: "0"}}
                            showLine
                            iconSize={1}
                        />
                        <SizedBox width={10} />
                        <UnderlinedButton
                            text="Alternatively, create a guest account."
                            textColor={Theme.primary}
                            link={Routing.instance.guest.path}
                            withArrow={false}
                            textSize={isMobile ? 14 : 16}
                            styles={{width: "auto", paddingBottom: "0"}}
                            showLine
                            iconSize={1}
                        />
                    </Wrap>
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.requestMode,
            content: (
                <Column>
                    <Text
                        text="Pick a request mode"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "As a user, open the app and on your home dashboard, select the request mode you prefer.",
                            "There are several ways you can engage with a service provider in the Serch platform.",
                            "However, for a guest, since we are using the concept of SOC, you only have one mode of service",
                            "requesting in Serch."
                        ].join(" ")}
                        color={Theme.primary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.locationEntry,
            content: (
                <Column>
                    <Text
                        text="Provide your request details"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "For users, you need to provide your location, problem description in audio or text mode.",
                            "There might be other details required depending on the request mode you are engaging with.",
                            "For a guest, since Serch uses the concept of SOC, your request mode requires your location,",
                            "problem description in audio or text mode."
                        ].join(" ")}
                        color={Theme.primary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.discuss,
            content: (
                <Column>
                    <Text
                        text="Discuss your quotation"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "When you recieve a trip quotation from any provider, you have an option of challenging,",
                            "accepting or cancelling the quotation. Always work with your budget, but be human and humane.",
                        ].join(" ")}
                        color={Theme.primary}
                        size={isMobile ? 14 : 16}
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "NOTE: Trip quotations are strictly for the provider's workmanship. Any equipment to be bought,",
                            "is not tied to the quotation amount. Be advised."
                        ].join(" ")}
                        weight='bold'
                        fontStyle="italic"
                        color={Theme.primary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.track,
            content: (
                <Column>
                    <Text
                        text="Follow through"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "When you, or the provider, accepts the quotation in the trip request dashboard, the trip",
                            "becomes active. This means that you can track and follow your provider's journey all through."
                        ].join(" ")}
                        color={Theme.primary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.auth,
            content: (
                <Column>
                    <Text
                        text="Verify your provider"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "Upon arrival, tell the provider to call out the authentication code from the provider's trip.",
                                "dashboard. Enter the authentication code and confirm that the provider is your service provider.",
                                "Also, match the profile photo to the provider's face."
                            ].join(" ")}
                            color={Theme.primary}
                            size={isMobile ? 14 : 16}
                        />
                        <SizedBox height={30} />
                        <UnderlinedButton
                            text="Read more about our safety guidelines."
                            textColor={Theme.primary}
                            link={Routing.instance.safetyGuideline.path}
                            withArrow={false}
                            textSize={isMobile ? 14 : 16}
                            styles={{width: "auto", paddingBottom: "0"}}
                            showLine
                            iconSize={1}
                        />
                    </Wrap>
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.requestShare,
            content: (
                <Column>
                    <Text
                        text="Share when necessary"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "Sometimes, the provider might assess and find out that the problem is beyond the expertise of",
                                "provider, and at such moments, the provider may ask for share access to share the trip in order",
                                "to ease you from the stress of starting again. Share when it is important."
                            ].join(" ")}
                            color={Theme.primary}
                            size={isMobile ? 14 : 16}
                        />
                        <SizedBox height={30} />
                        <UnderlinedButton
                            text="Understand how requestSharing works"
                            textColor={Theme.primary}
                            link={Routing.instance.howItWorksWithRequestSharing.path}
                            withArrow={false}
                            textSize={isMobile ? 14 : 16}
                            styles={{width: "auto", paddingBottom: "0"}}
                            showLine
                            iconSize={1}
                        />
                    </Wrap>
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.rating,
            content: (
                <Column>
                    <Text
                        text="Rate the provider"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "Don't forget to rate the provider. Rating makes it possible for us to know how the experience was",
                                "for you. We suspend and might remove providers with consistent low ratings.",
                            ].join(" ")}
                            color={Theme.primary}
                            size={isMobile ? 14 : 16}
                        />
                        <SizedBox height={30} />
                        <UnderlinedButton
                            text="Read our community guidelines here."
                            textColor={Theme.primary}
                            link={LinkConfig.instance.communityGuidelines}
                            withArrow={false}
                            textSize={isMobile ? 14 : 16}
                            styles={{width: "auto", paddingBottom: "0"}}
                            showLine
                            iconSize={1}
                        />
                    </Wrap>
                </Column>
            )
        }
    ]

    return (
        <Container backgroundColor={Theme.secondary} padding={isMobile ? "24px" : "36px"} width="100%">
            <Column>
                <Text
                    text="How to use the Serch User/Guest app"
                    color={Theme.primary}
                    size={isMobile ? 22 : isDesktop ? 48 : 32}
                    weight='bold'
                />
                <SizedBox height={70} />
                {steps.map((step, index) => {
                    return (
                        <Step
                            key={index}
                            content={step.content}
                            color={Theme.primary}
                            indicatorSize={8}
                            width="100%"
                            prefix={step.image && (
                                <Image image={step.image} height="auto" width={300} />
                            )}
                            showBottom={steps.length - 1 !== index}
                        />
                    )
                })}
            </Column>
        </Container>
    )
})

const StepTipView: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    const before = {
        header: "Before your trip",
        icon: "material-symbols:move-location-rounded",
        steps: [
            <Column>
                <Text text="Edit my location" color={Theme.primary} size={isMobile ? 16 : 18} />
                <SizedBox height={30} />
                <Text
                    text={[
                        "Before moving on with your request, you can easily edit your location by using the multiple options",
                        "available."
                    ].join(" ")}
                    color={Theme.primary}
                    size={isMobile ? 14 : 16}
                />
            </Column>,
            <Column>
                <Text text="View provider's profile" color={Theme.primary} size={isMobile ? 16 : 18} />
                <SizedBox height={30} />
                <Text
                    text={[
                        "For each provider who sends in a quotation or listed on the search page, you can view the profile,",
                        "see the ratings, see whether the provider is verified and so much more, simply by tapping on the",
                        "provider box."
                    ].join(" ")}
                    color={Theme.primary}
                    size={isMobile ? 14 : 16}
                />
            </Column>,
            <Column>
                <Text text="Schedule a service" color={Theme.primary} size={isMobile ? 16 : 18} />
                <SizedBox height={30} />
                <Text
                    text={[
                        "Complete your plans today by reserving a service provider.",
                        "Request your trip up to 24 hours ahead with Serch Schedule,",
                        "so servicing that problem is the last thing on your mind.",
                    ].join(" ")}
                    color={Theme.primary}
                    size={isMobile ? 14 : 16}
                />
            </Column>
        ] as JSX.Element[]
    }

    const during = {
        header: "During your trip",
        icon: "game-icons:auto-repair",
        steps: [
            <Column>
                <Text text="Safety Guidelines" color={Theme.primary} size={isMobile ? 16 : 18} />
                <SizedBox height={30} />
                <Text
                    text={[
                        "Your safety is our priority. We never stop working to reduce incidents and set new standards,",
                        "so you can stay connected and protected every time you ride with us. Because safety never stops."
                    ].join(" ")}
                    color={Theme.primary}
                    size={isMobile ? 14 : 16}
                />
                <Container>
                    <SizedBox height={30} />
                    <UnderlinedButton
                        text="Read more about our safety guidelines."
                        textColor={Theme.primary}
                        link={Routing.instance.safetyGuideline.path}
                        withArrow={false}
                        textSize={isMobile ? 14 : 16}
                        styles={{width: "auto", paddingBottom: "0"}}
                        showLine
                        iconSize={1}
                    />
                </Container>
            </Column>,
            <Column>
                <Text text="RequestSharing" color={Theme.primary} size={isMobile ? 16 : 18} />
                <SizedBox height={30} />
                <Text
                    text={[
                        "Tipping is an easy way to say thanks. Users and guests have the option to tip the provider",
                        "right after a service trip. We know you might have decided on the amount, but if the job was",
                        "well done, you can appreciate the effort."
                    ].join(" ")}
                    color={Theme.primary}
                    size={isMobile ? 14 : 16}
                />
                <Container>
                    <SizedBox height={30} />
                    <UnderlinedButton
                        text="Learn more about requestSharing here."
                        textColor={Theme.primary}
                        link={Routing.instance.howItWorksWithRequestSharing.path}
                        withArrow={false}
                        textSize={isMobile ? 14 : 16}
                        styles={{width: "auto", paddingBottom: "0"}}
                        showLine
                        iconSize={1}
                    />
                </Container>
            </Column>,
            <Column>
                <Text text="Stick-With-Me" color={Theme.primary} size={isMobile ? 16 : 18} />
                <SizedBox height={30} />
                <Text
                    text={[
                        "Whilst we work on our SWM technology, you can share your location with family, friends and loved ones.",
                        "Let them know what's happening with you at anytime.",
                    ].join(" ")}
                    color={Theme.primary}
                    size={isMobile ? 14 : 16}
                />
            </Column>,
        ] as JSX.Element[]
    }

    const after = {
        header: "After your trip",
        icon: "ph:star-half-fill",
        steps: [
            <Column>
                <Text text="Rating" color={Theme.primary} size={isMobile ? 16 : 18} />
                <SizedBox height={30} />
                <Text
                    text={[
                        "Ratings allow us to ensure a positive experience in all platforms, so we take them seriously.",
                        "Providers with low ratings may lose access to the app, as well as users."
                    ].join(" ")}
                    color={Theme.primary}
                    size={isMobile ? 14 : 16}
                />
            </Column>,
            <Column>
                <Text text="Tipping" color={Theme.primary} size={isMobile ? 16 : 18} />
                <SizedBox height={30} />
                <Text
                    text={[
                        "Tipping is an easy way to say thanks. Users and guests have the option to tip the provider",
                        "right after a service trip. We know you might have decided on the amount, but if the job was",
                        "well done, you can appreciate the effort."
                    ].join(" ")}
                    color={Theme.primary}
                    size={isMobile ? 14 : 16}
                />
            </Column>,
        ] as JSX.Element[]
    }

    return (
        <Container backgroundColor={Theme.secondary} padding={isMobile ? "24px" : "36px"} width="100%">
            <Column>
                <Text
                    text="Get everything from your trip"
                    color={Theme.primary}
                    size={isMobile ? 22 : isDesktop ? 48 : 32}
                    weight='bold'
                />
                <SizedBox height={70} />
                <TipView step={before} />
                <SizedBox height={50} />
                <TipView step={during} />
                <SizedBox height={50} />
                <TipView step={after} />
            </Column>
        </Container>
    )
})

interface TipViewProps {
    step: {
        header: string;
        icon: string;
        steps: JSX.Element[];
    }
}

const TipView: React.FC<TipViewProps> = observer(({ step }) => {
    return (
        <Column>
            <Icon icon={step.icon} color={Theme.primary} width="32px" height="32px" />
            <SizedBox height={10} />
            <Text
                text={step.header}
                color={Theme.primary}
                size={20}
                weight='bold'
            />
            <SizedBox height={40} />
            {step.steps.map((item, index) => {
                return (
                    <Step
                        key={index}
                        content={item}
                        color={Theme.primary}
                        indicatorSize={6}
                        width="100%"
                        showBottom={step.steps.length - 1 !== index}
                    />
                )
            })}
        </Column>
    )
})