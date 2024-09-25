import {
    Center, Column, Container, Image, Positioned, SizedBox, Step,
    StepText, Text, Theme, useDesign, useRedirect, useWidth, Wrap
} from "@serchservice/web-ui-kit";
import React from "react";
import Asset from "../../../assets/Asset";
import CertificateDb from "../../../backend/database/VerifyCertificateDb";
import { RouteInterface } from "../../../configuration/Route";
import Routing from "../../../configuration/Routing";
import Layout from "../../../layout/Layout";
import AppDownload from "../../widgets/AppDownload";
import Title from "../../widgets/Title";
import { PDFUtils } from "@serchservice/pdf-webview";

export const CertificateRoute: RouteInterface = {
    path: "/platform/certificate",
    page: <CertificatePage />
}

export default function CertificatePage() {
    const certificate = CertificateDb.read;
    const redirect = useRedirect();

    const width = useWidth();
    const { isMobile, isDesktop } = useDesign()

    /// DEFINITIONS
    const generalPadding = isMobile ? "120px 28px" : isDesktop ? `120px ${width <= 1110 ? '100px' : '140px'}` : "120px 56px";

    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [certificateUrl, setGuidelines] = React.useState<string | null>(null);

    const fetchCertificate = React.useCallback(async () => {
        try {
            const response = await PDFUtils.getPdf({
                document: certificate.document,
                canvas: canvasRef.current,
            });
            console.log(response)
            if (response) {
                setGuidelines(response.pdf);
            }
        } catch (e) {
            console.log(e)
        }
    }, [canvasRef]);

    React.useEffect(() => {
        if(certificate != null) {
            fetchCertificate()
        } else {
            redirect(Routing.instance.error.path, 3000)
        }
    }, [ certificate, fetchCertificate, redirect ])

    const leftRatings = certificate.ratings.filter((_, index) => index % 2 === 0);
    const rightRatings = certificate.ratings.filter((_, index) => index % 2 !== 0);

    const title = `Certificate for ${certificate.data.name} | Serch`;

    const profileSteps: string[] = [
        `Name: ${certificate.data.name}`,
        `Category: ${certificate.data.category}`
    ]

    const renderComment = (comment: string): JSX.Element => {
        return (
            <Container width="auto" backgroundColor={Theme.appbarLight} padding="12px" borderRadius="12px">
                <Text
                    color={Theme.primary}
                    size={14}
                    opacity={0.8}
                    text={comment}
                />
            </Container>
        )
    }

    const renderTestimonials = (): JSX.Element => {
        if(certificate.ratings.length > 0) {
            return (
                <Wrap runSpacing={30} spacing={30}>
                    <Column mainAxisSize={isMobile ? "max" : "min"}>
                        {leftRatings.map((rating, index) => {
                            return (
                                <Step
                                    key={index}
                                    content={renderComment(rating.comment)}
                                    color={Theme.secondary}
                                    indicatorSize={8}
                                    width="100%"
                                    showBottom={leftRatings.length - 1 !== index}
                                />
                            )
                        })}
                    </Column>
                    <Column mainAxisSize={isMobile ? "max" : "min"}>
                        {rightRatings.map((rating, index) => {
                            return (
                                <Step
                                    key={index}
                                    content={renderComment(rating.comment)}
                                    color={Theme.secondary}
                                    indicatorSize={8}
                                    width="100%"
                                    showBottom={rightRatings.length - 1 !== index}
                                />
                            )
                        })}
                    </Column>
                </Wrap>
            )
        } else {
            return (
                <Center>
                    <SizedBox height={200} />
                    <Text
                        color={Theme.primary}
                        size={16}
                        opacity={0.6}
                        text="No rating comments"
                    />
                    <SizedBox height={200} />
                </Center>
            )
        }
    }

    return (
        <Layout>
            <Title title={title} description='Join the Serch platform and increase your earnings' />
            {/* HEADER */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Column crossAxis="center" mainAxis="center">
                    <Image image={Asset.logo.tagWhite} width={width <= 400 ? "60%" : isMobile ? "40%" : 200} />
                    <SizedBox height={30} />
                    <Image image={certificate.picture} width={200} height={200} style={{borderRadius: "50%"}} />
                    <SizedBox height={60} />
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Here's the certificate"
                    />
                    <SizedBox height={40} />
                </Column>
                {certificateUrl && (
                    <Positioned top={521} left={0} right={0}>
                        <Container
                            width={isMobile ? "100%" : isDesktop ? 600 : 400}
                            height={isMobile ? "auto" : isDesktop ? 600 : 400}
                            elevation={10}
                        >
                            <Image image={certificateUrl} width="100%" height="100%" objectFit="contain" />
                        </Container>
                    </Positioned>
                )}
            </Container>
            {/* PROFILE INFORMATION */}
            <Container padding={isMobile ? "24px" : "32px"} width="100%" backgroundColor={Theme.secondary}>
                <Text
                    color={Theme.primary}
                    size={isMobile ? 18 : 20}
                    weight='bold'
                    text="Profile Information"
                />
                <SizedBox height={10} />
                <Container height={2} backgroundColor={Theme.primaryDark} width="95%" />
                <SizedBox height={10} />
                {profileSteps.map((step, index) => {
                    return (
                        <StepText
                            title={step}
                            key={index}
                            fontSize={isMobile ? 16 : 18}
                            showBottom={profileSteps.length - 1 !== index}
                        />
                    )
                })}
            </Container>
            {/* RATING TESTIMONIALS */}
            <Container padding={isMobile ? "24px" : "32px"} width="100%" backgroundColor={Theme.secondary}>
                <Text
                    color={Theme.primary}
                    size={isMobile ? 18 : 20}
                    weight='bold'
                    text="Testimonials"
                />
                <SizedBox height={10} />
                <Container height={2} backgroundColor={Theme.primaryDark} width="95%" />
                <SizedBox height={10} />
                {renderTestimonials()}
            </Container>
            {/* CATEGORY IMAGE */}
            <Container padding={isMobile ? "80px 24px" : "100px 32px"} width="100%" backgroundColor={Theme.secondary}>
                <Column crossAxis="center" mainAxis="center">
                    <Container
                        backgroundColor={Theme.appbarLight}
                        padding={width <= 350 ? "35px" : width <= 500 ? "50px" : "80px"}
                        borderRadius="50%"
                        width={isMobile ? "60%" : 350}
                        height={isMobile ? "auto" : 350}
                    >
                        <Image image={certificate.data.image} width={"100%"} height={"100%"} />
                    </Container>
                </Column>
            </Container>
            {/* APP DISPLAY SHORTCUT */}
            <AppDownload type="default" />
        </Layout>
    )
}