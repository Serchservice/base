import { wait } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useContentful } from 'react-contentful';
import { useNavigate, useParams } from "react-router-dom";
import ContentRender from '../../components/contentful/ContentRender';
import Footer from "../../components/footer/Footer";
import Shimmer from "../../components/shimmer/Shimmer";
import Links from "../../config/Links";
import Util from '../../config/Util';
import "./newsContent.css";
import NewsHeader from "./widgets/NewsHeader";
import NewsItem from './widgets/NewsItem';
import Title from "../../config/Title";

const NewsContent = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    const { data, error, fetched, loading } = useContentful({
        contentType: 'serchNews',
        query: {
            'fields.slug[in]': `${slug || ''}`,
        }
    });

    async function redirect(route = '', duration = 1000) {
        await wait(duration)
        navigate(route)
    }

    if (loading || !fetched || error) {
        return (
            <div className="news-content-body">
                <Title title="News" description="Read our news" />
                <NewsHeader />
                <div className="news-content-container">
                    <Shimmer height={300} percentWidth="100%" />
                    <div style={{ marginBottom: "10px", marginTop: "50px", width: "100%", height: "30px" }}>
                        <Shimmer height={30} width={300} />
                    </div>
                    <div style={{ marginBottom: "40px", width: "100%", height: "20px" }}>
                        <Shimmer height={20} width={100} />
                    </div>
                    <div style={{ marginBottom: "60px", width: "100%", height: "20px" }}>
                        <Shimmer height={20} width={200} />
                    </div>
                    <Shimmer height={300} percentWidth="100%" />
                </div>
                <Footer />
            </div>
        );
    } else if (!data || data["items"].length == 0) {
        redirect(Links.error)
    } else {
        const news = data["items"]['0']['fields']
        const content = {
            "categories": news.categories,
            "date": news.date,
            "image": news.featuredImage.fields.file.url,
            "imageAlt": news.featuredImage.fields.title,
            "isFeatured": news.isFeatured,
            "slug": news.slug,
            "description": news.description,
            "title": news.title,
            "content": news.content,
            "author": news.author,
            "articles": news.relatedArticles && news.relatedArticles.map((item) => ({
                categories: item.fields.categories,
                date: item.fields.date,
                image: item.fields.featuredImage.fields.file.url,
                imageAlt: item.fields.featuredImage.fields.title,
                isFeatured: item.fields.isFeatured,
                slug: item.fields.slug,
                title: item.fields.title,
            }))
        }
        return (
            <div className="news-content-body">
                <Title
                    isBlog={true}
                    title={content.title}
                    description={content.description}
                    image={content.image}
                    keywords={content.categories}
                    url={`${ Links.news }/${ slug }`}
                />
                <NewsHeader />
                <div className="news-content-container">
                    <div className="news-content-header">
                        <img alt={content.imageAlt} src={content.image} loading="lazy" className="news-content-image" />
                        <div className="news-content-header-title">
                            <span className="news-content-date">{Util.formatDate(content.date)}</span>
                            <span className="news-content-section">Serch | Newsroom</span>
                            <span className="news-content-title">{content.title}</span>
                            <div className="news-content-author-container">
                                <div className="news-content-author-line"></div>
                                <span className="news-content-author">{`Written by ${content.author}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className="news-content-content">
                        <div className="news-content"><ContentRender content={content.content}/></div>
                        {content.categories.length > 0 && (
                            <div className="news-content-categories">{
                                content.categories.map((category, key) => (
                                    <div className="news-content-category-item" key={key}>
                                        <span className="news-content-category">{category}</span>
                                    </div>
                                ))
                            }</div>
                        )}
                    </div>
                    {
                        content.articles && content.articles.length > 0 && (
                            <>
                                <span className="news-content-related-text">Related News</span>
                                <div className='news-content-related-list'>{
                                    content.articles.map((article, key) => (
                                        <NewsItem
                                            key={key}
                                            image={article.image}
                                            imageAlt={article.imageAlt}
                                            isFeatured={article.isFeatured}
                                            categories={article.categories}
                                            slug={article.slug}
                                            header={article.title}
                                            date={Util.formatDate(article.date)}
                                        />
                                    ))
                                }</div>
                            </>
                        )
                    }
                </div>
                <Footer />
            </div>
        );
    }
};

export default NewsContent;
