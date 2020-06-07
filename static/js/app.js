import people from "./people.js";

const $quote = document.querySelector(".quote");
const $name = document.querySelector(".bold");
const $role = document.querySelector("#role");
const $animationText = document.querySelector("#animation-text");
const $photo = document.querySelector(".photo");
const buttons = document.querySelectorAll(".btn");
let counter = 0;

$photo.addEventListener(
  "animationend",
  () => {
    $photo.classList.remove("photo-animate");
    $animationText.classList.remove("text-animate-active");
    $photo.setAttribute("src", people[counter].img);
    $photo.classList.add("fadein");
    $animationText.classList.add("fadein");
    $quote.textContent = people[counter].quote;
    $name.textContent = people[counter].name;
    $role.textContent = people[counter].role;
    setTimeout(() => {
      $photo.classList.remove("fadein");
      $animationText.classList.remove("fadein");
    }, 1000);
  },
  false
);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    counter++;
    if (counter > 1) {
      counter = 0;
    }
    $photo.classList.add("photo-animate");
    $animationText.classList.add("text-animate-active");
  });
});
