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

document.addEventListener('DOMContentLoaded', () => {
  hideLoader();
  hideLoadMoreButton();
});

formElem.addEventListener('submit', async e => {
  e.preventDefault();
  page = 1;
  hideLoadMoreButton();

  const inputElem = e.currentTarget.elements['search-text'];
  const value = inputElem.value.trim();

  if (value === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term before submitting.',
    });
    return;
  }

  searchText = value;
  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(searchText, page);
    hideLoader();

    if (images.hits.length > 0) {
      totalPages = Math.ceil(images.totalHits / 15);
      createGallery(images.hits);

      if (totalPages > 1) {
        showLoadMoreButton();
      } else {
        iziToast.info({
          title: 'Message',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    } else {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
    console.error(error);
  } finally {
    inputElem.value = '';
  }
});

loadBtnElem.addEventListener('click', async () => {
  page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const images = await getImagesByQuery(searchText, page);
    hideLoader();

    if (images.hits.length > 0) {
      createGallery(images.hits);

      const galleryCard = document.querySelector('.gallery-item');
      if (galleryCard) {
        const { height: cardHeight } = galleryCard.getBoundingClientRect();
        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth',
        });
      }

      if (page < totalPages) {
        showLoadMoreButton();
      } else {
        iziToast.info({
          title: 'Message',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    } else {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
    console.error(error);
  }
});
