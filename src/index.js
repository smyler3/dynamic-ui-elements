import "./style.css";
import { attachDropdownMenuButtonListener } from "./dropdownMenu";

const openSidebarButton = document.querySelector(".open-sidebar-button");
const sidebar = document.querySelector(".sidebar");
attachDropdownMenuButtonListener(openSidebarButton, sidebar);

const optionDropdownButton = document.querySelector(".option-button");
const optionDropdownList = document.querySelector(".options-menu");
attachDropdownMenuButtonListener(optionDropdownButton, optionDropdownList);

const choiceDropdownButton = document.querySelector(".choice-button");
const choideDropdownList = document.querySelector(".choices-menu");
attachDropdownMenuButtonListener(choiceDropdownButton, choideDropdownList);
