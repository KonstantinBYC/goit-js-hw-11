import getRefs from './refs.js';
import { getTrending } from './dataExitApi.js';
import { renderGallery } from './renderGallery.js';
import { pagination } from './pagination.js';
import { reachedLastPage } from './reports.js';

const refs = getRefs();
const intersectionData = pagination[0];

export const optionsScroll = {
  root: null,
  rootMargin: '2000px',
  threshold: 1.0,
};

export async function onLoad(entries, observer, intersectionData, refs) {
  for (const entry of entries) {
    if (
      entry.isIntersecting &&
      intersectionData.page <= intersectionData.totalPages
    ) {
      intersectionData.page += 1;
      try {
        const response = await getTrending(
          intersectionData.page,
          intersectionData.input,
          refs
        );
        renderGallery(response, refs);
        if (intersectionData.page === intersectionData.totalPages) {
          reachedLastPage();
          observer.unobserve(refs.presentScroll);
        }
      } catch (error) {
        console.log(error);
        hideLoadMessage(refs);
      }
    }
  }
}

// export async function onLoad(entries, observer) {
//   entries.forEach(async entry => {
//     if (
//       entry.isIntersecting &&
//       intersectionData.page <= intersectionData.totalPages
//     ) {
//       intersectionData.page += 1;
//       try {
//         const response = await getTrending(
//           intersectionData.page,
//           intersectionData.input,
//           refs
//         );
//         renderGallery(response, refs);
//         if (intersectionData.page === intersectionData.totalPages) {
//           reachedLastPage();
//           observer.unobserve(refs.presentScroll);
//         }
//       } catch (error) {
//         console.log(error);
//         hideLoadMessage(refs);
//       }
//     }
//   });
// }
