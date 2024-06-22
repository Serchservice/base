import React, { useEffect, useState } from 'react';
import { useContentful } from 'react-contentful';
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer/Footer';
import Shimmer from '../../components/shimmer/Shimmer';
import ItemGenerator from '../../config/ItemGenerator';
import BlogItem from './widgets/BlogItem';
import './blogs.css';
import BlogHeader from './widgets/BlogHeader';
import Util from '../../config/Util';
import LinkAssets from '../../assets/LinkAssets';

const Blogs = () => {
    const [blogs, setBlog] = useState([]);
    const { data, error, fetched, loading } = useContentful({ contentType: 'serchBlogs' });

    useEffect(() => {
        if (data && data["items"].length > 0) {
            const blogs = data["items"].map((item) => ({
                categories: item.fields.categories,
                date: item.fields.date,
                image: item.fields.featuredImage.fields.file.url,
                imageAlt: item.fields.featuredImage.fields.title,
                slug: item.fields.slug,
                title: item.fields.title,
            }));
            // Sort the items by date in descending order
            const sorted = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
            setBlog(sorted);
        }
    }, [data])

    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    const itemsPerPage = 10;

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const newCurrentItems = blogs.slice(startIndex, startIndex + itemsPerPage);
        setCurrentItems(newCurrentItems);
    }, [blogs, currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(blogs.length / itemsPerPage);

    const renderPagination = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`pagination-button ${i === currentPage ? 'active' : ''}`}
                    style={{
                        backgroundColor: i === currentPage ? "#050404" : 'transparent',
                        color: i === currentPage ? "#ffffff" :" #050404",
                        border: `1px solid #050404`,
                        margin: '0 5px',
                        padding: '5px 10px',
                        cursor: 'pointer'
                    }}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    if (loading || !fetched || error || !data || data["items"].length === 0) {
        return (
            <div className="blogs-container">
                <Helmet>
                    <title>Blogs | Serch</title>
                    <meta name="description" content="Read through Serchservice blogs and gain more knowledge about us" />
                    <meta property="og:title" content="Blogs | Serch" />
                    <meta property="og:description" content="Read through Serchservice blogs and gain more knowledge about us" />
                    <meta property="og:image" content={ LinkAssets.logo } />
                </Helmet>
                <BlogHeader />
                <div className="blogs-content-description">
                    <h1 className="blogs-text08">Our Blogs</h1>
                    <span className="blogs-text09">Gain more insight on Serch through our knowledge library</span>
                </div>
                <div className="blogs-list-container">{
                    ItemGenerator(length = 10).map((_, key) => {
                        return (<Shimmer key={key} height={300} width={300} />)
                    })
                }</div>
                <Footer />
            </div>
        )
    } else {
        return (
            <div className="blogs-container">
                <Helmet>
                    <title>Blog | Serch</title>
                    <meta name="description" content="Read through Serchservice blogs and gain more knowledge about us" />
                    <meta property="og:title" content="Blog | Serch" />
                    <meta property="og:description" content="Read through Serchservice blogs and gain more knowledge about us" />
                    <meta property="og:image" content={ LinkAssets.logo } />
                </Helmet>
                <BlogHeader />
                <div className="blogs-content-description">
                    <h1 className="blogs-text08">Our Blogs</h1>
                    <span className="blogs-text09">Gain more insight on Serch through our knowledge library</span>
                </div>
                <div className='blogs-list-container'>
                    {currentItems.map((blog, key) => (
                        <BlogItem
                            key={key}
                            image={blog.image}
                            imageAlt={blog.imageAlt}
                            categories={blog.categories}
                            slug={blog.slug}
                            header={blog.title}
                            date={Util.formatDate(blog.date)}
                        />
                    ))}
                    {totalPages > 1 && (<div className="pagination"> { renderPagination() } </div>)}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Blogs