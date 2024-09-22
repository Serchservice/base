import {
    CarouselView, Column, Container, HoverLinkButton, Image, LeftProps, Padding,
    Responsive, Row, SizedBox, Spacer, Step, Text, Theme, UnderlinedButton,
    useDesign, useWidth, Wrap
} from "@serchservice/web-ui-kit";
import { ICarousel } from "@serchservice/web-ui-kit/build/src/base/CarouselView";
import { observer } from "mobx-react-lite";
import React from "react";
import Asset from "../assets/Asset";
import Constant from "../configuration/Constant";
import { RouteInterface } from "../configuration/Route";
import Routing from "../configuration/Routing";
import Layout from "../layout/Layout";
import AppDownload from "./widgets/AppDownload";
import Title from "./widgets/Title";

export const HomeRoute: RouteInterface = {
    path: "/",
    page: <HomePage />,
}

export default function HomePage() {
    const width = useWidth();
    const { imageRadius } = useDesign()

    return (
        <Layout>
            <Title title="Home" description="Support when you need it" />
            {/** FIRST SECTION - HEADER */}
            <Responsive tablet={
                <Container backgroundColor={Theme.primary} padding="56px 86px" width="100%">
                    <Row crossAxis="center">
                        <LeftHeading isMobile={false} isDesktop={false} />
                        <SizedBox width={30} />
                        <Image image={Asset.home.repair} style={imageRadius} height={515} />
                    </Row>
                </Container>
            } phone={
                <Container backgroundColor={Theme.primary} width="100%">
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <Padding all={28}>
                            <LeftHeading isMobile isDesktop={false} />
                        </Padding>
                        <Image image={Asset.home.repair} width="100%" height={400} />
                    </Column>
                </Container>
            }>
                <Container backgroundColor={Theme.primary} padding={`56px ${width <= 1110 ? '100px' : '140px'}`} width="100%">
                    <Row crossAxis="center">
                        <LeftHeading isMobile={false} isDesktop />
                        <SizedBox width={30} />
                        <Image image={Asset.home.repair} style={imageRadius} height={713} />
                    </Row>
                </Container>
            </Responsive>
            {/** SECOND SECTION - FLEX AND GROW */}
            <Responsive tablet={
                <Container backgroundColor={Theme.secondary} padding="120px 56px" width="100%">
                    <Row crossAxis="center">
                        <LeftFlexAndGrow isMobile={false} isDesktop={false} />
                        <SizedBox width={30} />
                        <Image image={Asset.home.grow} style={imageRadius} height={400} width={400} />
                    </Row>
                </Container>
            } phone={
                <Container backgroundColor={Theme.secondary} width="100%" padding="120px 28px">
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <LeftFlexAndGrow isMobile isDesktop={false} />
                        <SizedBox height={20} />
                        <Image image={Asset.home.grow} width="100%" height={400} style={imageRadius} />
                    </Column>
                </Container>
            }>
                <Container backgroundColor={Theme.secondary} padding={`120px ${width <= 1110 ? '100px' : '140px'}`} width="100%">
                    <Row crossAxis="center">
                        <LeftFlexAndGrow isMobile={false} isDesktop />
                        <SizedBox width={30} />
                        <Image image={Asset.home.grow} style={imageRadius} height={400} width={width <= 1200 ? 450 : "auto"} />
                    </Row>
                </Container>
            </Responsive>
            {/** THIRD SECTION - BUSINESS */}
            <Responsive tablet={
                <Container backgroundColor={Theme.secondary} padding="120px 40px" width="100%">
                    <Row crossAxis="center">
                        <LeftBusiness isMobile={false} isDesktop={false} />
                        <SizedBox width={30} />
                        <Image image={Asset.home.business} style={imageRadius} height={400} width={400} />
                    </Row>
                </Container>
            } phone={
                <Container backgroundColor={Theme.secondary} width="100%" padding="120px 28px">
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <LeftBusiness isMobile isDesktop={false} />
                        <SizedBox height={20} />
                        <Image image={Asset.home.business} width="100%" height={400} style={imageRadius} />
                    </Column>
                </Container>
            }>
                <Container backgroundColor={Theme.secondary} padding={`120px ${width <= 1110 ? '90px' : '140px'}`} width="100%">
                    <Row crossAxis="center">
                        <LeftBusiness isMobile={false} isDesktop />
                        <SizedBox width={30} />
                        <Image image={Asset.home.business} style={imageRadius} height={400} width={width <= 1200 ? 450 : "auto"} />
                    </Row>
                </Container>
            </Responsive>
            {/** FOURTH SECTION - APP SHOWCASE */}
            <AppDownload />
        </Layout>
    )
}

