import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.js-form');
const loadBtnElem = document.querySelector('.js-load-bt');

let page = 1;
let searchText = '';
let totalPages = 0;

document.addEventListener('DOMContentLoaded', e => {
  hideLoader();
  hideLoadMoreButton();
});

formElem.addEventListener('submit', async e => {
  e.preventDefault();
  page = 1;
  hideLoadMoreButton();
  if (e.currentTarget.elements['search-text'].value.trim() == '') {
    return;
  }
  searchText = e.currentTarget.elements['search-text'].value.trim();
  e.currentTarget.elements['search-text'].value = '';
  clearGallery();
  showLoader();
  try {
    const images = await getImagesByQuery(searchText);
    if (images.hits.length != 0) {
      totalPages = Math.ceil(images.totalHits / 15);
      createGallery(images.hits);
      hideLoader();
      const galleryCard = document.querySelector('.gallery-item');
      if (galleryCard) {
        const { height: cardHeight } = galleryCard.getBoundingClientRect();
        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth',
        });
      }
      if (totalPages < 2) {
        iziToast.info({
          title: 'Message',
          message: 'We`re sorry, but you`ve reached the end of search results.',
        });
      } else {
        showLoadMoreButton();
      }
    } else {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoader();
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    console.log(error);
  }
});

loadBtnElem.addEventListener('click', async e => {
  page += 1;
  showLoader();
  try {
    const images = await getImagesByQuery(searchText, page);
    if (images.hits.length != 0) {
      createGallery(images.hits);
      hideLoader();
      const galleryCard = document.querySelector('.gallery-item');
      if (galleryCard) {
        const { height: cardHeight } = galleryCard.getBoundingClientRect();
        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth',
        });
      }
      if (totalPages < page + 1) {
        hideLoadMoreButton();
        iziToast.info({
          title: 'Message',
          message: 'We`re sorry, but you`ve reached the end of search results.',
        });
      }
    } else {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoadMoreButton();
      hideLoader();
    }
  } catch (error) {
    hideLoader();
    hideLoadMoreButton();
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    console.log(error);
  }
});
