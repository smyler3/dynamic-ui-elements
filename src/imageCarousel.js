function initialiseCarousel(imagesContainer) {
  imagesContainer.style.right = "0";
  imagesContainer.style.width = "594px";
  imageSize = parseInt(imagesContainer.style.width) / 3;
}

function moveToNextImage(imagesContainer) {
  const rightValue = parseInt(imagesContainer.style.right);
  imagesContainer.style.right = `${rightValue + imageSize}px`;
}

function moveToPreviousImage(imagesContainer) {
  const rightValue = parseInt(imagesContainer.style.right);
  imagesContainer.style.right = `${rightValue - imageSize}px`;
}

let imageSize = null;

export { initialiseCarousel, moveToNextImage, moveToPreviousImage };
