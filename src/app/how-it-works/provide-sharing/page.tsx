import {
    useWidth, useDesign, Container, Theme, Responsive, Row, SizedBox, Column,
    Expanded, IconBlock, TextBlock, LeftProps, Wrap, UnderlinedButton, Step,
    Image, Text
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

export const HowItWorksWithProvideSharingRoute: RouteInterface = {
    path: "/how-it-works/provide-sharing",
    page: <HowItWorksWithProvideSharingPage />
}

export default function HowItWorksWithProvideSharingPage() {
    const width = useWidth();
    const { generalPadding, imageRadius, isMobile, isDesktop } = useDesign()

    const techTitle = "ProvideSharing as a technology"
    const techDescription = [
        "As it is our mission to make service providing easy, we put in a lot of effort",
        "and passion into achieving that. This is why, it is not just a name, nor is it a",
        "normal thing, rather, it is a technology that helps us make sure that you can",
        "get the service you want, the way you want it."
    ]
    const techIcon = "grommet-icons:technology"

    const aisiTitle = "Just like you saw it"
    const aisiDescription = [
        "We drive the provideSharing technology to the point of 'As-I-Saw-It'",
        "execution. You don't even need to be a user to access this sharing",
        "technology. All you need is to see it, ask for it, and it shall be given.",
        `\n\n`,
        "We operate the provideSharing technology on AISI (As-I-Saw-It). This",
        "simply means that you get what you saw. Just the same provider at the",
        "other end of the line, nothing else you don't need to see. It's just you and the person you want."
    ]
    const aisiIcon = "icon-park-twotone:hold-seeds"
    const aisiLinkText = "Learn more about aisi"
    const aisiLink = LinkConfig.instance.aisi

    const socTitle = "Separation of Concern"
    const socDescription = [
        "The concept of SOC (Separation of Concern) is not just applied to programming",
        "technology. We've applied it in the provideSharing technology, which is the",
        "core of this technology. This simply means that, you don't have to be",
        "bothered about so many things when requesting for a provider or for a",
        "service. All you need is a user who can share that provider you want."
    ]
    const socIcon = "fluent:panel-separate-window-20-filled"
    const socLinkText = "Learn more about soc"
    const socLink = LinkConfig.instance.soc

    return (
        <Layout>
            <Title title="ProvideSharing" description='Share that provider you find to be the best, earn more' />
            {/** FIRST SECTION - HEADER */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <LeftHeading isMobile={false} isDesktop />
                        <SizedBox width={80} />
                        <Image image={Asset.common.users} width={600} style={imageRadius} />
                    </Row>
                }>
                    <Column crossAxis="center">
                        <Image image={Asset.common.users} width="100%" style={imageRadius} />
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
            {/* AISI */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={aisiIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={aisiTitle}
                            color={Theme.primary}
                            description={aisiDescription}
                            isMobile={false}
                            links={[
                                {link: aisiLink, text: aisiLinkText, withArrow: true}
                            ]}
                            isDesktop={isDesktop}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={aisiIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={aisiTitle}
                            color={Theme.primary}
                            description={aisiDescription}
                            links={[
                                {link: aisiLink, text: aisiLinkText, withArrow: true}
                            ]}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* HOW IT WORKS */}
            <StepView isMobile={isMobile} isDesktop={isDesktop} />
            {/* SOC */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={socIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={socTitle}
                            color={Theme.primary}
                            description={socDescription}
                            isMobile={false}
                            links={[
                                {link: socLink, text: socLinkText, withArrow: true}
                            ]}
                            isDesktop={isDesktop}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={socIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={socTitle}
                            color={Theme.primary}
                            description={socDescription}
                            links={[
                                {link: socLink, text: socLinkText, withArrow: true}
                            ]}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* APP DOWNLOAD SHORTCUT */}
            <AppDownload type="user" />
            {/* COUNTRIES IN SERCH SHORTCUT */}
            <CountriesInSerch />
        </Layout>
    )
}

const LeftHeading: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    const information = [
        "Share the providers you love and recommend, to those who want to",
        "request such kind of service. It's not just sharing, but goes deep into earning!"
    ]

    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={Theme.secondary}
                size={isMobile ? 22 : isDesktop ? 48 : 32}
                text="Service requesting, extended beyond"
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
            image: isDesktop && Asset.steps.sharedLink,
            content: (
                <Column>
                    <Text
                        text="Get a shared link"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} spacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "See a wonderful service done by a Serch service provider? Tell the user to go 'Activity'",
                                "and get the trip history which involves the service provider. Click on the trip details",
                                "to see a popup, then click on 'Create provideSharing link' Once the link is generated,",
                                "let the user share that link to you and you're ready to start"
                            ].join(" ")}
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                    </Wrap>
                </Column>
            )
        },
        {
            image: isDesktop && Asset.steps.createAccount,
            content: (
                <Column>
                    <Text
                        text="Create a guest account"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} spacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "Click on the shared link to create your guest account. If you're already a user, we advice",
                                "that you create your guest account with your user email address. This will link your guest",
                                "accounts to your user account, making it easier for you to switch between any of these accounts",
                                "at anytime."
                            ].join(" ")}
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <Text
                            text="You can learn more about the guest account"
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <UnderlinedButton
                            text="here."
                            textColor={Theme.secondary}
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
            image: isDesktop && Asset.steps.upload,
            content: (
                <Column>
                    <Text
                        text="Invite the provider"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "Describe your problem with audio or text, send your problem to the provider and wait for response.",
                            "Once the provider sends in the quotation for the problem, you can respond with your own budget",
                            "or just agree. If the quotation is agreed to, the trip becomes active!"
                        ].join(" ")}
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                    />
                    <SizedBox height={30} />
                    <Text
                        text={[
                            "NOTE: Users cannot use the provideSharing link they generated to request or create a guest account.",
                            "As of now, we do not support this, so, you cannot generate a link and still use it as a guest.",
                            "Want to rebook a particular provider? You can do so from your trip history by clicking on 'Rebook'"
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
            image: isDesktop && Asset.steps.safety,
            content: (
                <Column>
                    <Text
                        text="Use our safety features"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "Always verify the provider upon arrival with our different safety nets when requesting.",
                                "This is important security is vital and core to what we do.",
                            ].join(" ")}
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <SizedBox height={30} />
                        <UnderlinedButton
                            text="Read our safety features when requesting."
                            textColor={Theme.secondary}
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
            image: isDesktop && Asset.steps.rating,
            content: (
                <Column>
                    <Text
                        text="Rate the provider"
                        color={Theme.secondary}
                        size={isMobile ? 20 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Wrap runSpacing={5} crossAxisAlignment="center">
                        <Text
                            text={[
                                "Always act within our community guidelines, be responsible and treat the service provider",
                                "with respect. At the end of the trip, rating the provider helps us in tracking the provider's",
                                "servicing character and expertise. We suspend and might remove service providers",
                                "with consistent low ratings.",
                            ].join(" ")}
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                        />
                        <SizedBox height={30} />
                        <UnderlinedButton
                            text="Read our community guidelines here."
                            textColor={Theme.secondary}
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
        <Container backgroundColor={Theme.primary} padding={isMobile ? "24px" : "36px"} width="100%">
            <Column>
                <Text
                    text="How to use ProvideSharing"
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