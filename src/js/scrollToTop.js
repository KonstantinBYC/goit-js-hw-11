'use strict';

const sttElem = document.querySelector('.stt');
const screenHeight = window.innerHeight;

const toggleSttActiveClass = () => {
  if (screenHeight <= window.scrollY) {
    sttElem.classList.add('stt_active');
  } else {
    sttElem.classList.remove('stt_active');
    sttElem.style.pointerEvents = 'auto';
  }
};

const sttScroll = () => {
  document.addEventListener('scroll', toggleSttActiveClass);
};

const sttClick = () => {
  sttElem.addEventListener('click', () => {
    sttElem.style.pointerEvents = 'none';

    const docHeight = window.scrollY;
    const speed = 5;
    const sttAnim = () => {
      docHeight -= speed;
      if (docHeight > 0) {
        window.scrollTo({ top: docHeight, behavior: 'smooth' });
        requestAnimationFrame(sttAnim);
      } else {
        sttElem.style.pointerEvents = 'auto';
      }
    };

    requestAnimationFrame(sttAnim);
  });
};

const sttFunc = () => {
  sttScroll();
  sttClick();
};

document.addEventListener('DOMContentLoaded', sttFunc);
