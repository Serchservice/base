import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './providing.css'
import Header from '../../components/header/Header'
import CountriesInSerch from '../../components/countries-in-serch/CountriesInSerch'
import DownloadProviderApp from '../../components/app-download/DownloadProviderApp'
import Footer from '../../components/footer/Footer'
import { Icon } from '@iconify/react'
import LinkAssets from '../../assets/LinkAssets'
import Assets from '../../assets/Assets'
import Links from '../../config/Links'

const Providing = () => {
    return (
        <div className="providing-container">
            <Helmet>
                <title>Providing | Serch</title>
                <meta name="description" content="Start providing your skills as a Serch partner" />
                <meta property="og:title" content="Providing | Serch" />
                <meta property="og:description" content="A requestSharing and provideSharing company" />
                <meta property="og:image" content={ LinkAssets.logo } />
            </Helmet>
            <Header />
            <div className="providing-header">
                <div className="providing-container01">
                    <h1 className="providing-text">Flex your providing skills</h1>
                    <span className="providing-text01">
                        Utilize that skill of yours, let it make some money for you, while
                        you grow with the platform that bears your interest at heart.
                    </span>
                    <Link to={ Links.safety } className="providing-navlink">
                        <div data-role="accordion-container" className="providing-element accordion-element">
                            <div className="providing-details">
                                <span className="providing-text02">Start providing</span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="providing-icon"/>
                        </div>
                    </Link>
                </div>
                <img alt="image" src={ LinkAssets.provideSkills } className="providing-image" />
            </div>
            <div className="providing-container02">
                <h1 className="providing-text03">How to use the Serch Provider app</h1>
                <div className="providing-container03">
                    <div className="providing-container04">
                        <img alt="Create Account" src={ Assets.stepCreateAccount } className="providing-image01" />
                        <div className="providing-container05">
                            <div className="providing-step">
                                <div className="providing-step-bullet">
                                    <div className="providing-container06"></div>
                                    <div className="providing-container07"></div>
                                </div>
                                <div className="providing-step-content">
                                    <span className="providing-text04">Create an account</span>
                                    <span className="providing-text05">
                                        <span>
                                            You need an email address to get started.
                                            Then, now tell us a bit more about yourself.
                                            To download the app, go to the
                                            <span
                                                dangerouslySetInnerHTML={{
                                                __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <a href={ Links.applestoreProvider } target="_blank" rel="noreferrer noopener" className="providing-link">
                                            App Store
                                        </a>
                                        <span>
                                            {' '}
                                            or
                                            <span
                                                dangerouslySetInnerHTML={{
                                                __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <a href={ Links.playstoreProvider } target="_blank" rel="noreferrer noopener" className="providing-link1">
                                            Google Play
                                        </a>
                                        <span>.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="providing-container08">
                        <img alt="Category Picker" src={ Assets.stepSelectCategory } className="providing-image02" />
                        <div className="providing-container09">
                            <div className="providing-step1">
                                <div className="providing-step-bullet1">
                                    <div className="providing-container10"></div>
                                    <div className="providing-container11"></div>
                                </div>
                                <div className="providing-step-content1">
                                    <span className="providing-text09">Select your category</span>
                                    <span className="providing-text10">
                                        <span>
                                            Pick the service category that best speaks of your skill
                                            and talent. Always add extra specialties you might have,
                                            this gives you more edge.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="providing-container12">
                        <img alt="Plans" src={ Assets.stepPlans } className="providing-image03" />
                        <div className="providing-container13">
                            <div className="providing-step2">
                                <div className="providing-step-bullet2">
                                    <div className="providing-container14"></div>
                                    <div className="providing-container15"></div>
                                </div>
                                <div className="providing-step-content2">
                                    <span className="providing-text13">Pick a plan</span>
                                    <span className="providing-text14">
                                        <span>
                                            There are many plan options to pick from. You mustn&apos;t
                                            necessarily go all big, you can start small and grow from
                                            there. See all plans
                                            <span
                                                dangerouslySetInnerHTML={{
                                                __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <Link to={ Links.provide } className="providing-navlink1">here</Link>
                                        <span>.</span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="providing-container16">
                        <img alt="Acccount Activator" src={ Assets.stepActivateAccount } className="providing-image04" />
                        <div className="providing-container17">
                            <div className="providing-step3">
                                <div className="providing-step-bullet3">
                                    <div className="providing-container18"></div>
                                    <div className="providing-container19"></div>
                                </div>
                                <div className="providing-step-content3">
                                    <span className="providing-text18">Activate your account</span>
                                    <span className="providing-text19">
                                        <span>
                                            When you feel you are ready, you always go online to show
                                            you&apos;re active. Being active gets you seen.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="providing-container20">
                        <img alt="Discussion" src={ Assets.stepDiscussion } className="providing-image05" />
                        <div className="providing-container21">
                            <div className="providing-step4">
                                <div className="providing-step-bullet4">
                                    <div className="providing-container22"></div>
                                    <div className="providing-container23"></div>
                                </div>
                                <div className="providing-step-content4">
                                    <span className="providing-text22">Discuss and negotiate</span>
                                    <span className="providing-text23">
                                        <span>
                                            When you have a service request, discuss the
                                            problem and price, know what you might need to solve the problem
                                            before you accept.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="providing-container24">
                        <img alt="Track trip" src={ Assets.stepTrack } className="providing-image06" />
                        <div className="providing-container25">
                            <div className="providing-step5">
                                <div className="providing-step-bullet5">
                                    <div className="providing-container26"></div>
                                    <div className="providing-container27"></div>
                                </div>
                                <div className="providing-step-content5">
                                    <span className="providing-text26">Accept and start trip</span>
                                    <span className="providing-text27">
                                        <span className="providing-text28">
                                            When every discussion has been cleared, tell the
                                            user/guest to start the trip. Once started, your status
                                            will be moved to
                                        </span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="providing-text30">ON TRIP</span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="providing-container28">
                        <img alt="Fix" src={ Assets.stepFix } className="providing-image07" />
                        <div className="providing-container29">
                            <div className="providing-step6">
                                <div className="providing-step-bullet6">
                                    <div className="providing-container30"></div>
                                    <div className="providing-container31"></div>
                                </div>
                                <div className="providing-step-content6">
                                    <span className="providing-text33">Flex your skill</span>
                                    <span className="providing-text34">
                                        <span>
                                            An opportunity to do the thing you love so much. Flex your
                                            skill, provide a wonderful user experience, be the best in
                                            that service you are rendering.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="providing-container32">
                        <img alt="image" src={ Assets.stepRequestSharing } className="providing-image08" />
                        <div className="providing-container33">
                            <div className="providing-step7">
                                <div className="providing-step-bullet7">
                                    <div className="providing-container34"></div>
                                    <div className="providing-container35"></div>
                                </div>
                                <div className="providing-step-content7">
                                    <span className="providing-text37">Share when necessary</span>
                                    <span className="providing-text38">
                                        <span>
                                            You&apos;ve got the job, but you mustn't
                                            provide the solution if you know that you obviously
                                            can&apos;t. So, share the problem.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="providing-container36">
                        <img alt="image" src={ Assets.stepRate } className="providing-image09" />
                        <div className="providing-container37">
                            <div className="providing-step8">
                                <div className="providing-step-bullet8">
                                    <div className="providing-container38"></div>
                                </div>
                                <div className="providing-step-content8">
                                    <span className="providing-text41">Rate trip</span>
                                    <span className="providing-text42">
                                        <span>
                                            Don&apos;t forget to rate the trip. Rating makes it
                                            possible for us to know how the experience was for you.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="providing-user-safety">
                <div className="providing-container39">
                    <div className="providing-container40">
                        <h1 className="providing-text45">Feeling safe at all times.</h1>
                        <span className="providing-text46">
                            Providing has never been easy, be assured that we are doing all we
                            can to provide you the safety you deserve with Serch.
                        </span>
                        <Link to={ Links.safety } className="providing-navlink2">Request with confidence</Link>
                    </div>
                    <img alt="Safety" src={ LinkAssets.providingSafety } className="providing-image10" />
                </div>
            </div>
            <div className="providing-countries-in-serch">
                <CountriesInSerch />
            </div>
            <DownloadProviderApp />
            <Footer />
        </div>
    )
}

export default Providing
