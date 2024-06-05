import React from 'react'
import { Link } from 'react-router-dom'
import Links from '../../../config/Links'
import './blogItem.css'

const BlogItem = ({image = '', imageAlt = '', date = '', header = '', slug = '', categories = []}) => {
    return (
        <Link className="blog-item-container" to={`${Links.blogs}/${slug}`}>
            <img src={ image } alt={ imageAlt } className="blog-item-image" />
            <div className="blog-item-item">
                <span className="blog-item-date">{ date }</span>
                <span className="blog-item-context">Serch | Blog</span>
                <span className="blog-item-header">{ header }</span>
                <div className="blog-item-categories" style={{marginTop: "10px"}}> {
                    categories.map((category, key) => (
                        <div className="blog-item-category-item" key={key}>
                            <span className="blog-item-category">{ category }</span>
                        </div>
                    ))
                }
                </div>
            </div>
        </Link>
    )
}

export default BlogItem