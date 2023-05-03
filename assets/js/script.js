const heroimg = document.querySelector(".animatehero");

setInterval(() => {
  heroimg.classList.toggle("translate-y-6");
}, 3000);

// Hero section hover animation
const circle = document.querySelector(".circle");
cross = document.querySelector(".cross");
thunder = document.querySelector(".thunder");
chain = document.querySelector(".chain");
layer = document.querySelector(".layer");

document.addEventListener("mousemove", function (e) {
  const x = (e.clientX * 100) / window.innerWidth + "%";
  const y = (e.clientY * 100) / window.innerHeight + "%";

  function imgAnimate(element) {
    element.style.left = x;
    element.style.top = y;
  }

  imgAnimate(circle);
  imgAnimate(layer);
  imgAnimate(cross);
  imgAnimate(chain);
  imgAnimate(thunder);
});

// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
bars = document.querySelectorAll(".hamburger-bar");
sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", function () {
  bars[0].classList.toggle("bar-up");
  bars[1].classList.toggle("bar-down");
  bars[2].classList.toggle("op0");
  sidebar.classList.toggle("r0");
});

// onscroll navbar
animatedNav = document.querySelector(".animated-nav");

document.addEventListener("scroll", function () {
  if (window.scrollY > 850) {
    animatedNav.classList.replace("nav-up", "nav-down");
  } else {
    animatedNav.classList.replace("nav-down", "nav-up");
  }
});

// contact functionality

let contactName = document.getElementById("contact-name");
contactEmail = document.getElementById("contact-email");
contactMsg = document.getElementById("contact-message");
console.log(contactName, contactEmail, contactMsg);

//contact buttons
const contactBtn = document.getElementById("contact-button");
contactDiv = document.getElementById("contactdiv");
contactDivCross = document.getElementById("contact-close");
contactBlurDiv = document.getElementById("contact_blur-div");

function showContactDiv() {
  contactDiv.classList.replace("w-0", "w-full");
  contactDiv.classList.replace("opacity-0", "opacity-100");
}

function cutContact() {
  contactDiv.classList.replace("w-full", "w-0");
  contactDiv.classList.replace("opacity-100", "opacity-0");
}

contactBtn.addEventListener("click", function () {
  showContactDiv();
});

contactDivCross.addEventListener("click", function () {
  cutContact();
});

contactBlurDiv.addEventListener("click", function () {
  cutContact();
});

// testimonial swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 100,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

// animating property

const elementup = document.querySelectorAll(".animate-up");

const elementleft = document.querySelectorAll(".animate-left");

function animateFunc(elementToAnimate, animateClass) {
  elementToAnimate.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight) {
      element.classList.add("animate__animated");
      element.classList.add(animateClass);
    }
  });
}

const animateIn = () => {
  animateFunc(elementleft, "animate__fadeInLeft");
  animateFunc(elementup, "animate__fadeInUp");
};
window.addEventListener("scroll", animateIn);
