import { Icon } from "@iconify/react/dist/iconify.js";
import {
    useWidth, useGo, Column, Theme, SizedBox, Shimmer, Container, Wrap,
    Spacer, CircularIconButton, Row, UnderlinedButton, Center, Padding,
    Text,
    Utility,
    useDesign
} from "@serchservice/web-ui-kit";
import { RouteInterface } from "@serchservice/web-ui-kit/build/src/interfaces/Base";
import { observer } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router-dom";
import { contently } from "../../../../App";
import Routing from "../../../../configuration/Routing";
import Layout from "../../../../layout/Layout";
import Title from "../../../widgets/Title";
import { ContentlyBuilder, Legal } from "@serchservice/contently";

export const LegalRoute: RouteInterface = {
    path: "/hub/legal/:slug",
    pathView: ({slug}) => `/hub/legal/${slug}`,
    page: <LegalPage />
}

export default function LegalPage() {
    const { slug } = useParams()
    const width = useWidth();
    const { isMobile } = useDesign()
    const go = useGo()

    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [legal, setLegal] = React.useState<Legal>()

    React.useEffect(() => {
        async function fetch() {
            setIsLoading(true)
            const response = await contently.legal.withSlug(slug)
            setIsLoading(false)

            if(response) {
                setLegal(response)
            }
        }

        fetch()
    }, [ slug ])

    const renderTitle = (): JSX.Element => {
        if(!isLoading && legal) {
            return (
                <Title
                    title={legal.header}
                    description={legal.description}
                    isBlog
                    keywords={legal.categories}
                    url={Routing.getRoute(Routing.instance.legal, {slug: legal.slug})}
                />
            )
        } else {
            const title = Utility.capitalizeFirstLetter(slug ?? "Legal Document").replaceAll("-", " ").replaceAll("_", "")

            return (
                <Title
                    title={title}
                    description={`Loading ${title}`}
                    isBlog
                    url={Routing.getRoute(Routing.instance.legal, {slug: slug})}
                />
            )
        }
    }

    const renderHeader = (): JSX.Element => {
        if(!isLoading && legal) {
            return (
                <Column mainAxisSize="min" crossAxisSize="min">
                    <Text text={legal.header} color={Theme.secondary} size={18} weight="bold" />
                    <SizedBox height={20} />
                    <Text text="Serch | Legal" size={15} color={Theme.secondary} opacity={0.5} />
                    <SizedBox height={10} />
                    <Text text={legal.description} size={13.5} color={Theme.secondary} opacity={0.6} />
                </Column>
            )
        } else {
            return (
                <Column mainAxisSize="min" crossAxisSize="min">
                    <Shimmer height={30} width={200} />
                    <SizedBox height={20} />
                    <Shimmer height={15} width={100} />
                    <SizedBox height={10} />
                    <Shimmer height={13} width={180} />
                </Column>
            )
        }
    }

    const render = (): JSX.Element => {
        if(isLoading) {
            return (
                <Column>
                    <Shimmer height={300} width="100%" />
                    <SizedBox height={50} />
                    <Shimmer height={30} width={width < 300 ? "100%" : 300} />
                    <SizedBox height={10} />
                    <Shimmer height={20} width={100} />
                    <SizedBox height={40} />
                    <Shimmer height={20} width={200} />
                    <SizedBox height={60} />
                    <Shimmer height={300} width="100%" />
                </Column>
            )
        } else if(!isLoading && legal && legal.legal) {
            return (<ContentlyBuilder content={legal.legal} />)
        } else {
            return (<LegalNotFound />)
        }
    }

    const buildHeader = (): JSX.Element => {
        return (
            <Container
                backgroundColor={Theme.primary}
                style={{
                    position: "sticky",
                    top: "0",
                    zIndex: "90"
                }}
                padding={"56px"}
                width="100%"
            >
                <Wrap runSpacing={20}>
                    {renderHeader()}
                    <Spacer />
                    <CircularIconButton
                        icon="solar:arrow-left-line-duotone"
                        title="Back"
                        onClick={() => go(Routing.instance.legalHub.path)}
                    />
                </Wrap>
            </Container>
        )
    }

    return (
        <Layout style={{overflow: "visible"}}>
            {renderTitle()}
            {/* FIRST SECTION - HEADER */}
            {buildHeader()}
            {/* SECOND SECTION - DOCUMENT VIEW */}
            <Container padding={isMobile ? "12px" : "56px"} width="100%">
                {render()}
            </Container>
        </Layout>
    )
}

const LegalNotFound: React.FC = observer(() => {
    const { isMobile, isDesktop } = useDesign()
    const { slug } = useParams()
    const title = Utility.capitalizeFirstLetter(slug ?? "").replaceAll("-", " ").replaceAll("_", "")

    const information = [
        `Oops!! We couldn't find the legal document - '${title}' you were looking for.`,
        "This might have been removed or didn't exist at all in our library.",
        "Going back to our legal hub is recommended when this happens"
    ]

    return (
        <React.Fragment>
            <Row mainAxis="flex-start" crossAxis="flex-start">
            <UnderlinedButton
                text="Back to Legal Hub"
                textColor={Theme.primary}
                textSize={15}
                styles={{width: "auto"}}
                link={Routing.instance.legalHub.path}
                withArrow={false}
                showLine
                iconSize={1.5}
            />
            </Row>
            <SizedBox height={120} />
            <Center>
                <Icon icon="ic:twotone-error" width="120px" height="120px" color={Theme.appbarDark} opacity={0.5} />
            </Center>
            <SizedBox height={30} />
            <Center>
                <Padding symmetric={{horizontal: isMobile ? 0 : isDesktop ? 120 : 80}}>
                    <Text
                        text={information.join(" ")}
                        size={isMobile ? 15 : 18}
                        color={Theme.primary}
                        opacity={0.7}
                    />
                </Padding>
            </Center>
        </React.Fragment>
    )
})