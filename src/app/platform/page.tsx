import { Container, Theme, Column, SizedBox, Text, useDesign } from "@serchservice/web-ui-kit"
import { RouteInterface } from "../../configuration/Route"
import Layout from "../../layout/Layout"
import AppDownload from "../widgets/AppDownload"
import Title from "../widgets/Title"

export const PlatformRoute: RouteInterface = {
    path: "/platform",
    page: <PlatformPage />
}

export default function PlatformPage() {
    const { isMobile, isDesktop, generalPadding } = useDesign()

    const padding = isMobile ? "" : "0 200px"

    return (
        <Layout>
            <Title title="Download" description="Get the Serch platforms like the User, Provider, Business app" />
            <Container backgroundColor={Theme.primary} padding={generalPadding} width="100%">
                <Column mainAxisSize="max" crossAxisSize="min" crossAxis="center" style={{position: "relative", padding: padding}}>
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                        opacity={0.6}
                        text={"DOWNLOAD"}
                    />
                    <SizedBox height={40} />
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 22 : isDesktop ? 32 : 28}
                        weight='bold'
                        align="center"
                        text={"Enhance your service efficiency, speed up repairs, enjoy more downtime, and boost your earnings."}
                    />
                    <SizedBox height={20} />
                    <Text
                        color={Theme.secondary}
                        size={isMobile ? 14 : 16}
                        opacity={0.6}
                        text={"Pick the product of your choice, install on your devices to get all our offerings"}
                    />
                </Column>
            </Container>
            {/* APP */}
            <AppDownload type="platform" />
        </Layout>
    )
}