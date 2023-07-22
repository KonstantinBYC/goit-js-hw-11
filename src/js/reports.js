import Notiflix from 'notiflix';

const NO_IMAGES_MESSAGE =
  'Sorry, there are no images matching your search query. Please try again.';
const SUCCESS_MESSAGE = 'Well done! We found';
const END_OF_RESULTS_MESSAGE =
  "We're sorry, but you've reached the end of search results.";
const ERROR_TIMEOUT = 6000;
const SUCCESS_TIMEOUT = 3000;

function resetSearchForm(refs) {
  refs.searchForm.reset();
}

export function reportSuccessOrFail(response, refs) {
  resetSearchForm(refs);
  if (response.data.totalHits === 0) {
    Notiflix.Report.failure(NO_IMAGES_MESSAGE);
  } else {
    Notiflix.Report.success(
      `${SUCCESS_MESSAGE} ${response.data.totalHits} images.`,
      {
        timeout: SUCCESS_TIMEOUT,
      }
    );
  }
}

export function reportError(error, refs) {
  resetSearchForm(refs);
  Notiflix.Report.failure(error.message, {
    timeout: ERROR_TIMEOUT,
  });
}

export function reachedLastPage() {
  Notiflix.Report.info('INFO', END_OF_RESULTS_MESSAGE, 'Ok', {
    width: '360px',
    svgSize: '220px',
  });
}
