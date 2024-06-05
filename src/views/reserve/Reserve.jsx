import React from 'react'
import { Helmet } from 'react-helmet'
import './reserve.css'
import Header from '../../components/header/Header'
import CountriesInSerch from '../../components/countries-in-serch/CountriesInSerch'
import Footer from '../../components/footer/Footer'
import LinkAssets from '../../assets/LinkAssets'
import { Icon } from '@iconify/react'

const Reserve = () => {
    return (
        <div className="reserve-container">
            <Helmet>
                <title>Reserve | Serch</title>
                <meta name="description" content="Learn about service scheduling" />
                <meta property="og:title" content="Reserve | Serch" />
                <meta property="og:description" content="A requestSharing and provideSharing company" />
                <meta property="og:image" content={ LinkAssets.logo } />
            </Helmet>
            <Header />
            <div className="reserve-header">
                <div className="reserve-container01">
                    <h1 className="reserve-text">Your service when you want it</h1>
                    <span className="reserve-text01">
                        Get the service provider ready even before you need the service
                        attended to.
                    </span>
                    <span className="reserve-link hoverButton">
                        <span className="reserve-text02">Reserve a service provider</span>
                        <br></br>
                    </span>
                </div>
                <img alt="Service" src={ LinkAssets.reserveService } className="reserve-image" />
            </div>
            <div className="reserve-as-technology">
                <img alt="Time" src={ LinkAssets.reserveTime } className="reserve-pasted-image" />
                <div className="reserve-container02">
                    <h1 className="reserve-text04">Your time, your service</h1>
                    <span className="reserve-text05">
                        Exactly when you want it, the service provider will be ready
                    </span>
                </div>
            </div>
            <div className="reserve-aisi">
                <div className="reserve-container03">
                    <h1 className="reserve-text06">Reliable schedule</h1>
                    <span className="reserve-text07">
                        <span>
                            Our technology makes sure that the provider is ready when
                            it&apos;s time.
                        </span>
                        <br></br>
                    </span>
                </div>
                <img alt="Reliable" src={ LinkAssets.reserveReliable } className="reserve-pasted-image1" />
            </div>
            <div className="reserve-soc">
                <img alt="StandBy" src={ LinkAssets.reserveStandBy } className="reserve-pasted-image2" />
                <div className="reserve-container04">
                    <h1 className="reserve-text10">Always on standby</h1>
                    <span className="reserve-text11">
                        <span>
                            Your service provider is always on standby, with 10 minutes of
                            wait time included.
                        </span>
                        <br></br>
                    </span>
                </div>
            </div>
            <div className="reserve-soc1">
                <div className="reserve-container05">
                    <h1 className="reserve-text14">Just for your experience</h1>
                    <span className="reserve-text15">
                        <span>The same experience, with a little touch of wonders</span>
                        <br></br>
                    </span>
                </div>
                <img alt="Experience" src={ LinkAssets.reserveExperience } className="reserve-pasted-image3" />
            </div>
            <div className="reserve-header1">
                <div className="reserve-container06">
                    <div className="reserve-container07">
                        <Icon icon="uim:schedule" className="reserve-icon" />
                        <span className="reserve-text18">Schedule</span>
                        <span className="reserve-text19">
                            Tap on the schedule icon in the Serch app.
                            Schedule at least 30 minutes n advance.
                        </span>
                    </div>
                    <div className="reserve-container08">
                        <Icon icon="gridicons:scheduled" className="reserve-icon2" />
                        <span className="reserve-text24">Receive confirmation</span>
                        <span className="reserve-text25">
                            The provider accepts reserve and confirmation is sent to you.
                            Cancellation at up to one hour before, bears no charge.
                        </span>
                    </div>
                    <div className="reserve-container09">
                        <Icon icon="mdi:reschedule" className="reserve-icon4" />
                        <span className="reserve-text34">Service</span>
                        <span className="reserve-text35">
                            Continue with the service experience tailored to your satisfaction.
                        </span>
                    </div>
                </div>
            </div>
            <div className="reserve-countries-in-serch">
                <CountriesInSerch />
            </div>
            <Footer />
        </div>
    )
}

export default Reserve
