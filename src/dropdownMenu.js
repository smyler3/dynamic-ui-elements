// Changes the visibility of a given dropdown list
function changeVisibility(dropdownMenu) {
  dropdownMenu.classList.toggle("hidden");
}

// Allows a button to alter visibility of a dropdown list
function attachDropdownMenuButtonListener(button, dropdownMenu) {
  button.addEventListener("click", () => {
    changeVisibility(dropdownMenu);
  });
}

export { attachDropdownMenuButtonListener };
