export function countTotalPages(response, intersectionData) {
  let totalImg = response.data.totalHits;
  intersectionData.totalHits = totalImg;

  // validate input data
  if (!totalHits || !totalPerPage || totalHits <= 0 || totalPerPage <= 0) {
    throw new Error('Invalid input data.');
  }

  intersectionData.totalPages = Math.round(
    intersectionData.totalHits / intersectionData.totalPerPage
  );
}
