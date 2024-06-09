import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './style.css'
import './index.css'
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './api/ScrollToTop';
import Home from './views/home/Home';
import AboutUs from './views/about-us/AboutUs';
import Business from './views/business/Business';
import Careers from './views/careers/Careers';
import Error from './views/error/Error';
import Guest from './views/guest/Guest';
import Leadership from './views/leadership/Leadership';
import MarketPlace from './views/marketplace/Marketplace';
import MediaAndAssets from './views/media-and-assets/MediaAndAssets';
import Provide from './views/provide/Provide';
import ProvideSharing from './views/provideSharing/ProvideSharing';
import Providing from './views/providing/Providing';
import Request from './views/request/Request';
import Requesting from './views/requesting/Requesting';
import RequestSharing from './views/requestSharing/RequestSharing';
import Reserve from './views/reserve/Reserve';
import SafetyGuidelines from './views/safety-guidelines/SafetyGuidelines';
import SupportHub from './views/support-hub/SupportHub';
import Tip2Fix from './views/tip2fix/Tip2Fix';
import Verification from './views/verification/Verification';
import Links from './config/Links'
import CountriesInSerch from './views/countries-in-serch/CountriesInSerch';
import VerifyAccountSetup from './views/associate-account-setup/verify-associate-account-setup';
import AssociateAccountSetup from './views/associate-account-setup/associate-account-setup';
import VerifyCertificate from './views/certificate/verify-certificate-link';
import ViewCertificate from './views/certificate/view-certificate';
import VerifyPayment from './views/payment-verification/verify-payment';
import { SnackbarProvider } from 'notistack';
import { DataProvider } from './api/DataProvider';
import UnsubscribeNewsletter from './views/newsletter/unsubscribe-newsletter';
import Legal from './views/legal/Legal';
import LegalDocument from './views/legal/LegalDocument';
import Newsroom from './views/newsroom/Newsroom';
import News from './views/newsroom/News';
import NewsContent from './views/newsroom/NewsContent';
import Blog from './views/blog/Blog';
import Blogs from './views/blog/Blogs';
import Keys from './api/Keys';

const App = () => {
    const contentfulClient = new ContentfulClient({
        accessToken: Keys.contentfulToken,
        space: Keys.contentfulSpace,
    });

    return (
        <>
            <SnackbarProvider
                maxSnack={2}
                iconVariant={{
                    success: '✅ ',
                    error: '✖️ ',
                    warning: '⚠️ ',
                    info: 'ℹ️ ',
                }}
            />
            <ContentfulProvider client={contentfulClient}>
                <Router>
                    <ScrollToTop>
                        <Routes>
                            /// Common Routes
                            <Route element={ <Home /> } exact path={ Links.home } />
                            <Route element={ <AboutUs /> } path={ Links.aboutUs } />
                            <Route element={ <Business /> } path={ Links.business } />
                            <Route element={ <Careers /> } path={ Links.careers } />
                            <Route element={ <CountriesInSerch /> } path={ Links.countries } />
                            <Route element={ <Error /> } path="*" />
                            <Route element={ <Guest /> } path={ Links.guest } />
                            <Route element={ <MarketPlace /> } path={ Links.marketplace } />
                            <Route element={ <MediaAndAssets /> } path={ Links.mediaAndAssets } />
                            <Route element={ <Provide /> } path={ Links.provide } />
                            <Route element={ <ProvideSharing /> } path={ Links.provideSharing } />
                            <Route element={ <Providing /> } path={ Links.providing } />
                            <Route element={ <Request /> } path={ Links.request } />
                            <Route element={ <Requesting /> } path={ Links.requesting } />
                            <Route element={ <RequestSharing /> } path={ Links.requestSharing } />
                            <Route element={ <Reserve /> } path={ Links.schedule } />
                            <Route element={ <SafetyGuidelines /> } path={ Links.safety } />
                            <Route element={ <SupportHub /> } path={ Links.support } />
                            <Route element={ <Tip2Fix /> } path={ Links.tip2fix } />
                            <Route element={ <Verification /> } path={ Links.verification } />

                            /// Routes with dynamic content
                            <Route element={ <VerifyAccountSetup /> } path={ Links.verifyAccountSetup } />
                            <Route element={ <AssociateAccountSetup /> } path={ Links.associateAccountSetup } />
                            <Route element={ <VerifyCertificate /> } path={ Links.verifyCertificate } />
                            <Route element={ <ViewCertificate /> } path={ Links.viewCertificate } />
                            <Route element={ <VerifyPayment /> } path={ Links.verifyPayment } />
                            <Route element={ <UnsubscribeNewsletter /> } path={ Links.unsubscribeNewsletter } />

                            /// Routes for information
                            <Route element={ <Newsroom /> } path={ Links.newsroom } />
                            <Route element={ <News /> } path={ Links.news } />
                            <Route element={ <NewsContent /> } path={ Links.newsContent } />
                            <Route element={ <Blogs /> } path={ Links.blogs } />
                            <Route element={ <Blog /> } path={ Links.blog } />
                            <Route element={ <Leadership /> } path={ Links.leadership } />

                            /// Routes for legal documentation
                            <Route element={ <Legal /> } path={ Links.legal } />
                            <Route element={ <LegalDocument /> } path={ Links.legalView } />
                        </Routes>
                    </ScrollToTop>
                </Router>
            </ContentfulProvider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <DataProvider>
        <App />
    </DataProvider>
);
reportWebVitals();