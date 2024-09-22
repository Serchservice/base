import { TeamGroup } from "@serchservice/contently";
import { useWidth, useDesign, Utility, Container, Theme, Column, SizedBox, Wrap, Shimmer, UnderlinedButton, Text, Image } from "@serchservice/web-ui-kit";
import React from "react";
import { contently } from "../../App";
import TeamDb from "../../backend/database/TeamDb";
import { RouteInterface } from "../../configuration/Route";
import Layout from "../../layout/Layout";
import Title from "../widgets/Title";

export const LeadershipRoute: RouteInterface = {
    path: "/leadership",
    page: <LeadershipPage />
}

export default function LeadershipPage() {
    const width = useWidth();
    const { generalPadding, isMobile, isDesktop } = useDesign()

    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [group, setGroup] = React.useState<TeamGroup>(TeamGroup.empty());

    React.useEffect(() => {
        if (!TeamDb.isEmpty) {
            setIsLoading(false);
            setGroup(TeamDb.read);
        }

        async function fetch() {
            setIsLoading(true)
            const response = await contently.team.all()
            setIsLoading(false)

            if(response) {
                setGroup(response);
                TeamDb.set(response);
            }
        }

        fetch()
    }, [ ])

    const shimmerWidth = (width > 550 && width < 770) ? "45%" : isMobile ? "100%" : isDesktop ? "28%" : "32.5%"

    const renderExecutives = (): JSX.Element => {
        if(isLoading || group.executives.length > 0) {
            return(
                <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                    <Column>
                        <Text
                            color={Theme.primary}
                            size={isMobile ? 22 : isDesktop ? 32 : 28}
                            weight='bold'
                            text="Executive Team"
                        />
                        <SizedBox height={30} />
                        {renderExecutiveContent()}
                    </Column>
                </Container>
            )
        } else {
            return (<></>)
        }
    }

    const renderExecutiveContent = (): JSX.Element => {
        if(isLoading) {
            return (
                <Wrap runSpacing={40} spacing={30} crossAxisAlignment="center">
                    {Utility.itemGenerate(5).map((_, index) => {
                        return <Shimmer key={index} height={400} width={shimmerWidth} />
                    })}
                </Wrap>
            )
        } else {
            return (
                <Wrap runSpacing={40} spacing={30}>
                    {group.executives.map((item, index) => {
                        return (
                            <Container width={shimmerWidth} key={index}>
                                <Column>
                                    <Image image={item.image} width="100%" />
                                    <SizedBox  height={30} />
                                    <Text color={Theme.primary} size={isMobile ? 16 : 18} weight='bold' text={item.name} />
                                    <SizedBox height={10} />
                                    <Text color={Theme.primary} opacity={0.6} size={13} text={item.position} />
                                    <SizedBox height={20} />
                                    <UnderlinedButton
                                        text={`Read ${item.shortName}'s Bio`}
                                        textColor={Theme.primary}
                                        textSize={13}
                                        link={item.link}
                                        showLine
                                        withArrow
                                        iconSize={1.4}
                                        isBlank
                                    />
                                </Column>
                            </Container>
                        )
                    })}
                </Wrap>
            )
        }
    }

    const renderBoards = (): JSX.Element => {
        if(isLoading || group.boards.length > 0) {
            return (
                <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                    <Column>
                        <Text
                            color={Theme.primary}
                            size={isMobile ? 22 : isDesktop ? 32 : 28}
                            weight='bold'
                            text="Board of Directors"
                        />
                        <SizedBox height={30} />
                        {renderBoardContent()}
                    </Column>
                </Container>
            )
        } else {
            return (<></>)
        }
    }

    const renderBoardContent = (): JSX.Element => {
        if(isLoading) {
            return (
                <Wrap runSpacing={15} spacing={30} crossAxisAlignment="center">
                    {Utility.itemGenerate(5).map((_, index) => {
                        return <Shimmer key={index} height={45} width={shimmerWidth} />
                    })}
                </Wrap>
            )
        } else {
            return (
                <Wrap runSpacing={15} spacing={30}>
                    {group.boards.map((item, index) => {
                        return (
                            <Container key={index}>
                                <Column>
                                    <Text color={Theme.primary} size={isMobile ? 16 : 18} weight='bold' text={item.name} />
                                    <SizedBox height={10} />
                                    <Text color={Theme.primary} opacity={0.6} size={13} text={item.position} />
                                </Column>
                            </Container>
                        )
                    })}
                </Wrap>
            )
        }
    }

    return (
        <Layout>
            <Title title="Leadership" description='Serch governance and structure' />
            {renderExecutives()}
            {group.boards.length > 0 && group.executives.length > 0 && (<SizedBox height={60} />)}
            {renderBoards()}
        </Layout>
    )
}