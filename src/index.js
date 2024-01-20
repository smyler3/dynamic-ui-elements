import "./style.css";
import { attachDropdownMenuButtonListener } from "./dropdownMenu";
import {
  initialiseCarousel,
  moveToNextImage,
  moveToPreviousImage,
} from "./imageCarousel";

const imagesContainer = document.querySelector(".images-container");
initialiseCarousel(imagesContainer);
moveToNextImage(imagesContainer);
moveToPreviousImage(imagesContainer);
moveToNextImage(imagesContainer);
moveToPreviousImage(imagesContainer);
