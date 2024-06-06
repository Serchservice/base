import React, { useEffect, useState } from 'react';
import { useContentful } from 'react-contentful';
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer/Footer';
import Shimmer from '../../components/shimmer/Shimmer';
import ItemGenerator from '../../config/ItemGenerator';
import NewsItem from './widgets/NewsItem';
import './news.css';
import NewsHeader from './widgets/NewsHeader';
import Util from '../../config/Util';
import LinkAssets from '../../assets/LinkAssets';

const News = () => {
    const [news, setNews] = useState([]);
    const { data, error, fetched, loading } = useContentful({ contentType: 'serchNews' });

    useEffect(() => {
        if (data && data["items"].length > 0) {
            const news = data["items"].map((item) => ({
                categories: item.fields.categories,
                date: item.fields.date,
                image: item.fields.featuredImage.fields.file.url,
                imageAlt: item.fields.featuredImage.fields.title,
                isFeatured: item.fields.isFeatured,
                slug: item.fields.slug,
                title: item.fields.title,
            }));
            // Sort the items by date in descending order
            const sorted = news.sort((a, b) => new Date(b.date) - new Date(a.date));
            setNews(sorted);
        }
    }, [data])

    if (loading || !fetched || error || !data || data["items"].length === 0) {
        return (
            <div className="news-container">
                <Helmet>
                    <title>News | Serch</title>
                    <meta name="description" content="Read through Serchservice news and get latest updates on what's happening" />
                    <meta property="og:title" content="News | Serch" />
                    <meta property="og:description" content="Read through Serchservice news and get latest updates on what's happening" />
                    <meta property="og:image" content={ LinkAssets.logo } />
                </Helmet>
                <NewsHeader content='News' />
                <div className="news-content-description">
                    <h1 className="news-text08">The Press</h1>
                    <span className="news-text09">Read all about what the press says about Serch</span>
                </div>
                <div className="news-list-container">{
                    ItemGenerator(length = 10).map((_, key) => {
                        return (<Shimmer key={key} height={300} width={300} />)
                    })
                }</div>
                <Footer />
            </div>
        )
    } else {
        return (
            <div className="news-container">
                <Helmet>
                    <title>News | Serch</title>
                    <meta name="description" content="Read through Serchservice news and get latest updates on what's happening" />
                    <meta property="og:title" content="News | Serch" />
                    <meta property="og:description" content="Read through Serchservice news and get latest updates on what's happening" />
                    <meta property="og:image" content={ LinkAssets.logo } />
                </Helmet>
                <NewsHeader content='News' />
                <div className="news-content-description">
                    <h1 className="news-text08">The Press</h1>
                    <span className="news-text09">Read all about what the press says about Serch</span>
                </div>
                <div className='news-list-container'>{
                    news.map((newsContent, key) => (
                        <NewsItem
                            key={key}
                            image={newsContent.image}
                            imageAlt={newsContent.imageAlt}
                            isFeatured={newsContent.isFeatured}
                            categories={newsContent.categories}
                            slug={newsContent.slug}
                            header={newsContent.title}
                            date={Util.formatDate(newsContent.date)}
                        />
                    ))
                }</div>
                <Footer />
            </div>
        )
    }
}

export default News