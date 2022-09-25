

let navIcon = document.getElementById("nav-icon");
let nav = document.getElementById("nav");
// let navLink = document.querySelectorAll("nav ul li a");
let iconSpanOne = document.querySelector("#span-one");
let iconSpanTwo = document.querySelector("#span-two");
let overly = document.getElementById("overly");
// console.log(navLink);

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

/* ----------up Scroll */

let up = document.getElementById("up");

up.onclick = () => {
	scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
};

window.onscroll = e => {
	if (scrollY > 700) {
		up.style.cssText = "opacity: 1; z-index: 1;";
	} else {
		up.style.cssText = "opacity: 0; z-index: -1;";
		// e.preventDefault()
	}
};

//
//
//
/* -----------Add The Name Of The Project To The Container Title */
let work = document.querySelectorAll(".works .work");
let workImage = document.querySelectorAll(".works .work img");
let workImageName = document.querySelectorAll(".works .work a");
console.log(work);

for (let i = 0; i < work.length; i++) {
	work[i].title = work[i].innerText;
	workImage[i].alt = workImageName[i].innerText;
	workImageName[i].title = workImageName[i].innerText;
}
