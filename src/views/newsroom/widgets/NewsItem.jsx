import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'
import Links from '../../../config/Links'
import './newsItem.css'

const NewsItem = ({image = '', imageAlt = '', date = '', header = '', slug = '', isFeatured = false, categories = []}) => {
    return (
        <Link className="news-item-container" to={`${Links.news}/${slug}`}>
            <img src={ image } alt={ imageAlt } className="news-item-image" />
            <div className="news-item-item">
                <span className="news-item-date">{ date }</span>
                <span className="news-item-context">Serch | Newsroom</span>
                <span className="news-item-header">{ header }</span>
                { isFeatured && <Icon icon="solar:star-bold-duotone" className="news-item-featured"/> }
                <div className="news-item-categories" style={{marginTop: "10px"}}> {
                    categories.map((category, key) => (
                        <div className="news-item-category-item" key={key}>
                            <span className="news-item-category">{ category }</span>
                        </div>
                    ))
                }
                </div>
            </div>
        </Link>
    )
}

export default NewsItem