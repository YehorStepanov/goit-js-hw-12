import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryElem = document.querySelector('.gallery');
const loaderElem = document.querySelector('.loader');

export function createGallery(images) {
  const markup = templatePictures(images);
    galleryElem.innerHTML = markup;
    gallery.refresh();
}

function templatePictures(posts) {
  return posts.map(templatePicture).join('');
}

function templatePicture(
  { likes, views, comments, downloads, largeImageURL, webformatURL, tags },
  i
) {
  return `<li class="gallery-item"><a class="gallery-link" href="${largeImageURL}">
          <img class="image-item" src="${webformatURL}" alt="${tags}" /></a>
          <div class="text-item">
            <div class="single-text">
              <h5>Likes</h5>
              <p>${likes}</p>
            </div>
            <div class="single-text">
              <h5>Views</h5>
              <p>${views}</p>
            </div>
            <div class="single-text">
              <h5>Comments</h5>
              <p>${comments}</p>
            </div>
            <div class="single-text">
              <h5>Downloads</h5>
              <p>${downloads}</p>
            </div>
          </div>
        </li>`;
}
let gallery = new SimpleLightbox('.gallery-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});


export function clearGallery() {
    galleryElem.innerHTML = '';
}

export function showLoader() {
    loaderElem.style.display = 'flex';
}

export function hideLoader() {
    loaderElem.style.display = 'none';
}