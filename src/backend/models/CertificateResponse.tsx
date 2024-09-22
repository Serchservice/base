interface IRatingResponse {
    name: string;
    rating: number;
    comment: string;
    category: string;
    image: string;
}

interface ICertificateResponse {
    document: string;
    id: string;
    content: string;
    header: string;
    qrCode: string;
    signature: string;
    issueDate: string;
    name: string;
    category: string;
    image: string;
}

class RatingResponse implements IRatingResponse {
    name: string;
    rating: number;
    comment: string;
    category: string;
    image: string;

    constructor(name: string, rating: number, comment: string, category: string, image: string) {
        this.name = name;
        this.rating = rating;
        this.comment = comment;
        this.category = category;
        this.image = image;
    }

    static fromJson(json: any): RatingResponse {
        if (!json) return new RatingResponse("", 0, "", "", "");

        return new RatingResponse(
            json.name ?? "",
            json.rating ?? 0,
            json.comment ?? "",
            json.category ?? "",
            json.image ?? ""
        );
    }

    toJson(): any {
        return {
            name: this.name,
            rating: this.rating,
            comment: this.comment,
            category: this.category,
            image: this.image
        };
    }
}

class CertificateResponse implements ICertificateResponse {
    document: string;
    id: string;
    content: string;
    header: string;
    qrCode: string;
    signature: string;
    issueDate: string;
    name: string;
    category: string;
    image: string;

    constructor(document: string, id: string, content: string, header: string, qrCode: string, signature: string, issueDate: string, name: string, category: string, image: string) {
        this.document = document;
        this.id = id;
        this.content = content;
        this.header = header;
        this.qrCode = qrCode;
        this.signature = signature;
        this.issueDate = issueDate;
        this.name = name;
        this.category = category;
        this.image = image;
    }

    static fromJson(json: any): CertificateResponse {
        if (!json) return new CertificateResponse("", "", "", "", "", "", "", "", "", "");

        return new CertificateResponse(
            json.document ?? "",
            json.id ?? "",
            json.content ?? "",
            json.header ?? "",
            json.qrCode ?? "",
            json.signature ?? "",
            json.issueDate ?? "",
            json.name ?? "",
            json.category ?? "",
            json.image ?? ""
        );
    }

    toJson(): any {
        return {
            document: this.document,
            id: this.id,
            content: this.content,
            header: this.header,
            qrCode: this.qrCode,
            signature: this.signature,
            issueDate: this.issueDate,
            name: this.name,
            category: this.category,
            image: this.image
        };
    }
}

class VerifyCertificateResponse {
    document: string;
    picture: string;
    data: CertificateResponse;
    ratings: RatingResponse[];

    constructor(document: string, picture: string, data: CertificateResponse, ratings: RatingResponse[]) {
        this.document = document;
        this.picture = picture;
        this.data = data;
        this.ratings = ratings;
    }

    static fromJson(json: any): VerifyCertificateResponse {
        if (!json) return new VerifyCertificateResponse("", "", new CertificateResponse("", "", "", "", "", "", "", "", "", ""), []);

        return new VerifyCertificateResponse(
            json.document ?? "",
            json.picture ?? "",
            CertificateResponse.fromJson(json.data ?? {}),
            (json.ratings ?? []).map((rating: any) => RatingResponse.fromJson(rating))
        );
    }

    static empty(): VerifyCertificateResponse {
        return this.fromJson(null);
    }

    toJson(): any {
        return {
            document: this.document,
            picture: this.picture,
            data: this.data.toJson(),
            ratings: this.ratings.map(rating => rating.toJson())
        };
    }
}

export { VerifyCertificateResponse, CertificateResponse, RatingResponse };
