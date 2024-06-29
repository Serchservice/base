import React from 'react'
import { Link } from 'react-router-dom'
import './guest.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import CountriesInSerch from '../../components/countries-in-serch/CountriesInSerch'
import { Icon } from '@iconify/react'
import LinkAssets from '../../assets/LinkAssets'
import Assets from '../../assets/Assets'
import Links from '../../config/Links'
import Title from '../../config/Title'

const Guest = () => {
    return (
        <div className="guest-container">
            <Title title="Guests" description='Requesting in Serch as a guest - How it works' />
            <Header />
            <section className="guest-section">
                <main className="guest-main">
                    <header className="guest-header">
                        <h1 className="guest-heading">Fix, without an account</h1>
                        <span className="guest-text">
                            Without an account, you can get the fix you want, with all safety
                            nets and some platform features attached to it.
                        </span>
                        <Link to={ Links.safety } className="guest-navlink">
                            <div data-role="accordion-container" className="guest-element accordion-element">
                                <div className="guest-details">
                                    <span className="guest-text01">Become a guest</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="guest-icon"/>
                            </div>
                        </Link>
                    </header>
                </main>
                <img alt="Guest Fix" src={ LinkAssets.guestFix } className="guest-image" />
            </section>
            <div className="guest-container01">
                <h1 className="guest-text02">Why become a Serch Guest?</h1>
                <div className="guest-container02">
                    <img alt="image" src={ Assets.users400W } className="guest-image1" />
                </div>
                <div className="guest-container03">
                    <div className="guest-container04">
                        <Icon icon="fluent-mdl2:common-data-service-c-d-s" className="guest-icon02"/>
                        <span className="guest-text03">Service as testified</span>
                        <span className="guest-text04">
                            The top-notch delivery, the humanitarian act,
                            everything and more is already accounted by the one who has used such service
                        </span>
                        <Link to={ Links.requestSharing } className="guest-navlink1">
                            <div data-role="accordion-container" className="guest-element1 accordion-element">
                                <div className="guest-details1">
                                    <span className="guest-text11">How guest works</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="guest-icon04"/>
                            </div>
                        </Link>
                    </div>
                    <div className="guest-container05">
                        <Icon icon="grommet-icons:map-location" className="guest-icon06"/>
                        <span className="guest-text12">Your nearest location</span>
                        <span className="guest-text13">
                            Invite or drive to the nearest shop for the service you are looking for.
                            Access catered attention and top-notch fix.
                        </span>
                    </div>
                    <div className="guest-container06">
                        <Icon icon="solar:target-bold-duotone" className="guest-icon08"/>
                        <span className="guest-text20">Just what you need</span>
                        <span className="guest-text21">
                            Focus more on the service you need, you don&apos;t need to search for providers,
                            when you already have a testified provider.
                        </span>
                    </div>
                </div>
            </div>
            <div className="guest-scheduling">
                <div className="guest-container07">
                    <h1 className="guest-text28">Hello guest</h1>
                    <span className="guest-text29">
                        As a part of the Serch ecosystem, you need to understand that you
                        are important to us. Inasmuch as you don&apos;t have an account with
                        Serch, we also give adequate attention to you and your service
                        trips. This is why we made it possible that you can reuse a
                        requestSharing link up to 5 times. This is our commitment as a
                        company to make sure that you have a wonderful experience with our
                        platform and the service provider, and as well, give the necessary
                        security we have in mind.
                    </span>
                </div>
                <img alt="Guest Shadow" src={ LinkAssets.guestShadow } className="guest-image2" />
            </div>
            <div className="guest-safety-matters">
                <div className="guest-container08">
                    <h1 className="guest-text30">Your safety is important</h1>
                </div>
                <div className="guest-container09">
                    <img alt="Serch" src={ Assets.light200H } className="guest-image3" />
                </div>
                <div className="guest-container10">
                    <div className="guest-container11">
                        <Icon icon="mingcute:safe-lock-fill" className="guest-icon10"/>
                        <span className="guest-text31">Safety features</span>
                        <span className="guest-text32">
                            Verify provider with the trip authentication code for the trip.
                            Tell the provider to call it out for you. Share your location with your loved ones.
                        </span>
                        <Link to={ Links.safety } className="guest-navlink2">
                            <div data-role="accordion-container" className="guest-element2 accordion-element">
                                <div className="guest-details2">
                                    <span className="guest-text41">More on safety features</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="guest-icon12" />
                            </div>
                        </Link>
                    </div>
                    <div className="guest-container12">
                        <Icon icon="healthicons:community-meeting" className="guest-icon14"/>
                        <span className="guest-text42">SafeGuard Community</span>
                        <span className="guest-text43">
                            Join our all-inclusive safe-guard community. Speak your mind on how we
                            can improve the quality of our security.
                        </span>
                        <Link to={ Links.newsroom } className="guest-navlink3">
                            <div data-role="accordion-container" className="guest-element3 accordion-element">
                                <div className="guest-details3">
                                    <span className="guest-text50">Join SGC here</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="guest-icon17" />
                            </div>
                        </Link>
                    </div>
                    <div className="guest-container13">
                        <Icon icon="fluent:people-chat-24-filled" className="guest-icon19"/>
                        <span className="guest-text51">Get 24/7 help when in need</span>
                        <span className="guest-text52">
                            Get the support and help you need in the app, anytime you need it.
                        </span>
                    </div>
                </div>
            </div>
            <div className="guest-scheduling1">
                <div className="guest-container14">
                    <h1 className="guest-text57">Your needs, our goal</h1>
                    <span className="guest-text58">
                        Using the guest mode of the Serch user platform, is our way of
                        telling you that you don&apos;t need to go through the normal route,
                        in order to get the fix you need. Serch users do the work, while you
                        get the recommended best. It&apos;s not us to tells you what you
                        want, but you&apos;ve seen it, you loved it, and you need it done.
                        So, you go for it with our platform.
                    </span>
                </div>
                <img alt="Guest Goals" src={ LinkAssets.guestGoals } className="guest-image4" />
            </div>
            <div className="guest-countries-in-serch">
                <CountriesInSerch />
            </div>
            <div className="guest-faq">
                <header className="guest-header1">
                    <span className="guest-section1 section-head">Guest - FAQ</span>
                    <h2 className="guest-heading1 section-heading">Frequently asked questions</h2>
                    <div data-role="accordion-container" className="guest-element4 accordion-element">
                        <div className="guest-details4">
                            <span className="guest-text59">How do I become a guest?</span>
                            <span data-role="accordion-content" className="guest-text60">
                                Get a requestSharing link and then download the Serch user app
                                from Google Play store or Apple Store.
                            </span>
                        </div>
                        <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="guest-icon21" />
                    </div>
                    <Link to={ Links.countries } className="guest-navlink4">
                        <div data-role="accordion-container" className="guest-element5 accordion-element">
                            <div className="guest-details5">
                                <span className="guest-text61">Is Serch launched in my city?</span>
                                <span data-role="accordion-content" className="guest-text62">
                                    Check countries in Serch to know if your country or city is in Serch.
                                </span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="guest-icon23" />
                        </div>
                    </Link>
                    <Link to={ Links.requesting } className="guest-navlink5">
                        <div data-role="accordion-container" className="guest-element6 accordion-element">
                            <div className="guest-details6">
                                <span className="guest-text63">How do I request for a provider?</span>
                                <span data-role="accordion-content" className="guest-text64">
                                    With the requestSharing technology, you don&apos;t need to
                                    search for a provider. You just need the requestSharing link,
                                    and you&apos;ve got the one thing you need - a fixer.
                                </span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="guest-icon25" />
                        </div>
                    </Link>
                </header>
            </div>
            <Footer />
        </div>
    )
}

export default Guest
