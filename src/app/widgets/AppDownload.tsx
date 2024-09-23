import React from "react";
import { observer } from "mobx-react-lite";
import {
    Center, Column, Container, HoveredButton, HoverLinkButton,
    Image, Navigate, SizedBox, Text, Theme, useDesign, Wrap
} from "@serchservice/web-ui-kit";
import Asset from "../../assets/Asset";
import Routing from "../../configuration/Routing";

interface AppDownloadProps {
    type?: "provider" | "user" | "default" | "guest" | "associate" | "business" | "platform";
    showButton?: boolean;
}

const AppDownload: React.FC<AppDownloadProps> = observer(({ type = "default", showButton = true }) => {
    const { isMobile, isDesktop, generalPadding } = useDesign()

    const apps = [
        {
            name: "Serch | User",
            description: [
                "As a user, request for services, drive to any shop location, speak with a service provider,",
                "share the provider you've experienced to your friends, make money with your shares and do more with Serch.",
            ],
            extra: [
                "As a guest, don't fret with finding the best, use the link shared to you, request for the same person",
                "as much as 5 times.",
            ],
            image: Asset.app.userShort,
            links: {
                android: "",
                ios: "",
                others: ""
            }
        },
        {
            name: "Serch | Provider/Associate",
            description: [
                "As an individual service provider, scale while you grow with Serch, earn more, flex more, do more with ease.",
                "Get a certificate that proves your skill expertise (based on what people say about you).",
            ],
            extra: [
                "As an associate provider, grow without the expenses! Do more with ease, even get a certificate and so many",
                "things, without thinking of the service charges.",
            ],
            image: Asset.app.providerShort,
            links: {
                android: "",
                ios: "",
                others: ""
            }
        },
        {
            name: "Serch | Business",
            description: [
                "Go global, expand your reach and increase your revenue. Let us find that customers you need, while you",
                "focus on getting the best service providers for your organization. Get analysis on your service providers,",
                "see their performance, manage their account and get certified based on their performance."
            ],
            image: Asset.app.businessShort,
            links: {
                android: "",
                ios: "",
                others: ""
            }
        }
    ]

    const title = type === 'default'
        ? "Service-Specific, Platform-Specific Experience"
        : type === 'associate'
        ? "Provide, Grow, Flex"
        : type === 'guest'
        ? "Experience the best recommended by friends"
        : type === 'provider'
        ? "Provide, Earn, Grow and Flex"
        : type === 'business'
        ? "Manage, Earn, Grow, Expand"
        : "Powerful Experiences Created by You"

    const description = type === 'default'
        ? "Download the Serch app and enjoy all that it gives"
        : type === 'associate' || type === 'provider'
        ? "Download the Serch Provider app and enjoy all that it gives"
        : type === 'business'
        ? "Download the Serch Business app and enjoy all that it gives"
        : "Download the Serch User app and enjoy all that it gives"

    const image = type === 'associate' || type === 'provider'
        ? Asset.app.provider
        : type === 'business'
        ? Asset.app.business
        : Asset.app.user

    if(type !== "platform") {
        return (
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%" style={{ paddingLeft: "0", paddingRight: "0" }}>
                <Column mainAxisSize="max" crossAxisSize="min" crossAxis="center" style={{position: "relative"}}>
                    <Column mainAxisSize="max" crossAxisSize="min" crossAxis="center" style={{ padding: "0 24px"}}>
                        <Text
                            color={Theme.secondary}
                            size={isMobile ? 22 : isDesktop ? 32 : 28}
                            weight='bold'
                            text={title}
                        />
                        <SizedBox height={20} />
                        <Text
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                            opacity={0.6}
                            text={description}
                        />
                    </Column>
                    <SizedBox height={40} />
                    <Image
                        image={image}
                        style={{
                            maxHeight: isMobile ? "600px" : "800px",
                            alignSelf: "center",
                            width: "100%"
                        }}
                    />
                    <SizedBox height={40} />
                    {showButton && (
                        <Container>
                            <Center>
                                <HoverLinkButton
                                    value="Download"
                                    link={Routing.instance.platform.path}
                                    centered
                                    padding="16px 80px"
                                    borderRadius="24px"
                                    backgroundColor={Theme.primaryDark}
                                />
                            </Center>
                        </Container>
                    )}
                </Column>
            </Container>
        )
    } else {
        return (
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Wrap runSpacing={40} spacing={20}>
                    {apps.map((app, index) => {
                        return (
                            <Container
                                key={index}
                                elevation={3}
                                borderRadius="16px"
                                backgroundColor={Theme.primaryDark}
                                width={isMobile ? "100%" : isDesktop ? 400 : 300}
                                padding="12px"
                            >
                                <Image image={app.image} width="100%" height={300} objectFit="scale-down" />
                                <SizedBox height={20} />
                                <Text
                                    color={Theme.secondary}
                                    size={isMobile ? 16 : 18}
                                    text={app.name}
                                    opacity={8}
                                />
                                <SizedBox height={10} />
                                <Text
                                    color={Theme.hint}
                                    size={isMobile ? 14 : 16}
                                    text={app.description.join(" ")}
                                />
                                {app.extra && (
                                    <React.Fragment>
                                        <SizedBox height={10} />
                                        <Text
                                            color={Theme.hint}
                                            size={isMobile ? 14 : 16}
                                            text={app.extra.join(" ")}
                                        />
                                    </React.Fragment>
                                )}
                                {app.links && (
                                    <React.Fragment>
                                        <SizedBox height={20} />
                                        <Wrap runSpacing={10} spacing={10} crossAxisAlignment="center">
                                            {app.links.android && (
                                                <AppLink link={app.links.android} text="Download from play store (Android)" />
                                            )}
                                            {app.links.ios && (
                                                <AppLink link={app.links.ios} text="Download from apple store (iOS)" />
                                            )}
                                            {app.links.others && (
                                                <AppLink link={app.links.others} text="Download" />
                                            )}
                                        </Wrap>
                                    </React.Fragment>
                                )}
                            </Container>
                        )
                    })}
                </Wrap>
            </Container>
        )
    }
})

interface AppLinkProps {
    link: string;
    text: string;
}

const AppLink: React.FC<AppLinkProps> = observer(({ link, text }) => {
    return (
        <HoveredButton
            text={text}
            onTap={() => Navigate.openInNewTab(link)}
            padding={12}
            radius={18}
            textColor={Theme.secondary}
            backgroundColor={Theme.primary}
        />
    )
})

export default AppDownload;