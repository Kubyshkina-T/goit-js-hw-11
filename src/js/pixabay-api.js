import axios from 'axios';
const API_KEY = "54645920-7a588b5965485e203aa072a25";
const BASE_URL = "https://pixabay.com/api/";


export function getImagesByQuery(query) {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query, 
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        },
    })
    .then(res => res.data)
    
}
