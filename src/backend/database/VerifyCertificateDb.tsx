import { action, computed, makeAutoObservable, observable } from 'mobx';
import store from 'store2';
import Store from './Store';
import { VerifyCertificateResponse } from '../models/CertificateResponse';

const STORAGE_KEY = "verifyCertificateDb"

/**
 * Store for managing VerifyCertificateResponse data.
 * @implements Store<VerifyCertificateResponse>
 */
class VerifyCertificateRepository implements Store<VerifyCertificateResponse> {
    /** The current certificate data. */
    certificate: VerifyCertificateResponse = VerifyCertificateResponse.empty();

    constructor() {
        makeAutoObservable(this, {
            certificate: observable,
            read: computed,
            set: action,
            clear: action
        });
        const saved = store.get(STORAGE_KEY);
        if (saved) this.certificate = VerifyCertificateResponse.fromJson(JSON.parse(saved));
    }

    /**
     * Get the current certificate data.
     * @returns {VerifyCertificateResponse} The current certificate data.
     */
    get read(): VerifyCertificateResponse {
        return this.certificate;
    }

    /**
     * Set new certificate data.
     * @param {VerifyCertificateResponse} data - The new certificate data.
     */
    set(data: VerifyCertificateResponse): void {
        this.certificate = data;
        store.set(STORAGE_KEY, JSON.stringify(data.toJson()));
    }

    /**
     * Clear the certificate data.
     */
    clear(): void {
        this.certificate = VerifyCertificateResponse.empty();
        store.remove(STORAGE_KEY);
    }
}

const CertificateDb = new VerifyCertificateRepository();
export default CertificateDb;