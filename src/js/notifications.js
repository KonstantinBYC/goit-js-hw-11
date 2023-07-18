import Notiflix from 'notiflix';

// Got success after query or not
export function notifySuccessOrFail(response, refs) {
  // if you reached last image in the list(object)
  if (response.data.totalHits === 0) {
    // clear data from input
    refs.searchForm.reset();

    Notiflix.Notify.failure(
      'Sorry, we found zero images by your search query. Please try again.'
    );
  } else {
    // clear data from input
    refs.searchForm.reset();

    Notiflix.Notify.success(
      `Well done! We found ${response.data.totalHits} images.`,
      {
        timeout: 3000,
      }
    );
  }
}

// errro notification message
export function notifyError(error, refs) {
  refs.searchForm.reset();
  Notiflix.Notify.failure(`${error}`, {
    timeout: 6000,
  });
}

// info report about reaching last page
export function reachedLastPage() {
  Notiflix.Report.info(
    'INFO',
    'We&#8217;re sorry, but you&#x27;ve reached the end of search results.',
    'Ok',
    {
      width: '360px',
      svgSize: '220px',
    }
  );
}
