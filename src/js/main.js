import { loadHeaderFooter } from "./utils.mjs";


const modals = document.getElementById("modal");
const button = document.getElementById("callBtn");
const closeButton = document.querySelector("#closeBtn");

button.addEventListener("click", () => {
  modals.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modals.style.display = "none";
});

const modals1 = document.getElementById("modal1");
const button1 = document.getElementById("callBtn1");
const closeButton1 = document.querySelector("#closeBtn1");

button1.addEventListener("click", () => {
  modals1.style.display = "block";
});

closeButton1.addEventListener("click", () => {
  modals1.style.display = "none";
});


loadHeaderFooter();

