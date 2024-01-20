import "./style.css";
import { attachDropdownMenuButtonListener } from "./dropdownMenu";
import { initialiseCarousel } from "./imageCarousel";

const backArrow = document.querySelector(".back-arrow");
const forwardArrow = document.querySelector(".forward-arrow");
const slider = document.querySelector(".slider");
const navBar = document.querySelector(".slider-navigation");
initialiseCarousel(backArrow, forwardArrow, slider, navBar);
