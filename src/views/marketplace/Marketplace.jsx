import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './marketplace.css'
import Header from '../../components/header/Header'
import CountriesInSerch from '../../components/countries-in-serch/CountriesInSerch'
import Footer from '../../components/footer/Footer'
import LinkAssets from '../../assets/LinkAssets'
import { Icon } from '@iconify/react'
import Links from '../../config/Links'

const MarketPlace = () => {
    return (
        <div className="market-place-container">
            <Helmet>
                <title>Marketplace | Serch</title>
                <meta name="description" content="Learn about our products, services and offerings" />
                <meta property="og:title" content="Marketplace | Serch" />
                <meta property="og:description" content="A requestSharing and provideSharing company" />
                <meta property="og:image" content={ LinkAssets.logo } />
            </Helmet>
            <Header />
            <h1 className="market-place-text">Your one-stop search for services</h1>
            <div className="market-place-header">
                <img alt="Marketplace" src={ LinkAssets.marketplace } className="market-place-image" />
                <div className="market-place-container1">
                    <h1 className="market-place-text01">The marketplace</h1>
                    <span className="market-place-text02">
                        <span>
                        At Serch, we call the hub where you can find our offerings - The
                        MarketPlace. This is no different from the traditional marketplace
                        you know. However, here we don&apos;t sell things, we show you
                        people who can make your servicing, repairs, fixing, and any other
                        thing, service related, easy and life-saving.
                        </span>
                        <br></br>
                    </span>
                </div>
            </div>
            <div className="market-place-header1">
                <div className="market-place-container2">
                    <h1 className="market-place-text05">Serch Providers</h1>
                    <span className="market-place-text06">
                        <span>
                            Looking for a place to flex and earn with your carpentry,
                            mechanic, electrical or plumbing skill? We offer you the platform
                            to do all these, while you grow and even more, get certified! You
                            do your thing, set the schedule, set your rates, earn what you
                            need, while we give you the visibility.
                        </span>
                        <br></br>
                    </span>
                    <Link to={ Links.provide } className="market-place-navlink">
                        <div data-role="accordion-container" className="market-place-element accordion-element">
                            <div className="market-place-details">
                                <span className="market-place-text09">Start providing</span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="market-place-icon"/>
                        </div>
                    </Link>
                </div>
                <img alt="Providers" src={ LinkAssets.marketplaceProviders } className="market-place-image1" />
            </div>
            <div className="market-place-header2">
                <div className="market-place-container3">
                    <h1 className="market-place-text10">Serch Business</h1>
                    <span className="market-place-text11">
                        <span>
                            As a business, you shouldn&apos;t need to worry about how to get
                            more visibility, go global or make more money. We offer you a
                            platform where you can focus more on what&apos;s important to you,
                            while we give your service providers the visibility they need.
                            While they grow, your business grows.
                        </span>
                        <br></br>
                    </span>
                    <Link to="/business" className="market-place-navlink1">
                        <div data-role="accordion-container" className="market-place-element1 accordion-element">
                            <div className="market-place-details1">
                                <span className="market-place-text14">Learn more</span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="market-place-icon"/>
                        </div>
                    </Link>
                </div>
                <img alt="Business" src={ LinkAssets.marketplaceBusiness } className="market-place-image2" />
            </div>
            <div className="market-place-header3">
                <div className="market-place-container4">
                    <h1 className="market-place-text15">Serch User</h1>
                    <span className="market-place-text16">
                        <span>
                            You have no reason to stress when you are in need of a service
                            provider. Looking for a mechanic, electrician, plumber, carpenter?
                            All you need is the Serch User platform. 
                        </span>
                        <br></br>
                    </span>
                    <Link to={ Links.request } className="market-place-navlink2">
                        <div data-role="accordion-container" className="market-place-element2 accordion-element">
                            <div className="market-place-details2">
                                <span className="market-place-text19">Start requesting</span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="market-place-icon"/>
                        </div>
                    </Link>
                </div>
                <img alt="Users" src={ LinkAssets.marketplaceUsers } className="market-place-image3" />
            </div>
            <div className="market-place-header4">
                <div className="market-place-container5">
                    <h1 className="market-place-text20">Serch Guest</h1>
                    <span className="market-place-text21">
                        <span>
                            Not interested in becoming a user, but still want to access a
                            service provider? We totally understand. Ask any user you know to
                            share that provider with the fix you love. You get access without
                            even creating an account. Best, you don&apos;t need to even look
                            for a provider, you already have the one you want!
                        </span>
                        <br></br>
                    </span>
                    <Link to={ Links.guest } className="market-place-navlink3">
                        <div data-role="accordion-container" className="market-place-element3 accordion-element">
                            <div className="market-place-details3">
                                <span className="market-place-text24">Read more</span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="market-place-icon"/>
                        </div>
                    </Link>
                </div>
                <img alt="Guest" src={ LinkAssets.marketplaceGuests } className="market-place-image4" />
            </div>
            <div className="market-place-countries-in-serch">
                <CountriesInSerch />
            </div>
            <Footer />
        </div>
    )
}

export default MarketPlace
