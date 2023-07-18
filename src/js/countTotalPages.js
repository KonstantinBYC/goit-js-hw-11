// Count total pages of received data
export function countTotalPages(response, intersectionData) {
  let totalImg = response.data.totalHits;
  intersectionData.totalHits = totalImg;

  // totalPerPage - imported from /get-api.js
  intersectionData.totalPages = Math.round(
    intersectionData.totalHits / intersectionData.totalPerPage
  );
}
