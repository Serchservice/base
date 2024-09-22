import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Assets from "../../../assets/Assets";
import Links from "../../../config/Links";
import './blogHeader.css';

const BlogHeader = ({content = 'BlogHouse'}) => {
    const [open, setOpen] = useState(false)
    const toggleMobileMenu = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup function to remove the class when the component is unmounted
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [open]);

    const links = [
        {
            "link": Links.aboutUs,
            "title": "Company"
        },
        {
            "link": Links.leadership,
            "title": "Leadership"
        },
        {
            "link": Links.mediaAndAssets,
            "title": "Media assets"
        },
        {
            "link": Links.newsroom,
            "title": "Newsroom"
        },
    ]

    return (
        <header data-thq="thq-navbar" className="blog-header-navbar-interactive">
            <Link to={Links.blogs} className="blog-header-text">
                <span className="blog-header-text01">Serch</span>
                <span className="blog-header-text02">
                    <span dangerouslySetInnerHTML={{ __html: ' ', }} />
                </span>
                <span className="blog-header-text03">{ content }</span>
            </Link>
            <div data-thq="thq-navbar-nav" className="blog-header-desktop-menu">
                <nav className="blog-header-links"> {links.map((link, key) => (
                    <Link key={key} to={link.link} className="blog-header-navlink">{link.title}</Link>
                ))}</nav>
            </div>
            <div data-thq="thq-burger-menu" className="blog-header-burger-menu" onClick={toggleMobileMenu}>
                <img alt="menu" src={Assets.menu} className="blog-header-icon" />
            </div>
            <div data-thq="thq-mobile-menu" className="blog-header-mobile-menu" style={{
                transform: open ? "translateX(0%)" : "translateX(100%)",
                display: open ? "flex" : "none"
            }}>
                <div className="blog-header-nav">
                    <div className="blog-header-top">
                        <span className="blog-header-text04">
                            <span className="blog-header-text05">Serch</span>
                            <span className="blog-header-text06">
                                <span dangerouslySetInnerHTML={{ __html: ' ', }} />
                            </span>
                            <span className="blog-header-text07">{ content }</span>
                        </span>
                        <div data-thq="thq-close-menu" className="blog-header-close-menu" onClick={toggleMobileMenu}>
                            <svg viewBox="0 0 1024 1024" className="blog-header-icon">
                                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                            </svg>
                        </div>
                    </div>
                    <nav className="blog-header-links1"> {links.map((link, key) => (
                        <Link key={key} to={link.link} className="blog-header-navlink">{link.title}</Link>
                    ))}</nav>
                </div>
            </div>
        </header>
    )
}

export default BlogHeader