import {
    useWidth, useDesign, IListView, Theme, Responsive, Row, SizedBox, Column,
    Container, Expanded, SpreadView, Wrap, UnderlinedButton, LeftProps,
    Image, Text
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import React from "react";
import Asset from "../../assets/Asset";
import { LinkConfig } from "../../configuration/ButtonView";
import { RouteInterface } from "../../configuration/Route";
import Layout from "../../layout/Layout";
import Title from "../widgets/Title";

export const CareerRoute: RouteInterface = {
    path: "/career",
    page: <CareerPage />
}

export default function CareerPage() {
    const width = useWidth();
    const { generalPadding, imageRadius, imageBackgroundPadding, imageBackgroundHeight, isMobile, isDesktop } = useDesign()

    const narrative: IListView = {
        header: "Changing the narrative",
        description: [
            "At Serch, we are changing the perspective on which service requesting and",
            "service providing is being viewed from. This means, we become bolder,",
            "challenging and confident in our decisions, in order to build something",
            "bigger and better for the world. And for us, it starts with making service",
            "easy, helping people get repairs, fixes and any other service of their choice."
        ],
        color: Theme.primary
    }

    const team: IListView[] = [
        {
            header: "The team",
            description: [
                "We are daring, bold, challenging and confident in what we do, which is",
                "why we believe in diversity and equity. As a company, we strive for the",
                "best, while as a team, we build the best."
            ],
            color: Theme.secondary,
            image: Asset.career.team,
            position: 'left'
        },
        {
            header: "Your place",
            description: [
                "From development, to marketing, product, finance and legal departments,",
                "your skillset belongs to an important part of our team."
            ],
            color: Theme.secondary,
            image: Asset.career.place,
            position: 'right'
        },
        {
            header: "Life at Serch",
            description: [
                "As a company, we pride in ambitious solutions that tackle real world",
                "problems. As such, we are tasked with the mandate of building",
                'challenging solutions that serve our purpose - "Service made easy".',
            ],
            color: Theme.secondary,
            image: Asset.career.life,
            position: 'left'
        }
    ]

    const withSerch: IListView = {
        header: "With Serch",
        description: [
            "Making a difference matters to us, but what matters most is, making a",
            "difference on what matters to us. With Serch, you can reimagine the way",
            "the world views service requesting and service providing, for the better."
        ],
        color: Theme.primary
    }

    const genesis: IListView[] = [
        {
            header: "RequestSharing",
            description: [
                "Tap a button. Share that request you can't fix. RequestSharing is the original Serch",
                "product that continues to ensure professional fix for any service."
            ],
            color: Theme.primary,
            image: "mingcute:share-3-fill"
        },
        {
            header: "ProvideSharing",
            description: [
                "Tap a button. Share that provider you recommend. ProvideSharing is the original Serch",
                "product that continues to ensure professional fix for any service."
            ],
            color: Theme.primary,
            image: "solar:screen-share-bold-duotone"
        },
        {
            header: "Serch Business",
            description: [
                "We are simplifying the way businesses go global with their service providers. Tell them to",
                "join the business part of Serch and start growing twice than before."
            ],
            color: Theme.primary,
            image: "ic:round-business-center",
        },
        {
            header: "Serch Guest",
            description: [
                "We've built a system where you can focus on what you need, instead of looking for one that is",
                "testified. Tell a user to share that provider, and see what happens."
            ],
            color: Theme.primary,
            image: "fa-solid:user-tag",
        }
    ]

    const renderTeam = (career: IListView): JSX.Element => {
        if(career.position === 'right') {
            return (
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Image image={career.image ?? ""} width={600} style={imageRadius} />
                        <SizedBox width={80} />
                        <LeftInformation data={career} isMobile={false} isDesktop />
                    </Row>
                }>
                    <Column crossAxis="center">
                        <Image image={career.image ?? ""} width="100%" height={300} style={imageRadius} />
                        <SizedBox height={50} />
                        <LeftInformation data={career} isMobile={isMobile} isDesktop={false} />
                    </Column>
                </Responsive>
            )
        } else {
            return (
                <Responsive desktop={
                    <Row crossAxis="center">
                        <LeftInformation data={career} isMobile={false} isDesktop />
                        <SizedBox width={80} />
                        <Image image={career.image ?? ""} width={600} style={imageRadius} />
                    </Row>
                }>
                    <Column crossAxis="center">
                        <Image image={career.image ?? ""} width="100%" style={imageRadius} height={300} />
                        <SizedBox height={50} />
                        <LeftInformation data={career} isMobile={isMobile} isDesktop={false} />
                    </Column>
                </Responsive>
            )
        }
    }

    const connectWithUs = [
        {text: "Connect with us on LinkedIn", link: LinkConfig.instance.social[0].path ?? ""},
        {text: "Connect with us on X", link: LinkConfig.instance.social[2].path ?? ""}
    ]

    return (
        <Layout>
            <Title title="Career" description="The power house behind what we do" />
            {/* FIRST SECTION - HEADER */}
            <Container padding={imageBackgroundPadding} width='100%' height={imageBackgroundHeight} backgroundColor="none" style={{
                backgroundImage: `url(${Asset.career.background})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <Text text="Innovate at Serch" color={Theme.secondary} size={isDesktop ? 54 : 32} weight='bold' />
            </Container>
            {/* SECOND SECTION - NARRATIVE */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive tablet={
                    <Row crossAxis="center">
                        <LeftInformation data={narrative} isMobile={false} isDesktop={false} />
                        <SizedBox width={50} />
                        <Expanded>
                            <RightNarrative height={400} width={400} />
                        </Expanded>
                    </Row>
                } phone={
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <LeftInformation data={narrative} isMobile isDesktop={false} />
                        <SizedBox height={50} />
                        <RightNarrative height={280} width='100%' />
                    </Column>
                }>
                    <Row crossAxis="center">
                        <LeftInformation data={narrative} isMobile={false} isDesktop />
                        <SizedBox width={50} />
                        <Expanded>
                            <RightNarrative height={400} width={width <= 1200 ? 450 : 600} />
                        </Expanded>
                    </Row>
                </Responsive>
            </Container>
            {/* THIRD SECTION - TEAM */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Column>
                    {team.map((career, index) => {
                        return (
                            <React.Fragment key={index}>
                                {renderTeam(career)}
                                {team.length - 1 === index ? <></> : <SizedBox height={isMobile ? 50 : 160} />}
                            </React.Fragment>
                        )
                    })}
                </Column>
            </Container>
            {/* FOURTH SECTION - SERCH LOGO */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive tablet={
                    <Row crossAxis="center">
                        <LeftInformation data={withSerch} isMobile={false} isDesktop={false} />
                        <SizedBox width={50} />
                        <Expanded>
                            <SerchImage
                                image={Asset.logo.tagWhite}
                                backgroundColor={Theme.primary}
                                height={300}
                                width={400}
                                action="contain"
                            />
                        </Expanded>
                    </Row>
                } phone={
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <LeftInformation data={withSerch} isMobile isDesktop={false} />
                        <SizedBox height={50} />
                        <SerchImage
                            image={Asset.logo.tagWhite}
                            backgroundColor={Theme.primary}
                            width="100%"
                            height={200}
                            action="contain"
                            padding={"75px"}
                        />
                    </Column>
                }>
                    <Row crossAxis="center">
                        <LeftInformation data={withSerch} isMobile={false} isDesktop />
                        <SizedBox width={50} />
                        <Expanded>
                            <SerchImage
                                image={Asset.logo.tagWhite}
                                backgroundColor={Theme.primary}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                                padding="120px"
                                action="contain"
                            />
                        </Expanded>
                    </Row>
                </Responsive>
            </Container>
            {/* FIFTH SECTION - HOW IT STARTED */}
            <Container backgroundColor={Theme.appbarLight} padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="How we are reimagining the world"
                    />
                    <SizedBox height={30} />
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 13 : 15}
                        opacity={0.6}
                        text={[
                            "The Serch idea was born on a frustrating time in Nigeria, 2021.",
                            " Launched on 2024, we are committed to building a DNA that fosters innovation and reinvention."
                        ].join(" ")}
                    />
                    <SizedBox height={10} />
                    <Container height={2} backgroundColor={Theme.primaryDark} width="95%" />
                    <SizedBox height={80} />
                    <SpreadView list={genesis} />
                </Column>
            </Container>
            {/* SIXTH SECTION - OPEN ROLES */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Container backgroundColor={Theme.appbarLight} padding='24px' elevation={4} width="100%">
                    <Column crossAxis="center">
                        <Text
                            color={Theme.primary}
                            size={isMobile ? 22 : isDesktop ? 32 : 28}
                            weight='bold'
                            align="center"
                            text="Come innovate with us"
                        />
                        <SizedBox height={10} />
                        <Text
                            color={Theme.primary}
                            size={isMobile ? 13 : 15}
                            opacity={0.6}
                            align="center"
                            text="Building problem-solving solutions..."
                        />
                        <SizedBox height={80} />
                        <Text
                            color={Theme.primary}
                            size={15}
                            align="justify"
                            text="Currently, we have no open roles. You can always visit this page to check for open roles."
                        />
                    </Column>
                </Container>
            </Container>
            {/* SEVENTH SECTION - CONNECT WITH US */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Wrap runSpacing={80} spacing={30}>
                    {connectWithUs.map((item, index) => {
                        return (
                            <Container backgroundColor="transparent" key={index} width={width < 600 ? '100%' : "47%"}>
                                <UnderlinedButton
                                    text={item.text}
                                    textColor={Theme.primary}
                                    textSize={isMobile ? 13 : 20}
                                    link={item.link}
                                    withArrow
                                    showLine
                                    iconSize={isMobile ? 1.5 : 2.5}
                                    isBlank
                                />
                            </Container>
                        )
                    })}
                </Wrap>
            </Container>
        </Layout>
    )
}

interface LeftInformationProps extends LeftProps {
    data: IListView;
}

const LeftInformation: React.FC<LeftInformationProps> = observer(({ isMobile, isDesktop, data }) => {
    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={data.color}
                size={isMobile ? 22 : isDesktop ? 32 : 28}
                weight='bold'
                text={data.header}
            />
            <SizedBox height={30} />
            <Text
                color={data.color}
                size={isMobile ? 15 : 17}
                text={data.description.join(" ")}
            />
        </Column>
    )
})

interface RightNarrativeProps {
    width?: number | string;
    height?: number | string;
}

const RightNarrative: React.FC<RightNarrativeProps> = observer(({ width, height }) => {
    const colors = [Theme.appbarDark, Theme.primaryDark, Theme.appbarDark, Theme.primary]
    const boxHeight = height ?? 300;
    const boxWidth = width ?? 300;

    return (
        <Container width={boxWidth} height={boxHeight} borderRadius="24px">
            <Row crossAxis="center">
                {colors.map((color, index) => {
                    return (
                        <Container
                            key={index}
                            backgroundColor={color}
                            height={boxHeight}
                            width={typeof boxWidth === 'string'
                                ? '25%'
                                : (boxWidth / colors.length)
                            }
                        />
                    )
                })}
            </Row>
        </Container>
    )
})

interface SerchImageProps {
    image: string;
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
    padding?: string;
    action?: "none" | "cover" | "contain" | "fill" | "scale-down";
}

const SerchImage: React.FC<SerchImageProps> = observer(({ image, width, backgroundColor, height, padding = '32px', action }) => {
    return (
        <Container backgroundColor={backgroundColor ?? Theme.primary} width={width ?? 300} height={height ?? 300} padding={padding}>
            <Image image={image} height="100%" width="100%" objectFit={action ? action : "cover"} />
        </Container>
    )
})