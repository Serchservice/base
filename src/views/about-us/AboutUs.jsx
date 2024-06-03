import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './about-us.css'
import LinkAssets from '../../assets/LinkAssets'
import Assets from '../../assets/Assets'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Icon } from '@iconify/react'
import Links from '../../config/Links'

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <Helmet>
                <title>About Us | Serch</title>
                <meta name="description" content="Learn about Serch, our team and what inspires us to do what we love" />
                <meta property="og:title" content="About Us | Serch" />
                <meta property="og:description" content="Learn about Serch, our team and what inspires us to do what we love" />
                <meta property="og:image" content={ LinkAssets.logo } />
                <meta property="og:site_name" content="www.serchservice.com" />
            </Helmet>
            <Header />
            <div className="about-us-about-us-header">
                <h1 className="about-us-text">About Us</h1>
            </div>
            <div className="about-us-about-us-info">
                <h1 className="about-us-text01">We revolutionize the way people get repairs and keep the motion flowing</h1>
                <span className="about-us-text02">
                    Every morning when we wake up, we are energized to deliver a top-notch
                    platform that makes living easy. We drive ourselves towards providing
                    a platform that makes it faster and easy to get your repairs done. We
                    constantly apply change in our systems, to not limit ourselves to just
                    repairs in service, but also, more!
                </span>
                <a href="#statements" className="about-us-link">
                    <div data-role="accordion-container" className="about-us-element accordion-element">
                        <div className="about-us-details">
                            <span className="about-us-text03">Understand our mission</span>
                        </div>
                        <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="about-us-icon"/>
                    </div>
                </a>
            </div>
            <div className="about-us-container01">
                <img alt="About Us" src={ LinkAssets.aboutUsBackground } className="about-us-image" />
            </div>
            <div id="statements" className="about-us-statements">
                <h1 className="about-us-text04">Our mission, Our vision, Our goal</h1>
                <div className="about-us-mission">
                    <img alt="Statement" src={ LinkAssets.aboutUsMission } className="about-us-image1" />
                    <div className="about-us-container02">
                        <h1 className="about-us-text05">Service made easy</h1>
                        <span className="about-us-text06">
                            We are committed to making it easy for users to access service
                            providers within their geographic locations without having to
                            break a sweat. You can as well, drive to the nearest mechanic
                            shop, and access other Serch services all from the comfort of your
                            location. With Serch, you don&apos;t need to worry about what to
                            do, whether it is an emergency or not.
                        </span>
                        <Link to={ Links.provide } className="about-us-navlink">
                            <div data-role="accordion-container" className="about-us-element1 accordion-element">
                                <div className="about-us-details1">
                                    <span className="about-us-text07">Learn how we are doing this</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="about-us-icon"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="about-us-vision">
                    <img alt="All Services" src={ LinkAssets.aboutUsAll } className="about-us-image2" />
                    <div className="about-us-container03">
                        <h1 className="about-us-text08">All services and more</h1>
                        <span className="about-us-text09">
                            We are becoming more daring with our dreams and passion to get you
                            nothing but the best platform. Serch is not just limited to
                            mechanics, electricians, plumbers and carpenters. We have
                            different technologies for other kind of services. We are going
                            beyond the mediocre and moving to the impossible.
                        </span>
                        <Link to={ Links.provide } className="about-us-navlink1">
                            <div data-role="accordion-container" className="about-us-element2 accordion-element">
                                <div className="about-us-details2">
                                    <span className="about-us-text10">Read more</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="about-us-icon"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="about-us-safety">
                <div className="about-us-container04">
                    <h1 className="about-us-text11">Be safe, always</h1>
                    <span className="about-us-text12">
                        Requesting for someone at home? Or are you requesting for yourself?
                        Maybe, you are the service provider going to flex your skill? We are
                        committed to play our part in keeping you safe at all times, but you
                        also need to know how to use the Serch platform and play your own
                        part.
                    </span>
                    <Link to={ Links.safety } className="about-us-navlink2">
                        <div data-role="accordion-container" className="about-us-element3 accordion-element">
                            <div className="about-us-details3">
                                <span className="about-us-text13">Learn more</span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="about-us-icon"/>
                        </div>
                    </Link>
                </div>
                <img alt="image" src={ LinkAssets.aboutUsSafety } className="about-us-image3" />
            </div>
            <div className="about-us-company-information">
                <div className="about-us-container05">
                    <h1 className="about-us-text14">Company Info</h1>
                </div>
                <div className="about-us-container06">
                    <div className="about-us-container07">
                        <div className="about-us-container08">
                            <img alt="Logo" src={ Assets.light200H } className="about-us-image4" />
                        </div>
                        <span className="about-us-text15">Who fuels Serch&apos;s engine?</span>
                        <span className="about-us-text16">
                            <span>We are building a culture that fosters growth,</span>
                            <br></br>
                            <span>inclusivity, doing the right thing, and more, </span>
                            <br></br>
                            <span>for both users, providers, businesses and </span>
                            <br></br>
                            <span>employees. Find out about the team behind </span>
                            <br></br>
                            <span>this journey.</span>
                            <br></br>
                        </span>
                        <Link to={ Links.leadership } className="about-us-navlink3">
                            <div data-role="accordion-container" className="about-us-element4 accordion-element">
                                <div className="about-us-details4">
                                    <span className="about-us-text27">See our leadership</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="about-us-icon-large"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="about-us-latest">
                <div className="about-us-container09">
                    <h1 className="about-us-text28">Have the latest information</h1>
                </div>
                <div className="about-us-container10">
                    <div className="about-us-container11">
                        <Icon icon="emojione-v1:newspaper" className="about-us-icon-large" />
                        <span className="about-us-text29">Newsroom</span>
                        <span className="about-us-text30">
                            <span>Announcement about partnerships, platform </span>
                            <br></br>
                            <span>updates and more happenings around you and </span>
                            <br></br>
                            <span>the world.</span>
                            <br></br>
                        </span>
                        <Link to={ Links.newsroom } className="about-us-navlink4">
                            <div data-role="accordion-container" className="about-us-element7 accordion-element">
                                <div className="about-us-details5">
                                    <span className="about-us-text37">Visit the newsroom</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="about-us-icon-large"/>
                            </div>
                        </Link>
                    </div>
                    <div className="about-us-container12">
                        <Icon icon="cib:blogger-b" className="about-us-icon-large" />
                        <span className="about-us-text38">Blog</span>
                        <span className="about-us-text39">
                            <span>Learn more about Serch platforms, products,</span>
                            <br></br>
                            <span>offerings and partnerships.</span>
                            <br></br>
                        </span>
                        <Link to={ Links.blogs } className="about-us-navlink5">
                            <div data-role="accordion-container" className="about-us-element7 accordion-element">
                                <div className="about-us-details6">
                                    <span className="about-us-text44">Read our blog</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="about-us-icon-large"/>
                            </div>
                        </Link>
                    </div>
                    <div className="about-us-container13">
                        <Icon icon="mage:media-reel-v-fill" className="about-us-icon-large"/>
                        <span className="about-us-text45">Media and assets</span>
                        <span className="about-us-text46">
                            <span>Access Serch branded media and assets, </span>
                            <br></br>
                            <span>download and use Serch assets.</span>
                            <br></br>
                        </span>
                        <Link to={ Links.mediaAndAssets } className="about-us-navlink6">
                            <div data-role="accordion-container" className="about-us-element7 accordion-element">
                                <div className="about-us-details7">
                                    <span className="about-us-text51">View assets</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="about-us-icon-large"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <main className="about-us-career-roles">
                <div className="about-us-header">
                    <h2 className="section-heading">Come build services that make life easy</h2>
                    <p className="about-us-description section-description">You too can make a difference with us</p>
                </div>
                <div className="about-us-buttons">
                    <Link to={ Links.careers } className="about-us-navlink7">
                        <div className="about-us-get-started button">
                            <span className="about-us-text52">Search open roles</span>
                        </div>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default AboutUs
