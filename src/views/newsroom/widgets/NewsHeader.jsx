import { useState } from "react";
import { Link } from "react-router-dom";
import Assets from "../../../assets/Assets";
import Links from "../../../config/Links";
import './newsHeader.css';

const NewsHeader = ({content = 'Newsroom'}) => {
    const [open, setOpen] = useState(false)
    const toggleMobileMenu = () => {
        setOpen(!open)
    }

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
            "link": Links.blogs,
            "title": "Blog"
        },
    ]

    return (
        <header data-thq="thq-navbar" className="news-navbar-interactive">
            <Link to={Links.newsroom} className="news-text">
                <span className="news-text01">Serch</span>
                <span className="news-text02">
                    <span dangerouslySetInnerHTML={{ __html: ' ', }} />
                </span>
                <span className="news-text03">{ content }</span>
            </Link>
            <div data-thq="thq-navbar-nav" className="news-desktop-menu">
                <nav className="news-links"> {links.map((link, key) => (
                    <Link key={key} to={link.link} className="news-navlink">{link.title}</Link>
                ))}</nav>
            </div>
            <div data-thq="thq-burger-menu" className="news-burger-menu" onClick={toggleMobileMenu}>
                <img alt="menu" src={Assets.menu} className="news-icon" />
            </div>
            <div data-thq="thq-mobile-menu" className="news-mobile-menu" style={{
                transform: open ? "translateX(0%)" : "translateX(100%)",
                display: open ? "flex" : "none"
            }}>
                <div className="news-nav">
                    <div className="news-top">
                        <span className="news-text04">
                            <span className="news-text05">Serch</span>
                            <span className="news-text06">
                                <span dangerouslySetInnerHTML={{ __html: ' ', }} />
                            </span>
                            <span className="news-text07">{ content }</span>
                        </span>
                        <div data-thq="thq-close-menu" className="news-close-menu" onClick={toggleMobileMenu}>
                            <svg viewBox="0 0 1024 1024" className="news-icon">
                                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                            </svg>
                        </div>
                    </div>
                    <nav className="news-links1"> {links.map((link, key) => (
                        <Link key={key} to={link.link} className="news-navlink">{link.title}</Link>
                    ))}</nav>
                </div>
            </div>
        </header>
    )
}

export default NewsHeader