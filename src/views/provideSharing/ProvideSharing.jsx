import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './provideSharing.css'
import Assets from '../../assets/Assets'
import Header from '../../components/header/Header'
import CountriesInSerch from '../../components/countries-in-serch/CountriesInSerch'
import Footer from '../../components/footer/Footer'
import LinkAssets from '../../assets/LinkAssets'
import { Icon } from '@iconify/react'
import Links from '../../config/Links'

const ProvideSharing = () => {
    const InternalLinks = {
        provideSharingHelpLink: "",
        sharedUsage: "https://help.serchservice.com/sharing/ps/usage"
    }

    return (
        <div className="provideSharing-container">
            <Helmet>
                <title>ProvideSharing | Serch</title>
                <meta name="description" content="Share that provider you find to be the best, earn more" />
                <meta property="og:title" content="ProvideSharing | Serch" />
                <meta property="og:description" content="A requestSharing and provideSharing company" />
                <meta property="og:image" content={ LinkAssets.logo } />
            </Helmet>
            <Header />
            <div className="provideSharing-header">
                <div className="provideSharing-container01">
                    <h1 className="provideSharing-text">Service requesting, extended beyond</h1>
                    <span className="provideSharing-text01">
                        Share the providers you love and recommend to those who want to
                        request such kind of service. It&apos;s not just sharing, but goes
                        deep into earning!
                    </span>
                </div>
                <img alt="ProvideSharing" src={ LinkAssets.provideSharing } className="provideSharing-image" />
            </div>
            <div className="provideSharing-as-technology">
                <img alt="Share" src={ Assets.shareExternal } className="provideSharing-pasted-image" />
                <div className="provideSharing-container02">
                    <h1 className="provideSharing-text02">ProvideSharing as a technology</h1>
                    <span className="provideSharing-text03">
                        As it is our mission to make service providing easy, we put in a lot
                        of effort and passion into achieving that. This is why, it is not
                        just a name, nor is it a normal thing, rather, it is a technology
                        that helps us make sure that you can get the service you want, the
                        way you want it.
                    </span>
                </div>
            </div>
            <div className="provideSharing-aisi">
                <img alt="As seen" src={ LinkAssets.provideSharingSeen } className="provideSharing-pasted-image1" />
                <div className="provideSharing-container03">
                    <h1 className="provideSharing-text04">Just like you saw it</h1>
                    <span className="provideSharing-text05">
                        <span>
                            We drive the provideSharing technology to the point of
                            &quot;As-I-Saw-It&quot; execution. You don&apos;t even need to be
                            a user to access this sharing technology. All you need is to see
                            it, ask for it, and it shall be given.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                            We operate the provideSharing technology on AISI (As-I-Saw-It).
                            This simply means that you get what you saw. Just the same
                            provider at the other end of the line, nothing else you don&apos;t
                            need to see. It&apos;s just you and the person you want.
                        </span>
                        <br></br>
                    </span>
                </div>
            </div>
            <div className="provideSharing-soc">
                <img alt="SOC" src={ LinkAssets.provideSharingSOC } className="provideSharing-pasted-image2" />
                <div className="provideSharing-container04">
                    <h1 className="provideSharing-text11">Separation of Concerns</h1>
                    <span className="provideSharing-text12">
                        <span>
                            The concept of SOC (Separation of Concerns) is not just applied to
                            technology. We&apos;ve applied it in the provideSharing
                            technology, which is the core of this technology. This simply
                            means that, you don&apos;t have to be bothered about so many
                            things when requesting for a provider or for a service. All you
                            need is a user who can share that provider you want.
                        </span>
                        <br></br>
                    </span>
                </div>
            </div>
            <div className="provideSharing-header1">
                <h1 className="provideSharing-text15">
                    <span>Hello Guest</span>
                    <br></br>
                    <span>Hello User</span>
                    <br></br>
                </h1>
            </div>
            <div className="provideSharing-container05">
                <h1 className="provideSharing-text20">How to use provideSharing</h1>
                <div className="provideSharing-container06">
                    <div className="provideSharing-container07">
                        <img alt="image" src={ Assets.stepCreateAccount } className="provideSharing-image1" />
                        <div className="provideSharing-container08">
                            <div className="provideSharing-step">
                                <div className="provideSharing-step-bullet">
                                    <div className="provideSharing-container09"></div>
                                    <div className="provideSharing-container10"></div>
                                </div>
                                <div className="provideSharing-step-content">
                                    <span className="provideSharing-text21">Create an account</span>
                                    <span className="provideSharing-text22">
                                        To start provideSharing, you need to have a user account (if
                                        you want to be a user) or you just need a shared link (if
                                        you want to be a guest).
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="provideSharing-container11">
                        <img alt="image" src={ Assets.stepSharedLink } className="provideSharing-image2" />
                        <div className="provideSharing-container12">
                        <div className="provideSharing-step1">
                            <div className="provideSharing-step-bullet1">
                                <div className="provideSharing-container13"></div>
                                <div className="provideSharing-container14"></div>
                            </div>
                            <div className="provideSharing-step-content1">
                                <span className="provideSharing-text23">Create Shared Link</span>
                                <span className="provideSharing-text24">
                                    <span>
                                        As a user, once you&apos;ve gone on a trip with a service provider, you
                                        can see the &quot;Create ProvideSharing Link&quot; button
                                        once you tap on the provider&apos;s tab in the trip
                                        history page of the app. Learn more about provideSharing
                                        <span
                                            dangerouslySetInnerHTML={{
                                            __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <a href={ InternalLinks.provideSharingHelpLink } target="_blank" rel="noreferrer noopener" className="provideSharing-link">
                                        here
                                    </a>
                                    <span>.</span>
                                    <br></br>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="provideSharing-container15">
                    <img alt="image" src={ Assets.stepShareLink } className="provideSharing-image3" />
                    <div className="provideSharing-container16">
                        <div className="provideSharing-step2">
                            <div className="provideSharing-step-bullet2">
                                <div className="provideSharing-container17"></div>
                                <div className="provideSharing-container18"></div>
                            </div>
                            <div className="provideSharing-step-content2">
                                <span className="provideSharing-text28">Share Link</span>
                                <span className="provideSharing-text29">
                                    <span>
                                        Share the link with anyone.
                                        Always note that we link every usage of the link to your
                                        profile. As a guest, Serch only requires basic information
                                        to personalize your experience on the platform. Learn more
                                        about this
                                        <span
                                            dangerouslySetInnerHTML={{
                                            __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <a href={ InternalLinks.sharedUsage } target="_blank" rel="noreferrer noopener" className="provideSharing-link1">
                                        here
                                    </a>
                                    <span>.</span>
                                    <br></br>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="provideSharing-container19">
                    <img alt="image" src={ Assets.stepConnectWithLink } className="provideSharing-image4" />
                    <div className="provideSharing-container20">
                        <div className="provideSharing-step3">
                            <div className="provideSharing-step-bullet3">
                                <div className="provideSharing-container21"></div>
                            </div>
                            <div className="provideSharing-step-content3">
                                <span className="provideSharing-text33">Connect with link</span>
                                <span className="provideSharing-text34">
                                    <span>
                                        Clicking on the link takes you to the Serch Guest Mode
                                        which is personalized for the provider the link is
                                        attributed to, removing what you don&apos;t need and
                                        giving you the particular solution you crave for.
                                    </span>
                                    <br></br>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="provideSharing-countries-in-serch">
                <CountriesInSerch />
            </div>
            <div className="provideSharing-faq">
                <header className="provideSharing-header2">
                    <span className="provideSharing-section section-head">FAQ</span>
                    <h2 className="provideSharing-heading section-heading">Frequently asked questions</h2>
                    <div data-role="accordion-container" className="provideSharing-element accordion-element">
                        <div className="provideSharing-details">
                            <span className="provideSharing-text37">How do I use provideSharing?</span>
                            <span data-role="accordion-content" className="provideSharing-text38">
                                As a user, you can visit your service trip history and click on
                                any service provider you&apos;ve gone on a service trip with.
                                You will see the share button where you will start the
                                provideSharing technology. All you need is to share the result
                                that shows when you click on that button. You can use the link,
                                or anyone can use the link - Guests. 
                            </span>
                        </div>
                        <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="provideSharing-icon"/>
                    </div>
                    <Link to={ Links.countries } className="provideSharing-navlink">
                        <div data-role="accordion-container" className="provideSharing-element1 accordion-element">
                            <div className="provideSharing-details1">
                                <span className="provideSharing-text39">Is Serch launched in my city?</span>
                                <span data-role="accordion-content" className="provideSharing-text40">
                                    Check countries in Serch to know if your country or city is in
                                    Serch.
                                </span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="provideSharing-icon2"/>
                        </div>
                    </Link>
                    <Link to={ Links.requesting } className="provideSharing-navlink1">
                        <div data-role="accordion-container" className="provideSharing-element2 accordion-element">
                            <div className="provideSharing-details2">
                                <span className="provideSharing-text41">
                                    How many times can I use a provideSharing link?
                                </span>
                                <span data-role="accordion-content" className="provideSharing-text42">
                                    The limit for a shared link is 5 times. Once the link reaches
                                    it&apos;s maximum lifetime, it expires.
                                </span>
                            </div>
                        <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="provideSharing-icon2"/>
                        </div>
                    </Link>
                </header>
            </div>
            <Footer />
        </div>
    )
}

export default ProvideSharing
