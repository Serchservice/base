import {
    useWidth, useDesign, Theme, Container, Responsive, Row, SizedBox,
    Column, Center, Wrap, Expanded, CarouselView, LeftProps, Padding,
    UnderlinedButton, Image, Text
} from "@serchservice/web-ui-kit";
import { ICarousel } from "@serchservice/web-ui-kit/build/src/base/CarouselView";
import { observer } from "mobx-react-lite";
import React from "react";
import Asset from "../../assets/Asset";
import { LinkConfig } from "../../configuration/ButtonView";
import Constant from "../../configuration/Constant";
import { RouteInterface } from "../../configuration/Route";
import Routing from "../../configuration/Routing";
import Layout from "../../layout/Layout";
import CountriesInSerch from "../widgets/CountriesInSerch";
import Title from "../widgets/Title";

export const MarketplaceRoute: RouteInterface = {
    path: "/marketplace",
    page: <MarketplacePage />
}

export default function MarketplacePage() {
    const width = useWidth();
    const { generalPadding, imageRadius, isDesktop, isMobile } = useDesign()

    const accounts: IAccount[] = [
        {
            account: "Serch User",
            description: [
                "You have no reason to stress when you are in need of a service provider.",
                "Looking for a mechanic, electrician, plumber, carpenter? All you need is the Serch User platform."
            ],
            color: Theme.primaryDark,
            backgroundColor: Theme.secondary,
            links: [
                {link: Routing.instance.user.path, text: "Start requesting"},
                {link: Routing.instance.howItWorksWithRequesting.path, text: "See how requesting works"}
            ],
            info: "Request, Relax, Fix"
        },
        {
            account: "Serch Provider",
            description: [
                "Looking for a place to flex and earn with your carpentry, mechanic,",
                "electrical or plumbing skill? We offer you the platform to do all these,",
                "while you grow and even more, get certified! You do your thing, set the",
                "schedule, set your rates, earn what you need, while we give you the visibility."
            ],
            color: Theme.primaryDark,
            backgroundColor: Theme.secondary,
            links: [
                {link: Routing.instance.provider.path, text: "Start flexing your skills"},
                {link: Routing.instance.howItWorksWithProviding.path, text: "See how providing works"}
            ],
            info: "Provide, Earn, Grow"
        },
        {
            account: "Serch Associate",
            description: [
                "Working for an organization or a company as a service provider?",
                "Enjoy all the benefits that comes with service providing with Serch without",
                "handling the cost of service connection. Everything you need without the expenses involved.",
            ],
            color: Theme.primaryDark,
            backgroundColor: Theme.secondary,
            links: [
                {link: Routing.instance.associateProvider.path, text: "Learn more"},
            ],
            info: "Provide, Learn, Grow"
        },
        {
            account: "Serch Business",
            description: [
                "As a business, you shouldn't need to worry about how to get more",
                "visibility, go global or make more money. We offer you a platform where",
                "you can focus more on what's important to you, while we give your service",
                "providers the visibility they need. While they grow, your business grows.",
            ],
            color: Theme.primaryDark,
            backgroundColor: Theme.secondary,
            links: [
                {link: Routing.instance.business.path, text: "Start onboarding"},
            ],
            info: "Manage, Earn, Grow"
        },
        {
            account: "Serch Guest",
            description: [
                "Not interested in becoming a user, but still want to access a service",
                "provider? We totally understand. Ask any user you know to share that",
                "provider with the fix you love. You get access without even creating an",
                "account. Best, you don't need to even look for a provider, you already have the one you want!",
            ],
            color: Theme.primaryDark,
            backgroundColor: Theme.secondary,
            links: [
                {link: Routing.instance.guest.path, text: "Connect the dot"},
                {link: LinkConfig.instance.soc, text: "Understand the concept of SOC"},
            ],
            info: "Connect, Request, Fix"
        }
    ]

    const categories: ICarousel[] = [
        {text: "Mechanic", image: Constant.instance.mechanicImage},
        {text: "Plumber", image: Constant.instance.plumberImage},
        {text: "HouseKeeper", image: Constant.instance.houseKeepingImage},
        {text: "Electrician", image: Constant.instance.electricianImage},
    ]

    return (
        <Layout>
            <Title title="Marketplace" description="Learn about our products, services and offerings" />
            {/** FIRST SECTION - HEADER */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <LeftHeading isMobile={false} isDesktop />
                        <SizedBox width={80} />
                        <Image image={Asset.marketplace.background} width={600} style={imageRadius} />
                    </Row>
                }>
                    <Column crossAxis="center">
                        <Image image={Asset.marketplace.background} width="100%" style={imageRadius} />
                        <SizedBox height={80} />
                        <LeftHeading isMobile={isMobile} isDesktop={false} />
                    </Column>
                </Responsive>
            </Container>
            {/** SECOND SECTION - ACCOUNTS */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Center>
                    <Column>
                        <Text
                            color={Theme.secondary}
                            size={isMobile ? 22 : isDesktop ? 32 : 28}
                            weight='bold'
                            align="center"
                            text="Explore the marketplace"
                        />
                        <SizedBox height={10} />
                        <Text
                            color={Theme.primaryLight}
                            size={isMobile ? 14 : 16}
                            align="center"
                            opacity={0.6}
                            text="Understand the different accounts you can explore in Serch"
                        />
                    </Column>
                </Center>
                <SizedBox height={60} />
                <Responsive tablet={
                    <Wrap runSpacing={30}>
                        {accounts.map((account, index) => {
                            return (
                                <Container elevation={2} backgroundColor={account.backgroundColor} key={index} width="100%">
                                    <Row crossAxis="center">
                                        <Expanded>
                                            <LeftAccount isMobile={false} isDesktop={false} account={account} />
                                        </Expanded>
                                        <SizedBox width={50} />
                                        <Expanded>
                                            <RightAccount
                                                text={account.info}
                                                height={400}
                                                width={400}
                                                color={account.backgroundColor}
                                                backgroundColor={account.color}
                                            />
                                        </Expanded>
                                    </Row>
                                </Container>
                            )
                        })}
                    </Wrap>
                } phone={
                    <Wrap runSpacing={30}>
                        {accounts.map((account, index) => {
                            return (
                                <Container elevation={2} backgroundColor={account.backgroundColor} key={index} width="100%">
                                    <Column crossAxis="flex-start" mainAxisSize="max">
                                        <LeftAccount isMobile isDesktop={false} account={account} />
                                        <SizedBox height={50} />
                                        <RightAccount
                                            text={account.info}
                                            width="100%"
                                            height={280}
                                            color={account.backgroundColor}
                                            backgroundColor={account.color}
                                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                                        />
                                    </Column>
                                </Container>
                            )
                        })}
                    </Wrap>
                }>
                    <Wrap runSpacing={30}>
                        {accounts.map((account, index) => {
                            return (
                                <Container elevation={2} backgroundColor={account.backgroundColor} key={index} width="100%">
                                    <Row crossAxis="center">
                                        <Expanded>
                                            <LeftAccount isMobile={false} isDesktop account={account} />
                                        </Expanded>
                                        <SizedBox width={50} />
                                        <Expanded>
                                            <RightAccount
                                                text={account.info}
                                                height={400}
                                                width={width <= 1200 ? 450 : 600}
                                                color={account.backgroundColor}
                                                backgroundColor={account.color}
                                            />
                                        </Expanded>
                                    </Row>
                                </Container>
                            )
                        })}
                    </Wrap>
                </Responsive>
            </Container>
            {/* THIRD SECTION - CATEGORIES */}
            <Container width='100%' padding={generalPadding} backgroundColor={Theme.primary}>
                <Column>
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 22 : 32}
                        text="Services we provide"
                    />
                    <SizedBox height={80} />
                    <Container height={200}>
                        <CarouselView
                            autoplay
                            initialHeight={200}
                            initialWidth={200}
                            fallbackHeight={150}
                            fallbackWidth={150}
                            borderRadius="16px"
                            duration={5000}
                            backgroundColor={Theme.primaryLight}
                            padding="5px"
                            position="top"
                            items={categories}
                        />
                    </Container>
                </Column>
            </Container>
            {/* SEVENTH SECTION - COUNTRIES IN SERCH SHORTCUT */}
            <CountriesInSerch />
        </Layout>
    )
}

