class AssetInstance {
    /**
     * Type: [Logo]
     */
    get logo() {
        return {
            squared: require("./logo/squared.png") as string,
            tagBlack: require("./logo/tagBlack.png") as string,
            tagWhite: require("./logo/tagWhite.png") as string,
            black: require("./logo/black.png") as string,
            white: require("./logo/white.png") as string,
        }
    }

    /**
     * Type: [APP DESIGN]
     */
    get app() {
        return {
            user: require("./app/User.png") as string,
            provider: require("./app/Provider.png") as string,
            business: require("./app/Business.png") as string,
            businessShort: require("./app/ShortBusinessPhone.png") as string,
            providerShort: require("./app/ShortProviderPhone.png") as string,
            userShort: require("./app/ShortUserPhone.png") as string,
        }
    }

    /**
     * Type: [HOME PAGE DESIGN]
     */
    get home() {
        return {
            business: require("./home/business.jpg") as string,
            repair: require("./home/repair.jpg") as string,
            grow: require("./home/grow.jpg") as string,
            drive: require("./home/drive.png") as string,
            request: require("./home/request.png") as string,
            speak: require("./home/speak.png") as string,
        }
    }

    /**
     * Type: [ABOUT US PAGE DESIGN]
     */
    get about() {
        return {
            background: require("./about/background.jpg") as string,
            mission: require("./about/mission.jpg") as string,
            safety: require("./about/safety.png") as string,
        }
    }

    /**
     * Type: [MARKETPLACE PAGE DESIGN]
     */
    get marketplace() {
        return {
            background: require("./marketplace/background.jpg") as string,
        }
    }

    /**
     * Type: [RESERVE PAGE DESIGN]
     */
    get reserve() {
        return {
            time: require("./reserve/time.jpg") as string,
        }
    }

    /**
     * Type: [TIP2FIX PAGE DESIGN]
     */
    get tip2fix() {
        return {
            diy: require("./tip2fix/diy.jpg") as string,
        }
    }

    /**
     * Type: [COUNTRIES PAGE DESIGN]
     */
    get countries() {
        return {
            background: require("./countries/background.jpg") as string,
        }
    }

    /**
     * Type: [SUPPORT PAGE DESIGN]
     */
    get support() {
        return {
            background: require("./support/background.jpg") as string,
        }
    }

    /**
     * Type: [SAFETY PAGE DESIGN]
     */
    get safety() {
        return {
            background: require("./safety/background.jpg") as string,
        }
    }

    /**
     * Type: [CAREER PAGE DESIGN]
     */
    get career() {
        return {
            background: require("./career/background.jpg") as string,
            life: require("./career/life.jpg") as string,
            place: require("./career/place.jpg") as string,
            team: require("./career/team.jpg") as string,
        }
    }

    /**
     * Type: [STEPS DESIGN]
     */
    get steps() {
        return {
            consent: require("./steps/consent.png") as string,
            createAccount: require("./steps/createAccount.png") as string,
            upload: require("./steps/upload.png") as string,
            verifyStatus: require("./steps/verifyStatus.png") as string,
            categorySelector: require("./steps/categorySelector.png") as string,
            locationEntry: require("./steps/locationEntry.png") as string,
            rating: require("./steps/rating.png") as string,
            tip2fix: require("./steps/tip2fix.png") as string,
            goActive: require("./steps/goActive.png") as string,
            mentor: require("./steps/mentor.png") as string,
            sharedLink: require("./steps/sharedLink.png") as string,
            safety: require("./steps/safety.png") as string,
            requestShare: require("./steps/requestShare.png") as string,
            track: require("./steps/track.png") as string,
            activity: require("./steps/activity.png") as string,
            discuss: require("./steps/discuss.png") as string,
            requestMode: require("./steps/requestMode.png") as string,
            auth: require("./steps/auth.png") as string,
        }
    }

    /**
     * The Error Header Image
     */
    get error(): string {
        return require('./common/error.jpg') as string
    }

    /**
     * The Serch Verified Image
     */
    get verified(): string {
        return require('./common/verified.png') as string
    }

    /**
     * Type: [USER PAGE DESIGN]
     */
    get common() {
        return {
            user: require("./common/user.jpg") as string,
            provider: require("./common/provider.jpg") as string,
            users: require("./common/users.jpg") as string,
            providers: require("./common/providers.jpg") as string,
            ticket: require("./common/ticket.png") as string,
        }
    }
}

const require = (image: string) => {
    return new URL(image, import.meta.url).href
}

const Asset = new AssetInstance();
export default Asset;