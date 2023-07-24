import 'simplelightbox/dist/simple-lightbox.min.css';
import { viewer } from './lightbox.js';

// Create markup - rendering img-list
export function renderGallery(array, refs) {
  const gallery = document.querySelector('.gallery');
  const dataObj = array.totalHits;

  for (const key in dataObj) {
    const {
      webformatURL,
      largeImageURL,
      likes,
      views,
      comments,
      downloads,
      tags,
    } = dataObj[key];

    const card = `
      <div class="photo-card">
        <a class="card-item" href="${largeImageURL}">
          <img class="card-img" src="${webformatURL}" alt="${tags}" width="300" height="200" />
          <div class="info">
            <p class="info-item"><b>Views: </b>${views}</p>
            <p class="info-item"><i class="fa-solid fa-download"></i> ${downloads}</p>
            <p class="info-item"><i class="fa-regular fa-heart"></i> ${likes}</p>
            <p class="info-item"><i class="fa-solid fa-comment"></i> ${comments}</p>
          </div>
        </a>
      </div>
    `;
  }

  refs.gallery.insertAdjacentHTML('beforeend', card);

  // simple-lightbox slider
  const imgSlider = viewer[0].modalImg;
  imgSlider.refresh();
}
