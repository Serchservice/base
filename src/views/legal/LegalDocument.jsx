import { Icon } from "@iconify/react/dist/iconify.js";
import { wait } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useContentful } from 'react-contentful';
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import ContentRender from "../../components/contentful/ContentRender";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Shimmer from "../../components/shimmer/Shimmer";
import Links from "../../config/Links";
import "./legalDocument.css";
import LinkAssets from "../../assets/LinkAssets";

const LegalDocument = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    const { data, error, fetched, loading } = useContentful({
        contentType: 'legalDocument',
        query: {
            'fields.slug[in]': `${slug || ''}`,
        }
    });

    async function redirect(route = '', duration = 1000) {
        await wait(duration)
        navigate(route)
    }

    function back() {
        navigate(Links.legal)
    }

    const options = {
        preserveWhitespace: true,
    };

    if(loading || !fetched || error) {
        return (
            <div className="legal-document-container">
                <Helmet>
                    <title>Legal Hub | Serch</title>
                    <meta name="description" content="Serch legal documents on different policies and guidelines" />
                    <meta property="og:title" content="Legal Hub | Serch" />
                    <meta property="og:description" content="Serch legal documents on different policies and guidelines" />
                    <meta property="og:image" content={ LinkAssets.logo } />
                </Helmet>
                <Header />
                <div className="legal-document-header">
                    <Icon icon="solar:arrow-left-line-duotone" onClick={back} data-role="accordion-icon" className="legal-document-icon" />
                    <div className="legal-document-header-container">
                        <Shimmer height={30} width={200} />
                    </div>
                </div>
                <div className="legal-document">
                    <div style={{ width: "100%" }}>
                        <div style={{ marginBottom: "10px", width: "100%", height: "30px" }}>
                            <Shimmer height={30} width={300} />
                        </div>
                        <div style={{ marginBottom: "40px", width: "100%", height: "20px" }}>
                            <Shimmer height={20} width={100} />
                        </div>
                        <div style={{ marginBottom: "60px", width: "100%", height: "20px" }}>
                            <Shimmer height={20} width={200} />
                        </div>
                        <Shimmer height={300} percentWidth="100%" />
                    </div>
                </div>
                <Footer />
            </div>
        );
    } else if(!data || data["items"].length == 0) {
        redirect(Links.error)
    } else {
        return (
            <div className="legal-document-container">
                <Helmet>
                    <title>{data["items"]['0']['fields']['header']} - Legal Hub | Serch</title>
                    <meta name="description" content={data["items"]['0']['fields']['description']} />
                    <meta property="og:title" content={`${data["items"]['0']['fields']['header']} - Legal Hub | Serch`} />
                    <meta property="og:description" content={data["items"]['0']['fields']['description']} />
                    <meta property="og:image" content={ LinkAssets.logo } />
                </Helmet>
                <Header />
                <div className="legal-document-header">
                    <Icon icon="solar:arrow-left-line-duotone" onClick={back} data-role="accordion-icon" className="legal-document-icon" />
                    <div className="legal-document-header-container">
                        <span className="legal-document-header-text">{ data["items"]['0']['fields']['header'] }</span>
                    </div>
                </div>
                <div className="legal-document"><ContentRender content={data["items"]['0']['fields']['legal']}/></div>
                <Footer />
            </div>
        );
    }
};

export default LegalDocument;