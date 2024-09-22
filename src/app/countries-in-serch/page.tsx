import {
    useWidth, useDesign, Container, Theme, Responsive, Row,
    Expanded, IconBlock, SizedBox, TextBlock, Column, Wrap,
    Text
} from "@serchservice/web-ui-kit";
import React from "react";
import Asset from "../../assets/Asset";
import { RouteInterface } from "../../configuration/Route";
import Layout from "../../layout/Layout";
import Title from "../widgets/Title";

export const CountriesInSerchRoute: RouteInterface = {
    path: "/countries-in-serch",
    page: <CountriesInSerchPage />
}

export default function CountriesInSerchPage() {
    const width = useWidth();
    const { generalPadding, imageBackgroundPadding, imageBackgroundHeight, isMobile, isDesktop } = useDesign()

    /// LOCATION-MINDED DEFINITIONS
    const locationTitle = "Location-Specific Experience"
    const locationDescription = [
        "As a platform designed for your experience, we are very attentive to location and servicing.",
        "You can have access to any of the Serch platform, but we inform you whether Serch is launched in your location.",
        "Having access doesn't mean you can find providers or users/guests, it simply means that you can create an account",
        "but nothing will work ordinarily, since Serch doesn't exist in such location.",
        "That's why we have this page to always show you places Serch is launched and active in."
    ]
    const locationIcon = "tdesign:location-1"

    /// COUNTRIES AND STATES IN SERCH
    const list: ICountryInSerch[] = [
        {
            country: "Nigeria 🇳🇬",
            states: ["Abuja"]
        }
    ]

    return (
        <Layout>
            <Title title="Countries In Serch" description="View all countries and states we are launched in" />
            {/* FIRST SECTION - HEADER */}
            <Container padding={imageBackgroundPadding} width='100%' height={imageBackgroundHeight} backgroundColor="none" style={{
                backgroundImage: `url(${Asset.countries.background})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <Text text="Countries In Serch" color={Theme.secondary} size={isDesktop ? 54 : 32} weight='bold' />
                <Text text="View all countries and states we are launched in" color={Theme.secondary} size={16} />
            </Container>
            {/* SECOND SECTION - LOCATION-MINDED */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive tablet={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                backgroundColor={Theme.primaryLight}
                                color={Theme.primary}
                                icon={locationIcon}
                                height={400}
                                width={400}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            color={Theme.primary}
                            title={locationTitle}
                            description={locationDescription}
                            isMobile={false}
                            isDesktop={false}
                        />
                    </Row>
                } phone={
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            backgroundColor={Theme.primaryLight}
                            color={Theme.primary}
                            icon={locationIcon}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            color={Theme.primary}
                            title={locationTitle}
                            description={locationDescription}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                }>
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                backgroundColor={Theme.primaryLight}
                                color={Theme.primary}
                                icon={locationIcon}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            color={Theme.primary}
                            title={locationTitle}
                            description={locationDescription}
                            isMobile={false}
                            isDesktop
                        />
                    </Row>
                </Responsive>
            </Container>
            {/* THIRD SECTION - COUNTRIES AND STATES IN SERCH */}
            <Container backgroundColor={Theme.secondary} padding={isMobile ? "24px" : "36px"} width="100%">
                <Column>
                    <Text
                        text="Countries and States in Serch"
                        color={Theme.primary}
                        size={isMobile ? 22 : 32}
                        weight='bold'
                    />
                    <SizedBox height={70} />
                    <Wrap spacing={10} runSpacing={50}>
                        {list.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <Container width={isMobile ? "100%" : "30%"}>
                                        <Text
                                            text={item.country}
                                            color={Theme.primary}
                                            size={isMobile ? 18 : 22}
                                            weight='bold'
                                        />
                                    </Container>
                                    <Container width={isMobile ? "100%" : "65%"}>
                                        <Wrap runSpacing={20} spacing={20} crossAxisAlignment="center">
                                            {item.states.map((state, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        <Container width="45%">
                                                            <Text
                                                                text={state}
                                                                color={Theme.primary}
                                                                size={isMobile ? 16 : 20}
                                                            />
                                                        </Container>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </Wrap>
                                    </Container>
                                </React.Fragment>
                            )
                        })}
                    </Wrap>
                </Column>
            </Container>
        </Layout>
    )
}

interface ICountryInSerch {
    country: string;
    states: string[]
}