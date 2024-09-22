import { wait } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useContentful } from 'react-contentful';
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import ContentRender from '../../components/contentful/ContentRender';
import Footer from "../../components/footer/Footer";
import Shimmer from "../../components/shimmer/Shimmer";
import Links from "../../config/Links";
import Util from '../../config/Util';
import "./blog.css";
import BlogHeader from "./widgets/BlogHeader";
import BlogItem from './widgets/BlogItem';
import Title from "../../config/Title";

const Blog = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    const { data, error, fetched, loading } = useContentful({
        contentType: 'serchBlogs',
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
            <div className="blog-content-body">
                <Title title="BlogHouse" description='Read blog content' />
                <BlogHeader />
                <div className="blog-content-container">
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
        const blog = data["items"]['0']['fields']
        const content = {
            "categories": blog.categories,
            "date": blog.date,
            "image": blog.featuredImage.fields.file.url,
            "imageAlt": blog.featuredImage.fields.title,
            "slug": blog.slug,
            "description": blog.description,
            "title": blog.title,
            "content": blog.content,
            "author": blog.author,
            "articles": blog.relatedArticles && blog.relatedArticles.map((item) => ({
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
            <div className="blog-content-body">
                <Title
                    isBlog={true}
                    title={content.title}
                    description={content.description}
                    image={content.image}
                    keywords={content.categories}
                    url={`${ Links.blogs }/${ slug }`}
                />
                <Helmet>
                    <title>{content.title} - Serch Blogs | Serch</title>
                    <meta name="description" content={content.description} />
                    <meta property="og:title" content={`${content.title} - Serch Blogs | Serch`} />
                    <meta property="og:description" content={content.description} />
                    <meta property="og:image" content={ content.image } />
                </Helmet>
                <BlogHeader />
                <div className="blog-content-container">
                    <div className="blog-content-header">
                        <img alt={content.imageAlt} src={content.image} loading="lazy" className="blog-content-image" />
                        <div className="blog-content-header-title">
                            <span className="blog-content-date">{Util.formatDate(content.date)}</span>
                            <span className="blog-content-section">Serch | Blog</span>
                            <span className="blog-content-title">{content.title}</span>
                            <div className="blog-content-author-container">
                                <div className="blog-content-author-line"></div>
                                <span className="blog-content-author">{`Written by ${content.author}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content-content">
                        <div className="blog-content"><ContentRender content={content.content}/></div>
                        {content.categories.length > 0 && (
                            <div className="blog-content-categories">{
                                content.categories.map((category, key) => (
                                    <div className="blog-content-category-item" key={key}>
                                        <span className="blog-content-category">{category}</span>
                                    </div>
                                ))
                            }</div>
                        )}
                    </div>
                    {
                        content.articles && content.articles.length > 0 && (
                            <>
                                <span className="blog-content-related-text">Related Blogs</span>
                                <div className='blog-content-related-list'>{
                                    content.articles.map((article, key) => (
                                        <BlogItem
                                            key={key}
                                            image={article.image}
                                            imageAlt={article.imageAlt}
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

export default Blog;