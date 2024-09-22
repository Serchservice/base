import { Article } from "@serchservice/contently";
import { Container, Pager, Shimmer, SizedBox, Text, Theme, useDesign, useWidth, Utility, Wrap } from "@serchservice/web-ui-kit";
import React from "react";
import BlogDb from "../../backend/database/BlogDb";
import Layout from "../../layout/Layout";
import Title from "../widgets/Title";
import BlogContent from "./widgets/BlogContent";
import { contently } from "../../App";
import { RouteInterface } from "../../configuration/Route";

export const BlogHouseRoute: RouteInterface = {
    path: "/blogs",
    page: <BlogHousePage />
}

export default function BlogHousePage() {
    const width = useWidth();
    const { isMobile } = useDesign()

    const [isLoading, setIsLoading] = React.useState<boolean>(BlogDb.read.length === 0)
    const [blogs, setBlogs] = React.useState<Article[]>([]);
    const [filtered, setFiltered] = React.useState<Article[]>([]);

    /// DEFINITIONS

    React.useEffect(() => {
        if (BlogDb.read.length > 0) {
            setIsLoading(false);
            setBlogs(BlogDb.sorted);
            setFiltered(blogs)
        }

        async function fetch() {
            setIsLoading(true)
            const response = await contently.blog.all()
            setIsLoading(false)

            if(response) {
                setBlogs(response)
                BlogDb.set(response)
            }
        }

        fetch()
    }, [ ])

    const render = (): JSX.Element => {
        const displayWidth: string | number = width < 600 ? '100%'
            : width < 1000 ? (width / 2) - 50
            : (width / 3) - 40
        const align = isMobile ? 'center' : 'flex-start';

        if(isLoading) {
            return (
                <Wrap runSpacing={30} spacing={30} crossAxisAlignment={align}>
                    {Utility.itemGenerate(10).map((_, index) => {
                        return <Shimmer key={index} height={300} width={displayWidth} />
                    })}
                </Wrap>
            )
        } else {
            return (
                <Wrap runSpacing={30} spacing={30}>
                    {filtered.map((blog, index) => (
                        <BlogContent key={index} blog={blog} displayWidth={displayWidth} />
                    ))}
                </Wrap>
            )
        }
    }

    return (
        <Layout type="blog">
            <Title title="Blogs" description="Our knowledge library for your consumption" />
            <Container backgroundColor={Theme.primary} padding="88px 66px 144px">
                <Text text="Our Blogs" size={isMobile ? 32 : 54} weight='bold' color={Theme.secondary} />
                <SizedBox height={20} />
                <Text text="Gain more insight on Serch through our knowledge library" size={22} color={Theme.secondary} />
            </Container>
            <Container backgroundColor={Theme.secondary} padding="24px">
                {render()}
                <Pager items={blogs} onSlice={setFiltered} itemsPerPage={10} />
            </Container>
        </Layout>
    )
}