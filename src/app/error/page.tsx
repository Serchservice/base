import { useWidth, ButtonView, SizedBox, Padding, UnderlinedButton, Theme, useDesign, Image, Text } from "@serchservice/web-ui-kit";
import Asset from "../../assets/Asset";
import { RouteInterface } from "../../configuration/Route";
import Routing from "../../configuration/Routing";
import Layout from "../../layout/Layout";
import Title from "../widgets/Title";

export const PageNotFoundRoute: RouteInterface = {
    path: "*",
    page: <PageNotFoundPage />
}

export default function PageNotFoundPage() {
    const width = useWidth();
    const { isMobile } = useDesign()

    // ERROR QUICK LINKS
    const errorLinks: ButtonView[] = [
        { path: Routing.instance.home.path, header: "Head to serchservice.com" },
        { path: Routing.instance.career.path, header: "Head to careers" },
        { path: Routing.instance.business.path, header: "Head to Serch Business" },
        { path: Routing.instance.countriesInSerch.path, header: "See countries in Serch" },
        { path: Routing.instance.howItWorksWithProviding.path, header: "Understand how to flex your providing skills" },
        { path: Routing.instance.howItWorksWithRequesting.path, header: "See how requesting works" },
    ];

    return (
        <Layout isShortFooter>
            <Title title="Page not found" description="The page you were looking for was not found" />
            <Image image={Asset.error} width={width} />
            <SizedBox height={50} />
            <Padding all={24}>
                <Text
                    text="Sorry, we couldn't find the page you were looking for. Try re-entering the address, or choose one of the options below."
                    size={isMobile ? 20 : 28}
                    weight='bold'
                />
                <SizedBox height={50} />
                {errorLinks.map((view, index) => {
                    var isLast: boolean = errorLinks[errorLinks.length - 1] === view

                    return (
                        <Padding key={index} only={{ bottom: isLast ? 0 : 20 }}>
                            <UnderlinedButton
                                text={view.header!}
                                textColor={Theme.primary}
                                textSize={isMobile ? 14 : 18}
                                iconSize={2}
                                link={view.path}
                                showLine
                                withArrow
                            />
                        </Padding>
                    )
                })}
                <SizedBox height={50} />
            </Padding>
        </Layout>
    )
}