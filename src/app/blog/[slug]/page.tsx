import { Icon } from "@iconify/react/dist/iconify.js";
import { Article, ContentlyBuilder } from "@serchservice/contently";
import {
    Center, Column, Container, Image, Padding, Positioned, Row, Shimmer,
    SizedBox, Text, Theme, UnderlinedButton, useDesign, useWidth, Utility
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router-dom";
import BlogDb from "../../../backend/database/BlogDb";
import Routing from "../../../configuration/Routing";
import Layout from "../../../layout/Layout";
import Title from "../../widgets/Title";
import BlogContent from "../widgets/BlogContent";
import { contently } from "../../../App";
import { RouteInterface } from "../../../configuration/Route";

export const BlogRoute: RouteInterface = {
    path: "/blogs/:slug",
    pathView: ({slug = ""}) => `/blogs/${slug}`,
    page: <BlogPage />
}

export default function BlogPage() {
    const { slug } = useParams()
    const width = useWidth();
    const { isMobile } = useDesign()

    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [blog, setBlog] = React.useState<Article | undefined>();

    /// DEFINITIONS
    const displayWidth: string | number = width < 600 ? '100%'
        : width < 1000 ? (width / 2) - 50
        : (width / 3) - 40

    React.useEffect(() => {
        setIsLoading(true)

        async function fetch() {
            setIsLoading(true)
            const response = await contently.blog.withSlug(slug)
            setIsLoading(false)

            if(response) {
                setBlog(response)
            }
        }

        fetch()
    }, [ slug ])

    const title = (): JSX.Element => {
        if(isLoading) {
            return(<Title title="Reading the blog information" description="It takes a moment to understand the blog data" />)
        } else if(!isLoading && blog) {
            return (
                <Title
                    isBlog={true}
                    title={blog.title}
                    description={blog.description}
                    image={blog.image.file.url}
                    keywords={blog.categories}
                    url={Routing.getRoute(Routing.instance.blogs, {slug: slug})}
                />
            )
        } else {
            return(<Title title="Blog not found" description="Seems like this blog does not exist in our library" />)
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
        } else if(!isLoading && blog) {
            return <Blog blog={blog} displayWidth={displayWidth} />
        } else {
            return <BlogNotFound displayWidth={displayWidth} />
        }
    }

    return (
        <Layout type="blog">
            {title()}
            <Container backgroundColor={Theme.primary} padding="88px 66px 144px">
                <Text text="Our Blogs" size={isMobile ? 32 : 54} weight='bold' color={Theme.secondary} />
                <SizedBox height={20} />
                <Text text="Gain more insight on Serch through our knowledge library" size={22} color={Theme.secondary} />
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

interface BlogProps extends ResponsiveViewProps {
    blog: Article;
}

const Blog: React.FC<BlogProps> = observer(({ blog, displayWidth }) => {
    const { isMobile } = useDesign()

    return (
        <Column>
            <Container style={{position: "relative"}} width="100%" height={isMobile ? 400 : 500}>
                <Image image={blog.image.file.url} height='100%' width="100%" />
                <Positioned bottom={0}>
                    <Container backgroundColor={Theme.primary} padding="12px" width="auto">
                        <Column>
                            <Text text={Utility.formatDate(blog.date.toDateString())} size={12} color={Theme.hint} />
                            <SizedBox height={6} />
                            <Text text="Serch | Blog" size={15} color={Theme.secondary} opacity={0.5} />
                            <SizedBox height={20} />
                            <Text text={blog.title} size={isMobile ? 15 : 18} color={Theme.secondary} weight='bold' />
                            <SizedBox height={8} />
                            <Text text={`Written by ${blog.author}`} size={14} color={Theme.secondary} />
                        </Column>
                    </Container>
                </Positioned>
            </Container>
            {blog.content && (
                <React.Fragment>
                    <Padding all={isMobile ? 12 : 56}>
                        <ContentlyBuilder content={blog.content} />
                    </Padding>
                </React.Fragment>
            )}
            {blog.relatedArticles.length > 0 && (
                <React.Fragment>
                    <SizedBox height={160} />
                    <Text
                        text="Recent Blogs"
                        size={isMobile ? 18 : 22}
                        color={Theme.primary}
                    />
                    <SizedBox height={20} />
                    {blog.relatedArticles.slice(0, 4).map((blog, index) => {
                        return (
                            <BlogContent
                                key={index}
                                blog={blog}
                                displayWidth={displayWidth}
                                showDescription={false}
                            />
                        )
                    })}
                </React.Fragment>
            )}
            <Container width={100}>
                <UnderlinedButton
                    text="Back to Blogs"
                    textColor={Theme.primary}
                    textSize={15}
                    link={Routing.instance.blogs.path}
                    withArrow={false}
                    showLine
                    iconSize={1.5}
                />
            </Container>
        </Column>
    )
})

const BlogNotFound: React.FC<ResponsiveViewProps> = observer(({ displayWidth }) => {
    const width = useWidth();
    const { isMobile } = useDesign()
    const { slug } = useParams()
    const [recentBlogs] = React.useState<Article[]>(BlogDb.sorted.filter((b) => b.slug !== slug))

    const information = [
        "Oops!! We couldn't find the blog you were looking for.",
        "This might have been removed or didn't exist at all in our library.",
        "Going back to blogs is recommended when this happens"
    ]

    return (
        <React.Fragment>
            <Row mainAxis="flex-start" crossAxis="flex-start">
            <UnderlinedButton
                text="Back to Blogs"
                textColor={Theme.primary}
                textSize={15}
                styles={{width: "auto"}}
                link={Routing.instance.blog.path}
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
                <Padding symmetric={{horizontal: isMobile ? 0 : Utility.isDesktop(width) ? 120 : 80}}>
                    <Text
                        text={information.join(" ")}
                        size={isMobile ? 15 : 18}
                        color={Theme.primary}
                        opacity={0.7}
                    />
                </Padding>
            </Center>
            <SizedBox height={80} />
            {recentBlogs.length > 0 && (
                <React.Fragment>
                    <SizedBox height={80} />
                    <Text
                        text="Recent Blogs"
                        size={isMobile ? 18 : 22}
                        color={Theme.primary}
                    />
                    <SizedBox height={20} />
                    {recentBlogs.slice(0, 4).map((blog, index) => {
                        return (
                            <BlogContent
                                key={index}
                                blog={blog}
                                displayWidth={displayWidth}
                                showDescription={false}
                            />
                        )
                    })}
                </React.Fragment>
            )}
        </React.Fragment>
    )
})