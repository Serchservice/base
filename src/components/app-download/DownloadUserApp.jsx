import React from 'react'
import Assets from '../../assets/Assets'
import DownloadApp from './DownloadApp'

const DownloadUserApp = ({ colored = false }) => {
    return (
        <DownloadApp
            image={ Assets.userApp }
            imageAlt='Serch User App'
            imageClassName='download-user-app-image'
            appleStore=''
            playstore=''
            colored={ colored }
        />
    )
}

export default DownloadUserApp