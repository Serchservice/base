import { Article } from "@serchservice/contently";
import Routing from "../../../configuration/Routing";
import { Container, Image, Padding, SizedBox, Text, Theme, useDesign, Utility } from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

interface BlogContentProps {
    blog: Article;
    showDescription?: boolean;
    displayWidth: number | string;
}

const BlogContent: React.FC<BlogContentProps> = observer(({blog, displayWidth, showDescription = true}) => {
    const { isMobile } = useDesign()

    return (
        <Link to={Routing.getRoute(Routing.instance.blog, {slug: blog.slug})}>
            <Container width={displayWidth} backgroundColor={Theme.secondary} elevation={2}>
                <Image image={blog.image.file.url} width="100%" height={220} />
                <Padding all={12}>
                    <Text text={Utility.formatDate(blog.date.toDateString())} size={12} color={Theme.hint} />
                    <SizedBox height={6} />
                    <Text text="Serch | Blog" size={15} color={Theme.primary} opacity={0.5} />
                    <SizedBox height={20} />
                    <Text text={blog.title} size={isMobile ? 15 : 18} color={Theme.primary} weight='bold' />
                    <SizedBox height={10} />
                    {showDescription && <Text text={blog.description} size={13.5} color={Theme.primary} opacity={0.6} />}
                </Padding>
            </Container>
        </Link>
    )
})

export default BlogContent;