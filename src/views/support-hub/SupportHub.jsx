import React from 'react'
import { Helmet } from 'react-helmet'
import './support-hub.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ComplaintForm from './ComplaintForm'
import LinkAssets from '../../assets/LinkAssets'

const SupportHub = () => {
    const supports = [
        {
            "email": "account@serchservice.com",
            "subject": "Account Support - Your Subject Here",
            "usages": [
                {"1": "Deletion of account", "2": "Opening of account"},
                {"1": "Report a user or guest", "2": "Report a provider or business"},
                {"1": "Transaction issues", "2": "Any other account related issues"},
            ],
            "information": ""
        },
        {
            "email": "career@serchservice.com",
            "subject": "Career Support - Your Subject Here",
            "usages": [
                {"1": "Application status check", "2": "Open role check"},
            ],
            "information": "* You can ask the team to put your information in the career pool, incase opportunities that suits your profile comes out."
        },
        {
            "email": "sgc@serchservice.com",
            "subject": "Safe-Guard Community Support - Your Subject Here",
            "usages": [
                {"1": "Safety-Guard Community", "2": "Join the safety discussions"},
                {"1": "Submit a safety suggestion", "2": "Update on safety informatio"},
            ],
            "information": ""
        },
        {
            "email": "improve@serchservice.com",
            "subject": "Product Support - Your Subject Here",
            "usages": [
                {"1": "Reporting a broken feature", "2": "Suggesting a feature improvement"},
            ],
            "information": ""
        },
        {
            "email": "ask@serchservice.com",
            "subject": "Serch Support - Your Subject Here",
            "usages": [ ],
            "information": "For issues you don't find the proper channel for it."
        },
    ]

    return (
        <div className="support-hub-container">
            <Helmet>
                <title>Support Hub | Serch</title>
                <meta name="description" content="Details about our company" />
                <meta property="og:title" content="Support Hub | Serch" />
                <meta property="og:description" content="A requestSharing and provideSharing company" />
                <meta property="og:image" content={ LinkAssets.logo } />
            </Helmet>
            <Header />
            <div className="support-hub-heading">
                <h1 className="support-hub-heading-title">
                    <span>Serch Support</span>
                    <br></br>
                </h1>
                <span className="support-hub-heading-subtitle">
                    Feel like contacting us on any matter? Here in Serch support, you can
                    find the proper channel to direct your issue to. This ensures that you
                    get the assistance you need as soon as possible.
                </span>
            </div>
            <div className="support-hub-body">
                {
                    supports.map((support, key) => {
                        return (
                            <div className="support-hub-content" key={key}>
                                <div className="support-hub-content-link">
                                    <a href={`mailto:${support.email}?subject=${support.subject}`}>{ support.email }</a>
                                </div>
                                <div className="support-hub-content-body">
                                    { support.usages.map((usage, key) => (
                                        <div className="support-hub-content-usages" key={key}>
                                            <span className="support-hub-content-usage">{ usage[1] }</span>
                                            <span className="support-hub-content-usage">{ usage[2] }</span>
                                        </div>
                                    )) }
                                    { support.information !== '' && (
                                        <span className="support-hub-content-information">{ support.information }</span>
                                    ) }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <ComplaintForm />
            <Footer />
        </div>
    )
}

export default SupportHub
