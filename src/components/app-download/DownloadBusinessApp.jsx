import React from 'react'
import Assets from '../../assets/Assets'
import DownloadApp from './DownloadApp'

const DownloadBusinessApp = () => {
    return (
        <DownloadApp
            image={ Assets.businessApp }
            imageAlt='Serch Business App'
            imageClassName='download-business-app-image'
            appleStore=''
            playstore=''
        />
    )
}

export default DownloadBusinessApp