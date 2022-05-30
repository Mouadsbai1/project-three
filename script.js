let barIcon = document.querySelector(".fa-solid.fa-bars");
let xMarkIcon = document.querySelector(".fa-solid.fa-xmark");
let icons = document.querySelector(".icons");
let container = document.querySelector(".parent");
let nav = document.querySelector(".nav");

barIcon.onclick = function () {
  icons.style.transform = `rotate(-26deg)`;
  container.style.transform = `rotate(-20deg)`;
  nav.style.left = `20px`;
  icons.style.position = `absolute`;
};
xMarkIcon.onclick = function () {
  icons.style.transform = `rotate(45deg)`;
  container.style.transform = `rotate(0deg)`;
  nav.style.left = `-400px`;
  icons.style.position = `fixed`;
};
