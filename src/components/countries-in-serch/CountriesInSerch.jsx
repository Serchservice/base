import React from 'react'
import { Link } from 'react-router-dom'
import './country-in-serch.css'

const CountriesInSerch = () => {
    return (
        <main className="country-in-serch-country-in-serch">
            <div className="country-in-serch-header">
                <h2 className="section-heading">Everywhere you are</h2>
                <p className="country-in-serch-description section-description">
                    View the cities and countries Serch is launched in.
                </p>
            </div>
            <div className="country-in-serch-buttons">
                <Link to="/careers" className="country-in-serch-navlink">
                <div className="country-in-serch-get-started button">
                    <span className="country-in-serch-text">Countries in Serch</span>
                </div>
                </Link>
            </div>
        </main>
    )
}

export default CountriesInSerch
