function initialiseCarousel(backArrow, forwardArrow, slider) {
  initialiseArrows(backArrow, forwardArrow, slider);
  slider.style.right = "0";
  slider.style.width = "594px";
  imageSize = parseInt(slider.style.width) / 3;
}

function moveToNextImage(slider) {
  const rightValue = parseInt(slider.style.right);
  slider.style.right = `${rightValue + imageSize}px`;
}

function moveToPreviousImage(slider) {
  const rightValue = parseInt(slider.style.right);
  slider.style.right = `${rightValue - imageSize}px`;
}

function initialiseArrows(backArrow, forwardArrow, slider) {
  backArrow.addEventListener("click", () => moveToPreviousImage(slider));
  forwardArrow.addEventListener("click", () => moveToNextImage(slider));
}

let imageSize = null;

export { initialiseCarousel };
