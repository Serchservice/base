import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './media-and-assets.css'
import FooterShort from '../../components/footer/FooterShort'
import Assets from '../../assets/Assets'
import Links from '../../config/Links'
import { Icon } from '@iconify/react'
import LinkAssets from '../../assets/LinkAssets'

const MediaAndAssets = () => {
    const [ assets, setAssets ] = useState([
        {
            "asset": Assets.light200H,
            "name": "Transparent white",
            "isDark": true
        },
        {
            "asset": Assets.dark200H,
            "name": "Transparent black",
            "isDark": false
        },
        {
            "asset": Assets.tagBlack200H,
            "name": "Transparent white",
            "isDark": false
        },
        {
            "asset": Assets.tagWhite200H,
            "name": "Transparent black",
            "isDark": true
        },
    ])

    const quickLinks = [
        {
            "isInternal": true,
            "links": [
                {
                    "link": Links.home,
                    "name": "Head to serchservice.com"
                },
                {
                    "link": Links.countries,
                    "name": "See countries in Serch"
                },
            ]
        },
        {
            "isInternal": false,
            "links": [
                {
                    "link": Links.instagram,
                    "name": "Connect with us on Instagram"
                },
                {
                    "link": Links.twitter,
                    "name": "Connect with us on X"
                },
            ]
        },
    ]

    const downloadImage = ({ image, title }) => {
        const anchor = document.createElement('a');
        anchor.href = image;
        anchor.download = title;
        anchor.click();
    };

    return (
        <div className="media-and-assets-container">
            <Helmet>
                <title>Media and Assets | Serch</title>
                <meta name="description" content="View and download Serch official branded assets" />
                <meta property="og:title" content="Media and Assets | Serch" />
                <meta property="og:description" content="A requestSharing and provideSharing company" />
                <meta property="og:image" content={ LinkAssets.logo } />
            </Helmet>
            <div className="media-and-assets-container1">
                <img alt="image" src={ Assets.light200H } className="media-and-assets-image" />
                <span className="media-and-assets-text">Serchservice Inc.</span>
                <span className="media-and-assets-text01">Official logos and assets</span>
            </div>
            <div className="media-and-assets-assets">
                {
                    assets.map((value, key) => {
                        return (
                            <div
                                key={ key }
                                className="media-and-assets-asset" style={{
                                    backgroundColor: value.isDark ? "#030001" : "#FFFFFF",
                                    cursor: "pointer"
                                }}
                                onClick={() => downloadImage({image: value.asset , title: value.name}) }
                            >
                                <img alt="Asset" src={ value.asset } className="media-and-assets-asset-image" />
                                <span
                                    className="media-and-assets-asset-text"
                                    style={{
                                        color: value.isDark ? "#FFFFFF" : "#030001"
                                    }}
                                >{ value.name }</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="media-and-assets-quick-links">
                <h1 className="media-and-assets-text06">Quick Links</h1>
                <div className="media-and-assets-container6">
                    {
                        quickLinks.map((value, key) => {
                            if(value.isInternal) {
                                return (
                                    <div className="media-and-assets-container8" key={ key }>
                                        {
                                            value.links.map((value, key) => {
                                                return (
                                                    <a href={ value.link } key={ key } target="_blank" rel="noreferrer noopener" className="media-and-assets-link">
                                                        <div data-role="accordion-container" className="media-and-assets-element accordion-element">
                                                            <div className="media-and-assets-details">
                                                                <span className="media-and-assets-text07">{ value.name }</span>
                                                            </div>
                                                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="media-and-assets-icon"/>
                                                        </div>
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="media-and-assets-container8" key={ key }>
                                        {
                                            value.links.map((value, key) => {
                                                return (
                                                    <Link to={ value.link } key={ key } className="media-and-assets-link">
                                                        <div data-role="accordion-container" className="media-and-assets-element accordion-element">
                                                            <div className="media-and-assets-details">
                                                                <span className="media-and-assets-text07">{ value.name }</span>
                                                            </div>
                                                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="media-and-assets-icon"/>
                                                        </div>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <FooterShort />
        </div>
    )
}

export default MediaAndAssets
