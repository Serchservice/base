import React from 'react'
import { Link } from 'react-router-dom'
import './safety-guidelines.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import LinkAssets from '../../assets/LinkAssets'
import Assets from '../../assets/Assets'
import { Icon } from '@iconify/react'
import Links from '../../config/Links'
import Title from '../../config/Title'

const SafetyGuidelines = () => {
    return (
        <div className="safety-guidelines-container">
            <Title title="Safety Guidelines" description='Learn how to be safe when using the Serch platform' />
            <Header />
            <div className="safety-guidelines-heading">
                <h1 className="safety-guidelines-text">
                    <span>Your safety first</span>
                    <br></br>
                </h1>
                <span className="safety-guidelines-text03">
                    We want you to request, get services and provide services without any
                    worry of your safety. This is why we are committed to providing a
                    state-of-the-art safety precautions and features.
                </span>
            </div>
            <div className="safety-guidelines-container01">
                <h1>Safety built in your experience</h1>
                <div className="safety-guidelines-container02">
                    <div className="safety-guidelines-user-safety">
                        <div className="safety-guidelines-container03">
                            <div className="safety-guidelines-container04">
                                <h1 className="safety-guidelines-text05">Requesting for service?</h1>
                                <span className="safety-guidelines-text06">
                                    You can share the location of the provider or all the
                                    providers on the service trip, with your loved ones. Let them
                                    know you are not alone.
                                </span>
                            </div>
                            <img alt="Service" src={ LinkAssets.safetyService } className="safety-guidelines-image" />
                        </div>
                        <div className="safety-guidelines-container05">
                            <div className="safety-guidelines-container06">
                                <div className="safety-guidelines-container07">
                                    <Icon icon="flowbite:profile-card-solid" className="safety-guidelines-icon"/>
                                    <span className="safety-guidelines-text07">Provider Profile</span>
                                    <span className="safety-guidelines-text08">
                                        <span>
                                            Get to know the provider before inviting them to your
                                            location. You can see their rating, what people say about
                                            them, amount of service trips completed and more.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                                <div className="safety-guidelines-container08">
                                    <Icon icon="tabler:progress-check" className="safety-guidelines-icon02"/>
                                    <span className="safety-guidelines-text11">More safety checks</span>
                                    <span className="safety-guidelines-text12">
                                        <span>
                                            There is more you can do with our safety measures. This
                                            not only pertains to you, but even for the provider.
                                        </span>
                                        <br></br>
                                    </span>
                                    <a href="#safety-tips" className="safety-guidelines-link">
                                        <div data-role="accordion-container" className="safety-guidelines-element accordion-element">
                                            <div className="safety-guidelines-details">
                                                <span className="safety-guidelines-text15">See more</span>
                                            </div>
                                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="safety-guidelines-icon04"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="safety-guidelines-user-safety1">
                        <div className="safety-guidelines-container09">
                            <img alt="Providing" src={ LinkAssets.safetyProviding } className="safety-guidelines-image1" />
                            <div className="safety-guidelines-container10">
                                <h1 className="safety-guidelines-text16">Providing a service?</h1>
                                <span className="safety-guidelines-text17">
                                    You can share your location and let your loved ones know where
                                    you are at all times. Stay connected and protected throughout
                                    your service trip.
                                </span>
                            </div>
                            <div className="safety-guidelines-container11">
                                <div className="safety-guidelines-container12">
                                    <Icon icon="flowbite:profile-card-solid" className="safety-guidelines-icon06"/>
                                    <span className="safety-guidelines-text18">User Profile</span>
                                    <span className="safety-guidelines-text19">
                                        <span>
                                            Get to know the user before accepting to go for the trip.
                                            You can see their rating, what people say about them, and
                                            the location.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                                <div className="safety-guidelines-container13">
                                    <Icon icon="tabler:progress-check" className="safety-guidelines-icon08"/>
                                    <span className="safety-guidelines-text22">More safety checks</span>
                                    <span className="safety-guidelines-text23">
                                        <span>
                                            There is more you can do with our safety measures. This
                                            not only pertains to you, but even for the user.
                                        </span>
                                        <br></br>
                                    </span>
                                    <a href="#safety-tips" className="safety-guidelines-link1">
                                        <div data-role="accordion-container" className="safety-guidelines-element1 accordion-element">
                                            <div className="safety-guidelines-details1">
                                                <span className="safety-guidelines-text26">See more</span>
                                            </div>
                                            <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="safety-guidelines-icon010"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="safety-guidelines-container14">
                <h1 className="safety-guidelines-text27">Keeping you safe is not just a thing for us</h1>
                <span className="safety-guidelines-text28">
                    We make it our priority to make sure that both the provider and the
                    person requesting for the service, whether a guest, user or requesting
                    for someone else, are always safe when using our platforms. We play
                    our part, and we expect you to play yours too.
                </span>
            </div>
            <div className="safety-guidelines-user-safety2">
                <div className="safety-guidelines-container15">
                    <img alt="Authentication" src={ LinkAssets.safetyAuth } className="safety-guidelines-image2" />
                    <div className="safety-guidelines-container16">
                        <h1 className="safety-guidelines-text29">Authenticate your provider, every time</h1>
                        <span className="safety-guidelines-text30">
                            Before inviting the provider in when the provider arrives, verify
                            the provider&apos;s information by following these procedures.
                        </span>
                    </div>
                </div>
                <div className="safety-guidelines-container17">
                    <div className="safety-guidelines-container18">
                        <div className="safety-guidelines-container19">
                            <img alt="Verification" src={ Assets.verified200H } className="safety-guidelines-image3" />
                            <span className="safety-guidelines-text31">Step 1</span>
                            <span className="safety-guidelines-text32">
                                <span>
                                    Tell the provider to call out the pin code sent to the
                                    provider&apos;s email when the trip was initiated. If the code
                                    matches the one in the app, you are almost there.
                                </span>
                                <br></br>
                            </span>
                        </div>
                        <div className="safety-guidelines-container20">
                            <img alt="Notes" src={ Assets.notes200H } className="safety-guidelines-image4" />
                            <span className="safety-guidelines-text35">Step 2</span>
                            <span className="safety-guidelines-text36">
                                <span>
                                    Match the profile photo of the provider with the one in the app.
                                </span>
                                <br></br>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="safety-guidelines-user-safety3">
                <div className="safety-guidelines-container21">
                    <div className="safety-guidelines-container22">
                        <h1 className="safety-guidelines-text39">Feeling safe at all times.</h1>
                        <span className="safety-guidelines-text40">
                            As provider, safety is designed within your experience. So,
                            you&apos;d always have peace of mind wherever you are going to.
                        </span>
                    </div>
                    <img alt="Safety" src={ LinkAssets.safety } className="safety-guidelines-image5" />
                </div>
                <div className="safety-guidelines-container23">
                    <div className="safety-guidelines-container24">
                        <div className="safety-guidelines-container25">
                            <span className="safety-guidelines-text41">Inclusive community</span>
                            <span className="safety-guidelines-text42">
                                <span>
                                    There is an inclusive community dedicated towards ensuring
                                    safe services wherever you are.
                                </span>
                                <br></br>
                            </span>
                        </div>
                        <div className="safety-guidelines-container26">
                            <span className="safety-guidelines-text45">Safety features</span>
                            <span className="safety-guidelines-text46">
                                <span>
                                    You can tell your loved ones where you are and they can help
                                    you monitor your movement. If you are a business service
                                    provider, your business management, will always be aware of
                                    your movement at anytime.
                                </span>
                                <br></br>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="safety-tips" className="safety-guidelines-container27">
                <h1 className="safety-guidelines-text49">Peace of mind in every service</h1>
                <span className="safety-guidelines-text50">
                    As a design, safety is embedded in your experience. Whether
                    you&apos;re a provider rendering the service, or someone requesting
                    for a service provider.
                </span>
                <div className="safety-guidelines-container28">
                    <div className="safety-guidelines-container29">
                        <Icon icon="gis:location-man" className="safety-guidelines-icon12" />
                        <span className="safety-guidelines-text51">Location awareness</span>
                        <span className="safety-guidelines-text52">
                            <span>Friends and families can get realtime update </span>
                            <span>on your location.</span>
                            <br></br>
                        </span>
                    </div>
                    <div className="safety-guidelines-container30">
                        <Icon icon="solar:lock-password-unlocked-bold-duotone" className="safety-guidelines-icon14" />
                        <span className="safety-guidelines-text56">Verify Your Pin</span>
                        <span className="safety-guidelines-text57">
                            <span>You will need to verify the pin sent to you, </span>
                            <span>before you can start any service.</span>
                            <br></br>
                        </span>
                    </div>
                    <div className="safety-guidelines-container31">
                        <Icon icon="solar:star-bold-duotone" className="safety-guidelines-icon19" />
                        <span className="safety-guidelines-text61">2-way rating</span>
                        <span className="safety-guidelines-text62">
                            <span>Giving feedback is important. Low -rated </span>
                            <span>trips are logged, and users may be removed t</span>
                            <span>o protect the community.</span>
                            <br></br>
                        </span>
                    </div>
                    <div className="safety-guidelines-container32">
                        <Icon icon="icon-park-solid:gps" className="safety-guidelines-icon21" />
                        <span className="safety-guidelines-text67">GPS Tracking</span>
                        <span className="safety-guidelines-text68">
                            <span>All service trips are tracked from start to f</span>
                            <span>inish, so there&apos;s a record when something </span>
                            <span>happens.</span>
                            <br></br>
                        </span>
                    </div>
                    <div className="safety-guidelines-container33">
                        <Icon icon="solar:help-bold-duotone" className="safety-guidelines-icon23" />
                        <span className="safety-guidelines-text73">24/7 Help and Support</span>
                        <span className="safety-guidelines-text74">
                            <span>
                                Whether it is a quick question, an incident to report,
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                            <span>or an issue that we need to know, it&apos;s easy to get the </span>
                            <span>
                                help and assistance you need. Access 24/7 help and
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                            <span>support from the app.</span>
                            <br></br>
                        </span>
                    </div>
                    <div className="safety-guidelines-container34">
                        <Icon icon="simple-icons:artifacthub" className="safety-guidelines-icon25" />
                        <span className="safety-guidelines-text80">Safety Hub</span>
                        <span className="safety-guidelines-text81">
                            <span>
                                Visit the in-app safety hub to see what we are
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                            <span>
                                doing to keep your service trip safe at all times.
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                            <br></br>
                            <span>
                                You can tap on the safety icon, during a trip, to
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                            <span>see what you can do.</span>
                            <br></br>
                        </span>
                    </div>
                </div>
            </div>
            <div className="safety-guidelines-countries-in-serch">
                <main className="safety-guidelines-career-roles">
                    <div className="safety-guidelines-header">
                        <h2 className="section-heading">Safety-Guard Community</h2>
                        <p className="safety-guidelines-description section-description">
                            Our Safety-Guard community and Serch helps in streamlining how
                            safety is being tackled in Serch. Any person who doesn&apos;t
                            follow our community guidelines, may be at the risk of being
                            removed from the platform.
                        </p>
                        <Link to={ Links.communityGuidelines } className="safety-guidelines-navlink">
                            <div data-role="accordion-container" className="safety-guidelines-element2 accordion-element">
                                <div className="safety-guidelines-details2">
                                    <span className="safety-guidelines-text88">Read our community guidelines</span>
                                </div>
                                <Icon icon="ep:arrow-right-bold" data-role="accordion-icon" className="safety-guidelines-icon2"/>
                            </div>
                        </Link>
                    </div>
                    <div className="safety-guidelines-buttons">
                        <Link to={ Links.sgc } className="safety-guidelines-navlink1">
                            <div className="safety-guidelines-get-started button">
                                <span className="safety-guidelines-text89">Become a part of SGC</span>
                            </div>
                        </Link>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default SafetyGuidelines
