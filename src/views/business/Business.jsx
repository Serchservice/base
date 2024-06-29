import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './business.css'
import Assets from '../../assets/Assets'
import LinkAssets from '../../assets/LinkAssets'
import { Icon } from '@iconify/react'
import Header from '../../components/header/Header'
import DownloadBusinessApp from '../../components/app-download/DownloadBusinessApp'
import CountriesInSerch from '../../components/countries-in-serch/CountriesInSerch'
import Footer from '../../components/footer/Footer'
import Links from '../../config/Links'
import Title from '../../config/Title'

const Business = () => {
    const [ plans, setPlans ] = useState([
        {
            "image": "",
            "name": "",
            "subtitle": "",
            "amount": "",
            "color": "",
            "duration": "",
            "benefits": [""],
            "subPlans": [
                {
                    "period": "",
                    "discount": "",
                    "amount": ""
                }
            ]
        }
    ])

    return (
        <div className="business-container">
            <Title title="Business" description='Understand how Serch Business platform works' />
            <Header />
            <div className="business-header">
                <div className="business-container01">
                    <h1 className="business-text">Serch, reimagined for your business</h1>
                    <span className="business-text01">
                        Manage your service providers with the Serch platform as a business,
                        increase income and track their performance.
                    </span>
                </div>
                <img alt="Business Reimagined" src={ LinkAssets.businessReimagined } className="business-image" />
            </div>
            <div className="business-container02">
                <h1 className="business-text02">Give them a platform to increase sales</h1>
                <div className="business-container03">
                    <img alt="Business" src={ Assets.business400W } className="business-image01" />
                </div>
                <div className="business-container04">
                    <div className="business-container05">
                        <Icon icon="fluent:person-accounts-24-regular" className="business-icon"/>
                        <span className="business-text03">Manage accounts</span>
                        <span className="business-text04">
                            You setup the account, while they make use of it.
                            You only need to sit back while they increase sales for your business.
                        </span>
                    </div>
                    <div className="business-container06">
                        <Icon icon="solar:wad-of-money-bold" className="business-icon"/>
                        <span className="business-text11">Let the money flow in</span>
                        <span className="business-text12">
                            The more they fix, the more your business earns.
                            You can see their performance so as to know
                            why the money isn&apos;t flowing in as it should.
                        </span>
                    </div>
                    <div className="business-container07">
                        <Icon icon="line-md:uploading-loop" className="business-icon"/>
                        <span className="business-text21">Always in the loop</span>
                        <span className="business-text22">
                            As a business, we keep you in constant communication of what is happening
                            with your service providers.
                        </span>
                    </div>
                </div>
            </div>
            <div className="business-services">
                <div className="business-electrician">
                    <img alt="Electrician" src={ Assets.electrician300H } className="business-image02" />
                    <span className="business-text29">Electrician</span>
                </div>
                <div className="business-mechanic">
                    <img alt="Mechanic" src={ Assets.mechanic300H } className="business-image03" />
                    <span className="business-text30">Mechanic</span>
                </div>
                <div className="business-plumber">
                    <img alt="Plumber" src={ Assets.plumber300H } className="business-image03" />
                    <span className="business-text31">Plumber</span>
                </div>
                <div className="business-carpenter">
                    <img alt="Carpenter" src={ Assets.carpenter300H } className="business-image03" />
                    <span className="business-text32">Carpenter</span>
                </div>
            </div>
            <div className="business-start-now">
                <h1 className="business-text33">Get started</h1>
                <div className="business-features">
                    <div className="business-feature feature feature-active">
                        <h3 className="business-text34">Go global</h3>
                    </div>
                </div>
                <div className="business-container08">
                    <div className="business-container09">
                        <Icon icon="ion:create" className="business-icon"/>
                        <span className="business-text35">Create an account</span>
                        <span className="business-text36">
                            You&apos;ll need an email address to start account creation.
                            You will need to verify the email and provide some extra details
                            for your account.
                        </span>
                    </div>
                    <div className="business-container10">
                        <svg viewBox="0 0 1280 1024" className="business-icon">
                        <path d="M1232 0h-384c-26.4 0-63.274 15.274-81.942 33.942l-476.116 476.116c-18.668 18.668-18.668 49.214 0 67.882l412.118 412.118c18.668 18.668 49.214 18.668 67.882 0l476.118-476.118c18.666-18.666 33.94-55.54 33.94-81.94v-384c0-26.4-21.6-48-48-48zM992 384c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"></path>
                        <path d="M128 544l544-544h-80c-26.4 0-63.274 15.274-81.942 33.942l-476.116 476.116c-18.668 18.668-18.668 49.214 0 67.882l412.118 412.118c18.668 18.668 49.214 18.668 67.882 0l30.058-30.058-416-416z"></path>
                        </svg>
                        <span className="business-text43">Choose payment plans</span>
                        <span className="business-text44">
                            Payments need to be made so as to keep your service providers&apos; account
                            active and functioning.
                        </span>
                        <a href="#pricing-business" className="business-link">
                            <div data-role="accordion-container" className="business-element accordion-element">
                                <div className="business-details">
                                    <span className="business-text54">See pricing</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="business-icon12"/>
                            </div>
                        </a>
                    </div>
                    <div className="business-container11">
                        <Icon icon="material-symbols:verified-user-rounded" className="business-icon"/>
                        <span className="business-text55">Get verified</span>
                        <span className="business-text56">
                            Verification gives you added advantage to provide services in Serch platform.
                            We give visibility to verified providers.
                        </span>
                        <Link to={ Links.verification } className="business-navlink">
                            <div data-role="accordion-container" className="business-element1 accordion-element">
                                <div className="business-details1">
                                    <span className="business-text63">See requirements</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="business-icon12"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="business-scheduling">
                <div className="business-container12">
                    <h1 className="business-text64">Sustainability</h1>
                    <span className="business-text65">
                        Serch is committed to building a culture that fosters growth, for
                        not just the company, but for your business. We see a future where
                        your business excels in all its shapes and forms. We will do this by
                        offering your business more opportunities and ways to scale your
                        service providers, so that they go beyond their skillset and provide
                        more services that will earn both money and a good certification,
                        thereby boosting your business ratings and visibility.
                    </span>
                </div>
                <img alt="Sustainability" src={ LinkAssets.businessSustainability } className="business-image06" />
            </div>
            <main id="pricing-provider" className="business-pricing">
                <header className="business-header1">
                    <header className="business-left">
                        <span className="business-section section-head">Pricing</span>
                        <h2 className="business-heading section-heading">Start small, go loud</h2>
                    </header>
                    <div className="business-right">
                        <p className="business-paragraph section-description">
                            Charges are for each service provider in your business account.
                        </p>
                    </div>
                </header>
                <main id="pricing-business" className="business-plans">
                    Coming soon
                    {/* {
                        plans.map((value, key) => {
                            return (<Plan plan={ value } key={ key } />)
                        })
                    } */}
                </main>
            </main>
            <div className="business-scheduling1">
                <div className="business-container23">
                    <h1 className="business-text68">Your growth is vital</h1>
                    <span className="business-text69">
                        As a business, we understand the needs and pain points you face. And
                        as such, we stride to give your business the opportunities to grow
                        with your service providers. We keep on building technologies that
                        will boost your success, since we believe in doing business that
                        excels.
                    </span>
                </div>
                <img alt="Growth" src={ LinkAssets.businessGrowth } className="business-image09" />
            </div>
            <div className="business-countries-in-serch">
                <CountriesInSerch />
            </div>
            <div className="business-faq">
                <header className="business-header4">
                    <span className="business-section1 section-head">FAQ</span>
                    <h2 className="business-heading1 section-heading">Frequently asked questions</h2>
                    <div data-role="accordion-container" className="business-element2 accordion-element">
                        <div className="business-details2">
                            <span className="business-text70">
                                How do I create an account?
                            </span>
                            <span data-role="accordion-content" className="business-text71">
                                Download the Serch business app from Google Play store or Apple
                                Store. Then create an account with your email address. You will
                                be required to provide some specific details as to who you are
                                and what you can do.
                            </span>
                        </div>
                        <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="business-icon51" />
                    </div>
                    <Link to={ Links.countries } className="business-navlink1">
                        <div data-role="accordion-container" className="business-element3 accordion-element">
                            <div className="business-details3">
                                <span className="business-text72">Is Serch launched in my city?</span>
                                <span data-role="accordion-content" className="business-text73">
                                    Check countries in Serch to know if your country or city is in Serch.
                                </span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="business-icon53" />
                        </div>
                    </Link>
                    <Link to={ Links.requesting } className="business-navlink2">
                        <div data-role="accordion-container" className="business-element4 accordion-element">
                            <div className="business-details4">
                                <span className="business-text74">How do I add my service providers?</span>
                                <span data-role="accordion-content" className="business-text75">
                                    With your business account, you can add as much as you have,
                                    many providers to your business. You set the category of
                                    service the provider offers, you can as well, set the
                                    skillsets the provider possesses as a service provider. Of
                                    course, for the account to be fully setup, you need to tell
                                    the provider to download the Serch provider app and login with
                                    the details you given to the provider. This will warrant an
                                    email verification before account is fully setup.
                                </span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="business-icon55" />
                        </div>
                    </Link>
                </header>
            </div>
            <DownloadBusinessApp />
            <Footer />
        </div>
    )
}

export default Business
