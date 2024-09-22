import { AboutUsRoute } from "../app/about/page";
import { AuthAssociateSetupRoute } from "../app/auth/associate/setup/page";
import { AuthAssociateVerificationRoute } from "../app/auth/associate/verify/page";
import { BlogRoute } from "../app/blog/[slug]/page";
import { BlogHouseRoute } from "../app/blog/page";
import { BusinessRoute } from "../app/business/page";
import { BusinessVerificationRoute } from "../app/business/verification/page";
import { CareerRoute } from "../app/career/page";
import { CountriesInSerchRoute } from "../app/countries-in-serch/page";
import { PageNotFoundRoute } from "../app/error/page";
import { ExploreDriveRoute } from "../app/explore/drive/page";
import { ExploreReserveRoute } from "../app/explore/reserve/page";
import { ExploreSharingRoute } from "../app/explore/sharing/page";
import { ExploreTip2FixRoute } from "../app/explore/tip2fix/page";
import { GuestRoute } from "../app/guest/page";
import { HowItWorksWithProvideSharingRoute } from "../app/how-it-works/provide-sharing/page";
import { HowItWorksWithProvidingRoute } from "../app/how-it-works/providing/page";
import { HowItWorksWithRequestSharingRoute } from "../app/how-it-works/request-sharing/page";
import { HowItWorksWithRequestingRoute } from "../app/how-it-works/requesting/page";
import { LegalRoute } from "../app/hub/legal/[slug]/page";
import { LegalHubRoute } from "../app/hub/legal/page";
import { SpeakWithSerchHubRoute } from "../app/hub/speak-with-serch/page";
import { SupportHubRoute } from "../app/hub/support/page";
import { LeadershipRoute } from "../app/leadership/page";
import { MarketplaceRoute } from "../app/marketplace/page";
import { MediaAndAssetRoute } from "../app/media-and-assets/page";
import { NewsletterUnsubscribeRoute } from "../app/newsletter/unsubscribe/page";
import { NewsRoute } from "../app/newsroom/news/[slug]/page";
import { NewsListRoute } from "../app/newsroom/news/page";
import { NewsroomRoute } from "../app/newsroom/page";
import { HomeRoute } from "../app/page";
import { PaymentVerificationRoute } from "../app/payment/verification/page";
import { CertificateRoute } from "../app/platform/certificate/page";
import { VerifyCertificateRoute } from "../app/platform/certificate/verify/page";
import { PlatformRoute } from "../app/platform/page";
import { AssociateProviderRoute } from "../app/provider/associate/page";
import { AssociateProviderVerificationRoute } from "../app/provider/associate/verification/page";
import { ProviderRoute } from "../app/provider/page";
import { RequestProviderRoute } from "../app/provider/request/page";
import { ProviderVerificationRoute } from "../app/provider/verification/page";
import { SafetyGuidelineRoute } from "../app/safety-guidelines/page";
import { UserRoute } from "../app/user/page";
import { RouteInterface, RouteParams } from "./Route";

class Routing {
    static instance = new Routing();

    /** Home Route */
    home: RouteInterface = HomeRoute;

    /** About Us Route */
    aboutUs: RouteInterface = AboutUsRoute;

    /** About Leadership Route */
    leadership: RouteInterface = LeadershipRoute;

    /** About Media And Assets Route */
    mediaAndAsset: RouteInterface = MediaAndAssetRoute;

    /** Blog House Route */
    blogs: RouteInterface = BlogHouseRoute;

    /** Blog Route */
    blog: RouteInterface = BlogRoute;

    /** Newsroom Route */
    newsroom: RouteInterface = NewsroomRoute;

    /** News List Route */
    newsList: RouteInterface = NewsListRoute;

    /** News Route */
    news: RouteInterface = NewsRoute;

    /** Career Route */
    career: RouteInterface = CareerRoute;

    /** MarketPlace Route */
    marketplace: RouteInterface = MarketplaceRoute;

    /** How It Works Route */
    // howItWorks: RouteInterface = HowItWorksRoute;

    /** How It Works - Requesting Route */
    howItWorksWithRequesting: RouteInterface = HowItWorksWithRequestingRoute;

