/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const element1 = document.querySelectorAll(".type");
  const element2 = document.querySelector(".number");
  const element3 = document.querySelector(".btn");

  let type = [
    "<p class='text-red'>♦</p>",
    "<p class='text-red'>♥</p>",
    "♠",
    "♣"
  ];

  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  function myClickHandler() {
    let randomIndexType = Math.floor(Math.random() * type.length);
    let randomType = type[randomIndexType];

    for (let element of element1) {
      element.classList.add("font-xl");
      element.innerHTML = randomType;
    }

    let randomIndexNumber = Math.floor(Math.random() * number.length);
    let randomNumber = number[randomIndexNumber];

    element2.innerHTML = randomNumber;
    element3.addEventListener("click", myClickHandler);
  }

  myClickHandler();
};
