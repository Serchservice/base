import { Icon } from "@iconify/react/dist/iconify.js";
import {
    ButtonView, Center, Column, Container, Expanded, HoverLinkButton, Image, Padding, Responsive,
    Row, SizedBox, Text, Theme, UnderlinedButton, useDesign, useWidth, Wrap
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import Asset from "../../assets/Asset";
import Routing from "../../configuration/Routing";
import { LeftProps } from "../../layout/Interfaces";
import Layout from "../../layout/Layout";
import Title from "../widgets/Title";
import { RouteInterface } from "../../configuration/Route";

export const AboutUsRoute: RouteInterface = {
    path: "/about",
    page: <AboutUsPage />
}

export default function AboutUsPage() {
    const width = useWidth();
    const { isMobile, isDesktop } = useDesign()
    const { imageBackgroundPadding, imageBackgroundHeight, generalPadding } = useDesign()

    /// DEFINITIONS

    const list: ButtonView[] = [
        {
            icon: "lets-icons:news-duotone",
            header: "Newsroom",
            body: "Announcement about partnerships, platform updates and more happenings around you and the world.",
            path: Routing.instance.newsroom.path,
            color: "Visit the newsroom"
        },
        {
            icon: "lets-icons:news-fill",
            header: "Blog",
            body: "Learn more about Serch platforms, products, offerings and partnerships.",
            path: Routing.instance.blogs.path,
            color: "Read our blogs"
        },
        {
            icon: "uim:image-v",
            header: "Media and assets",
            body: "Access Serch branded media and assets, download and use Serch assets.",
            path: Routing.instance.mediaAndAsset.path,
            color: "View and download our assets"
        },
    ]

    return (
        <Layout>
            <Title title="About Us" description="Who we are and why we do what we do" />
            {/* FIRST SECTION - HEADER */}
            <Container padding={imageBackgroundPadding} width='100%' height={imageBackgroundHeight} backgroundColor="none" style={{
                backgroundImage: `url(${Asset.about.background})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <Text text="About Us" color={Theme.secondary} size={isDesktop ? 54 : 32} weight='bold' />
            </Container>
            {/* SECOND SECTION - INTRODUCTION */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive tablet={
                    <Row crossAxis="center">
                        <LeftDrive isMobile={false} isDesktop={false} />
                        <SizedBox width={50} />
                        <Expanded>
                            <DriveImage image={Asset.home.drive} height={400} width={400} />
                        </Expanded>
                    </Row>
                } phone={
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <LeftDrive isMobile isDesktop={false} />
                        <SizedBox height={50} />
                        <DriveImage
                            image={Asset.home.drive}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                    </Column>
                }>
                    <Row crossAxis="center">
                        <LeftDrive isMobile={false} isDesktop />
                        <SizedBox width={50} />
                        <Expanded>
                            <DriveImage image={Asset.home.drive} height={400} width={width <= 1200 ? 450 : 600} />
                        </Expanded>
                    </Row>
                </Responsive>
            </Container>
            {/* THIRD SECTION - MISSION */}
            <Center>
                <Padding all={12}>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Our mission, Our Vision, Our Goal"
                        align="center"
                    />
                </Padding>
            </Center>
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Container backgroundColor={Theme.primary} padding="12px">
                    <Responsive desktop={
                        <Row crossAxis="center">
                            <LeftMission isMobile={false} isDesktop={isDesktop} />
                            <SizedBox width={50} />
                            <Expanded>
                                <Image image={Asset.about.mission} height={400} width={width <= 1200 ? 400 : "auto"} />
                            </Expanded>
                        </Row>
                    }>
                        <Column crossAxis="flex-start" mainAxisSize="max">
                            <LeftMission isMobile isDesktop={false} />
                            <SizedBox height={50} />
                            <Image image={Asset.about.mission} width="100%" height={280} />
                        </Column>
                    </Responsive>
                </Container>
            </Container>
            {/* FOURTH SECTION - SAFETY */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <LeftSafety isMobile={false} isDesktop={isDesktop} />
                        <SizedBox width={50} />
                        <Expanded>
                            <DriveImage image={Asset.about.safety} height={400} width={width <= 1200 ? 450 : 600} />
                        </Expanded>
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <LeftSafety isMobile isDesktop={false} />
                        <SizedBox height={50} />
                        <DriveImage
                            image={Asset.about.safety}
                            width="100%" height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* FIFTH SECTION - COMPANY INFORMATION */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <CompanyHeader isDesktop={isDesktop} isMobile={isMobile} />
                <Container backgroundColor={Theme.primaryDark} padding="12px">
                    <Responsive tablet={
                        <Row crossAxis="center">
                            <LeftCompany isMobile={false} isDesktop={false} />
                            <SizedBox width={50} />
                            <Expanded>
                                <DriveImage
                                    image={Asset.logo.white}
                                    backgroundColor={Theme.appbarDark}
                                    height={400}
                                    width={400}
                                    action="contain"
                                />
                            </Expanded>
                        </Row>
                    } phone={
                        <Column crossAxis="flex-start" mainAxisSize="max">
                            <LeftCompany isMobile isDesktop={false} />
                            <SizedBox height={50} />
                            <DriveImage
                                image={Asset.logo.white}
                                backgroundColor={Theme.appbarDark}
                                width="100%"
                                height={280}
                                action="contain"
                                padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                            />
                        </Column>
                    }>
                        <Row crossAxis="center">
                            <LeftCompany isMobile={false} isDesktop />
                            <SizedBox width={50} />
                            <Expanded>
                                <DriveImage
                                    image={Asset.logo.white}
                                    backgroundColor={Theme.appbarDark}
                                    height={400}
                                    width={width <= 1200 ? 450 : 600}
                                    padding="120px"
                                    action="contain"
                                />
                            </Expanded>
                        </Row>
                    </Responsive>
                </Container>
            </Container>
            {/* SIXTH SECTION - LATEST INFORMATION */}
            <Container backgroundColor={Theme.secondary} padding="120px 56px" width="100%">
                <Text
                    color={Theme.primary}
                    size={isMobile ? 22 : isDesktop ? 32 : 28}
                    weight='bold'
                    text="Keep up with the latest information"
                />
                <SizedBox height={40} />
                <Wrap runSpacing={40} spacing={20}>
                    {list.map((item, index) => {
                        return (
                            <LatestInformation
                                key={index}
                                title={item.header ?? ""}
                                body={item.body?.split(" ") ?? []}
                                icon={item.icon as string ?? ""}
                                link={item.path ?? ""}
                                linkText={item.color ?? ""}
                            />
                        )
                    })}
                </Wrap>
            </Container>
            {/* SEVENTH SECTION - CAREER SHORTCUT */}
            <Container backgroundColor={Theme.primary} padding={`0 ${isMobile ? '24px' : '56px'} 50px`} width="100%">
                <Container backgroundColor={Theme.appbarDark} padding={isMobile ? "24px" : "76px"} borderRadius="0 0 24px 24px">
                    <Column mainAxisSize="max" crossAxisSize="min">
                        <Text
                            color={Theme.secondary}
                            size={isMobile ? 22 : isDesktop ? 32 : 28}
                            weight='bold'
                            text="Come build services that make life easy"
                        />
                        <SizedBox height={30} />
                        <Text
                            color={Theme.secondary}
                            size={isMobile ? 14 : 16}
                            text="You too can make a difference with us"
                        />
                        <SizedBox height={70} />
                        <HoverLinkButton
                            value="Search open roles"
                            link={Routing.instance.career.path}
                            centered
                            backgroundColor={Theme.primaryDark}
                        />
                    </Column>
                </Container>
            </Container>
        </Layout>
    )
}

const LeftDrive: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    const information = [
        "Every morning when we wake up, we are energized to deliver a top-notch platform that makes living easy.",
        "We drive ourselves towards providing a platform that makes it faster and easy to get your repairs done.",
        "We constantly apply change in our systems, to not limit ourselves to just repairs in service, but also, more!"
    ]

    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={Theme.primary}
                size={isMobile ? 22 : isDesktop ? 32 : 28}
                weight='bold'
                text="We revolutionize the way people get repairs and keep the motion flowing"
            />
            <SizedBox height={30} />
            <Text
                color={Theme.primary}
                size={isMobile ? 14 : 16}
                text={information.join(" ")}
            />
            <SizedBox height={30} />
            <Container width={250}>
                <UnderlinedButton
                    text="Learn more on how we do this"
                    textColor={Theme.primary}
                    textSize={15}
                    link={Routing.instance.marketplace.path}
                    withArrow
                    showLine
                    iconSize={1.5}
                    isBlank
                />
            </Container>
        </Column>
    )
})

interface DriveImageProps {
    image: string;
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
    padding?: string;
    action?: "none" | "cover" | "contain" | "fill" | "scale-down";
}

const DriveImage: React.FC<DriveImageProps> = observer(({ image, width, backgroundColor, height, padding = '32px', action }) => {
    return (
        <Container backgroundColor={backgroundColor ?? Theme.primary} width={width ?? 300} height={height ?? 300} padding={padding}>
            <Image image={image} height="100%" width="100%" objectFit={action ? action : "cover"} />
        </Container>
    )
})

const LeftMission: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    const information = [
        "We are committed to making it easy for users to access service providers",
        "within their geographic locations without having to break a sweat. You can",
        "as well, drive to the nearest mechanic shop, and access other Serch",
        "services all from the comfort of your location. With Serch, you don't need",
        "to worry about what to do, whether it is an emergency or not."
    ]

    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={Theme.secondary}
                size={isMobile ? 22 : isDesktop ? 32 : 28}
                weight='bold'
                text="Service made easy"
            />
            <SizedBox height={30} />
            <Text
                color={Theme.secondary}
                size={isMobile ? 14 : 16}
                text={information.join(" ")}
            />
            <SizedBox height={30} />
            <Container width={250}>
                <UnderlinedButton
                    text="See how it works"
                    textColor={Theme.secondary}
                    textSize={15}
                    link={Routing.instance.howItWorksWithRequesting.path}
                    withArrow
                    showLine
                    iconSize={1.5}
                    isBlank
                />
            </Container>
        </Column>
    )
})

const LeftSafety: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    const information = [
        "Requesting for someone at home? Or are you requesting for yourself?.",
        "Maybe, you are the service provider going to flex your skill? We are",
        "committed to play our part in keeping you safe at all times, but you also",
        "need to know how to use the Serch platform and play your own part."
    ]

    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={Theme.primary}
                size={isMobile ? 22 : isDesktop ? 32 : 28}
                weight='bold'
                text="Be safe, always"
            />
            <SizedBox height={30} />
            <Text
                color={Theme.primary}
                size={isMobile ? 14 : 16}
                text={information.join(" ")}
            />
            <SizedBox height={30} />
            <Container width={250}>
                <UnderlinedButton
                    text="See our safety guidelines"
                    textColor={Theme.primary}
                    textSize={15}
                    link={Routing.instance.safetyGuideline.path}
                    withArrow
                    showLine
                    iconSize={1.5}
                    isBlank
                />
            </Container>
        </Column>
    )
})

const CompanyHeader: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    return (
        <Center>
            <Padding all={12}>
                <Text
                    color={Theme.secondary}
                    size={isMobile ? 22 : isDesktop ? 32 : 28}
                    weight='bold'
                    text="Our Company"
                    align="center"
                />
            </Padding>
        </Center>
    )
})

const LeftCompany: React.FC<LeftProps> = observer(({ isMobile, isDesktop }) => {
    const information = [
        "We are building a culture that fosters growth, inclusivity, doing the right thing, and more,",
        "for both users, providers, businesses and employees. Find out about the team behind this journey."
    ]

    return (
        <Column crossAxisSize="min" mainAxisSize={isMobile ? 'max' : 'min'}>
            <Text
                color={Theme.primaryLight}
                size={isMobile ? 22 : isDesktop ? 32 : 28}
                weight='bold'
                text="Who fuels Serch's engine?"
            />
            <SizedBox height={30} />
            <Text
                color={Theme.primaryLight}
                size={isMobile ? 14 : 16}
                text={information.join(" ")}
            />
            <SizedBox height={30} />
            <Container width={250}>
                <UnderlinedButton
                    text="See our leadership"
                    textColor={Theme.primaryLight}
                    textSize={15}
                    link={Routing.instance.leadership.path}
                    withArrow
                    showLine
                    iconSize={1.5}
                    isBlank
                />
            </Container>
        </Column>
    )
})

interface LatestInformationProps {
    icon: string;
    title: string;
    body: string[];
    link: string;
    linkText: string;
}

const LatestInformation: React.FC<LatestInformationProps> = observer(({ icon, title, body, link, linkText }) => {
    const width = useWidth();
    const displayWidth = width < 600 ? '100%' : width < 1000 ? "47%" : "32%"

    return (
        <Container maxWidth={displayWidth} backgroundColor="transparent">
            <Icon icon={icon} height="40px" width="40px" />
            <SizedBox height={10} />
            <Text text={title} color={Theme.primary} size={17.5} weight='bold' />
            <SizedBox height={20} />
            <Text text={body.join(" ")} color={Theme.primary} size={15.2} />
            <SizedBox height={40} />
            <UnderlinedButton
                text={linkText}
                textColor={Theme.primary}
                textSize={15}
                link={link}
                withArrow
                showLine
                iconSize={1.5}
                isBlank
            />
        </Container>
    )
})