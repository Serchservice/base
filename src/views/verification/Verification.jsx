import React from 'react'
import { Link } from 'react-router-dom'
import './verification.css'
import Header from '../../components/header/Header'
import Assets from '../../assets/Assets'
import LinkAssets from '../../assets/LinkAssets'
import Footer from '../../components/footer/Footer'
import Links from '../../config/Links'
import Title from '../../config/Title'

const Verification = () => {
    return (
        <div className="verification-container">
            <Title title="Verification" description='Find out how Serch verifies service providers and businesses' />
            <Header />
            <div className="verification-header">
                <div className="verification-container01">
                    <h1 className="verification-text">Become Serch verified</h1>
                    <span className="verification-text01">
                        Whether you are a business or an individual provider, verification
                        sets you apart from the rest. It gives an ounce of trust from the
                        users to you.
                    </span>
                </div>
                <img alt="Verification" src={ Assets.verified1500W } className="verification-image" />
            </div>
            <div className="verification-header1">
                <img alt="Experience" src={ LinkAssets.verificationExperience } className="verification-image1" />
                <div className="verification-container02">
                    <h1 className="verification-text02">Tailored experience</h1>
                    <span className="verification-text03">
                        Serch verification process is carefully crafted to ensure a good
                        experience while still providing a robust understanding of who you
                        say you are.
                    </span>
                </div>
            </div>
            <div className="verification-container03">
                <h1 className="verification-text04">How to become Serch verified</h1>
                <div className="verification-container04">
                    <div className="verification-container05">
                        <img alt="Account" src={ Assets.stepCreateAccount } className="verification-image2" />
                        <div className="verification-container06">
                            <div className="verification-step">
                                <div className="verification-step-bullet">
                                    <div className="verification-container07"></div>
                                    <div className="verification-container08"></div>
                                </div>
                                <div className="verification-step-content">
                                    <span className="verification-text05">Create an account</span>
                                    <span className="verification-text06">
                                        <span>
                                            You need to have an account as a provider or a business
                                            Learn more about Serch business
                                            <span
                                                dangerouslySetInnerHTML={{
                                                __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <Link to={ Links.business } className="verification-navlink">here</Link>
                                        <span> and providing </span>
                                        <Link to={ Links.request } className="verification-navlink1">here.
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="verification-container09">
                        <img alt="Serch Verified" src={ Assets.stepVerification } className="verification-image3" />
                        <div className="verification-container10">
                            <div className="verification-step1">
                                <div className="verification-step-bullet1">
                                    <div className="verification-container11"></div>
                                    <div className="verification-container12"></div>
                                </div>
                                <div className="verification-step-content1">
                                    <span className="verification-text10">Start verification</span>
                                    <span className="verification-text11">
                                        <span>
                                            Go to the account centre and visit the verification hub.
                                            Kickstart your verification by giving Serch access to some
                                            required consents.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="verification-container13">
                        <img alt="Document" src={ Assets.stepUploadDocuments } className="verification-image4" />
                        <div className="verification-container14">
                            <div className="verification-step2">
                                <div className="verification-step-bullet2">
                                    <div className="verification-container15"></div>
                                    <div className="verification-container16"></div>
                                </div>
                                <div className="verification-step-content2">
                                    <span className="verification-text14">Upload documents</span>
                                    <span className="verification-text15">
                                        <span>
                                            Upload necessary and required documents, pertaining to the
                                            kind of account you uphold. Answer questions and fill
                                            necessary fields.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="verification-container17">
                        <img alt="Verified Status" src={ Assets.stepVerificationStatus } className="verification-image5" />
                        <div className="verification-container18">
                            <div className="verification-step3">
                                <div className="verification-step-bullet3">
                                    <div className="verification-container19"></div>
                                    <div className="verification-container20"></div>
                                </div>
                                <div className="verification-step-content3">
                                    <span className="verification-text18">Check verification status</span>
                                    <span className="verification-text19">
                                        <span>
                                            Always check back for your verification status. Once
                                            verified, you will be notified through email.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="verification-container21">
                        <img alt="Rating" src={ Assets.stepRate } className="verification-image6" />
                        <div className="verification-container22">
                            <div className="verification-step4">
                                <div className="verification-step-bullet4">
                                    <div className="verification-container23"></div>
                                </div>
                                <div className="verification-step-content4">
                                    <span className="verification-text22">Rate the verification process</span>
                                    <span className="verification-text23">
                                        <span>
                                            Tell us how the process was for you, we keep on
                                            implementing changes to help make your experience, yours.
                                        </span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="verification-header2">
                <img alt="Verification specs" src={ LinkAssets.verificationNotForYou } className="verification-image7" />
                <div className="verification-container24">
                    <h1 className="verification-text26">Not for you?</h1>
                    <span className="verification-text27">
                        As an associate service provider, that is, providers that work for a
                        business, your business verification covers for your own
                        verification.
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Verification
