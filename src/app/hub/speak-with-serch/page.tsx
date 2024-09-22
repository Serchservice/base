import { Icon } from "@iconify/react/dist/iconify.js";
import {
    useWidth, useDesign, IListView, Theme, Container, Responsive, Row,
    TextBlock, SizedBox, Expanded, Column, Center, SpreadView, IconBlock,
    Text, Image
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import Asset from "../../../assets/Asset";
import { RouteInterface } from "../../../configuration/Route";
import Layout from "../../../layout/Layout";
import AppDownload from "../../widgets/AppDownload";
import Title from "../../widgets/Title";

export const SpeakWithSerchHubRoute: RouteInterface = {
    path: "/hub/speak-with-serch",
    page: <SpeakWithSerchHubPage />
}

export default function SpeakWithSerchHubPage() {
    const width = useWidth();
    const { generalPadding, isMobile, isDesktop } = useDesign()

    // HEADER
    const headerTitle = "Help extended with the power of ticketing"
    const headerDescription = [
        "Explore the power of help curated to serve you personally and fix your issues with the Serch platform.",
        "Get direct help with the Serch team.",
    ]

    const explore: IListView[] = [
        {
            header: "Support when you need it",
            description: [
                "Create a new ticket from the Serch app when you have an issue that you need direct support for.",
                "Follow up on your existing tickets and get the help you need."
            ],
            color: Theme.secondary,
            image: "lets-icons:ticket-use-duotone",
        },
        {
            header: "Short response time",
            description: [
                "Get feedback quickly from the Serch team within matter of minutes. Solve that issue of yours,",
                "with little or no wait time.",
            ],
            color: Theme.secondary,
            image: "lets-icons:time-duotone",
        },
        {
            header: "Quality feedback",
            description: [
                "Get responses directed to solving your issue with quality and personalized support.",
            ],
            color: Theme.secondary,
            image: "material-symbols:personal-bag-question",
        },
    ]

    const needTitle = "All you need"
    const needDescription = [
        "Help and Support made just for you and with you. Experience the power of help and support",
        "with in-app Serch support."
    ]
    const needIcon = "carbon:need"

    const getStarted: IListView[] = [
        {
            header: "Create an account",
            description: [
                "Whether you're a provider, user or business, all you need to get started with is an account.",
                "Create an account for yourself."
            ],
            color: Theme.secondary,
            image: "material-symbols-light:account-child",
        },
        {
            header: "Open App Information",
            description: [
                "You can use the shortcut in the MyCentre tab or you click on App Information to see the Help Centre.",
                "From the Help Centre, you can see Speak With Serch to start creating your own tickets.",
            ],
            color: Theme.secondary,
            image: "fluent:apps-shield-16-filled",
        },
        {
            header: "Create/Access your tickets",
            description: [
                "You can access your open tickets or create a new help ticket from the Speak with Serch tab.",
            ],
            color: Theme.secondary,
            image: "streamline:tickets-solid",
        },
    ]

    return (
        <Layout>
            <Title title="Drive to Shop" description="Changing the way you get to your nearest destination" />
            {/* HEADER */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <TextBlock
                            title={headerTitle}
                            description={headerDescription}
                            color={Theme.secondary}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                        <SizedBox width={50} />
                        <Expanded>
                            <DriveImage image={Asset.common.ticket} height={400} width={width <= 1200 ? 450 : 600} />
                        </Expanded>
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <TextBlock
                            title={headerTitle}
                            description={headerDescription}
                            color={Theme.secondary}
                            isMobile
                            isDesktop={false}
                        />
                        <SizedBox height={50} />
                        <DriveImage
                            image={Asset.common.ticket}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* PERSONALIZED SUPPORT */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Column crossAxis="center">
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Personalized support for you"
                    />
                    <SizedBox height={120} />
                    <Center>
                        <Icon icon="mdi:help-outline" color={Theme.secondary} width="10em" height="10em" />
                    </Center>
                    <SizedBox height={80} />
                    <Center>
                        <SpreadView list={explore} isCentered />
                    </Center>
                </Column>
            </Container>
            {/* NEED */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={needIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={needTitle}
                            color={Theme.secondary}
                            description={needDescription}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={needIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={needTitle}
                            color={Theme.secondary}
                            description={needDescription}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* APP DOWNLOAD */}
            <AppDownload />
            {/* GET STARTED */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Column crossAxis="center">
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Get started with your ticketing"
                    />
                    <SizedBox height={120} />
                    <Center>
                        <Icon
                            icon="material-symbols:line-start-diamond-rounded"
                            color={Theme.secondary}
                            width="10em"
                            height="10em"
                        />
                    </Center>
                    <SizedBox height={80} />
                    <Center>
                        <SpreadView list={getStarted} isCentered />
                    </Center>
                </Column>
            </Container>
        </Layout>
    )
}

interface DriveImageProps {
    image: string;
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
    padding?: string;
    action?: "none" | "cover" | "contain" | "fill" | "scale-down";
}

const DriveImage: React.FC<DriveImageProps> = observer(({ image, width, backgroundColor, height, padding = '90px', action }) => {
    return (
        <Container backgroundColor={backgroundColor ?? Theme.primaryDark} width={width ?? 300} height={height ?? 300} padding={padding}>
            <Image image={image} height="100%" width="100%" objectFit={action ? action : "cover"} />
        </Container>
    )
})