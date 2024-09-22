import React from 'react'
import './fastercapital.css'
import Assets from '../../assets/Assets'

const FasterCapital = () => {
    return (
        <div className="faster-capital">
            <h1>The Partnership</h1>
            <div className="partners">
            <img src={ Assets.dark200H } alt="image" className="serch" />
            <div className="divider"></div>
                <img
                    src={ Assets.fasterCapital }
                    alt="image"
                    className="faster-capital-image"
                />
            </div>
            <span className="text">
                <span>
                    Serch has been accepted into the LaunchUP program of
                    <span
                        dangerouslySetInnerHTML={{
                            __html: ' ',
                        }}
                    />
                </span>
                <a href="https://www.fastercapital.com/" target="_blank" rel="noreferrer noopener" className="link">
                    FasterCapital
                </a>
                <span> and is seeking a capital of $800,000</span>
            </span>
        </div>
    )
}

export default FasterCapital
