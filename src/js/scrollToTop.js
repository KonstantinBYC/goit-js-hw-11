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

// var sttElem = document.querySelector('.stt');
// var screanHeight = window.innerHeight;

// var sttScroll = function sttScroll() {
//   document.addEventListener('scroll', function (e) {
//     if (screanHeight <= window.scrollY) {
//       sttElem.classList.add('stt_active');
//     } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
//       sttElem.classList.remove('stt_active');
//       sttElem.style.pointerEvents = 'auto';
//     }
//   });
// };

// var sttClick = function sttClick() {
//   sttElem.addEventListener('click', function () {
//     var docHeight = window.scrollY;
//     var progress = 0;
//     var position = docHeight;
//     var speed = 7; // When increasing this value. The scrolling speed will increase

//     sttElem.style.pointerEvents = 'none';

//     var sttAnim = function sttAnim() {
//       progress += 1;
//       position -= progress * speed;
//       window.scrollTo(0, position);

//       if (position > 0) {
//         requestAnimationFrame(sttAnim);
//       }
//     };
//     requestAnimationFrame(sttAnim);
//   });
// };

// var sttFunc = function sttFunc() {
//   sttScroll();
//   sttClick();
// };
// document.addEventListener('DOMContentLoaded', sttFunc);
