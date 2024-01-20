import "./style.css";
import { attachDropdownMenuButtonListener } from "./dropdownMenu";
import { initialiseCarousel } from "./imageCarousel";

const slider = document.querySelector(".slider");
const backArrow = document.querySelector(".back-arrow");
const forwardArrow = document.querySelector(".forward-arrow");
initialiseCarousel(backArrow, forwardArrow, slider);
