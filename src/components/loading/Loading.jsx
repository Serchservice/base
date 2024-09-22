import React from 'react'
import './loading.css'
import Assets from '../../assets/Assets'

const Loading = ({
    isLoading = false, isVerified = false,
    loading = 'Verifying link...',
    verified = 'Link is verified',
    unverified = 'Error while verifying link'
}) => {
    return (
        <div className="loading-container">
            {isLoading && (
                <div className="loading-verifying">
                    <img
                        alt="verifying"
                        src={ Assets.loading }
                        className="loading-image"
                    />
                    <span className="loading-text">{ loading }</span>
                </div>
            )}
            {isVerified && !isLoading && (
                <div className="loading-verified">
                    <img
                        alt="verified"
                        src={ Assets.success }
                        className="loading-image1"
                    />
                    <span className="loading-text1">{ verified }</span>
                </div>
            )}
            {!isVerified && !isLoading && (
                <div className="loading-not-verified">
                    <img
                        alt="error"
                        src={ Assets.error }
                        className="loading-image2"
                    />
                    <span className="loading-text2">{ unverified }</span>
                </div>
            )}
        </div>
    )
}

export default Loading