import {
    CircularIconButton, Column, Container, Row, Shimmer, SizedBox, Text, Theme,
    UnderlinedButton, useDesign, useWidth, Utility, Wrap
} from "@serchservice/web-ui-kit";
import NewsDb from "../../backend/database/NewsDb";
import { contently } from "../../App";
import { observer } from "mobx-react-lite";
import React from "react";
import { RouteInterface } from "../../configuration/Route";
import Routing from "../../configuration/Routing";
import Layout from "../../layout/Layout";
import Title from "../widgets/Title";
import FeaturedNewsContent from "./widgets/FeaturedNewsContent";
import RecentNews from "./widgets/RecentNews";
import { Article } from "@serchservice/contently";

export const NewsroomRoute: RouteInterface = {
    path: "/newsroom",
    page: <NewsroomPage />
}

export default function NewsroomPage() {
    const { isMobile } = useDesign()

    const [isLoading, setIsLoading] = React.useState<boolean>(NewsDb.read.length === 0)
    const [newsList, setNewsList] = React.useState<Article[]>([]);

    React.useEffect(() => {
        if (NewsDb.read.length > 0) {
            setIsLoading(false);
            setNewsList(NewsDb.sorted)
        }

        async function fetch() {
            setIsLoading(true)
            const response = await contently.news.all()
            setIsLoading(false)

            if(response) {
                setNewsList(response)
                NewsDb.set(response)
            }
        }

        fetch()
    }, [  ])

    const render = (): JSX.Element => {
        const align = isMobile ? 'center' : 'flex-start';

        if(isLoading) {
            return (
                <Column>
                    <Shimmer height={500} width="100%" />
                    <SizedBox height={40} />
                    <Wrap runSpacing={10} spacing={5} crossAxisAlignment={align}>
                        {Utility.itemGenerate(5).map((_, index) => {
                            return <Shimmer key={index} height={50} width="100%" />
                        })}
                    </Wrap>
                </Column>
            )
        } else {
            const sorted = newsList.sort((a, b) => b.date.getTime() - a.date.getTime())
            const recent = newsList.filter((item) => !item.isFeatured);

            return (
                <React.Fragment>
                    <FeaturedNews news={sorted.filter((item) => item.isFeatured)} />
                    <SizedBox height={100} />
                    {recent.length > 0 && (
                        <React.Fragment>
                            <Text text="Recent News" size={22} weight='bold' color={Theme.primary} />
                            <SizedBox height={20} />
                            {recent.map((recent, index) => {
                                return (
                                    <RecentNews
                                        key={index}
                                        header={recent.title}
                                        slug={recent.slug}
                                        date={Utility.formatDate(recent.date.toDateString())}
                                    />
                                )
                            })}
                            <SizedBox height={50} />
                            <Container width={100}>
                                <UnderlinedButton
                                    text="See all news"
                                    textColor={Theme.primary}
                                    textSize={14}
                                    link={Routing.instance.newsList.path}
                                    withArrow={false}
                                    showLine
                                    iconSize={1.5}
                                    isBlank
                                />
                            </Container>
                        </React.Fragment>
                    )}
                </React.Fragment>
            )
        }
    }

    return (
        <Layout type="news">
            <Title title="Newsroom" description="Get latest updates on what's happening" />
            <Container backgroundColor={Theme.primary} padding="88px 66px 144px">
                <Text text="Serch Global News" size={isMobile ? 32 : 54} weight='bold' color={Theme.secondary} />
                <SizedBox height={20} />
                <Text text="See the latest updates in &quot;What&apos;s happening at Serch&quot;" size={22} color={Theme.secondary} />
            </Container>
            <Container backgroundColor={Theme.secondary} padding="24px">
                {render()}
            </Container>
        </Layout>
    )
}

interface FeaturedNewsProps {
    news: Article[];
}

const FeaturedNews: React.FC<FeaturedNewsProps> = observer(({ news }) => {
    const width = useWidth();

    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isPlaying, setIsPlaying] = React.useState(true);
    const [slideDirection, setSlideDirection] = React.useState<'right' | 'left'>('left');
    const [slideKey, setSlideKey] = React.useState(0);
    const intervalRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const startSlideShow = React.useCallback(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prevSlide) => {
                const nextSlide = (prevSlide + 1) % news.length;
                setSlideKey((prevKey) => prevKey + 1);
                return nextSlide;
            });
            setSlideDirection('right');
        }, 5000);
    }, [news.length]);

    React.useEffect(() => {
        if (news.length > 1) {
            if (isPlaying) {
                startSlideShow();
            }
            // Cleanup interval on component unmount
            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }
    }, [isPlaying, news.length, startSlideShow]);

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        if (isPlaying) {
            startSlideShow();
        }
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleStop = () => {
        setIsPlaying(false);
    };

    const handleNext = () => {
        setSlideDirection('right');
        setCurrentSlide((prevSlide) => {
            const nextSlide = (prevSlide + 1) % news.length;
            setSlideKey((prevKey) => prevKey + 1); // Update key to trigger re-render
            return nextSlide;
        });
        resetInterval(); // Reset the interval when next is clicked
    };

    const handlePrev = () => {
        setSlideDirection('left');
        setCurrentSlide((prevSlide) => {
            const prevSlideIndex = (prevSlide - 1 + news.length) % news.length;
            setSlideKey((prevKey) => prevKey + 1); // Update key to trigger re-render
            return prevSlideIndex;
        });
        resetInterval(); // Reset the interval when previous is clicked
    };

    if(news.length > 0) {
        return (
            <React.Fragment>
                <FeaturedNewsContent
                    news={news[currentSlide]}
                    width={width}
                    direction={slideDirection}
                    slide={slideKey}
                />
                <SizedBox height={20} />
                {news.length > 1 && (
                    <Row crossAxis="flex-end">
                        <CircularIconButton
                            icon="mdi:skip-previous"
                            size={1}
                            onClick={handlePrev}
                            backgroundColor="transparent"
                        />
                        <SizedBox width={20} />
                        <CircularIconButton
                            icon={isPlaying ? "mdi:pause" : "mdi:play"}
                            size={1}
                            onClick={handlePlayPause}
                            backgroundColor="transparent"
                        />
                        <SizedBox width={20} />
                        <CircularIconButton
                            icon="mdi:stop"
                            size={1}
                            onClick={handleStop}
                            backgroundColor="transparent"
                        />
                        <SizedBox width={20} />
                        <CircularIconButton
                            icon="mdi:skip-next"
                            size={1}
                            onClick={handleNext}
                            backgroundColor="transparent"
                        />
                    </Row>
                )}
            </React.Fragment>
        )
    } else {
        return <React.Fragment></React.Fragment>
    }
})