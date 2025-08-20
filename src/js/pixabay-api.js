import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export default async function getImagesByQuery(query, page = 1) {
  return await axios
    .get('/api/', {
      params: {
        key: '51813911-adef45491f9b881200172b027',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: 15,
      },
    })
    .then(res => {
      return res.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
