export function countTotalPages(response, intersectionData) {
  const { totalHits } = response.data;
  const { totalPerPage } = intersectionData;

  // Validate input data
  if (!totalHits || !totalPerPage || totalHits <= 0 || totalPerPage <= 0) {
    throw new Error('Invalid input data.');
  }
  intersectionData.totalHits = totalHits;
  intersectionData.totalPages = Math.ceil(totalHits / totalPerPage);
}

// // count total pages of received data
// export function countTotalPages(response, intersectionData) {
//   let totalImg = response.data.totalHits;
//   intersectionData.totalHits = totalImg;

//   // totalPerPage - imported from get-api.js
//   intersectionData.totalPages = Math.round(
//     intersectionData.totalHits / intersectionData.totalPerPage
//   );
// }
