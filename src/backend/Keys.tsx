class Keys {
    /// CONTENTFUL TOKEN
    static CONTENTFUL_TOKEN = import.meta.env.VITE_CONTENTFUL_TOKEN ?? "";

    /// CONTENTFUL SPACE
    static CONTENTFUL_SPACE = import.meta.env.VITE_CONTENTFUL_SPACE ?? "";

    /// BASE URL SERCH SERVER
    static BASE_URL = import.meta.env.VITE_BASE_URL ?? "";

    /// LOCATION IP URL
    static IP_URL = 'https://api.ipify.org?format=json';
}

export default Keys;