import React from 'react'
import './legal-item.css'

const LegalItem = ({title = '', categories = []}) => {
    return (
        <div className="legal-item-legal">
            <span className="legal-item-text">{title}</span>
            <div className="legal-item-categories">{ categories.map((category) => {
                return (
                    <div className="legal-item-category">
                        <span className="legal-item-text1">{category}</span>
                    </div>
                )
            }) }</div>
        </div>
    )
}

export default LegalItem
