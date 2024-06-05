import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useEffect, useRef, useState } from 'react'
import { useContentful } from 'react-contentful'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Shimmer from '../../components/shimmer/Shimmer'
import Links from '../../config/Links'
import './newsroom.css'
import NewsHeader from './widgets/NewsHeader'
import RecentNewsLink from './widgets/RecentNewsLink'
import Util from '../../config/Util'
import LinkAssets from '../../assets/LinkAssets'

const Newsroom = () => {
    const [featuredList, setFeaturedList] = useState([]);
    const [recents, setRecents] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [slideDirection, setSlideDirection] = useState('');
    const [slideKey, setSlideKey] = useState(0);
    const intervalRef = useRef(null);
    const { data, error, fetched, loading } = useContentful({ contentType: 'serchNews' });

    useEffect(() => {
        if (data) {
            const news = data["items"].map((item) => ({
                categories: item.fields.categories,
                date: item.fields.date,
                image: item.fields.featuredImage.fields.file.url,
                imageAlt: item.fields.featuredImage.fields.title,
                isFeatured: item.fields.isFeatured,
                slug: item.fields.slug,
                description: item.fields.description,
                title: item.fields.title,
            }));
            // Sort the items by date in descending order
            const sorted = news.sort((a, b) => new Date(b.date) - new Date(a.date));
            // Get the top 5 most recent items (or fewer if the list has less than 5 items)
            const recents = sorted.slice(0, 5);
            setRecents(recents);
            setFeaturedList(sorted.filter((item) => item.isFeatured));
        }
    }, [data])

    const startSlideShow = () => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prevSlide) => {
                const nextSlide = (prevSlide + 1) % featuredList.length;
                setSlideKey((prevKey) => prevKey + 1); // Update key to trigger re-render
                return nextSlide;
            });
            setSlideDirection('right');
        }, 5000); // 5000ms = 5 seconds
    };

    useEffect(() => {
        if(featuredList.length > 1) {
            if (isPlaying) {
                startSlideShow();
            }
            // Cleanup interval on component unmount
            return () => clearInterval(intervalRef.current);
        }
    }, [isPlaying, featuredList.length]);

    const resetInterval = () => {
        clearInterval(intervalRef.current);
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
            const nextSlide = (prevSlide + 1) % featuredList.length;
            setSlideKey((prevKey) => prevKey + 1); // Update key to trigger re-render
            return nextSlide;
        });
        resetInterval(); // Reset the interval when next is clicked
    };

    const handlePrev = () => {
        setSlideDirection('left');
        setCurrentSlide((prevSlide) => {
            const prevSlideIndex = (prevSlide - 1 + featuredList.length) % featuredList.length;
            setSlideKey((prevKey) => prevKey + 1); // Update key to trigger re-render
            return prevSlideIndex;
        });
        resetInterval(); // Reset the interval when previous is clicked
    };

    if (loading || !fetched || error || !data) {
        return (
            <div className="newsroom-container">
                <Helmet>
                    <title>Newsroom | Serch</title>
                    <meta name="description" content="Read through Serchservice news and get latest updates on what's happening" />
                    <meta property="og:title" content="Newsroom | Serch" />
                    <meta property="og:description" content="Read through Serchservice news and get latest updates on what's happening" />
                    <meta property="og:image" content={ LinkAssets.logo } />
                </Helmet>
                <NewsHeader />
                <div className="newsroom-content-description">
                    <h1 className="newsroom-text08">Serch global news</h1>
                    <span className="newsroom-text09">See the latest updates in &quot;What&apos;s happening at Serch&quot;</span>
                </div>
                <div className="newsroom-featured-display">
                    <div className="newsroom-featured">
                        <Shimmer height={500} percentWidth="100%" />
                    </div>
                </div>
                <div className="newsroom-recent">
                    <Shimmer height={250} percentWidth="100%" />
                </div>
                <Footer />
            </div>
        )
    } else {
        return (
            <div className="newsroom-container">
                <Helmet>
                    <title>Newsroom | Serch</title>
                    <meta name="description" content="Read through Serchservice news and get latest updates on what's happening" />
                    <meta property="og:title" content="Newsroom | Serch" />
                    <meta property="og:description" content="Read through Serchservice news and get latest updates on what's happening" />
                    <meta property="og:image" content={ LinkAssets.logo } />
                </Helmet>
                <NewsHeader />
                <div className="newsroom-content-description">
                    <h1 className="newsroom-text08">Serch global news</h1>
                    <span className="newsroom-text09">See the latest updates in &quot;What&apos;s happening at Serch&quot;</span>
                </div>
                {
                    featuredList.length > 0 && (
                        <div className="newsroom-featured-display">
                            <Link className={`newsroom-featured ${slideDirection === 'right' ? 'slide-enter-right' : 'slide-enter-left'}`} to={`${Links.newsroom}/news/${featuredList[currentSlide].slug}`} key={slideKey}>
                                <img src={ featuredList[currentSlide].image } alt={ featuredList[currentSlide].imageAlt } loading="lazy" className="newsroom-image" />
                                <div className="newsroom-container1">
                                    <span className="newsroom-date">{Util.formatDate(featuredList[currentSlide].date)}</span>
                                    <span className="newsroom-header">{ featuredList[currentSlide].title }</span>
                                    <span className="newsroom-summary">{ featuredList[currentSlide].description }</span>
                                    <svg viewBox="0 0 1024 1024" className="newsroom-icon10">
                                        <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                                    </svg>
                                </div>
                            </Link>
                            {
                                featuredList.length > 1 && (
                                    <div className="newsroom-controls">
                                        <Icon icon="mdi:skip-previous" className="newsroom-control" onClick={handlePrev}/>
                                        {
                                            isPlaying
                                                ? <Icon icon="mdi:pause" className="newsroom-control" onClick={handlePlayPause}/>
                                                : <Icon icon="mdi:play" className="newsroom-control" onClick={handlePlayPause}/>
                                        }
                                        <Icon icon="mdi:stop" className="newsroom-control" onClick={handleStop}/>
                                        <Icon icon="mdi:skip-next" className="newsroom-control" onClick={handleNext}/>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                <div className="newsroom-recent">
                    <span className="newsroom-recent-text">Recent</span>
                    <div className="newsroom-recent-news">
                        {
                            recents.map((recent, key) => (
                                <RecentNewsLink
                                    key={key}
                                    header={recent.title}
                                    date={Util.formatDate(recent.date)}
                                    slug={recent.slug}
                                />
                            ))
                        }
                        <Link to={ Links.news } className="newsroom-see-all">See all</Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Newsroom