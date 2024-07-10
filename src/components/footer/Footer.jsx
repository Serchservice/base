import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Axios } from '../../api/Axios';
import Assets from '../../assets/Assets';
import Links from '../../config/Links';
import Loader from '../loading/Loader';
import './footer.css';
import notify from '../../config/Notify';
import SuggestBox from '../suggest-service/SuggestBox';

const Footer = () => {
    const [isSubscribing, setIsSubscribing] = useState(false)
    const [emailAddress, setEmailAddress] = useState("")

    const [isServiceOpen, setIsServiceOpen] = useState(false)

    const subscribe = async () => {
        setIsSubscribing(true)
        await Axios.get(`/company/newsletter/subscribe?email_address=${emailAddress}`)
            .then((response) => {
                setIsSubscribing(false)
                if (response.data["code"] === 200) {
                    setEmailAddress("")
                    notify.success(response.data["message"])
                    SweetAlert(response.data["message"], "success")
                } else {
                    notify.error(response.data["message"])
                }
            })
            .catch((error) => {
                setIsSubscribing(false)
                if (error?.code === "ERR_NETWORK") {
                    notify.error("Network error. Please check your internet connection")
                } else {
                    notify.error(error)
                }
            })
    }
    const footerLinks = [
        {
            "main": "Company",
            "children": [
                {
                    "key": "About Us",
                    "link": Links.aboutUs
                },
                {
                    "key": "Blog",
                    "link": Links.blogs
                },
                {
                    "key": "Newsroom",
                    "link": Links.newsroom
                },
                {
                    "key": "Marketplace",
                    "link": Links.marketplace
                },
                {
                    "key": "Careers",
                    "link": Links.careers
                },
            ]
        },
        {
            "main": "Product",
            "children": [
                {
                    "key": "Request",
                    "link": Links.request
                },
                {
                    "key": "Provide",
                    "link": Links.provide
                },
                {
                    "key": "Business",
                    "link": Links.business
                },
                {
                    "key": "Guest",
                    "link": Links.guest
                },
                {
                    "key": "Tip2Fix",
                    "link": Links.tip2fix
                },
            ]
        },
        {
            "main": "Information",
            "children": [
                {
                    "key": "Safety Guidelines",
                    "link": Links.safety
                },
                {
                    "key": "Countries In Serch",
                    "link": Links.countries
                },
            ]
        },
        {
            "main": "Support",
            "children": [
                {
                    "key": "Legal Hub",
                    "link": Links.legal
                },
                {
                    "key": "Support Hub",
                    "link": Links.support
                },
            ]
        },
    ];

    const socialLinks = [
        {
            "link": Links.linkedIn,
            "alt": "LinkedIn",
            "icon": Assets.linkedIn,
        },
        {
            "link": Links.instagram,
            "alt": "Instagram",
            "icon": Assets.instagram,
        },
        {
            "link": Links.twitter,
            "alt": "Twitter",
            "icon": Assets.twitter,
        },
        {
            "link": Links.youtube,
            "alt": "YouTube",
            "icon": Assets.youtube,
        }
    ]

    const footerCopyright = [
        {
            "name": "Terms and Conditions",
            "link": Links.termsAndConditions
        },
        {
            "name": "Accessibility",
            "link": Links.accessibility
        },
        {
            "name": "Privacy",
            "link": Links.privacyPolicy
        }
    ]

    return (
        <React.Fragment>
            <footer className={"footer-footer"}>
                <div className="footer-content">
                    <main className="footer-main-content">
                        <div className="footer-container">
                            <div className="footer-header">
                                <Link to={Links.home} className="footer-link">
                                    <div className="footer-branding">
                                        <img alt="Logo" src={Assets.light200H} className="mouse" />
                                    </div>
                                </Link>
                                <img alt="Service made easy" src={Assets.tagWhite200H} className="footer-image" />
                                <a href={Links.help} target="_blank" rel="noreferrer noopener">
                                    <span className="footer-text01">Visit Help Center</span>
                                    <br className=""></br>
                                </a>
                                <span
                                    className="footer-text01"
                                    style={{ fontSize: "14px", cursor: "pointer" }}
                                    onClick={() => setIsServiceOpen(true)}
                                >
                                        Suggest a service Serch should bring on next
                                </span>
                            </div>
                            <main className="footer-subscribe">
                                <main className="footer-main">
                                    <h1 className="footer-heading">Subscribe to our newsletter</h1>
                                    <div className="footer-input-field">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="footer-textinput input"
                                            value={emailAddress}
                                            onChange={e => setEmailAddress(e.target.value)}
                                        />
                                        <div className="footer-buy button" onClick={subscribe}>
                                            {isSubscribing ? <Loader width={60} /> : <span className="footer-text04">Subscribe</span>}
                                        </div>
                                    </div>
                                </main>
                                <h1 className="footer-notice">
                                    By subscribing to our newsletter you agree with our Terms and Conditions.
                                </h1>
                            </main>
                        </div>
                        <header className="footer-categories">
                            {
                                footerLinks.map((value, key) => {
                                    return (
                                        <div key={key} className="footer-category">
                                            <div className="footer-category-header">
                                                <span className="footer-header">{value.main}</span>
                                            </div>
                                            <div className="footer-links">
                                                {
                                                    value.children.map((child, key) => {
                                                        return (
                                                            <a href={child.link} key={key}>
                                                                <span className="footer-text01 footer-link">{child.key}</span>
                                                            </a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </header>
                        <div className="footer-socials">
                            {
                                socialLinks.map((value, key) => {
                                    return (
                                        <a key={key} href={value.link} target="_blank" rel="noreferrer noopener" className="footer-link1">
                                            <img alt={value.alt} src={value.icon} className="social" />
                                        </a>
                                    )
                                })
                            }
                        </div>
                        <section className="footer-copyright">
                            <span className="footer-text-copy">© 2023 Serchservice Inc. All Rights Reserved.</span>
                            <div className="footer-copy-links">
                                {
                                    footerCopyright.map((value, key) => {
                                        return (
                                            <a href={value.link} key={key}>
                                                <span className="footer-text21">{value.name}</span>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    </main>
                </div>
            </footer>
            <SuggestBox isOpen={isServiceOpen} handleClose={() => setIsServiceOpen(false)} />
        </React.Fragment>
    )
}

export default Footer
