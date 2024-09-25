class AssetInstance {
    /**
     * Type: [Logo]
     */
    get logo() {
        return {
            squared: new URL("./logo/squared.png", import.meta.url).href,
            tagBlack: new URL("./logo/tagBlack.png", import.meta.url).href,
            tagWhite: new URL("./logo/tagWhite.png", import.meta.url).href,
            black: new URL("./logo/black.png", import.meta.url).href,
            white: new URL("./logo/white.png", import.meta.url).href,
        }
    }

    /**
     * Type: [APP DESIGN]
     */
    get app() {
        return {
            user: new URL("./app/User.png", import.meta.url).href,
            provider: new URL("./app/Provider.png", import.meta.url).href,
            business: new URL("./app/Business.png", import.meta.url).href,
            businessShort: new URL("./app/ShortBusinessPhone.png", import.meta.url).href,
            providerShort: new URL("./app/ShortProviderPhone.png", import.meta.url).href,
            userShort: new URL("./app/ShortUserPhone.png", import.meta.url).href,
        }
    }

    /**
     * Type: [HOME PAGE DESIGN]
     */
    get home() {
        return {
            business: new URL("./home/business.jpg", import.meta.url).href,
            repair: new URL("./home/repair.jpg", import.meta.url).href,
            grow: new URL("./home/grow.jpg", import.meta.url).href,
            drive: new URL("./home/drive.png", import.meta.url).href,
            request: new URL("./home/request.png", import.meta.url).href,
            speak: new URL("./home/speak.png", import.meta.url).href,
        }
    }

    /**
     * Type: [ABOUT US PAGE DESIGN]
     */
    get about() {
        return {
            background: new URL("./about/background.jpg", import.meta.url).href,
            mission: new URL("./about/mission.jpg", import.meta.url).href,
            safety: new URL("./about/safety.png", import.meta.url).href,
        }
    }

    /**
     * Type: [MARKETPLACE PAGE DESIGN]
     */
    get marketplace() {
        return {
            background: new URL("./marketplace/background.jpg", import.meta.url).href,
        }
    }

    /**
     * Type: [RESERVE PAGE DESIGN]
     */
    get reserve() {
        return {
            time: new URL("./reserve/time.jpg", import.meta.url).href,
        }
    }

    /**
     * Type: [TIP2FIX PAGE DESIGN]
     */
    get tip2fix() {
        return {
            diy: new URL("./tip2fix/diy.jpg", import.meta.url).href,
        }
    }

    /**
     * Type: [COUNTRIES PAGE DESIGN]
     */
    get countries() {
        return {
            background: new URL("./countries/background.jpg", import.meta.url).href,
        }
    }

    /**
     * Type: [SUPPORT PAGE DESIGN]
     */
    get support() {
        return {
            background: new URL("./support/background.jpg", import.meta.url).href,
        }
    }

    /**
     * Type: [SAFETY PAGE DESIGN]
     */
    get safety() {
        return {
            background: new URL("./safety/background.jpg", import.meta.url).href,
        }
    }

    /**
     * Type: [CAREER PAGE DESIGN]
     */
    get career() {
        return {
            background: new URL("./career/background.jpg", import.meta.url).href,
            life: new URL("./career/life.jpg", import.meta.url).href,
            place: new URL("./career/place.jpg", import.meta.url).href,
            team: new URL("./career/team.jpg", import.meta.url).href,
        }
    }

    /**
     * Type: [STEPS DESIGN]
     */
    get steps() {
        return {
            consent: new URL('./steps/consent.png', import.meta.url).href,
            createAccount: new URL('./steps/createAccount.png', import.meta.url).href,
            upload: new URL('./steps/upload.png', import.meta.url).href,
            verifyStatus: new URL('./steps/verifyStatus.png', import.meta.url).href,
            categorySelector: new URL('./steps/categorySelector.png', import.meta.url).href,
            locationEntry: new URL('./steps/locationEntry.png', import.meta.url).href,
            rating: new URL('./steps/rating.png', import.meta.url).href,
            tip2fix: new URL('./steps/tip2fix.png', import.meta.url).href,
            goActive: new URL('./steps/goActive.png', import.meta.url).href,
            mentor: new URL('./steps/mentor.png', import.meta.url).href,
            sharedLink: new URL('./steps/sharedLink.png', import.meta.url).href,
            safety: new URL('./steps/safety.png', import.meta.url).href,
            requestShare: new URL('./steps/requestShare.png', import.meta.url).href,
            track: new URL('./steps/track.png', import.meta.url).href,
            activity: new URL('./steps/activity.png', import.meta.url).href,
            discuss: new URL('./steps/discuss.png', import.meta.url).href,
            requestMode: new URL('./steps/requestMode.png', import.meta.url).href,
            auth: new URL('./steps/auth.png', import.meta.url).href,
        };
    }

    /**
     * The Error Header Image
     */
    get error(): string {
        return new URL('./common/error.jpg', import.meta.url).href;
    }

    /**
     * The Serch Verified Image
     */
    get verified(): string {
        return new URL('./common/verified.png', import.meta.url).href;
    }

    /**
     * Type: [USER PAGE DESIGN]
     */
    get common() {
        return {
            user: new URL('./common/user.jpg', import.meta.url).href,
            provider: new URL('./common/provider.jpg', import.meta.url).href,
            users: new URL('./common/users.jpg', import.meta.url).href,
            providers: new URL('./common/providers.jpg', import.meta.url).href,
            ticket: new URL('./common/ticket.png', import.meta.url).href,
        };
    }

    /**
     * Type: [MEDIA AND ASSET]
     */
    get mediaAndAssets() {
        return {
            guideline: "https://chxpalpeslofqzeulcjr.supabase.co/storage/v1/object/public/serch/BrandGuidelines.pdf",
        }
    }
}

const Asset = new AssetInstance();
export default Asset;