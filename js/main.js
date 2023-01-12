/* .........skills......... */
import skills from "./extensions/skills.js";
skills();

/* .........logo......... */
import logo from "./extensions/logo.js";
logo();

/* .........github......... */
import github from "./extensions/github.js";
github();

/* .........contact......... */
import contact from "./extensions/contact.js";
contact();

/* .........footer......... */
import footer from "./extensions/footer.js";
footer();

/* .........services......... */
import services from "./extensions/services.js";
services();

// /* .........services......... */
// import themee from "./extensions/theme.js";
// themee();

/* .........services......... */
import preloader from "./extensions/preloader.js";
preloader();

/* .........services......... */
import cursroFunction from "./extensions/cursor.js";
cursroFunction();

/* .........services......... */
import detectDevice from "./extensions/detectDevice.js";
detectDevice();

/* .........AOS......... */
AOS.init();

let navIcon = document.getElementById("nav-icon");
let nav = document.getElementById("nav");
let iconSpanOne = document.querySelector("#span-one");
let iconSpanTwo = document.querySelector("#span-two");
let overly = document.getElementById("overly");
let navLis = document.querySelectorAll("nav ul li");
let navLinks = document.querySelectorAll("nav ul li a");
console.log(navLis);

navIcon.addEventListener("click", function (e) {
  nav.classList.toggle("nav-active");
  this.classList.toggle("displayInitial");
  overly.classList.toggle("overly-active");
  e.stopPropagation();

  // Remove The Navigation Bar If Click On Overly Or Links
  // This Solution Source Is => "https://www.youtube.com/watch?v=iP63fDXk-W8"
  document.onclick = function (e) {
    if (e.target.id !== "nav" && e.target.id !== "nav-icon") {
      nav.classList.remove("nav-active");
      navIcon.classList.remove("displayInitial");
      overly.classList.remove("overly-active");
    }
    e.stopPropagation();
  };
});

// Active highlight nav links on cliking
navLinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    navLinks.forEach((e) => {
      e.classList.remove("active-li-a");
    });
    a.classList.add("active-li-a");
  });
});

//
//
//
/* -----------Add The Name Of The Project To The Container Title */
/* 
let work = document.querySelectorAll(".works .work");
let workImage = document.querySelectorAll(".works .work img");
let workImageName = document.querySelectorAll(".works .work a");
console.log(work);

for (let i = 0; i < work.length; i++) {
  work[i].title = work[i].innerText;
  workImage[i].alt = workImageName[i].innerText;
  workImageName[i].title = workImageName[i].innerText;
} 
*/

let theme = document.querySelector("[data-theme = theme]");
console.log(theme);
let svgs = document.querySelectorAll("svg");
let body = document.querySelector("body");
let mainColor = document.querySelectorAll(".main-color");
console.log(mainColor);

/* ------------------------------------------------------------- */

/* --Start Page Scroll Progress */
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
/* --End Page Scroll Progress */

let allA = document.querySelectorAll("a");
let allBtn = document.querySelectorAll("button");
let cursor = document.querySelector(".cursor");
allA.forEach((a) => {
  a.addEventListener("click", () => {
    cursor.classList.add("active");
    console.log("lllllllll");
  });
});
