import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const viewer = [
  {
    modalImg: new SimpleLightbox('.gallery a', {
      captionDelay: 250,
      fadeSpeed: 350,
      widthRatio: `1.5`,
      doubleTapZoom: '1.2',
      maxZoom: `12`,
      captionsData: 'data-parent',
    }),
  },
];
