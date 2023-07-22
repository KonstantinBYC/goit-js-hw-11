import 'simplelightbox/dist/simple-lightbox.min.css';
import { viewer } from './lightbox.js';

// Create markup - rendering img-list
export function renderGallery(arr, refs) {
  const gallery = document.createDocumentFragment();
  const dataObj = arr.data.hits;

  for (const data of dataObj) {
    const {
      webformatURL,
      largeImageURL,
      likes,
      views,
      comments,
      downloads,
      tags,
    } = data;

    const card = `
      <div class="photo-card">
        <a class="card-item" href="${largeImageURL}">
          <img class="card-img" src="${webformatURL}" alt="${tags}" width="300" height="200" />
          <div class="info">
            <p class="info-item"><b>Views: </b>${views}</p>
            <p class="info-item"><i class="fa-solid fa-download"></i> ${downloads}</p>
            <p class="info-item"><i class="fa-regular fa-heart"></i> ${likes}</p>
            <p class="info-item"><i class="fa-solid fa-comment"></i> ${comments}</p>
          </div>
        </a>
      </div>
    `;
    galleryFragment.appendChild(
      document.createRange().createContextualFragment(card)
    );
  }

  refs.gallery.appendChild(galleryFragment);

  // Simple Lightbox Slider
  const imgSlider = viewer[0].modalImg;
  imgSlider.refresh();
}

//   for (const key in dataObj) {
//     const {
//       webformatURL,
//       largeImageURL,
//       likes,
//       views,
//       comments,
//       downloads,
//       tags,
//     } = dataObj[key];

//     const data = {
//       url: webformatURL,
//       bigUrl: largeImageURL,
//       alt: tags,
//       totalLikes: likes,
//       totalViews: views,
//       totalComments: comments,
//       totalDownloads: downloads,
//     };

//     const card = `<div class="photo-card">
//          <a class="card-item" href="${data.bigUrl}"><img class="card-img" src="${data.url}" alt="${data.alt}" data-parent="<b>Views: </b>${data.totalViews}   <b>Downloads: </b>${data.totalDownloads} <b>Likes: </b>${data.totalLikes} <b>Comments: </b>${data.totalComments} "  width="300" height="200"/>
//        <div class="info">
//      	         <p class="info-item">
//      		<b>Views: </b>${data.totalViews}
//      	  </p>	  <p class="info-item">
//      		<i class="fa-solid fa-download"></i> ${data.totalDownloads}
//      	  </p>
//            <p class="info-item">
//      		<i class="fa-regular fa-heart"></i> ${data.totalLikes}
//      	  </p>
//      	  <p class="info-item">
//      		<i class="fa-solid fa-comment"></i> ${data.totalComments}
//      	  </p>
//        </div>
//        </a>
//      </div>
//      `;
//     refs.gallery.insertAdjacentHTML('beforeend', card);
//     // Simple Lightbox Slider
//     const imgSlider = viewer[0].modalImg;
//     imgSlider.refresh();
//   }
// }
