import axios from 'axios';

const Axios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const ContentfulAxios = axios.create({
    baseURL: process.env.REACT_APP_CONTENTFUL_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export { ContentfulAxios, Axios, axios as default };