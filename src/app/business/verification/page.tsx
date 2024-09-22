import {
    Center, Column, Container, Expanded, IconBlock, Image, Padding, Responsive,
    Row, SizedBox, Step, Text, TextBlock, Theme, UnderlinedButton, useDesign, useWidth, Wrap
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import Asset from "../../../assets/Asset";
import Routing from "../../../configuration/Routing";
import { LeftProps, IStep } from "../../../layout/Interfaces";
import Layout from "../../../layout/Layout";
import Title from "../../widgets/Title";
import { RouteInterface } from "../../../configuration/Route";

export const BusinessVerificationRoute: RouteInterface = {
    path: "/business/verification",
    page: <BusinessVerificationPage />
}

export default function BusinessVerificationPage() {
    const width = useWidth();
    const { imageRadius, generalPadding, noMobilePadding, isMobile, isDesktop } = useDesign()

    /// TAILORED EXPERIENCE DEFINITIONS
    const tailoredTitle = "Tailored experience"
    const tailoredDescription = [
        "Serch verification process is carefully crafted to ensure a good experience",
        "while still providing a robust understanding of who you say you are.",
        "As of now, we create verification experiences after you initiate it. This takes time,",
        "but we are working towards crafting experiences tailored to the business account which will",
        "reduce the time spent in waiting while we craft these experiences for you."
    ]
    const tailoredIcon = "arcticons:how-we-feel"

    return (
        <Layout>
            <Title title="Business Verification" description="Understand what you need to verify your business with Serch" />
            {/** FIRST SECTION - HEADER */}
            <Container backgroundColor={Theme.primary} padding={noMobilePadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <LeftHeading isMobile={false} isDesktop={isDesktop} />
                        <SizedBox width={30} />
                        <Image
                            image={Asset.verified}
                            style={imageRadius}
                            height={isDesktop ? 500 : 400}
                            width={width <= 1200 ? 450 : "auto"}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <Padding all={28}>
                            <LeftHeading isMobile isDesktop={false} />
                        </Padding>
                        <Container width="100%" height={400} padding="24px">
                            <Center><Image image={Asset.verified} width="auto" height={320} /></Center>
                        </Container>
                    </Column>
                </Responsive>
            </Container>
            {/** SECOND SECTION - TAILORED EXPERIENCE */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Responsive tablet={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                backgroundColor={Theme.secondary}
                                color={Theme.primary}
                                icon={tailoredIcon}
                                height={400}
                                width={400}
                            />
                        </Expanded>
                        <SizedBox width={50} />
                        <TextBlock
                            color={Theme.secondary}
                            title={tailoredTitle}
                            description={tailoredDescription}
                            isMobile={false}
                            isDesktop={false}
                        />
                    </Row>
                } phone={
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            backgroundColor={Theme.secondary}
                            color={Theme.primary}
                            icon={tailoredIcon}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            color={Theme.secondary}
                            title={tailoredTitle}
                            description={tailoredDescription}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                }>
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                backgroundColor={Theme.secondary}
                                color={Theme.primary}
                                icon={tailoredIcon}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={50} />
                        <TextBlock
                            color={Theme.secondary}
                            title={tailoredTitle}
                            description={tailoredDescription}
                            isMobile={false}
                            isDesktop
                        />
                    </Row>
                </Responsive>
            </Container>
            {/** THIRD SECTION - VERIFICATION STEPS */}
            <VerificationStep isDesktop={isDesktop} isMobile={isMobile} />
        </Layout>
    )
}

const LeftHeading: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={Theme.secondary}
                size={isMobile ? 22 : isDesktop ? 48 : 32}
                text="Become Serch verified, as a business"
            />
            <SizedBox height={8} />
            <Text
                color={Theme.secondary}
                size={isMobile ? 14 : 18}
                text={[
                    "As a business, your verification provides an added advantage your associate providers.",
                    "While your associate providers do their own basic kyc, your business verification",
                    "complements their verification, giving them more trust and reliability."
                ].join(" ")}
            />
        </Column>
    )
})

const VerificationStep: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    /// VERIFICATION STEPS
    const steps: IStep[] = [
        {
            image: isDesktop && Asset.steps.createAccount,
            content: (
                <Column>
                    <Text
                        text="Create a business account"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} spacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "You need to have a Serch business account which requires an email address for the admin",
                                " with the administrator's profile details (for personalized experience) and your business",
                                "information which will be visible to both associate providers and the users/guests."
                            ].join(" ")}
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <Text
                            text="You can learn more about the business account"
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <UnderlinedButton
                            text="here"
                            textColor={Theme.secondary}
                            textSize={isMobile ? 14 : 16}
                            link={Routing.instance.business.path}
                            withArrow={false}
                            styles={{width: "auto", paddingBottom: "0"}}
                            showLine
                            iconSize={1}
                            isBlank
                        />
                    </Wrap>
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.consent,
            content: (
                <Column>
                    <Text
                        text="Kickstart your verification"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} spacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "Go to the account centre and click on verification. This will open your verification portal",
                                "and show you the consent button you need to first attend to before every other thing happens.",
                                "We require the consents for your data and information processing with our third party",
                                "integrations."
                            ].join(" ")}
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <Text
                            text="You can learn more about how we use your data"
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <UnderlinedButton
                            text="here."
                            textColor={Theme.secondary}
                            textSize={isMobile ? 14 : 16}
                            link={Routing.instance.legalHub.path}
                            withArrow={false}
                            styles={{width: "auto", paddingBottom: "0"}}
                            showLine
                            iconSize={1}
                            isBlank
                        />
                        <Text
                            text={[
                                "Once you've consented, we will prepare your personalized verification link within three days",
                                "and update your verification hub, and also send you a push notification to complete",
                                "your verification, as the link has a defined expiration time."
                            ].join(" ")}
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                    </Wrap>
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.upload,
            content: (
                <Column>
                    <Text
                        text="Update your verification data"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "After the expiration of three days, check your verification hub for the verification link.",
                            "Clicking on the link will take you to our external verification interface which will inform",
                            "you what is required from your business to complete your verification process."
                        ].join(" ")}
                        color={Theme.secondary}
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
                        text="Check verification status"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} spacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "Always check your verification hub to know the current status of your verification.",
                                "This is important as we might not send email or push notifications to your account",
                                "when something goes wrong. If you see 'VERIFIED', you are good to go!"
                            ].join(" ")}
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                    </Wrap>
                </Column>
            )
        }
    ]

    return (
        <Container backgroundColor={Theme.primary} padding={isMobile ? "24px" : "36px"} width="100%">
            <Column>
                <Text
                    text="How to become Serch Verified as a Business"
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