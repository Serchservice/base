import React from 'react'
import './certificate-testimonial-content.css'

const CertificateTestimonialContent = ({
    name = 'John Cassius', comment = "He is very good with what he does",
    rating = '5.0', avatar = "https://play.teleporthq.io/static/svg/default-img.svg",
}) => {
    return (
        <div className="certificate-testimonial-content-container">
            <div className="certificate-testimonial-content-stepper">
                <div className="certificate-testimonial-content-step"></div>
                <div className="certificate-testimonial-content-step-line"></div>
            </div>
            <div className="certificate-testimonial-content-content">
                <div className="certificate-testimonial-content-header">
                    <span className="certificate-testimonial-content-text">{ name }</span>
                    <span className="certificate-testimonial-content-text1">{ rating }</span>
                </div>
                <div className="certificate-testimonial-content-body">
                    <img src={ avatar } alt="avatar" className="certificate-testimonial-content-image" />
                    <div className="certificate-testimonial-content-comment">
                        <span className="certificate-testimonial-content-text2">{ comment }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificateTestimonialContent