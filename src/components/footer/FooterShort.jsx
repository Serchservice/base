import React from 'react'
import { Link } from 'react-router-dom'
import './footer-short.css'
import './footer.css'
import Assets from '../../assets/Assets'
import Links from '../../config/Links'

const FooterShort = () => {
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
        <div className={"footer-short-footer-short"}>
            <div className="footer-short-container">
                <div className="footer-short-header">
                    <Link to={ Links.home } className="footer-short-navlink footer-short-branding ">
                        <img alt="Logo" src={Assets.light200H} className="mouse" />
                    </Link>
                    <img alt="Service made easy" src={Assets.tagWhite200H} className="footer-short-image" />
                </div>
            </div>
            <div className="footer-socials">
                {
                    socialLinks.map((value, key) => {
                        return (
                            <a key={ key } href={ value.link } target="_blank" rel="noreferrer noopener" className="footer-link1">
                                <img alt={ value.alt } src={ value.icon } className="social"/>
                            </a>
                        )
                    })
                }
            </div>
            <section className="footer-short-copyright">
                <span className="footer-short-text">© 2023 Serchservice Inc. All Rights Reserved.</span>
                <div className="footer-short-container1">
                    {
                        footerCopyright.map((value, key) => {
                            return (
                                <a href={ value.link } key={ key }>
                                    <span className="footer-short-link">{ value.name }</span>
                                </a>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default FooterShort
