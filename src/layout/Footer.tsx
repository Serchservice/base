import {
    ActionButton, ButtonView, Column, Container, Expanded, Field, HoveredButton,
    Image, Notify, Padding, ParentButtonView, Row, SizedBox, Spacer, Text, Theme,
    UnderlinedButton, useDesign, useWidth, Utility, Wrap
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import Asset from "../assets/Asset";
import Connect from "../backend/Connect";
import { LinkConfig } from "../configuration/ButtonView";
import Routing from "../configuration/Routing";
import { CURRENT_VERSION } from "../version";
import { ConnectWithUs, JoinTheConversation } from "./Commons";

interface FooterProps {
    isShort?: boolean;
}

const Footer: React.FC<FooterProps> = observer(({ isShort = false }) => {
    const { isMobile } = useDesign()

    const buildVersion = (): JSX.Element => {
        if (isShort) {
            return <ShortVersion />;
        } else {
            return <DetailedVersion />;
        }
    }

    return (
        <Container backgroundColor={Theme.primary} padding={isMobile ? "48px 24px" : "64px 48px"} width="100%">
            {buildVersion()}
        </Container>
    )
});

// ShortVersion component of the Footer Component
const ShortVersion: React.FC = observer(() => {
    return (
        <Column crossAxis="flex-start">
            <Head />
            <SizedBox height={120} />
            <JoinTheConversation />
            <SizedBox height={20} />
            <ConnectWithUs />
            <SizedBox height={40} />
            <Bottom />
        </Column>
    );
});

// DetailedVersion of the Footer Component
const DetailedVersion: React.FC = observer(() => {
    const { isMobile } = useDesign()

    // FOOTER QUICK LINKS
    const footerLinks: ParentButtonView[] = [
        {
            section: "Company",
            views: [
                { path: Routing.instance.aboutUs.path, header: "About Us" },
                { path: Routing.instance.blogs.path, header: "Blog" },
                { path: Routing.instance.newsroom.path, header: "Newsroom" },
                { path: Routing.instance.marketplace.path, header: "Marketplace" },
                { path: Routing.instance.career.path, header: "Career" },
            ],
        },
        {
            section: "Product",
            views: [
                { path: Routing.instance.user.path, header: "For Users" },
                { path: Routing.instance.provider.path, header: "For Providers" },
                { path: Routing.instance.business.path, header: "For Businesses" },
                { path: Routing.instance.guest.path, header: "For Guests" },
                { path: Routing.instance.platform.path, header: "Download" },
            ],
        },
        {
            section: "Explore",
            views: [
                { path: Routing.instance.reserve.path, header: "Reserve" },
                { path: Routing.instance.sharing.path, header: "Sharing" },
                { path: Routing.instance.tip2fix.path, header: "Tip2Fix" },
                { path: Routing.instance.drive.path, header: "Drive" },
            ],
        },
        {
            section: "Information",
            views: [
                { path: Routing.instance.safetyGuideline.path, header: "Safety Guidelines" },
                { path: Routing.instance.countriesInSerch.path, header: "Countries In Serch" },
            ],
        },
        {
            section: "Support",
            views: [
                { path: Routing.instance.speakWithSerch.path, header: "Speak With Serch" },
                { path: Routing.instance.legalHub.path, header: "Legal Hub" },
                { path: Routing.instance.support.path, header: "Support Hub" },
            ],
        },
    ];

    return (
        <Column crossAxis="flex-start">
            <Head />
            <SizedBox height={80} />
            <Container width={180}>
                <UnderlinedButton
                    text="Visit Help Center"
                    textColor={Theme.secondary}
                    textSize={isMobile ? 18 : 20}
                    link={LinkConfig.instance.help}
                    isBlank
                />
            </Container>
            <SizedBox height={50} />
            <Wrap
                spacing={15}
                runSpacing={15}
                children={footerLinks.map((footer, index) => {
                    return <FooterLink parent={footer} key={index} />
                })}
            />
            <SizedBox height={80} />
            <JoinTheConversation />
            <SizedBox height={20} />
            <ConnectWithUs />
            <SizedBox height={40} />
            <Bottom />
        </Column>
    );
});

const Head: React.FC = observer(() => {
    const [isSubscribing, setIsSubscribing] = React.useState(false)
    const [emailAddress, setEmailAddress] = React.useState("")
    const width = useWidth();
    const { isMobile } = useDesign()

    const subscribe = async () => {
        if(isSubscribing) {
            return
        } else {
            setIsSubscribing(true)
            const response = await Connect.get(`/company/newsletter/subscribe?email_address=${emailAddress}`);
            setIsSubscribing(false)
            if(response) {
                if(response.isSuccess) {
                    setEmailAddress("")
                    Notify.success(response.message)
                }
            }
        }
    }

    return (
        <Container width="100%">
            <Wrap runSpacing={50} spacing={20}>
                <Column crossAxis="flex-start" crossAxisSize="min">
                    <Link to={Routing.instance.home.path}>
                        <Image image={Asset.logo.white} width={120} objectFit="contain" />
                    </Link>
                    <SizedBox height={10} />
                    <Image image={Asset.logo.tagWhite} width={180} objectFit="contain" />
                </Column>
                <Spacer />
                <Container maxWidth={isMobile ? width : 350}>
                    <Column crossAxis="flex-start" crossAxisSize="min">
                        <Text text="Subscribe to our newsletter" weight='bold' size={18} color={Theme.secondary} />
                        <SizedBox height={20} />
                        <Container backgroundColor="#292929" padding="12px" borderRadius="50px" width="100%">
                            <Row crossAxis="center">
                                <Expanded>
                                    <Field
                                        value={emailAddress}
                                        onChange={e => setEmailAddress(e)}
                                        padding="0"
                                        needSpacer={false}
                                        color={Theme.secondary}
                                        showBorder={false}
                                        placeHolder="Enter your email"
                                    />
                                </Expanded>
                                <SizedBox width={10} />
                                <ActionButton
                                    padding="16px"
                                    borderRadius="50px"
                                    title="Subscribe"
                                    useLoader
                                    state={isSubscribing}
                                    backgroundColor={Theme.primary}
                                    color={Theme.secondary}
                                    onClick={() => subscribe()}
                                />
                            </Row>
                        </Container>
                        <SizedBox height={10} />
                        <Text
                            text="By subscribing to our newsletter you agree with our Terms and Conditions."
                            size={12}
                            color={Theme.hint}
                            opacity={0.6}
                        />
                    </Column>
                </Container>
            </Wrap>
        </Container>
    )
})

interface FooterLinkProps {
    parent: ParentButtonView;
}

const FooterLink: React.FC<FooterLinkProps> = observer(({ parent }) => {
    const width = useWidth();

    return (
        <Container minWidth={200} maxHeight={width}>
            <Expanded>
                <Column crossAxis="stretch">
                    <Padding all={4.0}>
                        <Text text={parent.section} color={Theme.secondary} weight='bold' size={18} />
                    </Padding>
                    <SizedBox height={10} />
                    {parent.views.map((view, index) => {
                        var isLast: boolean = parent.views[parent.views.length - 1] === view

                        return (
                            <Padding key={index} only={{ bottom: isLast ? 0 : 8.0 }}>
                                <HoveredButton
                                    text={view.header!}
                                    textColor={Theme.primaryLight}
                                    textSize={14}
                                    link={view.path}
                                    opacity={0.7}
                                />
                            </Padding>
                        )
                    })}
                </Column>
            </Expanded>
        </Container>
    )
})

const Bottom: React.FC = observer(() => {
    // LEGAL QUICK LINKS
    const quickLegalLinks: ButtonView[] = [
        { path: LinkConfig.instance.termsAndConditions, header: "Terms and conditions" },
        { path: LinkConfig.instance.accessibility, header: "Accessibility" },
        { path: LinkConfig.instance.privacyPolicy, header: "Privacy" },
    ];

    return (
        <Container width="100%">
            <Wrap spacing={20} runSpacing={20}>
                <Column crossAxis="flex-start" crossAxisSize="min">
                    <Text text="© 2023 Serchservice Inc. All Rights Reserved." color={Theme.hint} size={12} />
                    <SizedBox height={4} />
                    <Text text={`v${CURRENT_VERSION}`} color={Theme.hint} size={12} />
                </Column>
                <Spacer />
                <Wrap spacing={5} runSpacing={5}>
                    {quickLegalLinks.map((view, index) => {
                        return (
                            <HoveredButton
                                key={index}
                                text={view.header!}
                                textColor={Theme.primaryLight}
                                backgroundColor={Utility.lightenColor(Theme.primaryDark, -8)}
                                textSize={12}
                                link={view.path}
                                opacity={0.7}
                            />
                        )
                    })}
                </Wrap>
            </Wrap>
        </Container>
    )
})

export default Footer;