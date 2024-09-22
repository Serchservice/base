import { useWidth, useDesign, Column, Shimmer, SizedBox, Wrap, Theme, Container, Row, Expanded, Field, Text, Utility } from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { RouteInterface } from "../../../configuration/Route";
import Routing from "../../../configuration/Routing";
import Layout from "../../../layout/Layout";
import Title from "../../widgets/Title";
import { contently } from "../../../App";
import { Legal, LegalGroup } from "@serchservice/contently";

export const LegalHubRoute: RouteInterface = {
    path: "/hub/legal",
    page: <LegalHubPage />
}

export default function LegalHubPage() {
    const width = useWidth();
    const { isMobile, isDesktop } = useDesign()

    /// DEFINITIONS
    const generalPadding = isMobile ? "120px 28px" : isDesktop ? `120px ${width <= 1110 ? '100px' : '140px'}` : "120px 56px";

    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [legalGroups, setLegalGroups] = React.useState<LegalGroup[]>([])
    const [legals, setLegals] = React.useState<LegalGroup[]>([])

    React.useEffect(() => {
        async function fetch() {
            setIsLoading(true)
            const response = await contently.legal.all()
            setIsLoading(false)

            if(response) {
                setLegalGroups(response)
                setLegals(response)
            }
        }

        fetch()
    }, [ ])

    const handleSearch = (query: string) => {
        const response = contently.legal.handleSearch(query, legalGroups)
        if(response) {
            setLegals(response);
        }
    }

    const render = (): JSX.Element => {
        const displayWidth: string | number = width < 600 ? '100%'
            : width < 850 ? (width / 2) - 50
            : width < 1000 ? (width / 3) - 50
            : (width / 4) - 40
        const align = isMobile ? 'center' : 'flex-start';

        if(isLoading) {
            return (
                <React.Fragment>
                    {Utility.itemGenerate(2).map((_, index) => {
                        return (
                            <Column key={index}>
                                <Shimmer key={index} height={30} width={150} />
                                <SizedBox height={20} />
                                <Wrap runSpacing={30} spacing={30} crossAxisAlignment={align}>
                                    {Utility.itemGenerate(5).map((_, index) => {
                                        return <Shimmer key={index} height={250} width={displayWidth} />
                                    })}
                                </Wrap>
                                {legals.length - 1 !== index && (<SizedBox height={30} />)}
                            </Column>
                        )
                    })}
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    {legals.map((legal, index) => {
                        return (
                            <Column key={index}>
                                <Text text={legal.group} size={isMobile ? 15 : 18} color={Theme.primary} weight='bold' />
                                <SizedBox height={20} />
                                <Wrap runSpacing={30} spacing={30}>
                                    {legal.legals.map((legal, index) => (
                                        <LegalView key={index} legal={legal} displayWidth={displayWidth} />
                                    ))}
                                </Wrap>
                                {legals.length - 1 !== index && (<SizedBox height={30} />)}
                            </Column>
                        )
                    })}
                </React.Fragment>
            )
        }
    }

    return (
        <Layout>
            <Title title="Legal Hub" description='Serch policies and guiding rules' />
            {/* FIRST SECTION - HEADER */}
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Text text="Legal Hub | Serch" color={Theme.secondary} size={isDesktop ? 54 : 32} weight='bold' />
                <Text
                    text={[
                        "Here you'll find legal information and resources for using the Serch platform.",
                        "We recommend going through these documents before you engage in any of our platforms."
                    ].join(" ")}
                    color={Theme.secondary}
                    size={16}
                />
                <SizedBox height={40} />
                <Row crossAxis="center">
                    <Expanded>
                        <Field
                            height={isMobile ? 40 : 60}
                            fontSize={isMobile ? 16 : 24}
                            color={Theme.secondary}
                            showBorder={false}
                            needLabel={false}
                            isRequired={false}
                            needSpacer={false}
                            onChange={e => handleSearch(e)}
                            placeHolder="Tap to search for keywords and any other policy"
                        />
                    </Expanded>
                </Row>
            </Container>
            {/* SECOND SECTION - LEGALS */}
            <Container backgroundColor={Theme.secondary} padding="24px" width="100%">
                {render()}
            </Container>
        </Layout>
    )
}

interface LegalViewProps {
    legal: Legal;
    displayWidth: number | string;
}

const LegalView: React.FC<LegalViewProps> = observer(({legal, displayWidth}) => {
    const [elevation, setElevation] = React.useState<number>(2)
    const { isMobile } = useDesign()

    return (
        <Link to={Routing.getRoute(Routing.instance.legal, {slug: legal.slug})}>
            <Container width={displayWidth} backgroundColor={Theme.secondary} elevation={elevation} onHover={v => v ? setElevation(10) : setElevation(2)}>
                <Container width="100%" padding="12px">
                    <Text text="Serch | Legal" size={15} color={Theme.primary} opacity={0.5} />
                    <SizedBox height={20} />
                    <Text text={legal.header} size={isMobile ? 15 : 18} color={Theme.primary} weight='bold' />
                    <SizedBox height={10} />
                    <Text text={legal.description} size={13.5} color={Theme.primary} opacity={0.6} />
                </Container>
                <SizedBox height={30} />
                <Container width="100%" backgroundColor={Theme.appbarDark} padding="12px">
                    <Wrap runSpacing={12} spacing={10} crossAxisAlignment="center">
                        {legal.categories.map((category, index) => {
                            return (
                                <Text
                                    key={index}
                                    text={category}
                                    size={12.5}
                                    color={Theme.secondary}
                                    opacity={0.6}
                                />
                            )
                        })}
                    </Wrap>
                </Container>
            </Container>
        </Link>
    )
})