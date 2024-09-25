import {
    ActionButton,
    ActionDialog,
    ButtonView,
    CircularIconButton,
    Column,
    Container,
    DrawerDialog,
    HoveredButton,
    Image,
    Navigate,
    Padding,
    Responsive,
    Row,
    SizedBox,
    Spacer,
    Text,
    Theme,
    UnderlinedButton,
    useDesign,
    Wrap
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import Asset from "../assets/Asset";
import { LinkConfig } from "../configuration/ButtonView";
import Routing from "../configuration/Routing";
import { ConnectWithUs, JoinTheConversation } from "./Commons";
import { HeaderProps, ModalProps } from "./Interfaces";
import { PDFWebView } from "@serchservice/pdf-webview";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC<HeaderProps> = observer(({type = 'default'}) => {
    const [isCommonDrawerOpen, setIsCommonDrawerOpen] = React.useState<boolean>(false);
    const { isMobile } = useDesign()

    const padding = isMobile ? "24px" : "32px 48px"
    const logoWidth = isMobile ? 70 : 100;

    /// BLOG QUICK LINKS
    const blogLinks: ButtonView[] = [
        { path: Routing.instance.aboutUs.path, header: "Company" },
        { path: Routing.instance.leadership.path, header: "Leadership" },
        { path: Routing.instance.mediaAndAsset.path, header: "Media assets" },
        { path: Routing.instance.newsroom.path, header: "Newsroom" },
    ];

    /// NEWSROOM QUICK LINKS
    const newsroomLinks: ButtonView[] = [
        { path: Routing.instance.aboutUs.path, header: "Company" },
        { path: Routing.instance.leadership.path, header: "Leadership" },
        { path: Routing.instance.mediaAndAsset.path, header: "Media assets" },
        { path: Routing.instance.blogs.path, header: "Blog" },
    ];

    /// OPTION LINKS
    const optionLinks: ButtonView[] = [
        { path: Routing.instance.aboutUs.path, header: "About Us" },
        { path: Routing.instance.blogs.path, header: "Blog" },
        { path: Routing.instance.newsroom.path, header: "Newsroom" },
        { path: Routing.instance.marketplace.path, header: "Marketplace" },
        { path: Routing.instance.career.path, header: "Career" },
    ]

    const [isGuidelineOpen, setIsGuidelineOpen] = React.useState(false);

    if(type === 'asset') {
        return (
            <>
                <Container backgroundColor={Theme.primary} padding={`160px ${isMobile ? '24px' : '56px'}`} width="100%">
                    <Column crossAxis="center" mainAxis="center">
                        <Link to={Routing.instance.home.path}>
                            <Image image={Asset.logo.white} width={logoWidth} objectFit="contain" />
                        </Link>
                        <SizedBox height={30} />
                        <Text text="Serchservice Inc." weight='bold' size={16} color={Theme.secondary} />
                        <SizedBox height={4} />
                        <Text text="Established since 2023" size={13} color={Theme.secondary} />
                    </Column>
                    <Column>
                        <SizedBox height={isMobile ? 200 : 300} />
                        <Text
                            text="Media and Assets"
                            weight='bolder'
                            size={isMobile ? 32 : 64}
                            color={Theme.secondary}
                        />
                        <SizedBox height={4} />
                        <Text
                            text="Before you download any asset, read our brand guidelines below"
                            size={13}
                            color={Theme.secondary}
                        />
                        <Container width={isMobile ? '100%' : '40%'}>
                            <UnderlinedButton
                                text="Our brand guidelines"
                                textColor={Theme.secondary}
                                textSize={13}
                                onTap={() => setIsGuidelineOpen(true)}
                                showLine
                                withArrow
                                iconSize={1.4}
                                isBlank
                            />
                        </Container>
                    </Column>
                </Container>
                <CommonDrawer
                    isOpen={isCommonDrawerOpen}
                    handleClose={() => setIsCommonDrawerOpen(false)}
                    quickLinks={optionLinks}
                />
                <BrandGuideline isOpen={isGuidelineOpen} handleClose={() => setIsGuidelineOpen(false)} />
            </>
        )
    } else if(type === 'blog' || type === 'news') {
        const links = type === 'blog' ? blogLinks : newsroomLinks;

        return (
            <>
                <Container backgroundColor={Theme.primary} padding={padding} width="100%">
                    <Row crossAxis="center">
                        <Row crossAxis="center" mainAxisSize="min">
                            <Text text="Serch" weight='bolder' size={26} color={Theme.secondary} />
                            <SizedBox width={6} />
                            <Text text={type === 'blog' ? "BlogHouse" : "Newsroom"} weight='200' size={25} color={Theme.secondary} />
                        </Row>
                        <Spacer />
                        <Wrap runSpacing={10}>
                            <Responsive
                                phone={
                                    <CircularIconButton
                                        icon="solar:hamburger-menu-broken"
                                        title="Menu"
                                        size={1}
                                        backgroundColor={Theme.primaryDark}
                                        color={Theme.secondary}
                                        onClick={() => setIsCommonDrawerOpen(true)}
                                    />
                                }
                            >
                                <Wrap runSpacing={20} spacing={20}>
                                    {links.map((view, index) => {
                                        return (
                                            <HoveredButton
                                                key={index}
                                                text={view.header!}
                                                textColor={Theme.primaryLight}
                                                textSize={14}
                                                link={view.path}
                                                opacity={0.7}
                                            />
                                        )
                                    })}
                                </Wrap>
                            </Responsive>
                        </Wrap>
                    </Row>
                </Container>
                <CommonDrawer
                    isOpen={isCommonDrawerOpen}
                    handleClose={() => setIsCommonDrawerOpen(false)}
                    quickLinks={links}
                />
            </>
        )
    } else {
        return (
            <>
                <Container backgroundColor={Theme.primary} padding={padding} width="100%">
                    <Row crossAxis="center">
                        <Link to={Routing.instance.home.path}>
                            <Image image={Asset.logo.white} width={logoWidth} objectFit="contain" />
                        </Link>
                        <Spacer />
                        <Wrap runSpacing={10}>
                            <Responsive
                                phone={
                                    <CircularIconButton
                                        icon="solar:hamburger-menu-broken"
                                        title="Menu"
                                        size={1}
                                        backgroundColor={Theme.primaryDark}
                                        color={Theme.secondary}
                                        onClick={() => setIsCommonDrawerOpen(true)}
                                    />
                                }
                            >
                                <ActionButton
                                    padding="8px 12px"
                                    title="Help"
                                    backgroundColor={Theme.primaryDark}
                                    color={Theme.secondary}
                                    onClick={() => Navigate.openInNewTab(LinkConfig.instance.help)}
                                />
                                <SizedBox width={10} />
                                <ActionButton
                                    padding="8px 12px"
                                    title="Download"
                                    backgroundColor={Theme.primaryDark}
                                    color={Theme.secondary}
                                    onClick={() => Navigate.openInNewTab(Routing.instance.platform.path)}
                                />
                            </Responsive>
                        </Wrap>
                    </Row>
                </Container>
                <CommonDrawer
                    isOpen={isCommonDrawerOpen}
                    handleClose={() => setIsCommonDrawerOpen(false)}
                    quickLinks={optionLinks}
                />
            </>
        )
    }
})

interface CommonDrawerProps extends ModalProps, HeaderProps {
    quickLinks: ButtonView[]
}

const CommonDrawer: React.FC<CommonDrawerProps> = observer(({isOpen, handleClose, quickLinks, type}) => {
    const renderTitle = () => {
        if(type === 'blog' || type === 'news') {
            return (
                <Row crossAxis="center">
                    <Text text="Serch" weight='bolder' size={24} />
                    <SizedBox width={6} />
                    <Text text={type === 'blog' ? "BlogHouse" : "Newsroom"} weight='200' size={22} />
                </Row>
            )
        } else {
            return (
                <Link to={Routing.instance.home.path}>
                    <Image image={Asset.logo.white} width={70} objectFit="contain" />
                </Link>
            )
        }
    }

    return (
        <DrawerDialog isOpen={isOpen} handleClose={handleClose} position="right" width="100%" bgColor={Theme.primaryDark}>
            <Padding all={24}>
                <Column crossAxis="flex-start" mainAxisSize="max">
                    <Row crossAxis="center">
                        {renderTitle()}
                        <Spacer />
                        <CircularIconButton
                            icon="lets-icons:close-round"
                            title="Close"
                            size={1}
                            backgroundColor='transparent'
                            color={Theme.secondary}
                            onClick={handleClose}
                        />
                    </Row>
                    <SizedBox height={30} />
                    {quickLinks.map((view, index) => {
                        var isLast: boolean = quickLinks[quickLinks.length - 1] === view

                        return (
                            <Padding key={index} only={{ bottom: isLast ? 0 : 8.0 }}>
                                <HoveredButton
                                    text={view.header!}
                                    textColor={Theme.primaryLight}
                                    textSize={14}
                                    link={view.path}
                                    opacity={0.7}
                                />
                            </Padding>
                        )
                    })}
                    <SizedBox height={60} />
                    <JoinTheConversation />
                    <SizedBox height={60} />
                    <ConnectWithUs />
                </Column>
            </Padding>
        </DrawerDialog>
    )
})

// Correctly using forwardRef to handle the ref
const BrandGuideline: React.FC<ModalProps> = ({ isOpen, handleClose }) => {
    const { isMobile } = useDesign();

    return (
        <ActionDialog
            isOpen={isOpen}
            handleClose={handleClose}
            height="100%"
            width={isMobile ? "100%" : "90%"}
            header="Serch | Brand Guideline"
            description="See what our guideline says about our assets"
            color={Theme.secondary}
            fontSize={isMobile ? 24 : 30}
            mainStyles={{ padding: isMobile ? "24px" : "48px" }}
            radius={0}
        >
            <PDFWebView
                document={Asset.mediaAndAssets.guideline}
                scale={1}
                objectFit="contain"
                width="100%"
                height="100%"
                canvasHeight="100%"
                canvasWidth="100%"
                loader={
                    <Column crossAxis="center" mainAxis="center" style={{
                        flex: '0 0 auto',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column' as 'column',
                        justifyContent: 'center',
                    }}>
                        <Icon
                            icon={"line-md:loading-twotone-loop"}
                            style={{
                                width: isMobile ? "50px" : "100px",
                                height: isMobile ? "50px" : "100px",
                                color: Theme.secondary
                            }}
                        />
                    </Column>
                }
            />
        </ActionDialog>
    );
}

export default Header;