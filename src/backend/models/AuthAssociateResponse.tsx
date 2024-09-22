interface IAuthAssociateResponse {
    name: string;
    scope: string;
    emailAddress: string;
}

class AuthAssociateResponse implements IAuthAssociateResponse {
    name: string;
    scope: string;
    emailAddress: string;

    constructor(name: string, scope: string, emailAddress: string) {
        this.name = name;
        this.scope = scope;
        this.emailAddress = emailAddress;
    }

    static fromJson(json: any): AuthAssociateResponse {
        return new AuthAssociateResponse(
            json["name"] != null ? json["name"] : "",
            json["scope"] != null ? json["scope"] : "",
            json["email_address"] != null ? json["email_address"] : ""
        );
    }

    toJson(): any {
        return {
            name: this.name,
            scope: this.scope,
            email_address: this.emailAddress
        };
    }
}

export default AuthAssociateResponse;
