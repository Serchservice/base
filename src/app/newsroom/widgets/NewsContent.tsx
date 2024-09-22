import { Article } from "@serchservice/contently";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import Routing from "../../../configuration/Routing";
import { Container, Theme, Padding, Utility, SizedBox, Image, Text, useDesign } from "@serchservice/web-ui-kit";

interface NewsContentProps {
    news: Article;
    width: number;
    showDescription?: boolean;
    displayWidth: number | string;
}

const NewsContent: React.FC<NewsContentProps> = observer(({news, displayWidth, showDescription = true}) => {
    const { isMobile } = useDesign();

    return (
        <Link to={Routing.getRoute(Routing.instance.news, {slug: news.slug})}>
            <Container width={displayWidth} backgroundColor={Theme.secondary} elevation={2}>
                <Image image={news.image.file.url} width="100%" height={220} />
                <Padding all={12}>
                    <Text text={Utility.formatDate(news.date.toDateString())} size={12} color={Theme.hint} />
                    <SizedBox height={6} />
                    <Text text="Serch | Newsroom" size={15} color={Theme.primary} opacity={0.5} />
                    <SizedBox height={20} />
                    <Text text={news.title} size={isMobile ? 15 : 18} color={Theme.primary} weight='bold' />
                    <SizedBox height={10} />
                    {showDescription && <Text text={news.description} size={13.5} color={Theme.primary} opacity={0.6} />}
                </Padding>
            </Container>
        </Link>
    )
})

export default NewsContent;