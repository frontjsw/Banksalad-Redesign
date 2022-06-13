// content1 fixed 액션
const con1Title = document.querySelector(".content1 .left_area h1");
const con1TitleH = con1Title.clientHeight;

window.addEventListener("scroll", () => {
  const con1Top = document.querySelector(".content1").offsetTop;
  const con1EndH = document.querySelector(".all_btn").offsetTop - con1TitleH;
  if (window.scrollY > con1Top && window.scrollY < con1EndH) {
    con1Title.classList.add("on");
    con1Title.classList.remove("end");
  } else if (window.scrollY > con1EndH) {
    con1Title.classList.remove("on");
    con1Title.classList.add("end");
  } else {
    con1Title.classList.remove("on");
  }
});
