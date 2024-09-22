import { Icon } from "@iconify/react/dist/iconify.js";
import {
    useWidth, useDesign, IListView, Theme, Container, Responsive, Row,
    TextBlock, SizedBox, Column, Padding, Expanded, IconBlock, Wrap,
    Image, Text
} from "@serchservice/web-ui-kit";
import Asset from "../../../assets/Asset";
import { RouteInterface } from "../../../configuration/Route";
import Layout from "../../../layout/Layout";
import CountriesInSerch from "../../widgets/CountriesInSerch";
import Title from "../../widgets/Title";

export const ExploreReserveRoute: RouteInterface = {
    path: "/explore/reserve",
    page: <ExploreReservePage />
}

export default function ExploreReservePage() {
    const width = useWidth();
    const { generalPadding, imageRadius, noMobilePadding, isMobile, isDesktop } = useDesign()

    /// HEADER DEFINITIONS
    const headerTitle = "Your service when you want it"
    const headerDescription = ["Get the service provider ready even before you need the service attended to."]

    /// TIME DEFINITIONS
    const timeTitle = "Your time, your service"
    const timeDescription = ["Exactly when you want it, the service provider will be ready"]
    const timeIcon = "uim:schedule"

    /// RELIABLE DEFINITIONS
    const reliableTitle = "Reliable schedule"
    const reliableDescription = [
        "Our technology makes sure that the provider is ready when it's time.",
        "You and the provider can cancel or close the schedule at any time, but for accepted schedules,",
        "we recommend closing it within the closing window as closing it when the window expires can lead to",
        "extra charges."
    ]
    const reliableIcon = "arcticons:recurrence"

    /// STANDBY DEFINITIONS
    const standbyTitle = "Always on standby"
    const standbyDescription = ["Your service provider is always on standby, with 10 minutes of wait time included."]
    const standbyIcon = "material-symbols:mode-standby"

    /// PROCESS DEFINITIONS
    const processes: IListView[] = [
        {
            header: "Schedule",
            description: ["Tap on the schedule icon in the Serch app. Schedule at least 30 minutes in advance."],
            color: Theme.secondary,
            image: "ic:twotone-schedule"
        },
        {
            header: "Receive confirmation",
            description: [
                "The provider accepts reserve and confirmation is sent to you.",
                "Cancellation at up to one hour before, bears no charge."
            ],
            color: Theme.secondary,
            image: "line-md:circle-to-confirm-circle-twotone-transition"
        },
        {
            header: "Service",
            description: ["Continue with the service experience tailored to your satisfaction."],
            color: Theme.secondary,
            image: "mdi:account-service",
        },
    ]

    /// WONDER DEFINITIONS
    const wonderTitle = "Just for your experience"
    const wonderDescription = [
        "The same service experience, with a little touch of wonders.",
        "Designed just for you and your schedule."
    ]
    const wonderIcon = "solar:magic-stick-3-bold-duotone"

    return (
        <Layout>
            <Title title="Reserve" description="Learn about service scheduling with Serch" />
            {/** FIRST SECTION - HEADER */}
            <Container backgroundColor={Theme.primary} padding={noMobilePadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <TextBlock
                            title={headerTitle}
                            description={headerDescription}
                            color={Theme.secondary}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                        <SizedBox width={30} />
                        <Image image={Asset.reserve.time} style={imageRadius} height={400} width={450} />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <Padding all={28}>
                            <TextBlock
                                title={headerTitle}
                                description={headerDescription}
                                color={Theme.secondary}
                                isMobile
                                isDesktop={false}
                            />
                        </Padding>
                        <Image image={Asset.reserve.time} width="100%" height={400} />
                    </Column>
                </Responsive>
            </Container>
            {/* SECOND SECTION - YOUR TIME, YOUR SERVICE */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Responsive tablet={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={timeIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={400}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={timeTitle}
                            color={Theme.secondary}
                            description={timeDescription}
                            isMobile={false}
                            isDesktop={false}
                        />
                    </Row>
                } phone={
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={timeIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={timeTitle}
                            color={Theme.secondary}
                            description={timeDescription}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                }>
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={timeIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={50} />
                        <TextBlock
                            title={timeTitle}
                            color={Theme.secondary}
                            description={timeDescription}
                            isMobile={false}
                            isDesktop
                        />
                    </Row>
                </Responsive>
            </Container>
            {/* THIRD SECTION - RELIABLE */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Responsive tablet={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={reliableIcon}
                                backgroundColor="transparent"
                                color={Theme.appbarLight}
                                height={400}
                                width={400}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={reliableTitle}
                            color={Theme.secondary}
                            description={reliableDescription}
                            isMobile={false}
                            isDesktop={false}
                        />
                    </Row>
                } phone={
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={reliableIcon}
                            backgroundColor="transparent"
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={reliableTitle}
                            color={Theme.secondary}
                            description={reliableDescription}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                }>
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={reliableIcon}
                                backgroundColor="transparent"
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={50} />
                        <TextBlock
                            title={reliableTitle}
                            color={Theme.secondary}
                            description={reliableDescription}
                            isMobile={false}
                            isDesktop
                        />
                    </Row>
                </Responsive>
            </Container>
            {/* FOURTH SECTION - STANDBY */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Responsive tablet={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={standbyIcon}
                                backgroundColor="transparent"
                                color={Theme.appbarLight}
                                height={400}
                                width={400}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={standbyTitle}
                            color={Theme.secondary}
                            description={standbyDescription}
                            isMobile={false}
                            isDesktop={false}
                        />
                    </Row>
                } phone={
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={standbyIcon}
                            backgroundColor="transparent"
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={standbyTitle}
                            color={Theme.secondary}
                            description={standbyDescription}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                }>
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={standbyIcon}
                                backgroundColor="transparent"
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={50} />
                        <TextBlock
                            title={standbyTitle}
                            color={Theme.secondary}
                            description={standbyDescription}
                            isMobile={false}
                            isDesktop
                        />
                    </Row>
                </Responsive>
            </Container>
            {/* FIFTH SECTION - PROCESS */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Wrap runSpacing={80} spacing={30}>
                    {processes.map((item, index) => {
                        return (
                            <Container backgroundColor="transparent" width={width < 600 ? '100%' : "25%"} key={index}>
                                <Column>
                                    <Icon icon={item.image ?? ""} height="24px" width="24px" color={item.color} />
                                    <SizedBox height={30} />
                                    <Text
                                        color={Theme.secondary}
                                        size={isMobile ? 13 : 15}
                                        weight='600'
                                        text={item.header}
                                    />
                                    <SizedBox height={10} />
                                    <Text
                                        color={Theme.secondary}
                                        size={isMobile ? 13 : 15}
                                        opacity={0.6}
                                        text={item.description.join(" ")}
                                    />
                                </Column>
                            </Container>
                        )
                    })}
                </Wrap>
            </Container>
            {/* SIXTH SECTION - WONDER */}
            <Responsive tablet={
                <Container backgroundColor={Theme.primary} padding="56px 86px" width="100%">
                    <Row crossAxis="center">
                        <TextBlock
                            title={wonderTitle}
                            description={wonderDescription}
                            color={Theme.secondary}
                            isMobile={false}
                            isDesktop={false}
                        />
                        <SizedBox width={30} />
                        <Expanded>
                            <IconBlock
                                icon={wonderIcon}
                                backgroundColor="transparent"
                                color={Theme.appbarLight}
                                height={400}
                                width={400}
                            />
                        </Expanded>
                    </Row>
                </Container>
            } phone={
                <Container backgroundColor={Theme.primary} width="100%">
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <Padding all={28}>
                            <TextBlock
                                title={wonderTitle}
                                description={wonderDescription}
                                color={Theme.secondary}
                                isMobile
                                isDesktop={false}
                            />
                        </Padding>
                        <IconBlock
                            icon={wonderIcon}
                            backgroundColor="transparent"
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                    </Column>
                </Container>
            }>
                <Container backgroundColor={Theme.primary} padding={`56px ${width <= 1110 ? '100px' : '140px'}`} width="100%">
                    <Row crossAxis="center">
                        <TextBlock
                            title={wonderTitle}
                            description={wonderDescription}
                            color={Theme.secondary}
                            isMobile={false}
                            isDesktop
                        />
                        <SizedBox width={30} />
                        <Expanded>
                            <IconBlock
                                icon={wonderIcon}
                                backgroundColor="transparent"
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                    </Row>
                </Container>
            </Responsive>
            {/* SEVENTH SECTION - COUNTRIES IN SERCH SHORTCUT */}
            <CountriesInSerch />
        </Layout>
    )
}