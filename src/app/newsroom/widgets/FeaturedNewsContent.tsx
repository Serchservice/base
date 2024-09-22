import { Icon } from "@iconify/react";
import { Padding, Column, Theme, SizedBox, Container, Row, Text, Image, Utility, useDesign } from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import Routing from "../../../configuration/Routing";
import { Article } from "@serchservice/contently";

interface FeaturedNewsContentProps {
    news: Article;
    width: number;
    direction: 'right' | "left";
    slide: number;
}

const FeaturedNewsContent: React.FC<FeaturedNewsContentProps> = observer(({ news, width, direction, slide }) => {
    const { isMobile } = useDesign();

    const render = (): JSX.Element => {
        return (
            <Padding all={20}>
                <Column>
                    <Text text={Utility.formatDate(news.date.toDateString())} size={12} color={Theme.hint} />
                    <SizedBox height={6} />
                    <Text text={news.title} size={isMobile ? 15 : 16} color={Theme.primary} weight='bold' />
                    <SizedBox height={10} />
                    <Text text={news.description} size={12} color={Theme.primary} opacity={0.6} />
                    <SizedBox height={10} />
                    <Icon icon="material-symbols-light:double-arrow" width="24px" height="24px" color={Theme.primary} />
                </Column>
            </Padding>
        )
    }

    return (
        <Link to={Routing.getRoute(Routing.instance.news, {slug: news.slug})} key={slide} className={`newsroom-featured ${direction === 'right' ? 'slide-enter-right' : 'slide-enter-left'}`}>
            <Container maxHeight={600} width='100%' backgroundColor={Theme.secondary} elevation={2}>
                {isMobile ? (
                    <Column crossAxis="center">
                        <Image image={news.image.file.url} width="100%" />
                        <SizedBox height={30} />
                        {render()}
                    </Column>
                ) : (
                    <Row crossAxis="center">
                        <Image image={news.image.file.url} width={width - 500} objectFit="contain" />
                        <SizedBox width={30} />
                        {render()}
                    </Row>
                )}
            </Container>
            <style>
                {`
                    .newsroom-featured {
                        transition: transform 1s ease-in-out;
                    }

                    @keyframes slideInRight {
                        from {
                            transform: translateX(40%);
                        }
                        to {
                            transform: translateX(0);
                        }
                    }

                    @keyframes slideInLeft {
                        from {
                            transform: translateX(-20%);
                        }
                        to {
                            transform: translateX(0);
                        }
                    }

                    .slide-enter-right {
                        animation: slideInRight 1s forwards;
                    }

                    .slide-enter-left {
                        animation: slideInLeft 1s forwards;
                    }
                `}
            </style>
        </Link>
    )
})

export default FeaturedNewsContent;