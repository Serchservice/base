import { Icon } from "@iconify/react/dist/iconify.js";
import {
    useWidth, useDesign, IListView, Theme, Container, Column, SizedBox,
    Responsive, Row, TextBlock, Expanded, IconBlock, Padding, UnderlinedButton, Wrap, Text
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import Asset from "../../assets/Asset";
import { RouteInterface } from "../../configuration/Route";
import Routing from "../../configuration/Routing";
import Layout from "../../layout/Layout";
import Title from "../widgets/Title";

export const SafetyGuidelineRoute: RouteInterface = {
    path: "/safety-guidelines",
    page: <SafetyGuidelinePage />
}

export default function SafetyGuidelinePage() {
    const width = useWidth();
    const { generalPadding, imageBackgroundPadding, imageBackgroundHeight, isMobile, isDesktop } = useDesign()

    /// USER SAFETY DEFINITIONS
    const userSafetyTitle = "Requesting for service?"
    const userSafetyDescription = [
        "As a design, safety is embedded in your requesting experience. Whether you're a guest or a user,",
        "we curate safety experiences that will serve you better."
    ]
    const userSafetyIcon = "carbon:intent-request-active"

    /// AUTHENTICATE DEFINITIONS
    const authenticateTitle = "Authenticate your provider, every time"
    const authenticateDescription = [
        "Before inviting the provider in when the provider arrives, verify the provider's",
        "information by following these procedures."
    ]
    const authenticateIcon = "simple-icons:fusionauth";

    /// PROVIDER SAFETY DEFINITIONS
    const providerSafetyTitle = "Providing your service?"
    const providerSafetyDescription = [
        "As a design, safety is embedded in your providing experience. Whether you're an associate or an individual provider,",
        "we curate safety experiences that will serve you better."
    ]
    const providerSafetyIcon = "arcticons:providers"

    /// FEELING SAFE DEFINITIONS
    const feelingSafeTitle = "Feeling safe at all times."
    const feelingSafeDescription = [
        "As an associate or a provider, safety is designed within your experience. So, you'd always have",
        "peace of mind wherever you are going to."
    ]
    const feelingSafeIcon = "solar:safe-square-bold-duotone"

    /// AUTHENTICATE STEPS
    const authenticateSteps: IListView[] = [
        {
            header: "Step 1",
            description: [
                "Tell the provider to call out the pin code sent to the provider's trip dashboard or sms when the trip was",
                "initiated. If the code matches the one in the app, you are almost there."
            ],
            color: Theme.primary,
            image: "hugeicons:security-password"
        },
        {
            header: "Step 2",
            description: [
                "Match the profile photo of the provider with the one in the app.",
                "Also feel free to verify the provider's profile information"
            ],
            color: Theme.primary,
            image: "flowbite:profile-card-solid"
        },
    ]

    /// USER STEPS
    const userSteps: IListView[] = [
        {
            header: "Match the profile",
            description: [
                "Always use the photo in the trip dashboard to match the person on ground against who requested for",
                "your services. Never assume but be cautious."
            ],
            color: Theme.primary,
            image: "tabler:progress-check"
        },
        {
            header: "Verify with code",
            description: [
                "Always tell the provider to call out the authentication code in the provider's trip dashboard.",
                "Once verified, you then invite the provider in to your house or office. Be sure to get that verification",
                "before you continue."
            ],
            color: Theme.primary,
            image: "solar:lock-password-unlocked-bold-duotone"
        },
    ]

    /// PROVIDER STEPS
    const providerSteps: IListView[] = [
        {
            header: "Match the profile",
            description: [
                "Always use the photo in the trip dashboard to match the person on ground against who requested for",
                "your services. Never assume but be cautious."
            ],
            color: Theme.primary,
            image: "fluent:match-app-layout-24-filled"
        },
        {
            header: "Verify with code",
            description: [
                "Always tell the user to verify the trip by you calling out the authentication code in the trip dashboard",
                "to the user. Once verified, you will get a notification of such update. Be sure to get that verification",
                "before you continue."
            ],
            color: Theme.primary,
            image: "mingcute:safe-flash-fill"
        },
    ]

    /// FEELING SAFE STEPS
    const safetySteps: IListView[] = [
        {
            header: "Inclusive community",
            description: [
                "There is an inclusive community dedicated towards ensuring safe services wherever you are.",
                "Join the SG Community to also propose your ideas on how we can upgrade our safety measures."
            ],
            color: Theme.primary,
            image: "fluent:people-community-32-light"
        },
        {
            header: "Safety features",
            description: [
                "Share your location to your friends, families and loved ones in order to have a second eye",
                "watching your back. As an associate provider, your business administration can watch your live location",
                "while you go on your trip."
            ],
            color: Theme.primary,
            image: "ic:baseline-share-location"
        },
    ]

    /// SAFETY ROADMAP STEPS
    const roadmapSteps: IListView[] = [
        {
            header: "Emergency Contacts",
            description: [
                "We are working towards making it possible for you to add contacts that Serch can reach out to",
                "incase of emergencies resulting from where Serch cannot reach out to you after some tries."
            ],
            color: Theme.primary,
            image: "hugeicons:contact-book"
        },
        {
            header: "Device Audio/Sensors",
            description: [
                "The Serch team is working towards implementing sensor and audio listening which will enable us",
                "detect the severity of your body movement or sound in order to take the necessary security actions needed.",
            ],
            color: Theme.primary,
            image: "icons8:sensor"
        },
        {
            header: "Local Security Agencies",
            description: [
                "We are still working towards the inclusive support of the local security agencies within your location,",
                "state and country. This will aid in faster reach when dealing with security issues.",
            ],
            color: Theme.primary,
            image: "map:insurance-agency"
        },
    ]

    /// EXTENDING SAFETY STEPS
    const extendingSteps: IListView[] = [
        {
            header: "2-way rating",
            description: [
                "Giving feedback is important. Low -rated trips are logged, and users | guests | providers |",
                "associate provider | businesses may be removed to protect the community.",
            ],
            color: Theme.primary,
            image: "solar:star-bold-duotone"
        },
        {
            header: "GPS Tracking",
            description: [
                "All service trips are tracked from start to finish, so there's a record when something happens.",
            ],
            color: Theme.primary,
            image: "icon-park-solid:gps"
        },
        {
            header: "24/5 Help and Support",
            description: [
                "Whether it is a quick question, an incident to report, or an issue that we need to know,",
                "it's easy to get the help and assistance you need. Access 24/7 help and support from the app",
            ],
            color: Theme.primary,
            image: "solar:help-bold-duotone"
        },
        {
            header: "Safety Hub",
            description: [
                "Visit the in-app safety hub to see what we are doing to keep your service trip safe at all times.",
                "You can tap on the safety icon, during a trip, to see what you can do.",
            ],
            color: Theme.primary,
            image: "simple-icons:artifacthub"
        },
    ]

    return (
        <Layout>
            <Title title="Safety Guidelines" description='Learn how to be safe when using the Serch platform' />
            {/* FIRST SECTION - HEADER */}
            <Container padding={imageBackgroundPadding} width='100%' height={imageBackgroundHeight} backgroundColor="none" style={{
                backgroundImage: `url(${Asset.countries.background})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <Text text="Your safety first" color={Theme.secondary} size={isDesktop ? 54 : 32} weight='bold' />
                <Text
                    text={[
                        "We want you to request, get services and provide services without any",
                        "worry of your safety. This is why we are committed to providing a",
                        "state-of-the-art safety precautions and features."
                    ].join(" ")}
                    color={Theme.secondary}
                    size={16}
                />
            </Container>
            {/* SECOND SECTION - SAFETY EXPERIENCE FOR USERS/GUESTS */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Safety built in your requesting experience"
                    />
                    <SizedBox height={70} />
                    <Container backgroundColor={Theme.primaryLight} padding="24px">
                        <Column>
                            <Responsive desktop={
                                <Row crossAxis="center">
                                    <TextBlock
                                        title={userSafetyTitle}
                                        description={userSafetyDescription}
                                        color={Theme.primary}
                                        isMobile={false}
                                        isDesktop={isDesktop}
                                    />
                                    <SizedBox width={30} />
                                    <Expanded>
                                        <IconBlock
                                            icon={userSafetyIcon}
                                            backgroundColor={Theme.appbarDark}
                                            color={Theme.secondary}
                                            height={400}
                                            width={width <= 1200 ? 450 : 600}
                                        />
                                    </Expanded>
                                </Row>
                            }>
                                <Column crossAxis="flex-start" mainAxisSize="max">
                                    <Padding all={28}>
                                        <TextBlock
                                            title={userSafetyTitle}
                                            description={userSafetyDescription}
                                            color={Theme.primary}
                                            isMobile
                                            isDesktop={false}
                                        />
                                    </Padding>
                                    <IconBlock
                                        icon={userSafetyIcon}
                                        backgroundColor={Theme.appbarDark}
                                        color={Theme.secondary}
                                        width="100%"
                                        height={280}
                                        padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                                    />
                                </Column>
                            </Responsive>
                            <SizedBox height={70} />
                            <SafetyStep steps={userSteps} />
                        </Column>
                    </Container>
                </Column>
            </Container>
            {/* THIRD SECTION - AUTHENTICATE */}
            <Container backgroundColor={Theme.secondary} padding={isDesktop ? `56px ${width <= 1110 ? '100px' : '140px'}` : isMobile ? "" : "56px 86px"} width="100%">
                <Column>
                    <Responsive desktop={
                        <Row crossAxis="center">
                            <TextBlock
                                title={authenticateTitle}
                                description={authenticateDescription}
                                color={Theme.primary}
                                isMobile={false}
                                isDesktop={isDesktop}
                            />
                            <SizedBox width={30} />
                            <Expanded>
                                <IconBlock
                                    icon={authenticateIcon}
                                    backgroundColor={Theme.appbarLight}
                                    color={Theme.primary}
                                    height={400}
                                    width={width <= 1200 ? 450 : 600}
                                />
                            </Expanded>
                        </Row>
                    }>
                        <Column crossAxis="flex-start" mainAxisSize="max">
                            <Padding all={28}>
                                <TextBlock
                                    title={authenticateTitle}
                                    description={authenticateDescription}
                                    color={Theme.primary}
                                    isMobile
                                    isDesktop={false}
                                />
                            </Padding>
                            <IconBlock
                                icon={authenticateIcon}
                                backgroundColor={Theme.appbarLight}
                                color={Theme.primary}
                                width="100%"
                                height={280}
                                padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                            />
                        </Column>
                    </Responsive>
                    <SizedBox height={70} />
                    {isMobile ? (
                        <Padding all={24}><SafetyStep steps={authenticateSteps} /></Padding>
                    ) : (<SafetyStep steps={authenticateSteps} />)}
                </Column>
            </Container>
            {/* FOURTH SECTION - SAFE KEEPING */}
            <Container backgroundColor="#242424" padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Keeping you safe is not just a thing for us"
                    />
                    <SizedBox height={40} />
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 16 : 20}
                        text={[
                            "We make it our priority to make sure that both the provider and the person requesting",
                            "for the service, whether a guest, user or requesting for someone else, are always safe",
                            "when using our platforms. We play our part, and we expect you to play yours too."
                        ].join(" ")}
                    />
                    <SizedBox height={20} />
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 16 : 20}
                        text={[
                            "Our Safety-Guard community and Serch helps in streamlining how",
                            "safety is being tackled in Serch. Any person who doesn't follow",
                            "our community guidelines, may be at the risk of being removed from the platform."
                        ].join(" ")}
                    />
                    <SizedBox height={40} />
                    <Container width={230}>
                        <UnderlinedButton
                            text="Read our community guidelines"
                            textColor={Theme.secondary}
                            textSize={isMobile ? 14 : 16}
                            link={Routing.getRoute(Routing.instance.legal, {slug: "community-guidelines"})}
                            withArrow={false}
                            showLine
                            iconSize={1}
                            isBlank
                        />
                    </Container>
                </Column>
            </Container>
            {/* FIFTH SECTION - SAFETY EXPERIENCE FOR PROVIDERS/ASSOCIATES */}
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Safety built in your providing experience"
                    />
                    <SizedBox height={70} />
                    <Container backgroundColor={Theme.primaryLight} padding="24px">
                        <Column>
                            <Responsive desktop={
                                <Row crossAxis="center">
                                    <TextBlock
                                        title={providerSafetyTitle}
                                        description={providerSafetyDescription}
                                        color={Theme.primary}
                                        isMobile={false}
                                        isDesktop={isDesktop}
                                    />
                                    <SizedBox width={30} />
                                    <Expanded>
                                        <IconBlock
                                            icon={providerSafetyIcon}
                                            backgroundColor={Theme.appbarDark}
                                            color={Theme.secondary}
                                            height={400}
                                            width={width <= 1200 ? 450 : 600}
                                        />
                                    </Expanded>
                                </Row>
                            }>
                                <Column crossAxis="flex-start" mainAxisSize="max">
                                    <Padding all={28}>
                                        <TextBlock
                                            title={providerSafetyTitle}
                                            description={providerSafetyDescription}
                                            color={Theme.primary}
                                            isMobile
                                            isDesktop={false}
                                        />
                                    </Padding>
                                    <IconBlock
                                        icon={providerSafetyIcon}
                                        backgroundColor={Theme.appbarDark}
                                        color={Theme.secondary}
                                        width="100%"
                                        height={280}
                                        padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                                    />
                                </Column>
                            </Responsive>
                            <SizedBox height={70} />
                            <SafetyStep steps={providerSteps} />
                        </Column>
                    </Container>
                </Column>
            </Container>
            {/* SIXTH SECTION - FEELING SAFE */}
            <Container backgroundColor={Theme.secondary} padding={isDesktop ? `56px ${width <= 1110 ? '100px' : '140px'}` : isMobile ? "" : "56px 86px"} width="100%">
                <Column>
                    <Responsive desktop={
                        <Row crossAxis="center">
                            <TextBlock
                                title={feelingSafeTitle}
                                description={feelingSafeDescription}
                                color={Theme.primary}
                                isMobile={false}
                                isDesktop={isDesktop}
                            />
                            <SizedBox width={30} />
                            <Expanded>
                                <IconBlock
                                    icon={feelingSafeIcon}
                                    backgroundColor={Theme.primary}
                                    color={Theme.primaryLight}
                                    height={400}
                                    width={width <= 1200 ? 450 : 600}
                                />
                            </Expanded>
                        </Row>
                    }>
                        <Column crossAxis="flex-start" mainAxisSize="max">
                            <Padding all={28}>
                                <TextBlock
                                    title={feelingSafeTitle}
                                    description={feelingSafeDescription}
                                    color={Theme.primary}
                                    isMobile
                                    isDesktop={false}
                                />
                            </Padding>
                            <IconBlock
                                icon={feelingSafeIcon}
                                backgroundColor={Theme.primary}
                                color={Theme.primaryLight}
                                width="100%"
                                height={280}
                                padding={width <= 380 ? "60px 20px" : width <= 550 ? "100px 80px" : "75px"}
                            />
                        </Column>
                    </Responsive>
                    <SizedBox height={70} />
                    {isMobile ? (
                        <Padding all={24}><SafetyStep steps={safetySteps} /></Padding>
                    ) : (<SafetyStep steps={safetySteps} />)}
                </Column>
            </Container>
            {/* SEVENTH SECTION - COMMON SAFETY PRACTICES */}
            <Container backgroundColor={Theme.appbarLight} padding={isDesktop ? `56px ${width <= 1110 ? '100px' : '140px'}` : isMobile ? "24px" : "56px 86px"} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Extending your safety experience"
                    />
                    <SizedBox height={20} />
                    <Text
                        color={Theme.primary}
                        size={16}
                        opacity={0.6}
                        text={[
                            "Whether you are a user/guest, provider/associate provider, you can extend your safety experience beyond that",
                            "personal to your account type."
                        ].join(" ")}
                    />
                    <SizedBox height={70} />
                    <SafetyStep steps={extendingSteps} />
                </Column>
            </Container>
            {/* EIGHTH SECTION - SAFETY ROADMAP */}
            <Container backgroundColor={Theme.secondary} padding={isDesktop ? `56px ${width <= 1110 ? '100px' : '140px'}` : isMobile ? "24px" : "56px 86px"} width="100%">
                <Column>
                    <Text
                        color={Theme.primary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Building powerful safety experiences for you"
                    />
                    <SizedBox height={20} />
                    <Text
                        color={Theme.primary}
                        size={16}
                        opacity={0.6}
                        text={[
                            "As safety is an important topic for us at Serch, we have our future safety techniques which we will",
                            "be implementing or refining as we evaluate the happenings around our platforms."
                        ].join(" ")}
                    />
                    <SizedBox height={70} />
                    <SafetyStep steps={roadmapSteps} />
                </Column>
            </Container>
            <Container></Container>
        </Layout>
    )
}

interface SafetyStepProps {
    steps: IListView[];
}

const SafetyStep: React.FC<SafetyStepProps> = observer(({ steps }) => {
    const width = useWidth();
    const { isMobile } = useDesign()

    return (
        <Wrap runSpacing={80} spacing={30}>
            {steps.map((item, index) => {
                return (
                    <Container backgroundColor="transparent" width={width < 600 ? '100%' : width < 1000 ? "47%" : "48%"} key={index}>
                        <Column>
                            <Icon icon={item.image ?? ""} height="36px" width="36px" color={item.color} />
                            <SizedBox height={30} />
                            <Text
                                color={item.color}
                                size={isMobile ? 13 : 15}
                                weight='600'
                                text={item.header}
                            />
                            <SizedBox height={10} />
                            <Text
                                color={item.color}
                                size={isMobile ? 13 : 15}
                                opacity={0.6}
                                text={item.description.join(" ")}
                            />
                        </Column>
                    </Container>
                )
            })}
        </Wrap>
    )
})