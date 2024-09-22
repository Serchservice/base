import React, { useContext, useEffect, useRef, useState } from 'react'
import CertificateProfileContent from './widgets/certificate-profile-content'
import CertificateTestimonialContent from './widgets/certificate-testimonial-content'
import './view-certificate.css'
import Assets from '../../assets/Assets'
import Footer from '../../components/footer/Footer'
import DataContext from '../../api/DataProvider'
import Links from '../../config/Links'
import { useNavigate } from 'react-router-dom'
import { wait } from '@testing-library/user-event/dist/utils'
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/webpack';
import Canvas from "canvas";
import Title from '../../config/Title'

const ViewCertificate = () => {
    const { data } = useContext(DataContext)
    const navigate = useNavigate()
    const [certificate, setCertificate] = useState({
        "document": "",
        "picture": "https://play.teleporthq.io/static/svg/default-img.svg",
        "data": {
            "document": "",
            "id": "",
            "content": "",
            "header": "",
            "qrCode": "",
            "signature": "",
            "issueDate": "",
            "name": "",
            "category": "",
            "image": ""
        },
        "ratings": [
            {
                "name": "",
                "rating": 0,
                "comment": "",
                "category": "",
                "image": ""
            }
        ]
    })

    async function redirect(route = '', duration = 1000) {
        await wait(duration)
        navigate(route)
    }

    useEffect(() => {
        if(data != null) {
            setCertificate(data)
            renderFirstPage();
            console.log(certificate)
        } else {
            redirect(Links.error)
        }
    }, [])
    const title = `Certificate for ${certificate.data.name} | Serch`;

    // Set the workerSrc property to use the pdfjs-dist worker
    GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.js`;
    const canvasRef = useRef(Canvas.createCanvas(600, 600));
    const [imageUrl, setImageUrl] = useState(null);

    const renderFirstPage = async () => {
        const loadingTask = getDocument(data.document);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: context,
            viewport: viewport,
        };

        await page.render(renderContext).promise;

        // Convert the canvas to an image URL
        const imgSrc = canvas.toDataURL();
        setImageUrl(imgSrc);
    };

    const leftRatings = certificate.ratings.filter((_, index) => index % 2 === 0);
    const rightRatings = certificate.ratings.filter((_, index) => index % 2 !== 0);

    return (
        <div className="view-certificate-container">
            <Title title={title} description='Join the Serch platform and increase your earnings' />
            <div className="view-certificate-header">
                <div className="view-certificate-container1">
                    <img alt="logo" src={Assets.logo} className="view-certificate-logo" />
                    <div className="view-certificate-avatar">
                        <img src={certificate.picture} alt="avatar" className="view-certificate-image" />
                    </div>
                    <span className="view-certificate-header-text">Here&apos;s the certificate</span>
                    <img src={imageUrl} alt="avatar" className="view-certificate-certificate" />
                </div>
            </div>
            <div className="view-certificate-content">
                <span className="view-certificate-profile-information-header">Profile Information</span>
                <div className="view-certificate-profile-information-content">
                    <CertificateProfileContent content={`Name: ${certificate.data.name}`} />
                    <CertificateProfileContent content={`Category: ${certificate.data.category}`} />
                </div>
                <span className="view-certificate-testimonials-header">Testimonials</span>
                {
                    certificate.ratings.length > 0 && (
                        <div className="view-certificate-testimonials-content">
                            <div className="view-certificate-left">{leftRatings.map((rating, index) => (
                                <CertificateTestimonialContent
                                    key={index}
                                    rating={rating.rating}
                                    name={rating.name}
                                    comment={rating.comment}
                                    avatar={rating.image}
                                />
                            ))}</div>
                            <div className="view-certificate-right">{rightRatings.map((rating, index) => (
                                <CertificateTestimonialContent
                                    key={index}
                                    rating={rating.rating}
                                    name={rating.name}
                                    comment={rating.comment}
                                    avatar={rating.image}
                                />
                            ))}</div>
                        </div>
                    )
                }
                {
                    certificate.ratings.length == 0 && (<p></p>)
                }
                <div className="view-certificate-container3">
                    <img alt="category" src={certificate.data.image} className="view-certificate-image1" />
                </div>
            </div>
            <section className="view-certificate-download-provider-app">
                <header className="view-certificate-header1">
                    <h2 className="view-certificate-heading section-heading">Flex your skill with Serch</h2>
                    <div className="view-certificate-buttons">
                        <div className="view-certificate-ios button">
                            <img alt="ios" src={Assets.apple1500H} className="view-certificate-icon" />
                            <span className="view-certificate-text">Download for iOS</span>
                        </div>
                        <div className="view-certificate-android button">
                            <img alt="android" src={Assets.android200H} className="view-certificate-icon1" />
                            <span className="view-certificate-text1">Download for Android</span>
                        </div>
                    </div>
                </header>
                <img alt="Serch Provider" src={Assets.providerApp} className="view-certificate-image2" />
            </section>
            <Footer />
        </div>
    )
}

export default ViewCertificate