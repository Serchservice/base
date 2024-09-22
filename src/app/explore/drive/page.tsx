import { Icon } from "@iconify/react/dist/iconify.js";
import {
    useWidth, useDesign, IListView, Theme, Container, Responsive, Row,
    TextBlock, SizedBox, Expanded, Column, Center, SpreadView, IconBlock,
    Text,
    Image
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import Asset from "../../../assets/Asset";
import { RouteInterface } from "../../../configuration/Route";
import Routing from "../../../configuration/Routing";
import Layout from "../../../layout/Layout";
import AppDownload from "../../widgets/AppDownload";
import CountriesInSerch from "../../widgets/CountriesInSerch";
import Title from "../../widgets/Title";

export const ExploreDriveRoute: RouteInterface = {
    path: "/explore/drive",
    page: <ExploreDrivePage />
}

export default function ExploreDrivePage() {
    const width = useWidth();
    const { generalPadding, isMobile, isDesktop } = useDesign()

    // HEADER
    const headerTitle = "Your nearby navigation, redefined"
    const headerDescription = [
        "Trying to get somewhere near to you? We've redefined how you move around without stress.",
        "Do it all with our Drive-to-Shop feature.",
    ]

    // DIFFERENCE
    const difference: IListView[] = [
        {
            image: "uim:google",
            header: "Before Serch",
            description: [
                "'Nearby mechanic shops around me', that's probably your search sentence in google.",
                "Looking for a mechanic, plumber and so much more shops/workplace? Your go-to method is always",
                "google map search bar or google search engine search bar."
            ],
            color: Theme.primary
        },
        {
            image: "ci:settings-future",
            header: "With Serch",
            description: [
                "Your search reduced to the simplest form. We've simplified your search by making it easy for you to",
                "select the category you want to drive to, and with your location, we will show you the list you desire."
            ],
            color: Theme.primary
        },
        {
            image: "ph:sneaker-move-fill",
            header: "Move with ease",
            description: [
                "Reduce your search time and starting moving with ease in an easier way. Don't do the long searches again,",
                "do it all with Serch. Get to these service provider's shops/workplaces faster and easier --- Service made easy."
            ],
            color: Theme.primary
        },
    ]

    // LOCATION SPECIFIC
    const locationTitle = "Location Specific, Location mindful"
    const locationDescription = [
        "Since we are focused on building what matches our philosophy --- Service made easy,",
        "we make out Drive-to-Shop feature location-specific and location-minded. This means that, though you can extend",
        "your search radius, we limit the radius to 10km from your current location. So, extend your search and go farther!"
    ]
    const locationIcon = "fa6-solid:map-location-dot"

    // SERVICE SPECIFIC
    const serviceTitle = "Service Specific, Service minded"
    const serviceDescription = [
        "Since we are focused on building what matches our philosophy --- Service made easy,",
        "we make out Drive-to-Shop feature service-specific and service-minded. This means that our search results are",
        "limited to the skill or category you are searching for. This targets providing you with the result that suits you."
    ]
    const serviceIcon = "ph:dots-six-duotone"
    const serviceLink = Routing.instance.marketplace.path;
    const serviceLinkText = "See the categories we support at the moment"

    return (
        <Layout>
            <Title title="Drive to Shop" description="Changing the way you get to your nearest destination" />
            {/* HEADER */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <TextBlock
                            title={headerTitle}
                            description={headerDescription}
                            color={Theme.primary}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                        <SizedBox width={50} />
                        <Expanded>
                            <DriveImage image={Asset.home.drive} height={400} width={width <= 1200 ? 450 : 600} />
                        </Expanded>
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <TextBlock
                            title={headerTitle}
                            description={headerDescription}
                            color={Theme.primary}
                            isMobile
                            isDesktop={false}
                        />
                        <SizedBox height={50} />
                        <DriveImage
                            image={Asset.home.drive}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* APP DOWNLOAD */}
            <AppDownload />
            {/* EXPERIENCE THE DIFFERENCE */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Experience the difference"
                    />
                    <SizedBox height={30} />
                    <Center>
                        <Icon icon="mdi:difference-left" width="10em" height="10em" />
                    </Center>
                    <SizedBox height={80} />
                    <Center>
                        <SpreadView list={difference} />
                    </Center>
                </Column>
            </Container>
            {/* LOCATION SPECIFIC */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={locationIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={locationTitle}
                            color={Theme.primary}
                            description={locationDescription}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={locationIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={locationTitle}
                            color={Theme.primary}
                            description={locationDescription}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                </Responsive>
            </Container>
            {/* COUNTRIES */}
            <CountriesInSerch />
            {/* SERVICE SPECIFIC */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Responsive desktop={
                    <Row crossAxis="center">
                        <Expanded>
                            <IconBlock
                                icon={serviceIcon}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.appbarLight}
                                height={400}
                                width={width <= 1200 ? 450 : 600}
                            />
                        </Expanded>
                        <SizedBox width={100} />
                        <TextBlock
                            title={serviceTitle}
                            color={Theme.primary}
                            description={serviceDescription}
                            links={[
                                {link: serviceLink, text: serviceLinkText}
                            ]}
                            isMobile={false}
                            isDesktop={isDesktop}
                        />
                    </Row>
                }>
                    <Column crossAxis="flex-start" mainAxisSize="max">
                        <IconBlock
                            icon={serviceIcon}
                            backgroundColor={Theme.appbarDark}
                            color={Theme.appbarLight}
                            width="100%"
                            height={280}
                            padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                        />
                        <SizedBox height={50} />
                        <TextBlock
                            title={serviceTitle}
                            color={Theme.primary}
                            description={serviceDescription}
                            links={[
                                {link: serviceLink, text: serviceLinkText}
                            ]}
                            isMobile
                            isDesktop={false}
                        />
                    </Column>
                </Responsive>
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

const DriveImage: React.FC<DriveImageProps> = observer(({ image, width, backgroundColor, height, padding = '32px', action }) => {
    return (
        <Container backgroundColor={backgroundColor ?? Theme.primary} width={width ?? 300} height={height ?? 300} padding={padding}>
            <Image image={image} height="100%" width="100%" objectFit={action ? action : "cover"} />
        </Container>
    )
})