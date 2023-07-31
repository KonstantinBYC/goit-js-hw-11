import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createMarkup } from './js/renderGallery';
import {
  getImages,
  setSearchQuery,
  resetPage,
  nextPage,
  updateFirstSearch,
  getTotal,
} from './js/api-get';
import { Notify } from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';

let form = document.querySelector('#search-form');
let gallery = document.querySelector('.gallery');
let btnloadMore = document.querySelector('.load-more');

btnloadMore.style.display = 'none';

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  let searchQuery = evt.target.searchQuery.value.trim();
  if (searchQuery === '') {
    Notify.warning('Input field is empty. Please type something.');
    return;
  }

  setSearchQuery(searchQuery);
  resetPage();
  updateFirstSearch(true);

  btnloadMore.hidden = true;
  gallery.innerHTML = '';

  getImages().then(function (data) {
    if (data.length === 0) {
      Notify.failure('Nothing found by Your request');
      btnloadMore.style.display = 'none';
      return;
    }
    const searchResult = getTotal();
    if (data.length > 0) {
      Notify.success(`Well done! We found ${searchResult} images.`);
    }

    gallery.insertAdjacentHTML('beforeend', createMarkup(data));
    new SimpleLightbox('.gallery a', {
      captionDelay: 200,
      captionsData: 'alt',
    });
    btnloadMore.hidden = false;
    btnloadMore.style.display = 'block';
  });

  evt.target.searchQuery.value = '';
});

btnloadMore.addEventListener('click', function () {
  nextPage().then(function (data) {
    if (data.length === 0) {
      Report.info(
        "We're sorry",
        "but you've reached the end of search results.",
        'Okay'
      );
      btnloadMore.hidden = true;
      return;
    }

    gallery.insertAdjacentHTML('beforeend', createMarkup(data));
    new SimpleLightbox('.gallery a', {
      captionDelay: 200,
      captionsData: 'alt',
    });
  });
});
