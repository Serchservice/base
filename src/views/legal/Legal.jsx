import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import "./legal.css";
import Assets from "../../assets/Assets";
import Footer from "../../components/footer/Footer";
import LegalItem from "./LegalItem";
import ItemGenerator from "../../config/ItemGenerator";
import Shimmer from "../../components/shimmer/Shimmer";
import Header from "../../components/header/Header";
import { Axios } from "../../api/Axios";

const Legal = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [legals, setLegals] = useState([
        {
            "lineOfBusiness": "string",
            "lob": "GENERAL",
            "legalList": [
                {
                    "legal": "string",
                    "image": "string",
                    "id": "string",
                    "lineOfBusiness": "string",
                    "lob": "GENERAL",
                    "title": "string",
                    "categories": [
                        "string"
                    ]
                }
            ]
        }
    ])

    useEffect(() => {
        fetchLegals()
    }, [])

    async function fetchLegals() {
        setIsLoading(true)
        await Axios.get("/company/media/legal").then((response) => {
            if (response.data["code"] === 200) {
                setLegals(response.data["data"])
                setIsLoading(false)
            }
        })
    }

    const search = (search = '') => {
        legals.filter((legalGroup) => {
            return legalGroup.lineOfBusiness.toLowerCase().includes(search.toLowerCase())
                || legalGroup.lob.toLowerCase().includes(search.toLowerCase())
                || legalGroup.legalList.filter((legal) => {
                    return legal.legal.toLowerCase().includes(search.toLowerCase())
                        || legal.lineOfBusiness.toLowerCase().includes(search.toLowerCase())
                        || legal.lob.toLowerCase().includes(search.toLowerCase())
                        || legal.title.toLowerCase().includes(search.toLowerCase())
                        || legal.categories.filter((category) => category.toLowerCase().includes(search.toLowerCase()))
                })
        })
    }

    return (
        <div className="about-container">
            <Helmet>
                <title>Legal Hub | Serch</title>
                <meta name="description" content="Serch legal documents on different policies and guidelines" />
                <meta property="og:title" content="Legal Hub | Serch" />
                <meta property="og:description" content="Serch legal documents on different policies and guidelines" />
                <meta property="og:image" content={Assets.logo} />
            </Helmet>
            <Header />
            <div className="legal-container">
                <div className="legal-header">
                    <span className="legal-title">Legal Hub | Serch</span>
                    <span className="legal-subtitle">
                        Here you&apos;ll find legal information and resources for using the
                        Serch platform. We recommend going through these documents before you
                        engage in any of our platforms.
                    </span>
                </div>
                <div className="legal-input-container">
                    <input
                        type="text"
                        placeholder="Search for terms, categories or keywords"
                        className="legal-textinput input"
                    />
                </div>
                {
                    isLoading
                        ? ItemGenerator(length = 5).map((_, key) => {
                            return (
                                <div style={{ marginBottom: "10px", width: "100%", height: "80px" }} key={key}>
                                    <Shimmer key={key} height={80} percentWidth="100%" />
                                </div>
                            )
                        })
                        : legals.map((legalGroup) => {
                            return (
                                <div className="legal-legal-group">
                                    <span className="legal-text">{legalGroup.lob}</span>
                                    {legalGroup.legalList.map((legal) => {
                                        return (<LegalItem title={legal.title} categories={legal.categories} />)
                                    })}
                                </div>
                            )
                        })
                }
            </div>
            <Footer />
        </div>
    );
};

export default Legal;
