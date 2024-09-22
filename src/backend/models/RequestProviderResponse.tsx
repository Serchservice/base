interface IRequestProviderResponse {
    name: string;
    avatar: string;
    category: string;
}

class RequestProviderResponse implements IRequestProviderResponse {
    name: string;
    category: string;
    avatar: string;

    constructor({name = "", category = "", avatar = ""}) {
        this.name = name;
        this.category = category;
        this.avatar = avatar;
    }

    static fromJson(json: any): RequestProviderResponse {
        if(json["provider"]) {
            return new RequestProviderResponse({
                name: json["provider"]["name"] != null ? json["provider"]["name"] : "",
                category: json["provider"]["category"] != null ? json["provider"]["category"] : "",
                avatar: json["provider"]["avatar"] != null ? json["provider"]["avatar"] : ""
            });
        } else {
            return new RequestProviderResponse({
                name: "",
                category: "",
                avatar: ""
            });
        }
    }
}

export default RequestProviderResponse;