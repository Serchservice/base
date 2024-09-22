import React from "react";
import { observer } from "mobx-react-lite";
import { Column, Container, HoverLinkButton, SizedBox, Text, Theme, useDesign, useWidth } from "@serchservice/web-ui-kit";
import Routing from "../../configuration/Routing";

const CountriesInSerch: React.FC = observer(() => {
    const width = useWidth()
    const { isMobile, isDesktop } = useDesign()
    const generalPadding = isMobile ? "120px 28px" : isDesktop ? `120px ${width <= 1110 ? '100px' : '140px'}` : "120px 56px";

    return (
        <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
            <Container backgroundColor={Theme.appbarDark} padding={isMobile ? "24px" : "76px"} borderRadius="24px">
                <Column mainAxisSize="max" crossAxisSize="min" crossAxis="center">
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        text="Everywhere you are"
                    />
                    <SizedBox height={20} />
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                        text="View the cities and countries Serch is launched in."
                    />
                    <SizedBox height={70} />
                    <HoverLinkButton
                        value="Countries in Serch"
                        link={Routing.instance.countriesInSerch.path}
                        centered
                        backgroundColor={Theme.primaryDark}
                    />
                </Column>
            </Container>
        </Container>
    )
})

export default CountriesInSerch