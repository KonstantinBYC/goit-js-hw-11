export function countTotalPages(response, intersectionData) {
  const { total } = response.data;
  const { totalPerPage } = intersectionData;
  // Validate input data
  if (!totalHits || !totalPerPage || totalHits <= 0 || totalPerPage <= 0) {
    throw new Error('Invalid input data.');
  }

  intersectionData.totalHits = totalHits;
  intersectionData.totalPages = Math.ceil(totalHits / totalPerPage);
}
