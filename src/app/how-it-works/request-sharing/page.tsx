import {
    useWidth, useDesign, Container, Theme, Responsive, Row, SizedBox, Column,
    Expanded, IconBlock, TextBlock, LeftProps, Wrap, UnderlinedButton, Step,
    Text, Image
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import Asset from "../../../assets/Asset";
import { RouteInterface } from "../../../configuration/Route";
import Routing from "../../../configuration/Routing";
import { IStep } from "../../../layout/Interfaces";
import Layout from "../../../layout/Layout";
import AppDownload from "../../widgets/AppDownload";
import CountriesInSerch from "../../widgets/CountriesInSerch";
import Title from "../../widgets/Title";

export const HowItWorksWithRequestSharingRoute: RouteInterface = {
    path: "/how-it-works/request-sharing",
    page: <HowItWorksWithRequestSharingPage />
}

export default function HowItWorksWithRequestSharingPage() {
    const width = useWidth();
    const { generalPadding, imageRadius, isMobile, isDesktop } = useDesign()

    const techTitle = "RequestSharing as a technology"
    const techDescription = [
        "As it is our mission to make service providing easy, we put in a lot of effort",
        "and passion into achieving that. This is why, it is not just a name, nor is it a",
        "normal thing, rather, it is a technology that helps us make sure that you can",
        "get the service you want, the way you want it."
    ]
    const techIcon = "fluent:channel-share-24-filled"

    const helpTitle = "Help when you need it."
    const helpDescription = [
        "When in need of an assistance, you don't need to panic, you can still check",
        "on Serch for assistance, and of course, it will be provided.",
        `\n\n`,
        "However, it won't just be provided, you can still earn while getting that",
        "assistance - even though you are no more the provider solving the problem."
    ]
    const helpIcon = "fa-solid:hands-helping"

    const happyTitle = "Let them be happy"
    const happyDescription = [
        "The requestSharing technology is targeted towards making sure that our",
        "users or guests are always happy. When they invite a provider, they might",
        "not really know what the issue they might be having, but you, as the",
        "provider might. So, requestSharing makes it possible that you don't think",
        "you've lost something while attending to this request. In the end, you are happy and the user is happy."
    ]
    const happyIcon = "solar:sticker-smile-circle-bold-duotone"

    return (
        <Layout>
            <Title title="RequestSharing" description='Learn more about requestSharing' />
            {/** FIRST SECTION - HEADER */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <LeftHeading isMobile={false} isDesktop />
                        <SizedBox width={80} />
                        <Image image={Asset.common.providers} width={600} style={imageRadius} />
                    </Row>
                }>
                    <Column crossAxis="center">
                        <Image image={Asset.common.providers} width="100%" style={imageRadius} />
                        <SizedBox height={80} />
                        <LeftHeading isMobile={isMobile} isDesktop={false} />
                    </Column>
                </Responsive>
            </Container>
            {/* AS A TECH */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={techIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={techTitle}
                            color={Theme.primary}
                            description={techDescription}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={techIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={techTitle}
                            color={Theme.primary}
                            description={techDescription}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* HELP */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={helpIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={helpTitle}
                            color={Theme.primary}
                            description={helpDescription}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={helpIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={helpTitle}
                            color={Theme.primary}
                            description={helpDescription}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* HOW IT WORKS */}
            <StepView isMobile={isMobile} isDesktop={isDesktop} />
            {/* HAPPY */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={happyIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={happyTitle}
                            color={Theme.primary}
                            description={happyDescription}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={happyIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={happyTitle}
                            color={Theme.primary}
                            description={happyDescription}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* APP DOWNLOAD SHORTCUT */}
            <AppDownload type="provider" />
            {/* COUNTRIES IN SERCH SHORTCUT */}
            <CountriesInSerch />
        </Layout>
    )
}

const LeftHeading: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    const information = [
        "Got a request but the fix is not something you can do?",
        "Share that request of yours, you might find the help you need, and you can still get paid.",
    ]

    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={Theme.secondary}
                size={isMobile ? 22 : isDesktop ? 48 : 32}
                text="Service providing, extended beyond"
            />
            <SizedBox height={30} />
            <Text
                color={Theme.secondary}
                size={isMobile ? 14 : 16}
                text={information.join(" ")}
            />
        </Column>
    )
})

const StepView: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    const steps: IStep[] = [
        {
            image: isDesktop && Asset.steps.activity,
            content: (
                <Column>
                    <Text
                        text="Open the trip dashboard"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "As a provider, you need to have an account as an associate or an individual provider.",
                                "With your account, go to the 'Activity' tab in your home dashboard. Open the active trip",
                                "dashboard you want to requestShare."
                            ].join(" ")}
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <SizedBox height={30} />
                        <UnderlinedButton
                            text="Learn more about creating an associate account."
                            textColor={Theme.secondary}
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
                            textColor={Theme.secondary}
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
            image: isDesktop && Asset.steps.requestShare,
            content: (
                <Column>
                    <Text
                        text="Request Share Access"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "If the user/guest has not granted you share access, inform the user/guest to grant you",
                            "share access by tapping on the 'Grant Share Access' button in the trip timeline from the",
                            "user trip dashboard. This is important in order to move on to the next step.",
                        ].join(" ")}
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.sharedLink,
            content: (
                <Column>
                    <Text
                        text="Share the trip - Offline Mode"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Know someone who can provide the service needed and this provider doesn't exist on the Serch",
                            "platform? No problem, just provide the necessary information of this offline provider. Serch",
                            "will send the trip authentication code needed for verification to the phone number provided.",
                            "You will need to direct the offline provider personally"
                        ].join(" ")}
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "NOTE: Before inviting any offline provider, you must communicate the user's problem and budget",
                            "clearly to the offline provider. Whether you get a percentage of the budget or not, is fully",
                            "dependent on the invited offline provider. Also, by inviting the offline provider,",
                            "the offline provider agrees to Serch sending sms notification or messages to the provided",
                            "phone number, for authentication purposes and advertising purposes."
                        ].join(" ")}
                        color={Theme.secondary}
                        weight='bold'
                        fontStyle="italic"
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.sharedLink,
            content: (
                <Column>
                    <Text
                        text="Share the trip - Online Mode"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Determine the category or skillset required for the trip you're trying to share from our list",
                            "of services, categories and skillsets. We will search through our database to provide the list of",
                            "providers with the option/s you've chosen. You can call the provider before inviting the provider",
                            "over."
                        ].join(" ")}
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "NOTE: You need to select a provider with the consent of the user, and always make sure you",
                            "communicate the user's problem and budget clearly to the provider.",
                            "Whether you get a percentage of the budget or not, is fully dependent on the provider and not",
                            "imposed by Serch. This means that Serch only suggests a certain amount for your compensation but",
                            "doesnt't really enforce it"
                        ].join(" ")}
                        color={Theme.secondary}
                        weight='bold'
                        fontStyle="italic"
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
                        text="Leave or stay on the trip"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Once the trip is successfully shared, you can leave the trip or even decide to stay till the end.",
                            "At the moment the trip is shared, you can decide at any moment to leave the trip once the shared",
                            "provider arrives and is verified by the user."
                        ].join(" ")}
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },
    ]

    return (
        <Container backgroundColor={Theme.primary} padding={isMobile ? "24px" : "36px"} width="100%">
            <Column>
                <Text
                    text="How to use RequestSharing"
                    color={Theme.secondary}
                    size={isMobile ? 22 : isDesktop ? 48 : 32}
                    weight='bold'
                />
                <SizedBox height={70} />
                {steps.map((step, index) => {
                    return (
                        <Step
                            key={index}
                            content={step.content}
                            color={Theme.secondary}
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