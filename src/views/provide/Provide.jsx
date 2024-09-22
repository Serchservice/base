import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './provide.css'
import Assets from '../../assets/Assets'
import Header from '../../components/header/Header'
import CountriesInSerch from '../../components/countries-in-serch/CountriesInSerch'
import DownloadProviderApp from '../../components/app-download/DownloadProviderApp'
import Footer from '../../components/footer/Footer'
import Plan from '../../components/plan/Plan'
import { Icon } from '@iconify/react'
import LinkAssets from '../../assets/LinkAssets'
import Links from '../../config/Links'
import Title from '../../config/Title'

const Provide = () => {
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
        <div className="provide-container">
            <Title title="Provide" description='Learn what it takes to become a Serch Partner' />
            <Header />
            <div className="provide-header">
                <div className="provide-container01">
                    <h1 className="provide-text">Flex your providing skills</h1>
                    <span className="provide-text001">
                        Utilize that skill of yours, let it make some money for you, while
                        you grow with the platform that bears your interest at heart.
                    </span>
                    <Link to={ Links.safety } className="provide-navlink">
                        <div data-role="accordion-container" className="provide-element accordion-element">
                            <div className="provide-details">
                                <span className="provide-text002">Start providing</span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="provide-icon"/>
                        </div>
                    </Link>
                </div>
                <img alt="Provide Skills" src={ LinkAssets.provideSkills } className="provide-image" />
            </div>
            <div className="provide-container02">
                <h1 className="provide-text003">Make money on your terms</h1>
                <div className="provide-container03">
                    <img alt="Providers" src={ Assets.users400W } className="provide-image01" />
                </div>
                <div className="provide-container04">
                    <div className="provide-container05">
                        <Icon icon="lucide:goal" className="provide-icon02"/>
                        <span className="provide-text004">Define your goals</span>
                        <span className="provide-text005">
                            <span>You&apos;re the boss when you&apos;re with Serch.</span>
                            <br></br>
                            <span>You define when users can request for your</span>
                            <br></br>
                            <span>service. You define your rate for any physical</span>
                            <br></br>
                            <span>service. You earn what you want.</span>
                            <br></br>
                        </span>
                    </div>
                    <div className="provide-container06">
                        <Icon icon="solar:hand-money-bold-duotone" className="provide-icon04"/>
                        <span className="provide-text014">Make money on your terms</span>
                        <span className="provide-text015">
                            <span>The more you fix, the more you earn. And </span>
                            <br></br>
                            <span>an add-on, the more you share, the more</span>
                            <br></br>
                            <span>you earn!</span>
                            <br></br>
                        </span>
                    </div>
                    <div className="provide-container07">
                        <Icon icon="line-md:my-location-loop" className="provide-icon06"/>
                        <span className="provide-text022">Always be in loop</span>
                        <span className="provide-text023">
                            <span>Keep your customers in constant </span>
                            <br></br>
                            <span>communication with your movement.</span>
                            <br></br>
                            <span>Don&apos;t keep them waiting or guessing.</span>
                            <br></br>
                        </span>
                    </div>
                </div>
            </div>
            <div className="provide-services">
                <div className="provide-electrician">
                    <img alt="Electrician" src={ Assets.electrician300H } className="provide-image02" />
                    <span className="provide-text30">Electrician</span>
                </div>
                <div className="provide-mechanic">
                    <img alt="Mechanic" src={ Assets.mechanic300H } className="provide-image03" />
                    <span className="provide-text31">Mechanic</span>
                </div>
                <div className="provide-plumber">
                    <img alt="Plumber" src={ Assets.plumber300H } className="provide-image04" />
                    <span className="provide-text32">Plumber</span>
                </div>
                <div className="provide-carpenter">
                    <img alt="Carpenter" src={ Assets.carpenter300H } className="provide-image05" />
                    <span className="provide-text33">Carpenter</span>
                </div>
            </div>
            <div className="provide-start-now">
                <h1 className="provide-text034">Get started</h1>
                <div className="provide-features">
                    <div className="provide-feature feature feature-active">
                        <h3 className="provide-text035">Flex your skill</h3>
                    </div>
                </div>
                <div className="provide-container08">
                    <div className="provide-container09">
                        <Icon icon="ion:create" className="provide-icon08"/>
                        <span className="provide-text036">Create an account</span>
                        <span className="provide-text037">
                            You&apos;ll need an email address to start account creation.
                            You will need to verify the email and provide some extra details for your account.
                        </span>
                    </div>
                    <div className="provide-container10">
                        <Icon icon="eos-icons:subscription-management" className="provide-icon11"/>
                        <span className="provide-text044">Choose payment plans</span>
                        <span className="provide-text045">
                            Payment needs to be made so as to keep your account active and functioning.
                            You can pick from our multiple plans.
                        </span>
                        <a href="#pricing-provider" className="provide-link">
                            <div data-role="accordion-container" className="provide-element1 accordion-element">
                                <div className="provide-details1">
                                    <span className="provide-text052">See pricing</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="provide-icon14"/>
                            </div>
                        </a>
                    </div>
                    <div className="provide-container11">
                        <Icon icon="solar:diploma-verified-bold-duotone" className="provide-icon16" />
                        <span className="provide-text053">Get verified</span>
                        <span className="provide-text054">
                            Verification gives you added advantage to provide services in Serch platform.
                            We give visibility to verified providers.
                        </span>
                        <Link to={ Links.verification } className="provide-navlink1">
                            <div data-role="accordion-container" className="provide-element2 accordion-element">
                                <div className="provide-details2">
                                    <span className="provide-text061">See requirements</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="provide-icon18"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <main id="pricing-provider" className="provide-pricing">
                <header className="provide-header1">
                    <header className="provide-left">
                        <span className="provide-section section-head">Pricing</span>
                        <h2 className="provide-heading section-heading">Start small, go loud</h2>
                    </header>
                    <div className="provide-right">
                        <p className="provide-paragraph section-description">
                            Choose from a multitude of Serch plans, that which suits you best
                        </p>
                    </div>
                </header>
                <main className="provide-plans">
                    Coming soon
                    {/* {
                        plans.map((value, key) => {
                            return (<Plan plan={ value } key={ key } />)
                        })
                    } */}
                </main>
            </main>
            <div className="provide-safety-matters">
                <div className="provide-container30">
                    <h1 className="provide-text067">Your safety is important</h1>
                </div>
                <div className="provide-container31">
                    <img alt="image" src={ Assets.light200H } className="provide-image10" />
                </div>
                <div className="provide-container32">
                    <div className="provide-container33">
                        <Icon icon="ic:twotone-lock-person" className="provide-icon59" />
                        <span className="provide-text068">Safety features</span>
                        <span className="provide-text069">
                            <span>Verify provider with the trip authentication </span>
                            <br></br>
                            <span>code for the trip. Tell the provider to call it </span>
                            <br></br>
                            <span>out for you. Share your location with your </span>
                            <br></br>
                            <span>loved ones.</span>
                            <br></br>
                        </span>
                        <Link to={ Links.safety } className="provide-navlink2">
                            <div data-role="accordion-container" className="provide-element3 accordion-element">
                                <div className="provide-details3">
                                    <span className="provide-text078">More on safety features</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="provide-icon61"/>
                            </div>
                        </Link>
                    </div>
                    <div className="provide-container34">
                        <Icon icon="healthicons:community-meeting" className="provide-icon63" />
                        <span className="provide-text079">SafeGuard Community</span>
                        <span className="provide-text080">
                            <span>Join our all-inclusive safe-guard community. </span>
                            <br></br>
                            <span>Speak your mind on how we can improve </span>
                            <br></br>
                            <span>the quality of our security.</span>
                            <br></br>
                        </span>
                        <Link to={ Links.newsroom } className="provide-navlink3">
                            <div data-role="accordion-container" className="provide-element4 accordion-element">
                                <div className="provide-details4">
                                    <span className="provide-text087">Join SGC here</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="provide-icon66"/>
                            </div>
                        </Link>
                    </div>
                    <div className="provide-container35">
                        <Icon icon="solar:chat-round-call-bold-duotone" className="provide-icon68" />
                        <span className="provide-text088">Get 24/7 help when in need</span>
                        <span className="provide-text089">
                            <span>Get the support and help you need in the </span>
                            <br></br>
                            <span>app, anytime you need it.</span>
                            <br></br>
                        </span>
                    </div>
                </div>
            </div>
            <div className="provide-countries-in-serch">
                <CountriesInSerch />
            </div>
            <div className="provide-faq">
                <header className="provide-header6">
                    <span className="provide-section1 section-head">FAQ</span>
                    <h2 className="provide-heading1 section-heading">Frequently asked questions</h2>
                    <div data-role="accordion-container" className="provide-element5 accordion-element">
                        <div className="provide-details5">
                            <span className="provide-text094">How do I create an account?</span>
                            <span data-role="accordion-content" className="provide-text095">
                                Download the Serch provider app from Google Play store or Apple
                                Store. Then create an account with your email address. You will
                                be required to provide some specific details as to who you are
                                and what you can do.
                            </span>
                            <Link to={ Links.providing } className="provide-navlink4">
                                <div data-role="accordion-container" className="provide-element6 accordion-element">
                                    <div className="provide-details6">
                                        <span className="provide-text096">Check out providing with Serch</span>
                                    </div>
                                    <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="provide-icon70"/>
                                </div>
                            </Link>
                        </div>
                        <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="provide-icon72"/>
                    </div>
                    <Link to={ Links.countries } className="provide-navlink5">
                        <div data-role="accordion-container" className="provide-element7 accordion-element">
                            <div className="provide-details7">
                                <span className="provide-text097">Is Serch launched in my city?</span>
                                <span data-role="accordion-content" className="provide-text098">
                                    Check countries in Serch to know if your country or city is in
                                    Serch.
                                </span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="provide-icon74"/>
                        </div>
                    </Link>
                    <Link to={ Links.requesting } className="provide-navlink6">
                        <div data-role="accordion-container" className="provide-element8 accordion-element">
                            <div className="provide-details8">
                                <span className="provide-text099">How do I get users in need of my services?</span>
                                <span data-role="accordion-content" className="provide-text100">
                                    Serch handles all that for you. If Serch is launched in your
                                    city or country, it means that you can easily get services
                                    since we drive towards making everyone happy.  Just make sure
                                    you have an active Serch plan, get verified (it increases your
                                    visibility) and also have a good rating.
                                </span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="provide-icon76"/>
                        </div>
                    </Link>
                </header>
            </div>
            <DownloadProviderApp />
            <Footer />
        </div>
    )
}

export default Provide
