import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import DownloadUserApp from '../../components/app-download/DownloadUserApp'
import LinkAssets from '../../assets/LinkAssets'
import Links from '../../config/Links'
import FasterCapital from '../../components/fastercapital/FasterCapital'
import Title from '../../config/Title'

const Home = () => {
    const [ activeFeature, setActiveFeature ] = useState(0)

    const categories = [
        "Plumber",
        "Carpenter",
        "Mechanic",
        "Electrician"
    ]

    const features = [
        {
            "category": "Mechanic",
            "content": "Flex and earn with your mechanic skills"
        },
        {
            "category": "Plumber",
            "content": "Work and earn seamlessly"
        },
        {
            "category": "Carpenter",
            "content": "Be skill certified with us"
        },
        {
            "category": "Electrician",
            "content": "Grow on the job"
        }
    ]

    return (
        <div className="home-container">
            <Title title="Home" description='A requestSharing and provideSharing company' />
            <Header />
            <section className="home-section">
                <main className="home-main">
                    <header className="home-header">
                        <h1 className="home-heading">Repair anything with Serch</h1>
                        <span className="home-caption">Pick or search for a provider, invite, and relax.</span>
                    </header>
                    <div className="home-buttons">
                        {
                            categories.map((value, key) => {
                                return (
                                    <span key={ key } className="home-link hoverButton">
                                        <span className="home-text">{ value }</span>
                                        <br></br>
                                    </span>
                                )
                            })
                        }
                    </div>
                </main>
                <img alt="Repair services" src={ LinkAssets.homeRepair } className="home-image" />
            </section>
            <section className="home-section1">
                <h2 className="home-text08">Flex your skill, earn with it</h2>
                <div className="home-features">
                    {
                        features.map((value, key) => {
                            return (
                                <div
                                    key={ key }
                                    className={ `home-feature feature ${ key === activeFeature && "feature-active" }` }
                                >
                                    <h3 className="home-text09">{ value.category }</h3>
                                    <p className="home-text10">{ value.content }</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="home-note">
                    <div className="home-content">
                        <main className="home-main1">
                            <h2 className="home-heading1">Earn, flex and grow while you set the pace.</h2>
                            <p className="home-paragraph">
                                <span>
                                    Use your skill and make the money that you want. You set the
                                    price, while users enjoy your amazing skillset.
                                </span>
                                <br></br>
                                <br></br>
                                <span>
                                    Get certified based on what people say about you, update your
                                    resume with your account information.
                                </span>
                                <br></br>
                                <br></br>
                                <span>
                                    See what people say about your skillset. Remember that it goes
                                    beyond what you can do, but also how you do it.
                                </span>
                                <br></br>
                            </p>
                        </main>
                        <Link to={ Links.provide } className="home-navlink">
                            <div className="home-explore-more">
                                <p className="home-text34">Start providing today -&gt;</p>
                            </div>
                        </Link>
                    </div>
                    <div className="home-image1">
                        <img alt="Flex and grow" src={ LinkAssets.homeFlexAndGrow } className="home-image2" />
                    </div>
                </div>
            </section>
            <section className="home-section2">
                <main className="home-main2">
                    <header className="home-header1">
                        <h1 className="home-heading2">Serch, modified for business</h1>
                        <span className="home-caption1">
                            Serch is not just a platform connecting users to providers, but
                            also modified for companies of any size.
                        </span>
                    </header>
                    <div className="home-buttons1">
                        <Link to={ Links.business } className="home-link4 hoverButton">
                            <span className="home-text35">Get started</span>
                            <br></br>
                        </Link>
                        <Link to={ Links.marketplace } className="home-navlink1">
                            <div className="home-explore-more1">
                                <p className="home-text37">See our solutions -&gt;</p>
                            </div>
                        </Link>
                    </div>
                </main>
                <img alt="Serch Business" src={ LinkAssets.homeBusiness } className="home-image3" />
            </section>
            <DownloadUserApp />
            <FasterCapital />
            <Footer />
        </div>
    )
}

export default Home
