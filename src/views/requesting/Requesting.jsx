import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './requesting.css'
import Header from '../../components/header/Header'
import CountriesInSerch from '../../components/countries-in-serch/CountriesInSerch'
import Footer from '../../components/footer/Footer'
import LinkAssets from '../../assets/LinkAssets'
import Assets from '../../assets/Assets'
import { Icon } from '@iconify/react'
import Links from '../../config/Links'
import Title from '../../config/Title'

const Requesting = () => {
    return (
        <div className="requesting-container">
            <Title title="Requesting" description='Understand how service requesting works in Serch' />
            <Header />
            <section className="requesting-section">
                <main className="requesting-main">
                    <header className="requesting-header">
                        <h1 className="requesting-heading">Repair anything with Serch</h1>
                        <span className="requesting-caption">Pick or search for a provider, invite, and relax.</span>
                    </header>
                    <div className="requesting-buttons">
                        <span className="requesting-link hoverButton">
                            <span className="requesting-text">Plumber</span>
                            <br></br>
                        </span>
                        <span className="requesting-link1 hoverButton">
                            <span className="requesting-text02">Mechanic</span>
                            <br></br>
                        </span>
                        <span className="requesting-link2 hoverButton">
                            <span>Electrician</span>
                            <br></br>
                        </span>
                        <span className="requesting-link3 hoverButton">
                            <span className="requesting-text06">Carpenter</span>
                            <br></br>
                        </span>
                    </div>
                </main>
                <img alt="Requesting" src={ LinkAssets.requesting } className="requesting-image" />
            </section>
            <div className="requesting-container01">
                <h1 className="requesting-text08">How to use the Serch app</h1>
                <div className="requesting-container02">
                    <div className="requesting-container03">
                        <img alt="Account" src={ Assets.stepCreateAccount } className="requesting-image01" />
                        <div className="requesting-container04">
                            <div className="requesting-step">
                                <div className="requesting-step-bullet">
                                    <div className="requesting-container05"></div>
                                    <div className="requesting-container06"></div>
                                </div>
                                <div className="requesting-step-content">
                                    <span className="requesting-text09">Create an account</span>
                                    <span className="requesting-text10">
                                        <span>
                                            All you need is an email address and phone number. For the
                                            moment, you can request a service from the Serch app. To
                                            download the app, go to the
                                            <span
                                                dangerouslySetInnerHTML={{
                                                __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <a href={ Links.applestoreUser } target="_blank" rel="noreferrer noopener" className="requesting-link4">
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
                                        <a href={ Links.playstoreUser } target="_blank" rel="noreferrer noopener" className="requesting-link5">
                                            Google Play
                                        </a>
                                        <span>.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="requesting-container07">
                        <img alt="Service mode" src={ Assets.stepPickServiceMode } className="requesting-image02" />
                        <div className="requesting-container08">
                            <div className="requesting-step01">
                                <div className="requesting-step-bullet01">
                                    <div className="requesting-container09"></div>
                                    <div className="requesting-container10"></div>
                                </div>
                                <div className="requesting-step-content01">
                                    <span className="requesting-text14">Pick a service</span>
                                    <span className="requesting-text15">
                                        <span>
                                            Open the app and pick the service you want. Also select
                                            the mode of request you want. There are two modes of
                                            request:
                                        </span>
                                        <br></br>
                                        <span>1. Request</span>
                                        <br></br>
                                        <span>2. Drive to</span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="requesting-container11">
                        <img alt="Location" src={ Assets.stepEnterLocation } className="requesting-image03" />
                        <div className="requesting-container12">
                            <div className="requesting-step02">
                                <div className="requesting-step-bullet02">
                                    <div className="requesting-container13"></div>
                                    <div className="requesting-container14"></div>
                                </div>
                                <div className="requesting-step-content02">
                                    <span className="requesting-text22">Enter your location</span>
                                    <span className="requesting-text23">
                                        <span>
                                            Enter your location or alternatively, the destination for
                                            the service request. If Drive to mode, you will enter your
                                            location for easy connectivity.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="requesting-container15">
                        <img alt="Discuss" src={ Assets.stepDiscussion } className="requesting-image04" />
                        <div className="requesting-container16">
                            <div className="requesting-step03">
                                <div className="requesting-step-bullet03">
                                    <div className="requesting-container17"></div>
                                    <div className="requesting-container18"></div>
                                </div>
                                <div className="requesting-step-content03">
                                    <span className="requesting-text26">Discuss with a provider</span>
                                    <span className="requesting-text27">
                                        <span>
                                            Depending on your settings, we tailor your experience
                                            towards it. So, you have to discuss with any provider or a
                                            provider, share your problems, discuss price and confirm
                                            connection.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="requesting-container19">
                        <img alt="Track trip" src={ Assets.stepTrack } className="requesting-image05" />
                        <div className="requesting-container20">
                            <div className="requesting-step04">
                                <div className="requesting-step-bullet04">
                                    <div className="requesting-container21"></div>
                                    <div className="requesting-container22"></div>
                                </div>
                                <div className="requesting-step-content04">
                                    <span className="requesting-text30">Meet your provider</span>
                                    <span className="requesting-text31">
                                        <span>
                                            You can track their arrival on the map. When they’re a few
                                            minutes away, wait for them at your location.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="requesting-container23">
                        <img alt="Authentication" src={ Assets.stepAuthenticate } className="requesting-image06" />
                        <div className="requesting-container24">
                            <div className="requesting-step05">
                                <div className="requesting-step-bullet05">
                                    <div className="requesting-container25"></div>
                                    <div className="requesting-container26"></div>
                                </div>
                                <div className="requesting-step-content05">
                                    <span className="requesting-text34">Check your provider</span>
                                    <span className="requesting-text35">
                                        <span>
                                            Every time you take a trip with Serch please make sure
                                            you’re inviting the right provider to your location.
                                            Verify with the provided authentication code, also check
                                            the provider&apos;s photo with what’s provided in your
                                            app.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="requesting-container27">
                        <img alt="Fix" src={ Assets.stepFix } className="requesting-image07" />
                        <div className="requesting-container28">
                        <div className="requesting-step06">
                            <div className="requesting-step-bullet06">
                                <div className="requesting-container29"></div>
                                <div className="requesting-container30"></div>
                            </div>
                            <div className="requesting-step-content06">
                                <span className="requesting-text41">Sit back and relax</span>
                                <span className="requesting-text42">
                                    <span>
                                        Allow the provider to flex the skill and make you happy.
                                        Payment is always between you and the provider. You
                                        determine the method you want to pay with and communicate
                                        with the provider.
                                    </span>
                                    <br></br>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="requesting-container31">
                    <img alt="Rating" src={ Assets.stepRate } className="requesting-image08" />
                    <div className="requesting-container32">
                        <div className="requesting-step07">
                            <div className="requesting-step-bullet07">
                                <div className="requesting-container33"></div>
                            </div>
                            <div className="requesting-step-content07">
                                <span className="requesting-text45">Rate your service trip</span>
                                <span className="requesting-text46">
                                    <span>
                                        Let us know how the service trip went. You can always tip
                                        your provider when you get a quality service.
                                    </span>
                                    <br></br>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="requesting-container34">
                <div className="requesting-container35">
                    <h1 className="requesting-text49">Smooth servicing in the app</h1>
                    <div className="requesting-team">
                        <div className="requesting-box">
                            <img alt="Pricing" src={ LinkAssets.requestingPricing } className="requesting-image09" />
                            <span className="requesting-text50">Upfront pricing</span>
                            <span className="requesting-text51">
                                Before confirming a service trip, it is best to discuss price
                                with the service provider. You can do this via chat or voice
                                call. We can give price estimates, but that doesn&apos;t
                                conclude on the actual price for the service trip.
                            </span>
                            <a href="#pricing" className="requesting-link6">Learn how pricing works</a>
                        </div>
                        <div className="requesting-box1">
                            <img alt="Location" src={ LinkAssets.requestingLocation } className="requesting-image10" />
                            <span className="requesting-text52">Perfect location</span>
                            <span className="requesting-text53">
                                Before confirming your request, you can check if the location
                                matches the one you want. This makes it possible for you to make
                                sure you get the service where you want it to be.
                            </span>
                            <a href="#edit" className="requesting-link7">Edit my location</a>
                        </div>
                    </div>
                    <div className="requesting-team1">
                        <div className="requesting-box2">
                            <img alt="Know your provider" src={ LinkAssets.requestingProvider } className="requesting-image11" />
                            <span className="requesting-text54">Know your provider</span>
                            <span className="requesting-text55">
                                Always check the service provider&apos;s profile to lean more
                                facts about the provider.
                            </span>
                            <a href="#connect" className="requesting-link8">Connect with your provider</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="requesting-user-safety">
                <div className="requesting-container36">
                    <div className="requesting-container37">
                        <h1 className="requesting-text56">Feeling safe at all times.</h1>
                        <span className="requesting-text57">
                            From service provider screening to our app features, be assured
                            that we are doing all we can to provide you the safety you deserve
                            with Serch.
                        </span>
                        <Link to={ Links.safety } className="requesting-navlink">Request with confidence</Link>
                    </div>
                    <img alt="Safety" src={ LinkAssets.requestingSafety } className="requesting-image12" />
                </div>
            </div>
            <div className="requesting-countries-in-serch">
                <CountriesInSerch />
            </div>
            <div className="requesting-container38">
                <h1 className="requesting-text58">Get everything from your trip</h1>
                <div className="requesting-container39">
                    <Icon icon="material-symbols:move-location-rounded" className="requesting-icon" />
                    <h1 className="requesting-text59">Before your trip</h1>
                    <div className="requesting-container40">
                        <div className="requesting-step08">
                            <div className="requesting-step-bullet08">
                                <div className="requesting-container41"></div>
                                <div className="requesting-container42"></div>
                            </div>
                            <div className="requesting-step-content08">
                                <span id="edit" className="requesting-text60">Edit my location</span>
                                <span className="requesting-text61">
                                    Changing your location is easy. Get to where you want to go by
                                    tapping Edit to enter a new address.
                                </span>
                            </div>
                        </div>
                        <div className="requesting-step09">
                            <div className="requesting-step-bullet09">
                                <div className="requesting-container43"></div>
                                <div className="requesting-container44"></div>
                            </div>
                            <div className="requesting-step-content09">
                                <span id="connect" className="requesting-text62">View provider&apos;s profile</span>
                                <span className="requesting-text63">
                                    Many people who service with Serch have amazing stories. You
                                    can learn more about your service in their profile, which
                                    includes fun facts like what skill sets they have and why they
                                    do what they do.
                                </span>
                            </div>
                        </div>
                        <div className="requesting-step10">
                            <div className="requesting-step-bullet10">
                                <div className="requesting-container45"></div>
                                <div className="requesting-container46"></div>
                            </div>
                            <div className="requesting-step-content10">
                                <span className="requesting-text64">Schedule a service</span>
                                <span className="requesting-text65">
                                    Complete your plans today by reserving a service provider.
                                    Request your trip up to 24 hours ahead with Serch Schedule, so
                                    servicing that problem is the last thing on your mind.
                                </span>
                            </div>
                        </div>
                        <div className="requesting-step11">
                            <div className="requesting-step-bullet11">
                                <div className="requesting-container47"></div>
                                <div className="requesting-container48"></div>
                            </div>
                            <div className="requesting-step-content11">
                                <span className="requesting-text66">Request for a guest</span>
                                <span className="requesting-text67">
                                    For times when you want to service a problem for your friends
                                    and family, or you want to recommend for them – you can
                                    request a trip for other adults through your app.
                                </span>
                            </div>
                        </div>
                        <div className="requesting-step12">
                            <div className="requesting-step-bullet12">
                                <div className="requesting-container49"></div>
                                <div className="requesting-container50"></div>
                            </div>
                            <div className="requesting-step-content12">
                                <span id="pricing" className="requesting-text68">Upfront pricing</span>
                                <span className="requesting-text69">
                                    Before you request a trip, the app might show an estimated
                                    upfront price to your service request—or you can call or chat
                                    with the provider to determine price before initiating the
                                    trip.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="requesting-container51">
                    <Icon icon="game-icons:auto-repair" className="requesting-icon02" />
                    <h1 className="requesting-text70">During your trip</h1>
                    <div className="requesting-container52">
                        <div className="requesting-step13">
                            <div className="requesting-step-bullet13">
                                <div className="requesting-container53"></div>
                                <div className="requesting-container54"></div>
                            </div>
                            <div className="requesting-step-content13">
                                <span className="requesting-text71">Safety Guidelines</span>
                                <span className="requesting-text72">
                                    Your safety is our priority. We never stop working to reduce
                                    incidents and set new standards, so you can stay connected and
                                    protected every time you ride with us. Because safety never
                                    stops.
                                </span>
                                <Link to={ Links.safety } className="requesting-navlink1">
                                    Read more about safety
                                </Link>
                            </div>
                        </div>
                        <div className="requesting-step14">
                            <div className="requesting-step-bullet14">
                                <div className="requesting-container55"></div>
                                <div className="requesting-container56"></div>
                            </div>
                            <div className="requesting-step-content14">
                                <span className="requesting-text73">RequestSharing</span>
                                <span className="requesting-text74">
                                    With RequestSharing, you can invite another provider to a
                                    service trip and still get the job done, while you get a share
                                    commission.
                                </span>
                                <Link to={ Links.requestSharing } className="requesting-navlink2">
                                    Learn more about sharing
                                </Link>
                            </div>
                        </div>
                        <div className="requesting-step15">
                            <div className="requesting-step-bullet15">
                                <div className="requesting-container57"></div>
                                <div className="requesting-container58"></div>
                            </div>
                            <div className="requesting-step-content15">
                                <span className="requesting-text75">Stick-With-Me</span>
                                <span className="requesting-text76">
                                    With Stick With Me, you can let friends and family easily see
                                    your trip status and location on the map so that someone you
                                    trust always knows where you are.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="requesting-container59">
                    <Icon icon="ph:star-half-fill" className="requesting-icon04" />
                    <h1 className="requesting-text77">After your trip</h1>
                    <div className="requesting-container60">
                        <div className="requesting-step16">
                            <div className="requesting-step-bullet16">
                                <div className="requesting-container61"></div>
                                <div className="requesting-container62"></div>
                            </div>
                            <div className="requesting-step-content16">
                                <span className="requesting-text78">Ratings</span>
                                <span className="requesting-text79">
                                    Ratings allow us to ensure a positive experience in all platforms,
                                    so we take them seriously.
                                    Providers with low ratings may lose access to the app, as well
                                    as users.
                                </span>
                            </div>
                        </div>
                        <div className="requesting-step17">
                            <div className="requesting-step-bullet17">
                                <div className="requesting-container63"></div>
                                <div className="requesting-container64"></div>
                            </div>
                            <div className="requesting-step-content17">
                                <span className="requesting-text80">Tipping</span>
                                <span className="requesting-text81">
                                    Tipping is an easy way to say thanks. Users and guests have
                                    the option to tip the provider right after a service trip. We
                                    know you might have decided on the amount, but if the job was
                                    well done, you can appreciate the effort.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="requesting-faq">
                <header className="requesting-header1">
                    <span className="requesting-section1 section-head">Requesting - FAQ</span>
                    <h2 className="requesting-heading1 section-heading">Frequently asked questions</h2>
                    <div data-role="accordion-container" className="requesting-element accordion-element">
                        <div className="requesting-details">
                            <span className="requesting-text82">How do I create an account?</span>
                            <span data-role="accordion-content" className="requesting-text83">
                                Download the Serch user app from Google Play store or Apple
                                Store. Then create an account with your email address.
                            </span>
                        </div>
                        <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="requesting-icon06"/>
                    </div>
                    <Link to={ Links.countries } className="requesting-navlink3">
                        <div data-role="accordion-container" className="requesting-element1 accordion-element">
                            <div className="requesting-details1">
                                <span className="requesting-text84">Is Serch launched in my city?</span>
                                <span data-role="accordion-content" className="requesting-text85">
                                    Check countries in Serch to know if your country or city is in Serch.
                                </span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="requesting-icon08"/>
                        </div>
                    </Link>
                    <Link to={ Links.requesting } className="requesting-navlink4">
                        <div data-role="accordion-container" className="requesting-element2 accordion-element">
                            <div className="requesting-details2">
                                <span className="requesting-text86">How do I request for a provider?</span>
                                <span data-role="accordion-content" className="requesting-text87">
                                    Download the app, register and select the service category you
                                    want. Optionally, you can type in your situation and choose
                                    from the multiple options presented. Pick a service, you will
                                    get a list of providers within your area. You can also
                                    increase your search range, if you want.
                                </span>
                            </div>
                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="requesting-icon08"/>
                        </div>
                    </Link>
                </header>
            </div>
            <Footer />
        </div>
    )
}

export default Requesting
