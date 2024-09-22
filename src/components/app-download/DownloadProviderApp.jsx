import React from 'react'
import Assets from '../../assets/Assets'
import DownloadApp from './DownloadApp'

const DownloadProviderApp = () => {
    return (
        <DownloadApp
            image={ Assets.providerApp }
            imageAlt='Serch Provider App'
            imageClassName='download-provider-app-image'
            appleStore=''
            playstore=''
        />
    )
}

export default DownloadProviderApp