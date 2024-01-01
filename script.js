"use strict";
const productsBtn = document.querySelector(".product-btn1");
const mixtureBtn = document.querySelector(".product-btn2");
const products = document.querySelector(".pros");
const mixtures = document.querySelector(".mixes");
const shadows = document.querySelector(".shadow");
const btnClose1 = document.querySelector(".close-modal1");
const btnClose2 = document.querySelector(".close-modal2");
const btnCose3 = document.querySelector(".close-model");
const btnInfo1 = document.querySelector(".more-info-btn1");
const btnInfo2 = document.querySelector(".more-info-btn2");
const openContacts = document.querySelector(".contacts");
const imageEl = document.querySelector(".choose-img");
///////////////////////////////////////////////////////////
function productionWindow() {
  products.classList.remove("lists1");
  shadows.classList.remove("hidden");
}
function mixtureWindow() {
  mixtures.classList.remove("lists2");
  shadows.classList.remove("hidden");
}
function closeWindow1() {
  products.classList.add("lists1");
  shadows.classList.add("hidden");
}
function closeWindow2() {
  mixtures.classList.add("lists2");
  shadows.classList.add("hidden");
}
function openContact() {
  openContacts.classList.remove("hide");
  shadows.classList.remove("hidden");
}
function closeContact() {
  openContacts.classList.add("hide");
  shadows.classList.add("hidden");
}
///////////////////////////////////////////////////////////////
productsBtn.addEventListener("click", productionWindow);
mixtureBtn.addEventListener("click", mixtureWindow);
btnClose1.addEventListener("click", closeWindow1);
btnClose2.addEventListener("click", closeWindow2);
btnInfo2.addEventListener("click", openContact);
btnCose3.addEventListener("click", closeContact);
/////////////////////////////////////////////////////////
document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Escape") {
    products.classList.add("lists1");
    mixtures.classList.add("lists2");
    openContacts.classList.add("hide");
    shadows.classList.add("hidden");
  }
});
/////////////////////////////////////////////////////////////
btnInfo1.addEventListener("click", function () {
  const role = Math.trunc(Math.random() * 8) + 1;
  imageEl.src = `role--${role}.jpg`;
});
