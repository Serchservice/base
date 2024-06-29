import React from 'react'
import './leadership.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ItemGenerator from '../../config/ItemGenerator'
import Shimmer from '../../components/shimmer/Shimmer'
import { useContentful } from 'react-contentful';
import Title from '../../config/Title'

const Leadership = () => {
    const { data, error, fetched, loading } = useContentful({ contentType: 'teamGroup' });

    if (loading || !fetched || error || !data || data["items"].length === 0) {
        return (
            <div className="leadership-container">
                <Title title="Leadership" description='Serch governance and structure' />
                <Header />
                <div className="leadership-container1">
                    <div className="leadership-container2">
                        <h1 className="leadership-text">Executive Team</h1>
                        <div className="leadership-team">
                            {
                                ItemGenerator(length = 5).map((_, key) => {
                                    return (<Shimmer key={key} height={300} width={300} />)
                                })
                            }
                        </div>
                    </div>
                    <div className="leadership-container3">
                        <h1 className="leadership-text11">Board of Directors</h1>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                        }}>
                            {
                                ItemGenerator(length = 5).map((_, key) => {
                                    return (<Shimmer key={key} height={80} width={240} />)
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    } else {
        const teams = data["items"].reduce((acc, item) => {
            const { group, teams } = item.fields;
            if (group === "Executive") {
                acc.executives.push(...teams.map((team) => ({
                    image: team.fields.image?.fields?.file?.url || "", // Handle missing image
                    name: team.fields.name,
                    position: team.fields.position,
                    link: team.fields.link,
                    shortName: team.fields.short_name,
                    order: team.fields.order
                })));
            } else if (group === "Board") {
                acc.boards.push(...teams.map((team) => ({
                    name: team.fields.name,
                    position: team.fields.board,
                    order: team.fields.order
                })));
            }
            return acc;
        }, { executives: [], boards: [] });

        // Sort the executives by the order property
        teams.executives.sort((a, b) => a.order - b.order);

        // Sort the boards by the order property
        teams.boards.sort((a, b) => a.order - b.order);
        return (
            <div className="leadership-container">
                <Title title="Leadership" description='Serch governance and structure' />
                <Header />
                <div className="leadership-container1">
                    <div className="leadership-container2">
                        <h1 className="leadership-text">Executive Team</h1>
                        <div className="leadership-team">
                            {
                                teams.executives.map((executive, key) => {
                                    return (
                                        <div className="leadership-box" key={key}>
                                            <img alt="Profile Picture" src={executive.image} className="leadership-image" />
                                            <span className="leadership-text01">{executive.name}</span>
                                            <span className="leadership-text02">{executive.position}</span>
                                            <a href={executive.link} target="_blank" rel="noreferrer noopener" className="leadership-link">
                                                Read {executive.shortName}'s Bio
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="leadership-container3">
                        <h1 className="leadership-text11">Board of Directors</h1>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                        }}>
                            {
                                teams.boards.map((board, key) => {
                                    return (
                                        <div className="leadership-box5" key={key}>
                                            <span className="leadership-text12">{board.name}</span>
                                            <span className="leadership-text13">{board.position}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Leadership