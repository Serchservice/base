export interface RouteParams {
    slug?: string;
    name?: string;
    scope?: string;
    invite?: string;
    emailAddress? : string;
    link?: string;
}

export interface RouteInterface {
    path: string;
    pathView?: (params: RouteParams) => string;
    page: JSX.Element;
    children?: RouteInterface[];
}