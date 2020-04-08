/* Manejo de data */

// esta es una función de ejemplo

export const example = () => {
  return 'example';
};
//show options to order names
const showSubmenu = document.getElementsById("submenu");
//add event on click
showSubmenu.addEventListener("click", function() {
  document.getElementsById('submenu-menu').style.display = "block";
  
})
/*
//show more information in the welcome by the seemore button
const seeMore = document.getElementById("seeMoreButton");
seeMore.addEventListener("click", function() {
  document.getElementsById('seeMore').style.display = "block";
})
//hide more information in the welcome by the seeless button
const seeLess = document.getElementsById("seeLessButton");
seeLess.addEventListener("click", function() {
  document.getElementsById('seeMore').style.display="none"
}) */
