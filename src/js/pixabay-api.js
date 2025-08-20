import axios from "axios";



axios.defaults.baseURL = 'https://pixabay.com';

function getImagesByQuery(query) {
    return axios.get('/api/', {
        params: {
            key: '51813911-adef45491f9b881200172b027',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
        
        }
    })
        .then(res => {
           return res.data;  
            
        }
        )
        .catch(function (error) {
            console.log(error);
        });
}

export default getImagesByQuery;
