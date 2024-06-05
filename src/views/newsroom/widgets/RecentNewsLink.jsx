import React from 'react'
import { Link } from 'react-router-dom'
import Links from '../../../config/Links'
import './recent-news-link.css'

const RecentNewsLink = ({header = '', date = '', slug = ''}) => {
    return (
        <Link to={`${Links.newsroom}/news/${slug}`} className="recent-news-link-recent-news-link">
            <span className="recent-news-link-header">{ header }</span>
            <span className="recent-news-link-date">{ date }</span>
        </Link>
    )
}

export default RecentNewsLink
