import 'simplelightbox/dist/simple-lightbox.min.css';
import { viewer } from './lightbox.js';

// Create markup - rendering img-list
export function renderGallery(array, refs) {
  const data = array.hits;

  function createMarkup(data) {
    return data
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          views,
          comments,
          downloads,
          likes,
        }) =>
          `    <div class="photo-card">
      <a class="card-item" href="${largeImageURL}">
        <img class="card-img" src="${webformatURL}" alt="${tags}" loading="lazy" width="300" height="200" />
        <div class="info">
          <p class="info-item"><b>Views: </b>${views}</p>
           <p class="info-item"><i class="fa-solid fa-download"></i> ${downloads}</p>
          <p class="info-item"><i class="fa-solid fa-heart"></i> ${likes}</p>
          <p class="info-item"><i class="fa-solid fa-comment"></i> ${comments}</p>
        </div>
      </a>
    </div>`
      )
      .join('');
  }

  loadMoreBtn.addEventListener('click', function () {
    nextPage().then(function (data) {
      if (data.length === 0) {
        Report.info(
          "We're sorry",
          "but you've reached the end of search results.",
          'Okay'
        );
        loadMoreBtn.hidden = true;
        return;
      }
    });
  });

  refs.gallery.insertAdjacentHTML('beforeend', createMarkup(data));

  // Simple Lightbox Slider
  const imgSlider = viewer[0].modalImg;
  imgSlider.refresh();
}

// Функція, що оновлює стан першого пошуку
export function updateFirstSearch(state) {
  firstSearch = state;
}

let loadMoreBtn = document.querySelector('.load-more');
loadMoreBtn.style.display = 'none';