    /** How It Works - RequestSharing Route */
    howItWorksWithRequestSharing: RouteInterface = HowItWorksWithRequestSharingRoute;

    /** How It Works - Providing Route */
    howItWorksWithProviding: RouteInterface = HowItWorksWithProvidingRoute;

    /** How It Works - ProvideSharing Route */
    howItWorksWithProvideSharing: RouteInterface = HowItWorksWithProvideSharingRoute;

    /** Hub - Safety Guideline Route */
    safetyGuideline: RouteInterface = SafetyGuidelineRoute;

    /** User Route */
    user: RouteInterface = UserRoute;

    /** Business Route */
    business: RouteInterface = BusinessRoute;

    /** Business Verification Route */
    businessVerification: RouteInterface = BusinessVerificationRoute;

    /** Provider Route */
    provider: RouteInterface = ProviderRoute;

    /** Provider Verification Route */
    providerVerification: RouteInterface = ProviderVerificationRoute;

    /** Request Provider Route */
    requestProvider: RouteInterface = RequestProviderRoute;

    /** Associate Provider Route */
    associateProvider: RouteInterface = AssociateProviderRoute;

    /** Associate Provider Verification Route */
    associateVerification: RouteInterface = AssociateProviderVerificationRoute;

    /** Guest Route */
    guest: RouteInterface = GuestRoute;

    /** Explore Route */
    // explore: RouteInterface = ExploreRoute;

    /** Explore - Reserve Route */
    reserve: RouteInterface = ExploreReserveRoute;

    /** Explore - Sharing Route */
    sharing: RouteInterface = ExploreSharingRoute;

    /** Explore - Drive Route */
    drive: RouteInterface = ExploreDriveRoute;

    /** Explore - Tip2Fix Route */
    tip2fix: RouteInterface = ExploreTip2FixRoute;

    /** Countries In Serch Route */
    countriesInSerch: RouteInterface = CountriesInSerchRoute;

    /** Hub Route */
    // hub: RouteInterface = HubRoute;

    /** Hub - Legal Route */
    legalHub: RouteInterface = LegalHubRoute;

    /** Hub - Legal Document Route */
    legal: RouteInterface = LegalRoute;

    /** Hub - Speak With Serch Route */
    speakWithSerch: RouteInterface = SpeakWithSerchHubRoute;

    /** Hub - Support Route */
    support: RouteInterface = SupportHubRoute;

    /** Platform Route */
    platform: RouteInterface = PlatformRoute;

    /** Platform - Certificate Route */
    certificate: RouteInterface = CertificateRoute;

    /** Platform - Certificate Verification Route */
    verifyCertificate: RouteInterface = VerifyCertificateRoute;

    /** Payment - Verification Route */
    paymentVerification: RouteInterface = PaymentVerificationRoute;

    /** NewsLetter - Unsubscribe Route */
    unsubscribeNewsletter: RouteInterface = NewsletterUnsubscribeRoute;

    /** Auth - Associate - Verify Route */
    authAssociateVerification: RouteInterface = AuthAssociateVerificationRoute;

    /** Auth - Associate - Setup Route */
    authAssociateSetup: RouteInterface = AuthAssociateSetupRoute;

    /** ERROR 404 Route */
    error: RouteInterface = PageNotFoundRoute;

    /** Automatically collect all routes */
    getAllRoutes(): RouteInterface[] {
        return Object.values(this).filter((route) => this.isRouteInterface(route));
    }

    /** Helper to check if a value implements RouteInterface */
    private isRouteInterface(route: any): route is RouteInterface {
        return (
            route &&
            typeof route.path === 'string' &&
            typeof route.page !== 'undefined' &&
            (route.children === undefined || Array.isArray(route.children))
        );
    }

    /** Use pathView if it is defined, else use the default path */
    static getRoute(route: RouteInterface, params: RouteParams = {}): string {
        if(params.link) {
            return `${route.path}/${params.link}`;
        } else {
            return route.pathView ? route.pathView(params) : route.path;
        }
    }
}

export default Routing;