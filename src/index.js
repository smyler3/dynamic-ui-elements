import "./style.css";
import { attachDropdownMenuButtonListener } from "./dropdownMenu";

const dropdownButton = document.querySelector(".menu-visibility-button");
const dropdownList = document.querySelector(".dropdown-menu");
console.log(dropdownButton, dropdownList);
attachDropdownMenuButtonListener(dropdownButton, dropdownList);