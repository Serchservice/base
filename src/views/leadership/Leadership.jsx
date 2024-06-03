import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './leadership.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Assets from '../../assets/Assets'
import { Axios } from '../../api/Axios'
import ItemGenerator from '../../config/ItemGenerator'
import Shimmer from '../../components/shimmer/Shimmer'

const Leadership = () => {
    const [executives, setExecutives] = useState([
        {
            "image": "",
            "name": "",
            "position": "",
            "link": "",
            "short_name": ""
        }
    ])
    const [boards, setBoards] = useState([
        {
            "name": "",
            "position": "",
        }
    ])
    const [isFetchingBoards, setIsFetchingBoards] = useState(true)
    const [isFetchingExecutives, setIsFetchingExecutives] = useState(true)

    useEffect(() => {
        fetchBoards()
        fetchExecutives()
    }, [])

    async function fetchExecutives() {
        setIsFetchingExecutives(true)
        await Axios.get("/company/team?type=EXECUTIVE").then((response) => {
            if(response.data["code"] === 200) {
                setIsFetchingExecutives(false)
                setExecutives(response.data["data"])
                console.log(executives)
            }
        }).catch(() => { })
    }

    async function fetchBoards() {
        setIsFetchingBoards(true)
        await Axios.get("/company/team?type=BOARD").then((response) => {
            if(response.data["code"] === 200) {
                setIsFetchingBoards(false)
                setBoards(response.data["data"])
                console.log(boards)
            }
        }).catch(() => { })
    }

    return (
        <div className="leadership-container">
            <Helmet>
                <title>Leadership | Serch</title>
                <meta name="description" content="Serch governance and structure" />
                <meta property="og:title" content="Leadership | Serch" />
                <meta property="og:description" content="A requestSharing and provideSharing company" />
                <meta property="og:image" content={ Assets.logo } />
            </Helmet>
            <Header />
            <div className="leadership-container1">
                <div className="leadership-container2">
                    <h1 className="leadership-text">Executive Team</h1>
                    <div className="leadership-team">
                        {
                            isFetchingExecutives ? ItemGenerator(length = 5).map((_, key) => {
                                return (<Shimmer key={ key } height={300} width={300}/>)
                            }) : executives.map((value, key) => {
                                return (
                                    <div className="leadership-box" key={ key }>
                                        <img alt="Profile Picture" src={ value.image } className="leadership-image" />
                                        <span className="leadership-text01">{ value.name }</span>
                                        <span className="leadership-text02">{ value.position }</span>
                                        <a href={ value.link } target="_blank" rel="noreferrer noopener" className="leadership-link">
                                            Read Bio
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
                            isFetchingBoards ? ItemGenerator(length = 5).map((_, key) => {
                                return (<Shimmer key={ key } height={80} width={240}/>)
                            }) : boards.map((value, key) => {
                                return (
                                    <div className="leadership-box5" key={ key }>
                                        <span className="leadership-text12">{ value.name }</span>
                                        <span className="leadership-text13">{ value.position }</span>
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

export default Leadership