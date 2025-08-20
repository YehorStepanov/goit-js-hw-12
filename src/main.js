import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.js-form');

document.addEventListener('DOMContentLoaded', e => {
  hideLoader();
});

formElem.addEventListener('submit', e => {
  e.preventDefault();
  if (e.currentTarget.elements['search-text'].value.trim() == '') {
    return;
  }
  formElem.insertAdjacentHTML;
  clearGallery();
  showLoader();
  getImagesByQuery(e.currentTarget.elements['search-text'].value.trim())
    .then(res => {
      if (res.hits.length != 0) {
        createGallery(res.hits);
        hideLoader();
      } else {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        hideLoader();
      }
    })
    .catch(e => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      console.log(e);
    });
});