const LeftHeading: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    const information = [
        "At Serch, we call the hub where you can find our offerings - The MarketPlace.",
        "This is not different from the traditional marketplace you know. However, here we don't sell things,",
        "we show you people who can make your servicing, repairs, fixing, and any other thing, service related,",
        "easy and life-saving."
    ]

    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={Theme.secondary}
                size={isMobile ? 22 : isDesktop ? 48 : 32}
                text="The marketplace"
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

interface IAccountLink {
    link: string;
    text: string;
}

interface IAccount {
    account: string;
    description: string[];
    links: IAccountLink[];
    color: string;
    backgroundColor: string;
    info: string;
}

interface LeftAccountProps extends LeftProps {
    account: IAccount;
}

const LeftAccount: React.FC<LeftAccountProps> = observer(({ isMobile, account }) => {
    return (
        <Padding all={20}>
            <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
                <Text
                    color={account.color}
                    size={isMobile ? 22 : 28}
                    weight='bold'
                    text={account.account}
                />
                <SizedBox height={30} />
                <Text
                    color={account.color}
                    size={14}
                    text={account.description.join(" ")}
                />
                <SizedBox height={10} />
                {account.links.map((link, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Container width={250}>
                                <UnderlinedButton
                                    text={link.text}
                                    textColor={account.color}
                                    textSize={13}
                                    link={link.link}
                                    withArrow
                                    showLine
                                    iconSize={1}
                                    isBlank
                                />
                            </Container>
                            {account.links.length - 1 !== index && <SizedBox height={10} />}
                        </React.Fragment>
                    )
                })}
            </Column>
        </Padding>
    )
})

interface RightAccountProps {
    text: string;
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
    padding?: string;
    color?: string;
    fontSize?: number;
}

const RightAccount: React.FC<RightAccountProps> = observer(({
    text,
    width,
    backgroundColor,
    height,
    padding = '32px',
    color,
    fontSize = 24
}) => {
    return (
        <Container backgroundColor={backgroundColor ?? Theme.primary} width={width ?? 300} height={height ?? 300} padding={padding}>
            <Column crossAxis="center" mainAxis="center" mainAxisSize="max">
                <Center>
                    <Text text={text} color={color ?? Theme.secondary} size={fontSize} align="center" />
                </Center>
            </Column>
        </Container>
    )
})