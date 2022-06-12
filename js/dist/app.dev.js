"use strict";

window.onload = function () {
  var con1Title = document.querySelector(".content1 .left_area h1");
  window.addEventListener("scroll", function () {
    var con1Top = document.querySelector(".content1 .left_area").offsetTop;

    if (window.scrollY > con1Top) {
      con1Title.classList.add("on");
    } else {
      con1Title.classList.remove("on");
    }
  });
};