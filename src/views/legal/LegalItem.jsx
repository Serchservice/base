import React from 'react'
import './legalItem.css'
import { Link } from 'react-router-dom'
import Links from '../../config/Links'

const LegalItem = ({title = '', categories = [], slug = ''}) => {
    return (
        <Link className="legal-item-legal" to={`${Links.legal}/${slug}`}>
            <span className="legal-item-text">{title}</span>
            <div className="legal-item-categories">{ categories.map((category, key) => {
                return (
                    <div className="legal-item-category" key={key}>
                        <span className="legal-item-text1">{category}</span>
                    </div>
                )
            }) }</div>
        </Link>
    )
}

export default LegalItem
