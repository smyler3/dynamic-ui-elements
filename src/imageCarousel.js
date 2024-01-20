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
  const sliderFrame = document.querySelector(".slider-frame");

  // Add the 'active' class to the slider frame to style the specific dot
  sliderFrame.classList.add(".active");
}

function initialiseArrows(backArrow, forwardArrow, slider) {
  backArrow.addEventListener("click", () => moveToPreviousImage(slider));
  forwardArrow.addEventListener("click", () => moveToNextImage(slider));
  const sliderFrame = document.querySelector(".slider-frame");

  // Add the 'active' class to the slider frame to style the specific dot
  sliderFrame.classList.add(".active");
}

let imageSize = null;

export { initialiseCarousel };
