import {
    useWidth, useDesign, IListView, Theme, Container, Responsive, Row,
    TextBlock, SizedBox, Column, Padding, Center, SpreadView, Expanded,
    IconBlock, LeftProps, Wrap, UnderlinedButton, Step, Image, Text
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

export const HowItWorksWithProvidingRoute: RouteInterface = {
    path: "/how-it-works/providing",
    page: <HowItWorksWithProvidingPage />
}

export default function HowItWorksWithProvidingPage() {
    const width = useWidth();
    const  { generalPadding, imageRadius, noMobilePadding, isMobile, isDesktop } = useDesign()

    const headerTitle = "Do what you know best, with the platform that understands you"
    const headerDescription = [
        "Learn how to provide your services in the Serch Provider platform without any confusion.",
        "Utilize the Serch features to be the best at what you do."
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
                "You can always challenge any quotation a user sends to you.",
                "However, be human and humane"
            ],
            color: Theme.primary,
            image: "carbon:pricing-consumption"
        },
        {
            header: "Understand the problem",
            description: [
                "Before confirming your request, read through the textual problem description or listen to the audio",
                "problem description. Understand what the problem clearly."
            ],
            color: Theme.primary,
            image: "material-symbols:problem-rounded"
        },
        {
            header: "Know your user",
            description: ["Always check the service user's profile to learn more facts about the user."],
            color: Theme.primary,
            image: "hugeicons:profile-02",
        },
    ]

    return (
        <Layout>
            <Title title="Providing" description='Start providing your skills as a Serch partner' />
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
            <AppDownload type="provider" />
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
                        text="Create an account | Setup your account"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "As a Serch Service Provider, it is either you create an individual account (meaning that you",
                                "will handle the Serch service charges personally), or you tell your business administrator",
                                "to create an associate provider account (meaning that your business admin will handle the",
                                "Serch service charges as a business)."
                            ].join(" ")}
                            color={Theme.primary}
                            size={isMobile ? 14 : 16}
                        />
                        <SizedBox height={30} />
                        <UnderlinedButton
                            text="Learn more about creating an associate account."
                            textColor={Theme.primary}
                            link={Routing.instance.associateProvider.path}
                            withArrow={false}
                            textSize={isMobile ? 14 : 16}
                            styles={{width: "auto", paddingBottom: "0"}}
                            showLine
                            iconSize={1}
                        />
                        <SizedBox width={10} />
                        <UnderlinedButton
                            text="Alternatively, create an individual provider account."
                            textColor={Theme.primary}
                            link={Routing.instance.provider.path}
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
            image: isDesktop && Asset.steps.categorySelector,
            content: (
                <Column>
                    <Text
                        text="Select your category"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Pick the service category that best speaks of your skill and talent.",
                            "As of the moment, we allow service providers to select one category that best speaks of their",
                            "talent. However, if you can do more, you can always add those as your special skills for users",
                            "to find"
                        ].join(" ")}
                        color={Theme.primary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.verifyStatus,
            content: (
                <Column>
                    <Text
                        text="Verify your account"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "Though we do not force it or make it compulsory, we recommend that you verify your account",
                                "immediately you create it. We put more emphasis and grant more visibility to verified accounts",
                                "since verification adds a new layer of trust and reliability to users about service providers."
                            ].join(" ")}
                            color={Theme.primary}
                            size={isMobile ? 14 : 16}
                        />
                        <SizedBox height={30} />
                        <UnderlinedButton
                            text="Learn more about associate verification."
                            textColor={Theme.primary}
                            link={Routing.instance.associateVerification.path}
                            withArrow={false}
                            textSize={isMobile ? 14 : 16}
                            styles={{width: "auto", paddingBottom: "0"}}
                            showLine
                            iconSize={1}
                        />
                        <SizedBox width={10} />
                        <UnderlinedButton
                            text="Understand how individual provider verification works."
                            textColor={Theme.primary}
                            link={Routing.instance.providerVerification.path}
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
            image: isDesktop && Asset.steps.goActive,
            content: (
                <Column>
                    <Text
                        text="Activate your account | Go Online | Be active"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Always toggle the active button on your home dashboard to tell Serch that you are online",
                            "and available for trip activities. Serch cannot list offline providers to users under no",
                            "circumstances."
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
                            "When you recieve a trip request, read the problem description or listen to the audio description",
                            "with attention and clarity of mind. If the problem is something you can solve, send your quotation",
                            "to the user/guest. Users/Guests can challenge your quotation, but keep in mind that your quotation",
                            "does not include any equipment that needs to be bought for the job, but strictly your workmanship.",
                            "So, be human and humane."
                        ].join(" ")}
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
                        text="Flex your skill | Be extraordinary"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "If your quotation is accepted for the trip request, you know it is time to do the thing you love",
                                "most. Be extraordinary, be unique. Give it your best and remember to use our different safety",
                                "measures while on the trip. Start by calling out the authentication code when you arrive to your",
                                "destination."
                            ].join(" ")}
                            color={Theme.primary}
                            size={isMobile ? 14 : 16}
                        />
                        <SizedBox height={30} />
                        <UnderlinedButton
                            text="Read our safety guidelines."
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
                                "You've got the job, but you mustn't provide the solution if you know that you obviously can't.",
                                "Share the request if what the user/guest shared seems not to be the problem. You can cancel, but",
                                "with sharing, you can atleast get paid for coming."
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
                        text="Rate the user"
                        color={Theme.primary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "Don't forget to rate the user. Rating makes it possible for us to know how the experience was",
                                "for you. We suspend and might remove users/guests with consistent low ratings.",
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
                    text="How to use the Serch Provider app"
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