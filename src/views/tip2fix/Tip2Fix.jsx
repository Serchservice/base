import React from 'react'
import { Link } from 'react-router-dom'
import './tip2fix.css'
import Assets from '../../assets/Assets'
import LinkAssets from '../../assets/LinkAssets'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Links from '../../config/Links'
import Title from '../../config/Title'

const Tip2Fix = () => {
    return (
        <div className="tip2-fix-container">
            <Title title="Tip2Fix" description='How to maximize the power of Tip2Fix' />
            <Header />
            <div className="tip2-fix-header">
                <div className="tip2-fix-container01">
                    <h1 className="tip2-fix-text">Do it yourself, with guidance</h1>
                    <span className="tip2-fix-text01">
                        You can service that problem yourself, if you have the right
                        guidance. Learn and grow personally.
                    </span>
                </div>
                <img alt="DIY" src={ LinkAssets.tip2FixDIY } className="tip2-fix-image" />
            </div>
            <div className="tip2-fix-container02">
                <h1 className="tip2-fix-text02">How Tip2Fix works for a user</h1>
                <div className="tip2-fix-container03">
                    <div className="tip2-fix-container04">
                        <img alt="Account" src={ Assets.stepCreateAccount } className="tip2-fix-image01" />
                        <div className="tip2-fix-container05">
                            <div className="tip2-fix-step">
                                <div className="tip2-fix-step-bullet">
                                    <div className="tip2-fix-container06"></div>
                                    <div className="tip2-fix-container07"></div>
                                </div>
                                <div className="tip2-fix-step-content">
                                    <span className="tip2-fix-text03">Create an account</span>
                                    <span className="tip2-fix-text04">
                                        <span>
                                            You need to have an account as a user. Learn more about
                                            requesting
                                            <span
                                                dangerouslySetInnerHTML={{
                                                __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <Link to={ Links.request } className="tip2-fix-navlink">here.</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tip2-fix-container08">
                        <img alt="Categories" src={ Assets.stepSelectCategory } className="tip2-fix-image02" />
                        <div className="tip2-fix-container09">
                            <div className="tip2-fix-step1">
                                <div className="tip2-fix-step-bullet1">
                                    <div className="tip2-fix-container10"></div>
                                    <div className="tip2-fix-container11"></div>
                                </div>
                                <div className="tip2-fix-step-content1">
                                    <span className="tip2-fix-text07">Pick a service</span>
                                    <span className="tip2-fix-text08">
                                        <span>
                                            Select the service category you are looking for. Since
                                            this is tip2fix, it is recommended to use the request mode
                                            of service.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tip2-fix-container12">
                        <img alt="Enter Location" src={ Assets.stepEnterLocation } className="tip2-fix-image03" />
                        <div className="tip2-fix-container13">
                            <div className="tip2-fix-step2">
                                <div className="tip2-fix-step-bullet2">
                                    <div className="tip2-fix-container14"></div>
                                    <div className="tip2-fix-container15"></div>
                                </div>
                                <div className="tip2-fix-step-content2">
                                    <span className="tip2-fix-text11">Enter location</span>
                                    <span className="tip2-fix-text12">
                                        <span>
                                            Entering your location helps us tailor your providers to
                                            people who understands your problem as it pertains to
                                            location.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tip2-fix-container16">
                        <img alt="Tip2Fix" src={ Assets.stepTip2Fix } className="tip2-fix-image04" />
                        <div className="tip2-fix-container17">
                            <div className="tip2-fix-step3">
                                <div className="tip2-fix-step-bullet3">
                                    <div className="tip2-fix-container18"></div>
                                    <div className="tip2-fix-container19"></div>
                                </div>
                                <div className="tip2-fix-step-content3">
                                    <span className="tip2-fix-text15">Pick a provider</span>
                                    <span className="tip2-fix-text16">
                                        <span>
                                            Select the provider of your choice, tap on the tip2fix
                                            button to start the call. Prices are inclusive per
                                            session*.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tip2-fix-container20">
                        <img alt="Rating" src={ Assets.stepRate } className="tip2-fix-image05" />
                        <div className="tip2-fix-container21">
                            <div className="tip2-fix-step4">
                                <div className="tip2-fix-step-bullet4">
                                    <div className="tip2-fix-container22"></div>
                                </div>
                                <div className="tip2-fix-step-content4">
                                    <span className="tip2-fix-text19">Rate the provider and the call</span>
                                    <span className="tip2-fix-text20">
                                        <span>
                                            Always try to rate the provider and the call, this helps
                                            us improve our services.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tip2-fix-header1">
                <div className="tip2-fix-container23">
                    <h1 className="tip2-fix-text23">You learn while doing it</h1>
                    <span className="tip2-fix-text24">
                        You can master that solution for the problem when you have the right
                        guidance. All you need is a good mentoring from the Serch service
                        providers.
                    </span>
                </div>
                <img alt="Learn" src={ LinkAssets.tip2FixLearn } className="tip2-fix-image06" />
            </div>
            <div className="tip2-fix-container24">
                <h1 className="tip2-fix-text25">How Tip2Fix works for a provider</h1>
                <div className="tip2-fix-container25">
                    <div className="tip2-fix-container26">
                        <img alt="Account" src={ Assets.stepCreateAccount } className="tip2-fix-image07" />
                        <div className="tip2-fix-container27">
                            <div className="tip2-fix-step5">
                                <div className="tip2-fix-step-bullet5">
                                    <div className="tip2-fix-container28"></div>
                                    <div className="tip2-fix-container29"></div>
                                </div>
                                <div className="tip2-fix-container30">
                                    <div className="tip2-fix-step-content5">
                                        <span className="tip2-fix-text26">Create an account</span>
                                    </div>
                                    <Link to={ Links.providing } className="tip2-fix-navlink1">
                                        <span>
                                            You need to have an account as a provider. Learn more
                                            about service providing 
                                        </span>
                                        <span>h</span>
                                        <span className="tip2-fix-text29">ere</span>
                                        <span className="tip2-fix-text30">.</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tip2-fix-container31">
                        <img alt="Activate" src={ Assets.stepActivateAccount } className="tip2-fix-image08" />
                        <div className="tip2-fix-container32">
                            <div className="tip2-fix-step6">
                                <div className="tip2-fix-step-bullet6">
                                    <div className="tip2-fix-container33"></div>
                                    <div className="tip2-fix-container34"></div>
                                </div>
                                <div className="tip2-fix-step-content6">
                                    <span className="tip2-fix-text31">Be available</span>
                                    <span className="tip2-fix-text32">
                                        <span>
                                            Make sure you are visible anytime you come to the
                                            platform. This will make sure that users can see you when
                                            they search for your service.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tip2-fix-container35">
                        <img alt="Guide" src={ Assets.stepMentor } className="tip2-fix-image09" />
                        <div className="tip2-fix-container36">
                            <div className="tip2-fix-step7">
                                <div className="tip2-fix-step-bullet7">
                                    <div className="tip2-fix-container37"></div>
                                    <div className="tip2-fix-container38"></div>
                                </div>
                                <div className="tip2-fix-step-content7">
                                    <span className="tip2-fix-text35">Be a good mentor</span>
                                    <span className="tip2-fix-text36">
                                        <span>
                                            Ensure that the user solves the problem to its utmost
                                            best. Take pride in making sure you give your best. Be in
                                            your best attitude and good behaviour.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tip2-fix-container39">
                        <img alt="Rating" src={ Assets.stepRate } className="tip2-fix-image10" />
                        <div className="tip2-fix-container40">
                            <div className="tip2-fix-step8">
                                <div className="tip2-fix-step-bullet8">
                                    <div className="tip2-fix-container41"></div>
                                </div>
                                <div className="tip2-fix-step-content8">
                                    <span className="tip2-fix-text39">Rate the user and the call</span>
                                    <span className="tip2-fix-text40">
                                        <span>
                                            Always try to rate the user and the call, this helps us
                                            improve our services.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tip2-fix-header2">
                <div className="tip2-fix-container42">
                    <h1 className="tip2-fix-text43">You earn while teaching it</h1>
                    <span className="tip2-fix-text44">
                        You earn while you mentor that user into solving the problem.
                    </span>
                </div>
                <img alt="Earn" src={ LinkAssets.tip2FixEarn } className="tip2-fix-image11" />
            </div>
            <Footer />
        </div>
    )
}

export default Tip2Fix