interface IRequestMode {
    mode: string;
    image: string;
    link: string;
}

const LeftHeading: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    const requestModes: IRequestMode[] = [
        {mode: "Drive to a shop", image: Asset.home.drive, link: Routing.instance.drive.path},
        {mode: "Speak to a provider", image: Asset.home.speak, link: Routing.instance.platform.path},
        {mode: "Request for a provider", image: Asset.home.request, link: Routing.instance.howItWorksWithRequesting.path}
    ]

    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={Theme.secondary}
                size={isMobile ? 22 : isDesktop ? 48 : 32}
                text="Repair anything and do more with Serch"
            />
            <SizedBox height={8} />
            <Text
                color={Theme.secondary}
                size={isMobile ? 14 : 18}
                text="Pick or search for a provider, invite, and relax."
            />
            <SizedBox height={30} />
            <Container margin={`0 ${isDesktop ? '60px' : isMobile ? '36px' : '36px'} 0 0`}>
                {requestModes.map((mode, index) => {
                    return (
                        <Step
                            key={index}
                            content={<HoverLinkButton
                                value={mode.mode}
                                fontSize={isMobile ? "13px" : "18px"}
                                link={mode.link}
                                image={mode.image}
                                padding={isMobile ? "8px" : "16px"}
                            />}
                            color={Theme.secondary}
                            width='100%'
                            showBottom={requestModes[requestModes.length -1] !== mode}
                        />
                    )
                })}
            </Container>
        </Column>
    )
})

const LeftFlexAndGrow: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    const information = [
        "Use your skill and make the money that you want. You set the price, while users enjoy your amazing skillset.",
        "Get certified based on what people say about you, update your resume with your account information.",
        "See what people say about your skillset. Remember that it goes beyond what you can do, but also how you do it."
    ];

    const images: ICarousel[] = [
        {image: Constant.instance.plumberImage},
        {image: Constant.instance.mechanicImage},
        {image: Constant.instance.houseKeepingImage},
        {image: Constant.instance.electricianImage}
    ]

    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={Theme.primary}
                opacity={0.7}
                size={isMobile ? 22 : isDesktop ? 32 : 26}
                text="Earn, flex and grow while you set the pace."
            />
            <SizedBox height={50} />
            <Text color={Theme.primary} size={isMobile ? 14 : 16} text={information.join(" ")} />
            <SizedBox height={20} />
            <Wrap crossAxisAlignment="flex-end" runSpacing={20}>
                <Container width={180}>
                    <UnderlinedButton
                        text="Start providing"
                        textColor={Theme.primary}
                        textSize={15}
                        link={Routing.instance.howItWorksWithProviding.path}
                        withArrow
                        showLine
                        iconSize={1.2}
                        isBlank
                    />
                </Container>
                <SizedBox width={40} />
                <Spacer />
                <Container height={80}>
                    <CarouselView
                        autoplay
                        initialHeight={80}
                        initialWidth={80}
                        fallbackHeight={30}
                        fallbackWidth={30}
                        borderRadius="16px"
                        duration={5000}
                        backgroundColor={Theme.primaryLight}
                        padding="5px"
                        items={images}
                    />
                </Container>
            </Wrap>
        </Column>
    )
})

const LeftBusiness: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={Theme.primary}
                weight='bold'
                size={isMobile ? 22 : isDesktop ? 48 : 32}
                text="Serch, modified for business"
            />
            <SizedBox height={50} />
            <Text
                color={Theme.primary}
                opacity={0.6}
                size={isMobile ? 14 : 16}
                text={"Serch is not just a platform connecting users to providers, but also modified for companies of any size."}
            />
            <SizedBox height={20} />
            <Wrap crossAxisAlignment="center" runSpacing={20} spacing={20}>
                <HoverLinkButton
                    value="Get started"
                    link={""}
                    centered
                    backgroundColor={Theme.primaryLight}
                    color={Theme.appbarDark}
                />
                <Container width={180}>
                    <UnderlinedButton
                        text="See our solutions"
                        textColor={Theme.primary}
                        textSize={15}
                        link={Routing.instance.business.path}
                        withArrow
                        showLine
                        iconSize={1.2}
                        isBlank
                    />
                </Container>
            </Wrap>
        </Column>
    )
})