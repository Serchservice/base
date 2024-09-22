import {
    useWidth, useDesign, Column, Theme, SizedBox, Wrap, Container,
    UnderlinedButton, Responsive, Row, TextBlock, Padding, Expanded,
    IconBlock, LeftProps, Step, Text, Image
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import Asset from "../../../assets/Asset";
import { RouteInterface } from "../../../configuration/Route";
import Routing from "../../../configuration/Routing";
import { IStep } from "../../../layout/Interfaces";
import Layout from "../../../layout/Layout";
import Title from "../../widgets/Title";

export const ExploreTip2FixRoute: RouteInterface = {
    path: "/explore/tip2fix",
    page: <ExploreTip2FixPage />
}

export default function ExploreTip2FixPage() {
    const width = useWidth();
    const { imageRadius, noMobilePadding, isMobile, isDesktop } = useDesign()

    /// HEADER DEFINITIONS
    const headerTitle = "Do it yourself, with guidance"
    const headerDescription = ["You can service that problem yourself, if you have the right uidance. Learn and grow personally."]

    /// HOW IT WORKS - USER VERSION STEPS
    const userVersion: IStep[] = [
        {
            image: isDesktop && Asset.steps.createAccount,
            content: (
                <Column>
                    <Text
                        text="Create a user account"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} spacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "You need to have a Serch user account which requires an email address and",
                                "some profile details (for personalized experience)"
                            ].join(" ")}
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <Text
                            text="You can learn more about the user account"
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <Container width={30}>
                            <UnderlinedButton
                                text="here"
                                textColor={Theme.secondary}
                                textSize={isMobile ? 14 : 16}
                                link={Routing.instance.user.path}
                                withArrow={false}
                                showLine
                                iconSize={1}
                                isBlank
                            />
                        </Container>
                    </Wrap>
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.categorySelector,
            content: (
                <Column>
                    <Text
                        text="Pick a service"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Select the service category you are looking for. Since this is tip2fix,",
                            "the 'SPEAK TO' mode of service. You can alternatively start this call with a provider",
                            "you are already chatting with.",
                        ].join(" ")}
                        color={Theme.secondary}
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
                        text="Enter location"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Entering your location helps us tailor your providers to people who",
                            "understands your problem as it pertains to your location.",
                            "It is also recommended to go through the provider's profile to learn more details about",
                            "any provider so as to make an informed decision.",
                        ].join(" ")}
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.tip2fix,
            content: (
                <Column>
                    <Text
                        text="Start the call"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Select the provider of your choice, tap on the tip2fix button to start the call.",
                            "Prices are inclusive per session*.",
                        ].join(" ")}
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.rating,
            content: (
                <Column>
                    <Text
                        text="Rate the provider and the call"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Always try to rate the provider and the call, this helps us improve our services.",
                            "If you couldn't provide your rating, you can always reach out to the Serch Team with the call id",
                            "for such update or issues."
                        ].join(" ")}
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        }
    ]

    /// LEARN WHILE DOING IT DEFINITIONS
    const learnTitle = "You learn while doing it"
    const learnDescription = [
        "You can master that solution for the problem when you have the right guidance",
        "All you need is a good mentoring from the Serch service providers."
    ]
    const learnIcon = "hugeicons:online-learning-03"

    /// HOW IT WORKS - PROVIDER VERSION STEPS
    const providerVersion: IStep[] = [
        {
            image: isDesktop && Asset.steps.createAccount,
            content: (
                <Column>
                    <Text
                        text="Create a provider/associate provider account"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} spacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "You need to have a Serch provider account which requires an email address and",
                                "some profile details (for personalized experience). You also need to provide a character",
                                "attestation voucher in the form of another person's details which will be verified while",
                                "you do your verification."
                            ].join(" ")}
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <Text
                            text="You can learn more about the provider account"
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <Container width={30}>
                            <UnderlinedButton
                                text="here"
                                textColor={Theme.secondary}
                                textSize={isMobile ? 14 : 16}
                                link={Routing.instance.provider.path}
                                withArrow={false}
                                showLine
                                iconSize={1}
                                isBlank
                            />
                        </Container>
                        <Text
                            text={[
                                "If you are an associate provider, you need to inform your business admin",
                                "to create your account from the business dashboard, which will automatically send you",
                                "an invite to the associate provider account type."
                            ].join(" ")}
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <Text
                            text="You can learn more about the associate provider account"
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <Container width={30}>
                            <UnderlinedButton
                                text="here"
                                textColor={Theme.secondary}
                                textSize={isMobile ? 14 : 16}
                                link={Routing.instance.associateProvider.path}
                                withArrow={false}
                                showLine
                                iconSize={1}
                                isBlank
                            />
                        </Container>
                    </Wrap>
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.goActive,
            content: (
                <Column>
                    <Text
                        text="Go online | Be active"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Make sure you are visible anytime you come to the platform.",
                            "This will make sure that users can see you when they search for your service.",
                            "Also, verification provides a certain level of trust which is given to you by users.",
                            "It is recommended as we give priority to verified accounts.",
                        ].join(" ")}
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.tip2fix,
            content: (
                <Column>
                    <Text
                        text="Answer the call"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Always be on standby so as to get call notifications for tip2fix. Receive the call and",
                            "maximize the call session for the user",
                        ].join(" ")}
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },

        {
            image: isDesktop && Asset.steps.mentor,
            content: (
                <Column>
                    <Text
                        text="Be a good guide"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Users tip you for a virtual fix, so you also need to make sure that you render such fix",
                            "with diligence and understanding that some users might be new to what you are showing them.",
                            "Always maximize the amount of sessions a user can spend for tip2fix and provide guidance",
                            "with expertise.",
                        ].join(" ")}
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.rating,
            content: (
                <Column>
                    <Text
                        text="Rate the user and the call"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Always try to rate the user and the call, this helps us improve our services.",
                            "If you couldn't provide your rating, you can always reach out to the Serch Team with the call id",
                            "for such update or issues."
                        ].join(" ")}
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                    />
                </Column>
            )
        }
    ]

    /// EARN WHILE DOING IT DEFINITIONS
    const earnTitle = "You earn while teaching it"
    const earnDescription = [
        "You earn while you guide that user into solving the problem.",
        "We reserve the right to suspend or close your account when we find out that you",
        "delay your guidance so as to earn more money by increasing the sessions the user spends."
    ]
    const earnIcon = "solar:wallet-money-bold-duotone"

    return (
        <Layout>
            <Title title="Tip2Fix" description="How to maximize the power of Tip2Fix" />
            {/** FIRST SECTION - HEADER */}
            <Container backgroundColor={Theme.primary} padding={noMobilePadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <TextBlock
                            title={headerTitle}
                            description={headerDescription}
                            color={Theme.secondary}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                        <SizedBox width={30} />
                        <Image image={Asset.tip2fix.diy} style={imageRadius} height={400} width={width <= 1200 ? 450 : 'auto'} />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <Padding all={28}>
                            <TextBlock
                                title={headerTitle}
                                description={headerDescription}
                                color={Theme.secondary}
                                isMobile
                                isDesktop={false}
                            />
                        </Padding>
                        <Image image={Asset.tip2fix.diy} width="100%" height={400} />
                    </Column>
                </Responsive>
            </Container>
            {/* HOW IT WORKS - USER VERSION */}
            <HowItWorks steps={userVersion} header="How Tip2Fix works for a user" isDesktop={isDesktop} isMobile={isMobile} />
            {/* LEARN WHILE DOING IT */}
            <Responsive tablet={
                <Container backgroundColor={Theme.primary} padding="56px 86px" width="100%">
                    <Row crossAxis="center">
                        <TextBlock
                            title={learnTitle}
                            description={learnDescription}
                            color={Theme.secondary}
                            isMobile={false}
                            isDesktop={false}
                        />
                        <SizedBox width={30} />
                        <Expanded>
                            <IconBlock
                                icon={learnIcon}
                                backgroundColor="transparent"
                                color={Theme.appbarLight}
                                height={400}
                                width={400}
                            />
                        </Expanded>
                    </Row>
                </Container>
            } phone={
                <Container backgroundColor={Theme.primary} width="100%">
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <Padding all={28}>
                            <TextBlock
                                title={learnTitle}
                                description={learnDescription}
                                color={Theme.secondary}
                                isMobile
                                isDesktop={false}
                            />
                        </Padding>
                        <IconBlock
                            icon={learnIcon}
                            backgroundColor="transparent"
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                    </Column>
                </Container>
            }>
                <Container backgroundColor={Theme.primary} padding={`56px ${width <= 1110 ? '100px' : '140px'}`} width="100%">
                    <Row crossAxis="center">
                        <TextBlock
                            title={learnTitle}
                            description={learnDescription}
                            color={Theme.secondary}
                            isMobile={false}
                            isDesktop
                        />
                        <SizedBox width={30} />
                        <Expanded>
                            <IconBlock
                                icon={learnIcon}
                                backgroundColor="transparent"
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                    </Row>
                </Container>
            </Responsive>
            {/* HOW IT WORKS - PROVIDER VERSION */}
            <HowItWorks steps={providerVersion} header="How Tip2Fix works for a provider" isDesktop={isDesktop} isMobile={isMobile} />
            {/* EARN WHILE TEACHING IT */}
            <Responsive tablet={
                <Container backgroundColor={Theme.primary} padding="56px 86px" width="100%">
                    <Row crossAxis="center">
                        <TextBlock
                            title={earnTitle}
                            description={earnDescription}
                            color={Theme.secondary}
                            isMobile={false}
                            isDesktop={false}
                        />
                        <SizedBox width={30} />
                        <Expanded>
                            <IconBlock
                                icon={earnIcon}
                                backgroundColor="transparent"
                                color={Theme.appbarLight}
                                height={400}
                                width={400}
                            />
                        </Expanded>
                    </Row>
                </Container>
            } phone={
                <Container backgroundColor={Theme.primary} width="100%">
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <Padding all={28}>
                            <TextBlock
                                title={earnTitle}
                                description={earnDescription}
                                color={Theme.secondary}
                                isMobile
                                isDesktop={false}
                            />
                        </Padding>
                        <IconBlock
                            icon={earnIcon}
                            backgroundColor="transparent"
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                    </Column>
                </Container>
            }>
                <Container backgroundColor={Theme.primary} padding={`56px ${width <= 1110 ? '100px' : '140px'}`} width="100%">
                    <Row crossAxis="center">
                        <TextBlock
                            title={earnTitle}
                            description={earnDescription}
                            color={Theme.secondary}
                            isMobile={false}
                            isDesktop
                        />
                        <SizedBox width={30} />
                        <Expanded>
                            <IconBlock
                                icon={earnIcon}
                                backgroundColor="transparent"
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                    </Row>
                </Container>
            </Responsive>
        </Layout>
    )
}

interface HowItWorksProps extends LeftProps {
    steps: IStep[];
    header: string;
}

const HowItWorks: React.FC<HowItWorksProps> = observer(({ isMobile, isDesktop, steps, header }) => {
    return (
        <Container backgroundColor={Theme.primary} padding={isMobile ? "24px" : "36px"} width="100%">
            <Column>
                <Text
                    text={header}
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