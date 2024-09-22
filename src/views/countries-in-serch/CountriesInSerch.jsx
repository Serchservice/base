import React, { useState } from 'react'
import './countries-in-serch.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Title from '../../config/Title'

const CountriesInSerch = () => {
    const [ countries, setCountries ] = useState([
        {
            "country": "Nigeria",
            "states": [
                {
                    "1": "Abuja",
                    "2": "Lagos",
                },
                {
                    "1": "Benin",
                    "2": "Anambra",
                }
            ]
        }
    ])

    return (
        <div className="countries-in-serch-container">
            <Title title="Countries In Serch" description='View all countries and states we are launched in' />
            <Header />
            <div className="countries-in-serch-heading">
                <h1 className="countries-in-serch-heading-title">
                    <span>Countries in Serch</span>
                    <br></br>
                </h1>
                <span className="countries-in-serch-heading-subtitle">
                    Request for services in your country, most especially, in your city.
                    See countries and cities where Serch is available.
                </span>
            </div>
            <div className="countries-in-serch-countries-and-cities">
                {
                    countries.map((value, key) => {
                        return (
                            <div className="countries-in-serch-content" key={ key }>
                                <span className="countries-in-serch-content-title">{ value.country }</span>
                                <div className="countries-in-serch-content-body">
                                    {
                                        value.states.map((value, key) => {
                                            return (
                                                <div className="countries-in-serch-cities" key={ key }>
                                                    <span className="countries-in-serch-city">{ value[1] }</span>
                                                    <span className="countries-in-serch-city">{ value[2] }</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default CountriesInSerch
