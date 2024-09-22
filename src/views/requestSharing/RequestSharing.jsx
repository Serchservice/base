import React from 'react'
import { Link } from 'react-router-dom'
import './requestSharing.css'
import Header from '../../components/header/Header'
import CountriesInSerch from '../../components/countries-in-serch/CountriesInSerch'
import Footer from '../../components/footer/Footer'
import LinkAssets from '../../assets/LinkAssets'
import Assets from '../../assets/Assets'
import { Icon } from '@iconify/react'
import Links from '../../config/Links'
import Title from '../../config/Title'

const RequestSharing = () => {
    return (
        <div className="request-sharing-container">
            <Title title="RequestSharing" description='Learn more about requestSharing' />
            <Header />
            <div className="request-sharing-header">
                <div className="request-sharing-container01">
                    <h1 className="request-sharing-text">Service providing, extended beyond</h1>
                    <span className="request-sharing-text01">
                        Share that request of yours, you might find the help you need, and
                        you can still get paid.
                    </span>
                </div>
                <img alt="RequestSharing Service" src={ LinkAssets.requestSharingService } className="request-sharing-image" />
            </div>
            <div className="request-sharing-as-technology">
                <img alt="Share Service" src={ Assets.shareExternal } className="request-sharing-pasted-image" />
                <div className="request-sharing-container02">
                    <h1 className="request-sharing-text02">RequestSharing as a technology</h1>
                    <span className="request-sharing-text03">
                        As it is our mission to make service providing easy, we put in a lot
                        of effort and passion into achieving that. This is why, it is not
                        just a name, nor is it a normal thing, rather, it is a technology
                        that helps us make sure that you can get the service you want, the
                        way you want it.
                    </span>
                </div>
            </div>
            <div className="request-sharing-aisi">
                <img alt="In need" src={ LinkAssets.requestSharingNeed } className="request-sharing-pasted-image1" />
                <div className="request-sharing-container03">
                    <h1 className="request-sharing-text04">Help when you need it.</h1>
                    <span className="request-sharing-text05">
                        <span>
                            When in need of an assistance, you don&apos;t need to panic, you
                            can still check on Serch for assistance, and of course, it will be
                            provided.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                            However, it won&apos;t just be provided, you can still earn while
                            getting that assistance - even though you are no more the provider
                            solving the problem.
                        </span>
                        <br></br>
                    </span>
                </div>
            </div>
            <div className="request-sharing-soc">
                <img alt="Happy" src={ LinkAssets.requestSharingHappy } className="request-sharing-pasted-image2" />
                <div className="request-sharing-container04">
                    <h1 className="request-sharing-text11">Let them be happy</h1>
                    <span className="request-sharing-text12">
                        <span>
                            The requestSharing technology is targeted towards making sure that
                            our users or guests are always happy. When they invite a provider,
                            they might not really know what the issue they might be having,
                            but you, as the provider might. So, requestSharing makes it
                            possible that you don&apos;t think you&apos;ve lost something
                            while attending to this request. In the end, you are happy and the
                            user is happy.
                        </span>
                        <br></br>
                    </span>
                </div>
            </div>
            <div className="request-sharing-header1">
                <h1 className="request-sharing-text15">
                    <span>Hello Provider,</span>
                    <br></br>
                    <span>Hello User,</span>
                    <br></br>
                    <span>Hello Guest</span>
                </h1>
            </div>
            <div className="request-sharing-container05">
                <h1 className="request-sharing-text21">How to use requestSharing</h1>
                <div className="request-sharing-container06">
                    <div className="request-sharing-container07">
                        <img alt="Account" src={ Assets.stepCreateAccount } className="request-sharing-image1" />
                        <div className="request-sharing-container08">
                            <div className="request-sharing-step-bullet">
                                <div className="request-sharing-container09"></div>
                                <div className="request-sharing-container10"></div>
                            </div>
                            <div className="request-sharing-step-content">
                                <span className="request-sharing-text22">Create account</span>
                                <span className="request-sharing-text23">
                                    <span>
                                        To get started with requestSharing, you can learn
                                        how to create your user account
                                        <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                        />
                                    </span>
                                    <Link to={ Links.requesting } className="request-sharing-navlink">here</Link>
                                    <span>
                                        , provider account
                                        <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                        />
                                    </span>
                                    <Link to={ Links.providing } className="request-sharing-navlink1">here</Link>
                                    <span>
                                        . If you are a guest, you need a shared link from an
                                        existing user, learn more
                                        <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                        />
                                    </span>
                                    <Link to={ Links.guest } className="request-sharing-navlink2">here</Link>
                                    <span>.</span>
                                    <br></br>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="request-sharing-container11">
                        <img alt="Track trip" src={ Assets.stepTrack } className="request-sharing-image2" />
                        <div className="request-sharing-container12">
                            <div className="request-sharing-step">
                                <div className="request-sharing-step-bullet1">
                                    <div className="request-sharing-container13"></div>
                                    <div className="request-sharing-container14"></div>
                                </div>
                                <div className="request-sharing-step-content1">
                                    <span className="request-sharing-text29">As a User/Guest</span>
                                    <span className="request-sharing-text30">
                                        <span>
                                            Start a trip, tell the provider to share the
                                            trip to another provider capable of fixing the problem (If the
                                            current provider can't solve the problem)
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="request-sharing-container15">
                        <img alt="Fix" src={ Assets.stepFix } className="request-sharing-image3" />
                        <div className="request-sharing-container16">
                            <div className="request-sharing-step1">
                                <div className="request-sharing-step-bullet2">
                                    <div className="request-sharing-container17"></div>
                                    <div className="request-sharing-container18"></div>
                                </div>
                                <div className="request-sharing-step-content2">
                                    <span className="request-sharing-text33">As a Service Provider</span>
                                    <span className="request-sharing-text34">
                                        <span>
                                            Once on trip, you will see option to requestShare the trip.
                                            Find the best provider and get on
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="request-sharing-container19">
                        <img alt="Rating" src={ Assets.stepRate } className="request-sharing-image4" />
                        <div className="request-sharing-container20">
                            <div className="request-sharing-step2">
                                <div className="request-sharing-step-bullet3">
                                    <div className="request-sharing-container21"></div>
                                </div>
                                <div className="request-sharing-step-content3">
                                    <span className="request-sharing-text37">After service</span>
                                    <span className="request-sharing-text38">
                                        <span>
                                            Rate trip performance. Read more on how requestShared rating
                                            is handled
                                            <span
                                                dangerouslySetInnerHTML={{
                                                __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <a href={ Links.help } target="_blank" rel="noreferrer noopener" className="request-sharing-link">
                                            here
                                        </a>
                                        <span>.</span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="request-sharing-countries-in-serch">
                <CountriesInSerch />
            </div>
            <div className="request-sharing-faq">
                <header className="request-sharing-header2">
                    <span className="request-sharing-section section-head">FAQ</span>
                    <h2 className="request-sharing-heading section-heading">Frequently asked questions</h2>
                    <div data-role="accordion-container" className="request-sharing-element accordion-element">
                        <div className="request-sharing-details">
                            <span className="request-sharing-text42">How do I use requestSharing?</span>
                            <span data-role="accordion-content" className="request-sharing-text43">
                                As a provider, you can share a request when it&apos;s something
                                you cannot fix. When you enter the requestSharing technology,
                                you invite a third-party provider to the request. Such, you can
                                only get the compensation for attending the service in the
                                initial stage.
                            </span>
                        </div>
                        <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="request-sharing-icon"/>
                    </div>
                    <Link to={ Links.countries } className="request-sharing-navlink3">
                        <div data-role="accordion-container" className="request-sharing-element1 accordion-element">
                            <div className="request-sharing-details1">
                                <span className="request-sharing-text44">Is Serch launched in my city?</span>
                                <span data-role="accordion-content" className="request-sharing-text45">
                                    Check countries in Serch to know if your country or city is in Serch.
                                </span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="request-sharing-icon2"/>
                        </div>
                    </Link>
                </header>
            </div>
            <Footer />
        </div>
    )
}

export default RequestSharing
