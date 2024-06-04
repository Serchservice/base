import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import "./legal.css";
import Assets from "../../assets/Assets";
import Footer from "../../components/footer/Footer";
import LegalItem from "./LegalItem";
import ItemGenerator from "../../config/ItemGenerator";
import Shimmer from "../../components/shimmer/Shimmer";
import Header from "../../components/header/Header";
import { useContentful } from 'react-contentful';

const Legal = () => {
    const { data, error, fetched, loading } = useContentful({ contentType: 'legalDocumentGroup' });
    const [legals, setLegals] = useState([]);
    const [filteredLegals, setFilteredLegals] = useState([]);

    useEffect(() => {
        if (data) {
            const legals = data["items"].map((item) => ({
                group: item.fields.group,
                legals: item.fields.legals.map((legal) => ({
                    header: legal.fields.header,
                    slug: legal.fields.slug,
                    categories: legal.fields.categories,
                })),
            }));

            // Sort the legals to ensure the group "GENERAL" is first
            const sortedLegals = legals.sort((a, b) => {
                if (a.group.toUpperCase() === 'GENERAL') return -1;
                if (b.group.toUpperCase() === 'GENERAL') return 1;
                return 0;
            });
            setLegals(sortedLegals)
            setFilteredLegals(sortedLegals)
        }
    }, [data])

    const search = (search = '') => {
        if(search !== '') {
            const lowerCase = search.toLowerCase();
            const filteredData = legals.filter(legalGroup => {
                return legalGroup.group.toLowerCase().includes(lowerCase) ||
                    legalGroup.legals.some(legal =>
                        legal.header.toLowerCase().includes(lowerCase) ||
                        legal.slug.toLowerCase().includes(lowerCase) ||
                        legal.categories.some(category => category.toLowerCase().includes(lowerCase))
                    );
            });

            // Sort the legals to ensure the group "GENERAL" is first
            const sortedLegals = filteredData.sort((a, b) => {
                if (a.group.toUpperCase() === 'GENERAL') return -1;
                if (b.group.toUpperCase() === 'GENERAL') return 1;
                return 0;
            });
            setFilteredLegals(sortedLegals);
        } else {
            setFilteredLegals(legals)
        }
    }

    if (loading || !fetched || error || !data) {
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
                        <Shimmer height={80} percentWidth="100%" />
                    </div>
                    {
                        ItemGenerator(length = 5).map((_, key) => {
                            return (
                                <div style={{ marginBottom: "10px", width: "100%", height: "80px" }} key={key}>
                                    <Shimmer key={key} height={80} percentWidth="100%" />
                                </div>
                            )
                        })
                    }
                </div>
                <Footer />
            </div>
        );
    } else {
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
                            onChange={e => search(e.target.value)}
                        />
                    </div>
                    {
                        filteredLegals.map((legalGroup, key) => {
                            return (
                                <div className="legal-legal-group" key={key}>
                                    <span className="legal-text">{legalGroup.group}</span>
                                    {legalGroup.legals.map((legal, key) => {
                                        return (<LegalItem
                                            key={key}
                                            slug={legal.slug}
                                            title={legal.header}
                                            categories={legal.categories}
                                        />)
                                    })}
                                </div>
                            )
                        })
                    }
                </div>
                <Footer />
            </div>
        );
    }
};

export default Legal;
