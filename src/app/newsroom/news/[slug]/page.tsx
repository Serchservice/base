import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Center, Column, Container, Image, Padding, Positioned, Row, Shimmer,
    SizedBox, Text, Theme, UnderlinedButton, useDesign, useWidth, Utility
} from "@serchservice/web-ui-kit";
import { RouteInterface } from "@serchservice/web-ui-kit/build/src/interfaces/Base";
import { observer } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router-dom";
import NewsDb from "../../../../backend/database/NewsDb";
import Routing from "../../../../configuration/Routing";
import Layout from "../../../../layout/Layout";
import Title from "../../../widgets/Title";
import NewsContent from "../../widgets/NewsContent";
import { Article, ContentlyBuilder } from "@serchservice/contently";
import { contently } from "../../../../App";

export const NewsRoute: RouteInterface = {
    path: "/newsroom/news/:slug",
    pathView: ({slug = ""}) => `/newsroom/news/${slug}`,
    page: <NewsPage />
}

export default function NewsPage() {
    const { slug } = useParams()
    const width = useWidth();
    const { isMobile } = useDesign()

    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [news, setNews] = React.useState<Article | undefined>();

    /// DEFINITIONS
    const displayWidth: string | number = width < 600 ? '100%'
        : width < 1000 ? (width / 2) - 50
        : (width / 3) - 40

    React.useEffect(() => {
        setIsLoading(true)

        async function fetch() {
            setIsLoading(true)
            const response = await contently.news.withSlug(slug)
            setIsLoading(false)

            if(response) {
                setNews(response)
            }
        }

        fetch()
    }, [ slug ])

    const title = (): JSX.Element => {
        if(isLoading) {
            return(<Title title="Reading the news information" description="It takes a moment to understand the news data" />)
        } else if(!isLoading && news) {
            return (
                <Title
                    isBlog={true}
                    title={news.title}
                    description={news.description}
                    image={news.image.file.url}
                    keywords={news.categories}
                    url={Routing.getRoute(Routing.instance.blogs, {slug: slug})}
                />
            )
        } else {
            return(<Title title="News not found" description="Seems like this news does not exist in our library" />)
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
        } else if(!isLoading && news) {
            return <News news={news} width={width} displayWidth={displayWidth} />
        } else {
            return <NewsNotFound displayWidth={displayWidth} />
        }
    }

    return (
        <Layout type="news">
            {title()}
            <Container backgroundColor={Theme.primary} padding="88px 66px 144px">
                <Text text="The Press" size={isMobile ? 32 : 54} weight='bold' color={Theme.secondary} />
                <SizedBox height={20} />
                <Text text="Read all about what the press says about Serch" size={22} color={Theme.secondary} />
            </Container>
            <Container backgroundColor={Theme.secondary} padding="24px">
                {render()}
            </Container>
        </Layout>
    )
}

interface ResponsiveViewProps {
    displayWidth: number | string;
}

interface NewsProps extends ResponsiveViewProps {
    news: Article;
    width: number;
}

const News: React.FC<NewsProps> = observer(({ news, width, displayWidth }) => {
    const { isMobile } = useDesign();

    return (
        <Column>
            <Container style={{position: "relative"}} width="100%" height={isMobile ? 400 : 500}>
                <Image image={news.image.file.url} height='100%' width="100%" />
                <Positioned bottom={0}>
                    <Container backgroundColor={Theme.primary} padding="12px" width="auto">
                        <Column>
                            <Text text={Utility.formatDate(news.date.toDateString())} size={12} color={Theme.hint} />
                            <SizedBox height={6} />
                            <Text text="Serch | News" size={15} color={Theme.secondary} opacity={0.5} />
                            <SizedBox height={20} />
                            <Text text={news.title} size={isMobile ? 15 : 18} color={Theme.secondary} weight='bold' />
                            <SizedBox height={8} />
                            <Text text={`Written by ${news.author}`} size={14} color={Theme.secondary} />
                        </Column>
                    </Container>
                </Positioned>
            </Container>
            {news.content && (
                <React.Fragment>
                    <Padding all={isMobile ? 12 : 56}>
                        <ContentlyBuilder content={news.content} />
                    </Padding>
                </React.Fragment>
            )}
            {news.relatedArticles.length > 0 && (
                <React.Fragment>
                    <SizedBox height={160} />
                    <Text
                        text="Recent News"
                        size={isMobile ? 18 : 22}
                        color={Theme.primary}
                    />
                    <SizedBox height={20} />
                    {news.relatedArticles.slice(0, 4).map((news, index) => {
                        return (
                            <NewsContent
                                key={index}
                                news={news}
                                displayWidth={displayWidth}
                                width={width}
                                showDescription={false}
                            />
                        )
                    })}
                </React.Fragment>
            )}
            <Container width={100}>
                <UnderlinedButton
                    text="Back to News"
                    textColor={Theme.primary}
                    textSize={15}
                    link={Routing.instance.newsList.path}
                    withArrow={false}
                    showLine
                    iconSize={1.5}
                />
            </Container>
        </Column>
    )
})

const NewsNotFound: React.FC<ResponsiveViewProps> = observer(({ displayWidth }) => {
    const { slug } = useParams()
    const width = useWidth();
    const { isMobile, isDesktop } = useDesign();

    const [recentNews] = React.useState<Article[]>(NewsDb.sorted.filter((b) => b.slug !== slug))

    const information = [
        "Oops!! We couldn't find the news you were looking for.",
        "This might have been removed or didn't exist at all in our library.",
        "Going back to our news list is recommended when this happens"
    ]

    return (
        <React.Fragment>
            <Row mainAxis="flex-start" crossAxis="flex-start">
            <UnderlinedButton
                text="Back to News"
                textColor={Theme.primary}
                textSize={15}
                styles={{width: "auto"}}
                link={Routing.instance.newsList.path}
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
            <SizedBox height={80} />
            {recentNews.length > 0 && (
                <React.Fragment>
                    <SizedBox height={80} />
                    <Text
                        text="Recent News"
                        size={isMobile ? 18 : 22}
                        color={Theme.primary}
                    />
                    <SizedBox height={20} />
                    {recentNews.slice(0, 4).map((news, index) => {
                        return (
                            <NewsContent
                                key={index}
                                news={news}
                                displayWidth={displayWidth}
                                width={width}
                                showDescription={false}
                            />
                        )
                    })}
                </React.Fragment>
            )}
        </React.Fragment>
    )
})