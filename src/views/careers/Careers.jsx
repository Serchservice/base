import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import './careers.css'
import Header from '../../components/header/Header'
import LinkAssets from '../../assets/LinkAssets'
import Footer from '../../components/footer/Footer'
import { Icon } from '@iconify/react'
import Links from '../../config/Links'
import ItemGenerator from '../../config/ItemGenerator'

const Careers = () => {
    const [ active, setActive ] = useState(0)

    const handleNext = () => {
        if(active === 4) {
            return
        } else {
            setActive(active + 1)
        }
    }

    const handlePrev = () => {
        if(active === 0) {
            return
        } else {
            setActive(active - 1)
        }
    }

    return (
        <div className="careers-container">
            <Helmet>
                <title>Careers | Serch</title>
                <meta name="description" content="Our team is the power we work with" />
                <meta property="og:title" content="Careers | Serch" />
                <meta property="og:description" content="A requestSharing and provideSharing company" />
                <meta property="og:image" content={ LinkAssets.logo } />
            </Helmet>
            <Header />
            <div className="careers-about-us-header">
                <h1 className="careers-text">
                    <span>Innovate at</span>
                    <br></br>
                    <span>Serch</span>
                </h1>
            </div>
            <div className="careers-header">
                <div className="careers-container01">
                    <h1 className="careers-text04">Changing the narrative</h1>
                    <span className="careers-text05">
                        <span>
                            At Serch, we are changing the perspective on which service
                            requesting and service providing is being viewed from. This means,
                            we become bolder, challenging and confident in our decisions, in
                            order to build something bigger and better for the world. And for
                            us, it starts with making service easy, helping people get
                            repairs, fixes and any other service of their choice.
                        </span>
                        <br></br>
                    </span>
                </div>
                <img alt="Narrative" src={ LinkAssets.careerNarrative } className="careers-image" />
            </div>
            <div className="careers-the-team">
                <img alt="Team" src={ LinkAssets.careerTeam } className="careers-image1" />
                <div className="careers-container02">
                    <h1 className="careers-text08">The team</h1>
                    <span className="careers-text09">
                        We are daring, bold, challenging and confident in what we do, which
                        is why we believe in diversity and equity. As a company, we strive
                        for the best, while as a team, we build the best.
                    </span>
                </div>
            </div>
            <div className="careers-your-place">
                <div className="careers-container03">
                    <h1 className="careers-text10">Your place</h1>
                    <span className="careers-text11">
                        From development, to marketing, product, finance and legal
                        departments, your skillset belongs to an important part of our team.
                    </span>
                </div>
                <img alt="Your place" src={ LinkAssets.careerPlace } className="careers-image2" />
            </div>
            <div className="careers-life-at-serch">
                <img alt="Career Life" src={ LinkAssets.careerLife } className="careers-image3" />
                <div className="careers-container04">
                    <h1 className="careers-text12">Life at Serch</h1>
                    <span className="careers-text13">
                        As a company, we pride in ambitious solutions that tackle real world
                        problems. As such, we are tasked with the mandate of building
                        challenging solutions that serve our purpose - &quot;Service made
                        easy&quot;.
                    </span>
                </div>
            </div>
            <div className="careers-with-serch">
                <div className="careers-container05">
                    <h1 className="careers-text14">With Serch</h1>
                    <span className="careers-text15">
                        Making a difference matters to us, but what matters most is, making
                        a difference on what matters to us. With Serch, you can reimagine
                        the way the world views service requesting and service providing,
                        for the better.
                    </span>
                </div>
                <img alt="Career in Serch" src={ LinkAssets.careerSerch } className="careers-image4" />
            </div>
            <div
                data-thq="slider"
                data-loop="true"
                data-autoplay="true"
                data-navigation="true"
                data-pagination="true"
                data-pause-autoplay-on-mouse-enter="false"
                className="careers-slider swiper"
            >
                <div data-thq="slider-wrapper" className="swiper-wrapper">
                    { active === 0 && (<div data-thq="slider-slide" className="careers-slider-slide swiper-slide"></div>) }
                    { active === 1 && (<div data-thq="slider-slide" className="careers-slider-slide1 swiper-slide"></div>) }
                    { active === 2 && (<div data-thq="slider-slide" className="careers-slider-slide2 swiper-slide"></div>) }
                    { active === 3 && (<div data-thq="slider-slide" className="careers-slider-slide3 swiper-slide"></div>) }
                    { active === 4 && (<div data-thq="slider-slide" className="careers-slider-slide4 swiper-slide"></div>) }
                </div>
                <div data-thq="slider-pagination" className="careers-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
                    {
                        ItemGenerator(length = 5).map((_, key) => {
                            return (
                                <div
                                    key={ key }
                                    data-thq="slider-pagination-bullet"
                                    className={
                                        `swiper-pagination-bullet ${key === active && "swiper-pagination-bullet-active"}`
                                    }
                                ></div>
                            )
                        })
                    }
                </div>
                <div
                    data-thq="slider-button-prev"
                    className="careers-slider-button-prev swiper-button-prev"
                    onClick={ handlePrev }
                ></div>
                <div
                    data-thq="slider-button-next"
                    className="careers-slider-button-next swiper-button-next"
                    onClick={ handleNext }
                ></div>
            </div>
            <div className="careers-start-now">
                <h1 className="careers-text16">How we are reimagining the world</h1>
                <div className="careers-features">
                    <div className="careers-feature feature feature-active">
                        <h3 className="careers-text17">
                            The Serch idea was born on a rainy night in Nigeria, 2009.
                            Launched on 2024, we are committed to building a DNA that fosters
                            innovation and reinvention.
                        </h3>
                    </div>
                </div>
                <div className="careers-container06">
                    <div className="careers-container07">
                        <Icon icon="mingcute:share-3-fill" className="careers-icon"/>
                        <span className="careers-text18">RequestSharing</span>
                        <span className="careers-text19">
                            <span>Tap a button. Share that request you can&apos;t fix. </span>
                            <span>RequestSharing is the original Serch product </span>
                            <span>that continues to ensure professional fix for any </span>
                            <span>service.</span>
                            <br></br>
                        </span>
                    </div>
                    <div className="careers-container08">
                        <Icon icon="solar:screen-share-bold-duotone" className="careers-icon02"/>
                        <span className="careers-text25">ProvideSharing</span>
                        <span className="careers-text26">
                            <span>Tap a button. Share that provider you recommend. </span>
                            <span>ProvideSharing is the original Serch product </span>
                            <span>that continues to ensure professional fix for any </span>
                            <span>service.</span>
                            <br></br>
                        </span>
                    </div>
                    <div className="careers-container09">
                        <Icon icon="ic:round-business-center" className="careers-icon04"/>
                        <span className="careers-text32">Serch Business</span>
                        <span className="careers-text33">
                            <span>
                                We are simplifying the way businesses go global with their
                                service providers. Tell them to join the business part of Serch
                                and start growing twice than before.
                            </span>
                            <br></br>
                        </span>
                    </div>
                    <div className="careers-container10">
                        <Icon icon="fa-solid:user-tag" className="careers-icon06"/>
                        <span className="careers-text36">Serch Guest</span>
                        <span className="careers-text37">
                            <span>
                                We&apos;ve built a system where you can focus on what you need,
                                instead of looking for one that is testified. Tell a user to
                                share that provider, and see what happens.
                            </span>
                            <br></br>
                        </span>
                    </div>
                </div>
            </div>
            <div className="careers-come-innovate">
                <div className="careers-container11">
                    <h1 className="careers-text40">Come innovate with us</h1>
                    <span className="careers-text41">
                        Currently, we have no open roles. You can always visit this page to
                        check for open roles.
                    </span>
                </div>
                <img alt="Innovation lies here" src={ LinkAssets.careerInnovate } className="careers-image5" />
            </div>
            <div className="careers-connect-with-us">
                <a href={ Links.linkedIn } target="_blank" rel="noreferrer noopener" className="careers-link">
                    <div data-role="accordion-container" className="careers-element accordion-element">
                        <div className="careers-details">
                            <span className="careers-text42">Connect with us on LinkedIn</span>
                        </div>
                        <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="careers-icon08"/>
                    </div>
                </a>
                <a href={ Links.twitter } target="_blank" rel="noreferrer noopener" className="careers-link1">
                    <div data-role="accordion-container" className="careers-element1 accordion-element">
                        <div className="careers-details1">
                            <span className="careers-text43">Connect with us on X</span>
                        </div>
                        <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="careers-icon10"/>
                    </div>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default Careers
