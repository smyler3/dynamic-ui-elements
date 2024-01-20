function initialiseCarousel(backArrow, forwardArrow, slider, navbar) {
  // Set up arrow buttons
  initialiseArrows(backArrow, forwardArrow, slider);
  // Count number of images and adding navigation dots
  Array.from(slider.children).forEach((element, index) => {
    imageCount += 1;
    createImageNav(element, index, slider, navbar);
  });
  // Adjusting slider values to use again later
  slider.style.right = "0";
  slider.style.width = `${imageCount * imageSize}px`;
}

function moveToNextImage(slider, distance = imageSize) {
  if (currentPosition < imageCount - 1) {
    const rightValue = parseInt(slider.style.right);
    slider.style.right = `${rightValue + distance}px`;
    currentPosition += distance / imageSize;
  }
}

function moveToPreviousImage(slider, distance = imageSize) {
  if (currentPosition > 0) {
    const rightValue = parseInt(slider.style.right);
    slider.style.right = `${rightValue - distance}px`;
    currentPosition -= distance / imageSize;
  }
}

function moveToImage(slider, distance) {
  const rightValue = parseInt(slider.style.right);
  slider.style.right = `${rightValue + distance}px`;
  currentPosition += distance / imageSize;
}

function initialiseArrows(backArrow, forwardArrow, slider) {
  backArrow.addEventListener("click", () => moveToPreviousImage(slider));
  forwardArrow.addEventListener("click", () => moveToNextImage(slider));
}

function createImageNav(image, index, slider, navBar) {
  // Creating nav dot
  const navDot = document.createElement("span");
  navDot.classList.add("nav-circle");

  // Linking elements
  image.setAttribute("data-position", index);
  navDot.setAttribute("data-position", index);

  // Add navigation listener
  navDot.addEventListener("click", () => {
    const distance = (index - currentPosition) * imageSize;
    // Move to image
    moveToImage(slider, distance);
  });

  navBar.appendChild(navDot);
}

const imageSize = 198;
let imageCount = 0;
let currentPosition = 0;

export { initialiseCarousel };
