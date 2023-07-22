import getRefs from './refs.js';
import { getTrending } from './dataExitApi.js';
import { renderGallery } from './renderGallery.js';
import { onLoad, optionsScroll } from './intersection.js';
import { pagination } from './pagination.js';
import { showLoadMessage, hideLoadMessage } from './loader.js';
import { reportSuccessOrFail } from './reports.js';
import { countTotalPages } from './countTotalPages.js';

const refs = getRefs();
const intersectionData = pagination[0];

refs.searchForm.addEventListener('submit', searchSubmit);

// Intersection observer of infinity scroll
let observer = new IntersectionObserver(onLoad, optionsScroll);

// clear gallery list
function clearGalleryList() {
  refs.gallery.innerHTML = '';
}

// Listening search(input) and rendering marup
async function searchSubmit(e) {
  e.preventDefault();

  //data form input form
  const inputData = e.target.elements.searchQuery.value;
  intersectionData.input = inputData;

  // default number of first page
  intersectionData.page = 1;

  try {
    showLoadMessage(refs);

    // receiving object by our requested data
    const response = await getTrending(intersectionData.page, inputData, refs);

    // reports about unsuccessful search or success
    reportSuccessOrFail(response, refs);

    // call renderingImgList
    renderGallery(response, refs);

    // calculate total pages after receiving object
    countTotalPages(response, intersectionData);

    // start observing page
    observer.observe(refs.presentScroll);

    // Hide loading message after rendering the gallery
    hideLoadMessage(refs);
  } catch (error) {
    console.log(error);
    hideLoadMessage(refs);
  }
}
