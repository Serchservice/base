import React from 'react'
import { Link } from 'react-router-dom'
import './request.css'
import Header from '../../components/header/Header'
import CountriesInSerch from '../../components/countries-in-serch/CountriesInSerch'
import Footer from '../../components/footer/Footer'
import DownloadUserApp from '../../components/app-download/DownloadUserApp'
import LinkAssets from '../../assets/LinkAssets'
import Assets from '../../assets/Assets'
import { Icon } from '@iconify/react'
import Links from '../../config/Links'
import Title from '../../config/Title'

const Request = () => {
    const categories = [
        {
            "category": "Carpenter"
        },
        {
            "category": "Mechanic"
        },
        {
            "category": "Electrician"
        },
        {
            "category": "Plumber"
        },
    ]

    return (
        <div className="request-container">
            <Title title="Request" description='Start requesting the services you prefer' />
            <Header />
            <section className="request-section">
                <main className="request-main">
                    <header className="request-header">
                        <h1 className="request-heading">Get the fix you want</h1>
                        <span className="request-caption">Pick or search for a provider, invite, and relax.</span>
                    </header>
                    <div className="request-buttons">
                        {
                            categories.map((value, key) => {
                                return (
                                    <span className="request-link hoverButton" key={ key }>
                                        <span className="request-text">{ value.category }</span>
                                        <br></br>
                                    </span>
                                )
                            })
                        }
                    </div>
                </main>
                <img alt="Request Fix" src={ LinkAssets.requestFix } className="request-image" />
            </section>
            <div className="request-container01">
                <h1 className="request-text08">Why use the Serch user app?</h1>
                <div className="request-container02">
                    <img alt="image" src={ Assets.users400W } className="request-image1" />
                </div>
                <div className="request-container03">
                    <div className="request-container04">
                        <Icon icon="material-symbols-light:linked-services" className="request-icon"/>
                        <span className="request-text09">On-demand services</span>
                        <span className="request-text10">
                            <span>Access services that you want, anytime,</span>
                            <br></br>
                            <span>any moment and anywhere.</span>
                            <br></br>
                        </span>
                        <Link to={ Links.requesting } className="request-navlink">
                            <div data-role="accordion-container" className="request-element accordion-element">
                                <div className="request-details">
                                    <span className="request-text15">How requesting works</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="request-icon02"/>
                            </div>
                        </Link>
                    </div>
                    <div className="request-container05">
                        <Icon icon="material-symbols:move-location-outline" className="request-icon04" />
                        <span className="request-text16">Your nearest location</span>
                        <span className="request-text17">
                            <span>Invite or drive to the nearest shop for the</span>
                            <br></br>
                            <span>service you are looking for. Access catered </span>
                            <br></br>
                            <span>attention and top-notch fix.</span>
                            <br></br>
                        </span>
                    </div>
                    <div className="request-container06">
                        <Icon icon="solar:money-bag-bold-duotone" className="request-icon06" />
                        <span className="request-text24">Sharing is earning</span>
                        <span className="request-text25">
                            <span>Earn when your guest friend uses the </span>
                            <br></br>
                            <span>requestSharing technology to request for </span>
                            <br></br>
                            <span>the services of the provider.</span>
                            <br></br>
                        </span>
                        <Link to={ Links.requestSharing } className="request-navlink1">
                            <div data-role="accordion-container" className="request-element1 accordion-element">
                                <div className="request-details1">
                                    <span className="request-text32">Read more</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="request-icon08" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="request-safety-matters">
                <div className="request-container07">
                    <h1 className="request-text33">Your safety is important</h1>
                </div>
                <div className="request-container08">
                    <img alt="Logo" src={ Assets.light200H } className="request-image2" />
                </div>
                <div className="request-container09">
                    <div className="request-container10">
                        <Icon icon="arcticons:safety" className="request-icon10" />
                        <span className="request-text34">Safety features</span>
                        <span className="request-text35">
                            Verify provider with the trip authentication code for the trip.
                            Tell the provider to call it out for you. Share your location with your
                            loved ones.
                        </span>
                        <Link to={ Links.safety } className="request-navlink2">
                            <div data-role="accordion-container" className="request-element2 accordion-element">
                                <div className="request-details2">
                                    <span className="request-text44">More on safety features</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="request-icon12"/>
                            </div>
                        </Link>
                    </div>
                    <div className="request-container11">
                        <Icon icon="gg:community" className="request-icon14" />
                        <span className="request-text45">SafeGuard Community</span>
                        <span className="request-text46">
                            Join our all-inclusive safe-guard community.
                            Speak your mind on how we can improve the quality of our security.
                        </span>
                        <Link to={ Links.newsroom } className="request-navlink3">
                            <div data-role="accordion-container" className="request-element3 accordion-element">
                                <div className="request-details3">
                                    <span className="request-text53">Join SGC here</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="request-icon17"/>
                            </div>
                        </Link>
                    </div>
                    <div className="request-container12">
                        <Icon icon="fluent:chat-bubbles-question-24-filled" className="request-icon19" />
                        <span className="request-text54">Get 24/7 help when in need</span>
                        <span className="request-text55">
                            Get the support and help you need in the app, anytime you need it.
                        </span>
                    </div>
                </div>
            </div>
            <div className="request-scheduling">
                <div className="request-container13">
                    <h1 className="request-text60">Reserve a provider that&apos;s ready when you are</h1>
                    <span className="request-text61">
                        The world is changing always, and with that change, we cannot do
                        without reservations. With Serch, you can reserve a provider that
                        will be ready when you are.
                    </span>
                    <Link to={ Links.schedule } className="request-navlink4">
                        <div data-role="accordion-container" className="request-element4 accordion-element">
                            <div className="request-details4">
                                <span className="request-text62">Learn more</span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="request-icon21"/>
                        </div>
                    </Link>
                </div>
                <img alt="Schedule service" src={ LinkAssets.requestReserve } className="request-image3" />
            </div>
            <div className="request-countries-in-serch">
                <CountriesInSerch />
            </div>
            <div className="request-faq">
                <header className="request-header1">
                    <span className="request-section1 section-head">User - FAQ</span>
                    <h2 className="request-heading1 section-heading">Frequently asked questions</h2>
                    <div data-role="accordion-container" className="request-element5 accordion-element">
                        <div className="request-details5">
                            <span className="request-text63">How do I create an account?</span>
                            <span data-role="accordion-content" className="request-text64">
                                Download the Serch user app from Google Play store or Apple
                                Store. Then create an account with your email address.
                            </span>
                        </div>
                        <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="request-icon23"/>
                    </div>
                    <Link to={ Links.countries } className="request-navlink5">
                        <div data-role="accordion-container" className="request-element6 accordion-element">
                            <div className="request-details6">
                                <span className="request-text65">Is Serch launched in my city?</span>
                                <span data-role="accordion-content" className="request-text66">
                                    Check countries in Serch to know if your country or city is in Serch.
                                </span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="request-icon25"/>
                        </div>
                    </Link>
                    <Link to={ Links.requesting } className="request-navlink6">
                        <div data-role="accordion-container" className="request-element7 accordion-element">
                            <div className="request-details7">
                                <span className="request-text67">How do I request for a provider?</span>
                                <span data-role="accordion-content" className="request-text68">
                                    Download the app, register and select the service category you
                                    want. Optionally, you can type in your situation and choose
                                    from the multiple options presented. Pick a service, you will
                                    get a list of providers within your area. You can also
                                    increase your search range, if you want.
                                </span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="request-icon27"/>
                        </div>
                    </Link>
                </header>
            </div>
            <DownloadUserApp />
            <Footer />
        </div>
    )
}

export default Request
