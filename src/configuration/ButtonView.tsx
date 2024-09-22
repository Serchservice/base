import { faLinkedin, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { ButtonView } from '@serchservice/web-ui-kit';
import Routing from './Routing';

// Singleton Class LinkConfig
class LinkConfig {
    private static _instance: LinkConfig = new LinkConfig();

    // Private constructor
    private constructor() { }

    // Singleton instance
    public static get instance(): LinkConfig {
        return this._instance;
    }

    // SOCIAL QUICK LINKS
    get social(): ButtonView[] {
        return socialMediaLinks;
    }

    // Safe-Guard Community LINK
    get sgc(): string {
        return "";
    }

    /** Separation of Concern Link */
    get soc(): string {
        return Routing.getRoute(Routing.instance.blog, {slug: "separation-of-concern"})
    }

    /** As I Saw It Link */
    get aisi(): string {
        return Routing.getRoute(Routing.instance.blog, {slug: "aisi"})
    }

    /** Community Guidelines Link */
    get communityGuidelines(): string {
        return Routing.getRoute(Routing.instance.legal, {slug: "community-guidelines"})
    }

    /** Privacy Policy Link */
    get privacyPolicy(): string {
        return Routing.getRoute(Routing.instance.legal, {slug: "privacy-policy"})
    }

    /** Terms and Conditions Link */
    get termsAndConditions(): string {
        return Routing.getRoute(Routing.instance.legal, {slug: "terms-and-conditions"})
    }

    /** Accessibility Link */
    get accessibility(): string {
        return Routing.getRoute(Routing.instance.legal, {slug: "accessibility"})
    }

    // SERCHSERVICE HOME LINK
    get help(): string {
        return buildSerchHelp("/");
    }
}

// Function to build URLs
function buildSerchHelp(endpoint: string): string {
    return `https://help.serchservice.com${endpoint}`;
}

// SOCIAL QUICK LINKS
const socialMediaLinks: ButtonView[] = [
    { header: "LinkedIn", icon: faLinkedin, path: "https://www.linkedin.com/company/serchservice", index: 0 },
    { header: "Instagram", icon: faInstagram, path: "https://www.instagram.com/serchservice", index: 1 },
    { header: "X", icon: faTwitter, path: "https://www.x.com/serchservice", index: 2 },
    { header: "YouTube", icon: faYoutube, path: "https://www.youtube.com/@serchservice", index: 3 },
    { header: "TikTok", icon: faTiktok, path: "https://www.tiktok.com/@serchservice", index: 4 },
];

export { LinkConfig };