/******/ (() => { // webpackBootstrap
/*!**********************************************!*\
  !*** ./src/eds-blox/image-gallery/script.js ***!
  \**********************************************/
window.onload = () => {
  const galleries = document.querySelectorAll(".wp-block-eds-blox-image-gallery") || [];
  galleries.forEach(gallery => {
    const imagePrev = gallery.querySelector(".image-preview");
    const thumbs = gallery.querySelectorAll(".thumb");
    if (thumbs?.[0]) {
      thumbs[0].classList.add("selected");
      imagePrev.src = thumbs[0].dataset.largeSize;
    }
    thumbs.forEach(thumb => {
      thumb.addEventListener("click", () => {
        thumbs.forEach(t => {
          t.classList.remove("selected");
        });
        thumb.classList.add("selected");
        imagePrev.src = thumb.dataset.largeSize;
      });
    });
  });
};
/******/ })()
;
//# sourceMappingURL=script.js.map