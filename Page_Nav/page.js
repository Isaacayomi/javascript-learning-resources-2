const nav = document.querySelectorAll(".nav__link");
const navContainer = document.querySelector(".nav__links");
const section1 = document.querySelector(".section--1");
const section = document.querySelector("section");
const headerSection = document.getElementById("section_1");
// const navContainer = document.querySelector(".nav__links");

// nav.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("LINK");

//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Using event delegation
// First, select the parent container
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  //if the current element clicked contains the class nav__link
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//Implementing Sticky Navigation: The Scrol Event
/*
const coordinates = section1.getBoundingClientRect();
window.addEventListener("scroll", function (e) {
  // console.log(coordinates);

  if (this.scrollY > coordinates.top) {
    navContainer.classList.add("sticky");
  } else {
    navContainer.classList.remove("sticky");
  }
}); */

// Implementing Sticky Navigation: THE INTERSECTION OBSERVER API
const navHeight = navContainer.getBoundingClientRect().height; //to get the height of the nav container
const stickyNav = function (entries) {
  entries.forEach((entry) => {
    // console.log(entry);

    if (!entry.isIntersecting) {
      navContainer.classList.add("sticky");
    } else {
      navContainer.classList.remove("sticky");
    }
  });
};

const stickyOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(stickyNav, stickyOptions);
observer.observe(headerSection); //observes the header section to see if it's no longer in the viewport

// Implementing Reveal on Scroll
const allSections = document.querySelectorAll("section");
console.log(allSections);

const revealCallback = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    entry.target.classList.remove("section__hidden");
  }
};

const revealOptions = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(revealCallback, revealOptions);

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section__hidden");
});
